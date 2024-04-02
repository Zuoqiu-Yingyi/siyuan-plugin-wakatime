var Ln = Object.defineProperty;
var In = (e, t, r) => t in e ? Ln(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ue = (e, t, r) => (In(e, typeof t != "symbol" ? t + "" : t, r), r);
var Un = Object.defineProperty, Wn = (e, t, r) => t in e ? Un(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, re = (e, t, r) => (Wn(e, typeof t != "symbol" ? t + "" : t, r), r);
const Bn = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, jn = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Hn = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function qn(e, t) {
  if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
    Vn(e);
    return;
  }
  return t;
}
function Vn(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function zn(e, t = {}) {
  if (typeof e != "string")
    return e;
  const r = e.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    e[0] === '"' && e.endsWith('"') && !e.includes("\\")
  )
    return r.slice(1, -1);
  if (r.length <= 9) {
    const s = r.toLowerCase();
    if (s === "true")
      return !0;
    if (s === "false")
      return !1;
    if (s === "undefined")
      return;
    if (s === "null")
      return null;
    if (s === "nan")
      return Number.NaN;
    if (s === "infinity")
      return Number.POSITIVE_INFINITY;
    if (s === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!Hn.test(e)) {
    if (t.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (Bn.test(e) || jn.test(e)) {
      if (t.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, qn);
    }
    return JSON.parse(e);
  } catch (s) {
    if (t.strict)
      throw s;
    return e;
  }
}
const Gn = /#/g, $n = /&/g, Kn = /\//g, Jn = /=/g, Gr = /\+/g, Zn = /%5e/gi, Xn = /%60/gi, Qn = /%7c/gi, ei = /%20/gi;
function ti(e) {
  return encodeURI("" + e).replace(Qn, "|");
}
function xr(e) {
  return ti(typeof e == "string" ? e : JSON.stringify(e)).replace(Gr, "%2B").replace(ei, "+").replace(Gn, "%23").replace($n, "%26").replace(Xn, "`").replace(Zn, "^").replace(Kn, "%2F");
}
function br(e) {
  return xr(e).replace(Jn, "%3D");
}
function oa(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function ri(e) {
  return oa(e.replace(Gr, " "));
}
function si(e) {
  return oa(e.replace(Gr, " "));
}
function ai(e = "") {
  const t = {};
  e[0] === "?" && (e = e.slice(1));
  for (const r of e.split("&")) {
    const s = r.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2)
      continue;
    const a = ri(s[1]);
    if (a === "__proto__" || a === "constructor")
      continue;
    const n = si(s[2] || "");
    t[a] === void 0 ? t[a] = n : Array.isArray(t[a]) ? t[a].push(n) : t[a] = [t[a], n];
  }
  return t;
}
function ni(e, t) {
  return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map((r) => `${br(e)}=${xr(r)}`).join("&") : `${br(e)}=${xr(t)}` : br(e);
}
function ii(e) {
  return Object.keys(e).filter((t) => e[t] !== void 0).map((t) => ni(t, e[t])).filter(Boolean).join("&");
}
const oi = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, li = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, ui = /^([/\\]\s*){2,}[^/\\]/, ci = /\/$|\/\?|\/#/, hi = /^\.?\//;
function la(e, t = {}) {
  return typeof t == "boolean" && (t = { acceptRelative: t }), t.strict ? oi.test(e) : li.test(e) || (t.acceptRelative ? ui.test(e) : !1);
}
function Ar(e = "", t) {
  return t ? ci.test(e) : e.endsWith("/");
}
function di(e = "", t) {
  if (!t)
    return (Ar(e) ? e.slice(0, -1) : e) || "/";
  if (!Ar(e, !0))
    return e || "/";
  let r = e, s = "";
  const a = e.indexOf("#");
  a >= 0 && (r = e.slice(0, a), s = e.slice(a));
  const [n, ...i] = r.split("?");
  return ((n.endsWith("/") ? n.slice(0, -1) : n) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + s;
}
function fi(e = "", t) {
  if (!t)
    return e.endsWith("/") ? e : e + "/";
  if (Ar(e, !0))
    return e || "/";
  let r = e, s = "";
  const a = e.indexOf("#");
  if (a >= 0 && (r = e.slice(0, a), s = e.slice(a), !r))
    return s;
  const [n, ...i] = r.split("?");
  return n + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + s;
}
function pi(e, t) {
  if (gi(t) || la(e))
    return e;
  const r = di(t);
  return e.startsWith(r) ? e : wi(r, e);
}
function mi(e, t) {
  const r = ca(e), s = { ...ai(r.search), ...t };
  return r.search = ii(s), bi(r);
}
function gi(e) {
  return !e || e === "/";
}
function yi(e) {
  return e && e !== "/";
}
function wi(e, ...t) {
  let r = e || "";
  for (const s of t.filter((a) => yi(a)))
    if (r) {
      const a = s.replace(hi, "");
      r = fi(r) + a;
    } else
      r = s;
  return r;
}
const ua = Symbol.for("ufo:protocolRelative");
function ca(e = "", t) {
  const r = e.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (r) {
    const [, _, f = ""] = r;
    return {
      protocol: _.toLowerCase(),
      pathname: f,
      href: _ + f,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!la(e, { acceptRelative: !0 }))
    return t ? ca(t + e) : Cs(e);
  const [, s = "", a, n = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, i = "", l = ""] = n.match(/([^#/?]*)(.*)?/) || [], { pathname: d, search: p, hash: o } = Cs(
    l.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol: s.toLowerCase(),
    auth: a ? a.slice(0, Math.max(0, a.length - 1)) : "",
    host: i,
    pathname: d,
    search: p,
    hash: o,
    [ua]: !s
  };
}
function Cs(e = "") {
  const [t = "", r = "", s = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: t,
    search: r,
    hash: s
  };
}
function bi(e) {
  const t = e.pathname || "", r = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "", s = e.hash || "", a = e.auth ? e.auth + "@" : "", n = e.host || "";
  return (e.protocol || e[ua] ? (e.protocol || "") + "//" : "") + a + n + t + r + s;
}
class ki extends Error {
  constructor(t, r) {
    super(t, r), this.name = "FetchError", r != null && r.cause && !this.cause && (this.cause = r.cause);
  }
}
function _i(e) {
  var t, r, s, a, n;
  const i = ((t = e.error) == null ? void 0 : t.message) || ((r = e.error) == null ? void 0 : r.toString()) || "", l = ((s = e.request) == null ? void 0 : s.method) || ((a = e.options) == null ? void 0 : a.method) || "GET", d = ((n = e.request) == null ? void 0 : n.url) || String(e.request) || "/", p = `[${l}] ${JSON.stringify(d)}`, o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>", _ = `${p}: ${o}${i ? ` ${i}` : ""}`, f = new ki(
    _,
    e.error ? { cause: e.error } : void 0
  );
  for (const c of ["request", "options", "response"])
    Object.defineProperty(f, c, {
      get() {
        return e[c];
      }
    });
  for (const [c, h] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ])
    Object.defineProperty(f, c, {
      get() {
        return e.response && e.response[h];
      }
    });
  return f;
}
const Si = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function Ys(e = "GET") {
  return Si.has(e.toUpperCase());
}
function vi(e) {
  if (e === void 0)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function";
}
const Oi = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]), Ti = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Di(e = "") {
  if (!e)
    return "json";
  const t = e.split(";").shift() || "";
  return Ti.test(t) ? "json" : Oi.has(t) || t.startsWith("text/") ? "text" : "blob";
}
function Mi(e, t, r = globalThis.Headers) {
  const s = {
    ...t,
    ...e
  };
  if (t != null && t.params && e != null && e.params && (s.params = {
    ...t == null ? void 0 : t.params,
    ...e == null ? void 0 : e.params
  }), t != null && t.query && e != null && e.query && (s.query = {
    ...t == null ? void 0 : t.query,
    ...e == null ? void 0 : e.query
  }), t != null && t.headers && e != null && e.headers) {
    s.headers = new r((t == null ? void 0 : t.headers) || {});
    for (const [a, n] of new r((e == null ? void 0 : e.headers) || {}))
      s.headers.set(a, n);
  }
  return s;
}
const Ei = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]), xi = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function ha(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: r = globalThis.Headers,
    AbortController: s = globalThis.AbortController
  } = e;
  async function a(l) {
    const d = l.error && l.error.name === "AbortError" && !l.options.timeout || !1;
    if (l.options.retry !== !1 && !d) {
      let o;
      typeof l.options.retry == "number" ? o = l.options.retry : o = Ys(l.options.method) ? 0 : 1;
      const _ = l.response && l.response.status || 500;
      if (o > 0 && (Array.isArray(l.options.retryStatusCodes) ? l.options.retryStatusCodes.includes(_) : Ei.has(_))) {
        const f = l.options.retryDelay || 0;
        return f > 0 && await new Promise((c) => setTimeout(c, f)), n(l.request, {
          ...l.options,
          retry: o - 1,
          timeout: l.options.timeout
        });
      }
    }
    const p = _i(l);
    throw Error.captureStackTrace && Error.captureStackTrace(p, n), p;
  }
  const n = async function(l, d = {}) {
    var p;
    const o = {
      request: l,
      options: Mi(d, e.defaults, r),
      response: void 0,
      error: void 0
    };
    if (o.options.method = (p = o.options.method) == null ? void 0 : p.toUpperCase(), o.options.onRequest && await o.options.onRequest(o), typeof o.request == "string" && (o.options.baseURL && (o.request = pi(o.request, o.options.baseURL)), (o.options.query || o.options.params) && (o.request = mi(o.request, {
      ...o.options.params,
      ...o.options.query
    }))), o.options.body && Ys(o.options.method) && (vi(o.options.body) ? (o.options.body = typeof o.options.body == "string" ? o.options.body : JSON.stringify(o.options.body), o.options.headers = new r(o.options.headers || {}), o.options.headers.has("content-type") || o.options.headers.set("content-type", "application/json"), o.options.headers.has("accept") || o.options.headers.set("accept", "application/json")) : (
      // ReadableStream Body
      ("pipeTo" in o.options.body && typeof o.options.body.pipeTo == "function" || // Node.js Stream Body
      typeof o.options.body.pipe == "function") && ("duplex" in o.options || (o.options.duplex = "half"))
    )), !o.options.signal && o.options.timeout) {
      const _ = new s();
      setTimeout(() => _.abort(), o.options.timeout), o.options.signal = _.signal;
    }
    try {
      o.response = await t(
        o.request,
        o.options
      );
    } catch (_) {
      return o.error = _, o.options.onRequestError && await o.options.onRequestError(o), await a(o);
    }
    if (o.response.body && !xi.has(o.response.status) && o.options.method !== "HEAD") {
      const _ = (o.options.parseResponse ? "json" : o.options.responseType) || Di(o.response.headers.get("content-type") || "");
      switch (_) {
        case "json": {
          const f = await o.response.text(), c = o.options.parseResponse || zn;
          o.response._data = c(f);
          break;
        }
        case "stream": {
          o.response._data = o.response.body;
          break;
        }
        default:
          o.response._data = await o.response[_]();
      }
    }
    return o.options.onResponse && await o.options.onResponse(o), !o.options.ignoreResponseError && o.response.status >= 400 && o.response.status < 600 ? (o.options.onResponseError && await o.options.onResponseError(o), await a(o)) : o.response;
  }, i = async function(l, d) {
    return (await n(l, d))._data;
  };
  return i.raw = n, i.native = (...l) => t(...l), i.create = (l = {}) => ha({
    ...e,
    defaults: {
      ...e.defaults,
      ...l
    }
  }), i;
}
const $r = function() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}(), Ai = $r.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))), Ri = $r.Headers, Pi = $r.AbortController, Ni = ha({ fetch: Ai, Headers: Ri, AbortController: Pi });
class Ci extends Error {
  constructor(t) {
    super(t.statusText), re(this, "status"), this.response = t, this.status = t.status;
  }
}
class Rr extends Error {
  constructor(t, r) {
    super(t.msg), re(this, "code"), re(this, "msg"), re(this, "data"), this.body = t, this.response = r, this.code = t.code, this.msg = t.msg, this.data = t.data;
  }
}
function ce(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
function Fs(e, t) {
  for (var r = "", s = 0, a = -1, n = 0, i, l = 0; l <= e.length; ++l) {
    if (l < e.length)
      i = e.charCodeAt(l);
    else {
      if (i === 47)
        break;
      i = 47;
    }
    if (i === 47) {
      if (!(a === l - 1 || n === 1))
        if (a !== l - 1 && n === 2) {
          if (r.length < 2 || s !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
            if (r.length > 2) {
              var d = r.lastIndexOf("/");
              if (d !== r.length - 1) {
                d === -1 ? (r = "", s = 0) : (r = r.slice(0, d), s = r.length - 1 - r.lastIndexOf("/")), a = l, n = 0;
                continue;
              }
            } else if (r.length === 2 || r.length === 1) {
              r = "", s = 0, a = l, n = 0;
              continue;
            }
          }
          t && (r.length > 0 ? r += "/.." : r = "..", s = 2);
        } else
          r.length > 0 ? r += "/" + e.slice(a + 1, l) : r = e.slice(a + 1, l), s = l - a - 1;
      a = l, n = 0;
    } else
      i === 46 && n !== -1 ? ++n : n = -1;
  }
  return r;
}
function Yi(e, t) {
  var r = t.dir || t.root, s = t.base || (t.name || "") + (t.ext || "");
  return r ? r === t.root ? r + s : r + e + s : s;
}
var ot = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", t = !1, r, s = arguments.length - 1; s >= -1 && !t; s--) {
      var a;
      s >= 0 ? a = arguments[s] : (r === void 0 && (r = process.cwd()), a = r), ce(a), a.length !== 0 && (e = a + "/" + e, t = a.charCodeAt(0) === 47);
    }
    return e = Fs(e, !t), t ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  },
  normalize: function(e) {
    if (ce(e), e.length === 0)
      return ".";
    var t = e.charCodeAt(0) === 47, r = e.charCodeAt(e.length - 1) === 47;
    return e = Fs(e, !t), e.length === 0 && !t && (e = "."), e.length > 0 && r && (e += "/"), t ? "/" + e : e;
  },
  isAbsolute: function(e) {
    return ce(e), e.length > 0 && e.charCodeAt(0) === 47;
  },
  join: function() {
    if (arguments.length === 0)
      return ".";
    for (var e, t = 0; t < arguments.length; ++t) {
      var r = arguments[t];
      ce(r), r.length > 0 && (e === void 0 ? e = r : e += "/" + r);
    }
    return e === void 0 ? "." : ot.normalize(e);
  },
  relative: function(e, t) {
    if (ce(e), ce(t), e === t || (e = ot.resolve(e), t = ot.resolve(t), e === t))
      return "";
    for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r)
      ;
    for (var s = e.length, a = s - r, n = 1; n < t.length && t.charCodeAt(n) === 47; ++n)
      ;
    for (var i = t.length, l = i - n, d = a < l ? a : l, p = -1, o = 0; o <= d; ++o) {
      if (o === d) {
        if (l > d) {
          if (t.charCodeAt(n + o) === 47)
            return t.slice(n + o + 1);
          if (o === 0)
            return t.slice(n + o);
        } else
          a > d && (e.charCodeAt(r + o) === 47 ? p = o : o === 0 && (p = 0));
        break;
      }
      var _ = e.charCodeAt(r + o), f = t.charCodeAt(n + o);
      if (_ !== f)
        break;
      _ === 47 && (p = o);
    }
    var c = "";
    for (o = r + p + 1; o <= s; ++o)
      (o === s || e.charCodeAt(o) === 47) && (c.length === 0 ? c += ".." : c += "/..");
    return c.length > 0 ? c + t.slice(n + p) : (n += p, t.charCodeAt(n) === 47 && ++n, t.slice(n));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (ce(e), e.length === 0)
      return ".";
    for (var t = e.charCodeAt(0), r = t === 47, s = -1, a = !0, n = e.length - 1; n >= 1; --n)
      if (t = e.charCodeAt(n), t === 47) {
        if (!a) {
          s = n;
          break;
        }
      } else
        a = !1;
    return s === -1 ? r ? "/" : "." : r && s === 1 ? "//" : e.slice(0, s);
  },
  basename: function(e, t) {
    if (t !== void 0 && typeof t != "string")
      throw new TypeError('"ext" argument must be a string');
    ce(e);
    var r = 0, s = -1, a = !0, n;
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e)
        return "";
      var i = t.length - 1, l = -1;
      for (n = e.length - 1; n >= 0; --n) {
        var d = e.charCodeAt(n);
        if (d === 47) {
          if (!a) {
            r = n + 1;
            break;
          }
        } else
          l === -1 && (a = !1, l = n + 1), i >= 0 && (d === t.charCodeAt(i) ? --i === -1 && (s = n) : (i = -1, s = l));
      }
      return r === s ? s = l : s === -1 && (s = e.length), e.slice(r, s);
    } else {
      for (n = e.length - 1; n >= 0; --n)
        if (e.charCodeAt(n) === 47) {
          if (!a) {
            r = n + 1;
            break;
          }
        } else
          s === -1 && (a = !1, s = n + 1);
      return s === -1 ? "" : e.slice(r, s);
    }
  },
  extname: function(e) {
    ce(e);
    for (var t = -1, r = 0, s = -1, a = !0, n = 0, i = e.length - 1; i >= 0; --i) {
      var l = e.charCodeAt(i);
      if (l === 47) {
        if (!a) {
          r = i + 1;
          break;
        }
        continue;
      }
      s === -1 && (a = !1, s = i + 1), l === 46 ? t === -1 ? t = i : n !== 1 && (n = 1) : t !== -1 && (n = -1);
    }
    return t === -1 || s === -1 || // We saw a non-dot character immediately before the dot
    n === 0 || // The (right-most) trimmed path component is exactly '..'
    n === 1 && t === s - 1 && t === r + 1 ? "" : e.slice(t, s);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return Yi("/", e);
  },
  parse: function(e) {
    ce(e);
    var t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    var r = e.charCodeAt(0), s = r === 47, a;
    s ? (t.root = "/", a = 1) : a = 0;
    for (var n = -1, i = 0, l = -1, d = !0, p = e.length - 1, o = 0; p >= a; --p) {
      if (r = e.charCodeAt(p), r === 47) {
        if (!d) {
          i = p + 1;
          break;
        }
        continue;
      }
      l === -1 && (d = !1, l = p + 1), r === 46 ? n === -1 ? n = p : o !== 1 && (o = 1) : n !== -1 && (o = -1);
    }
    return n === -1 || l === -1 || // We saw a non-dot character immediately before the dot
    o === 0 || // The (right-most) trimmed path component is exactly '..'
    o === 1 && n === l - 1 && n === i + 1 ? l !== -1 && (i === 0 && s ? t.base = t.name = e.slice(1, l) : t.base = t.name = e.slice(i, l)) : (i === 0 && s ? (t.name = e.slice(1, n), t.base = e.slice(1, l)) : (t.name = e.slice(i, n), t.base = e.slice(i, l)), t.ext = e.slice(n, l)), i > 0 ? t.dir = e.slice(0, i - 1) : s && (t.dir = "/"), t;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
ot.posix = ot;
function da(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Fi } = Object.prototype, { getPrototypeOf: Kr } = Object, Gt = /* @__PURE__ */ ((e) => (t) => {
  const r = Fi.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), me = (e) => (e = e.toLowerCase(), (t) => Gt(t) === e), $t = (e) => (t) => typeof t === e, { isArray: Ze } = Array, ct = $t("undefined");
function Li(e) {
  return e !== null && !ct(e) && e.constructor !== null && !ct(e.constructor) && X(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const fa = me("ArrayBuffer");
function Ii(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && fa(e.buffer), t;
}
const Ui = $t("string"), X = $t("function"), pa = $t("number"), Kt = (e) => e !== null && typeof e == "object", Wi = (e) => e === !0 || e === !1, Yt = (e) => {
  if (Gt(e) !== "object")
    return !1;
  const t = Kr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Bi = me("Date"), ji = me("File"), Hi = me("Blob"), qi = me("FileList"), Vi = (e) => Kt(e) && X(e.pipe), zi = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || X(e.append) && ((t = Gt(e)) === "formdata" || // detect form-data instance
  t === "object" && X(e.toString) && e.toString() === "[object FormData]"));
}, Gi = me("URLSearchParams"), $i = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function gt(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, a;
  if (typeof e != "object" && (e = [e]), Ze(e))
    for (s = 0, a = e.length; s < a; s++)
      t.call(null, e[s], s, e);
  else {
    const n = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = n.length;
    let l;
    for (s = 0; s < i; s++)
      l = n[s], t.call(null, e[l], l, e);
  }
}
function ma(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let s = r.length, a;
  for (; s-- > 0; )
    if (a = r[s], t === a.toLowerCase())
      return a;
  return null;
}
const ga = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ya = (e) => !ct(e) && e !== ga;
function Pr() {
  const { caseless: e } = ya(this) && this || {}, t = {}, r = (s, a) => {
    const n = e && ma(t, a) || a;
    Yt(t[n]) && Yt(s) ? t[n] = Pr(t[n], s) : Yt(s) ? t[n] = Pr({}, s) : Ze(s) ? t[n] = s.slice() : t[n] = s;
  };
  for (let s = 0, a = arguments.length; s < a; s++)
    arguments[s] && gt(arguments[s], r);
  return t;
}
const Ki = (e, t, r, { allOwnKeys: s } = {}) => (gt(t, (a, n) => {
  r && X(a) ? e[n] = da(a, r) : e[n] = a;
}, { allOwnKeys: s }), e), Ji = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Zi = (e, t, r, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Xi = (e, t, r, s) => {
  let a, n, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), n = a.length; n-- > 0; )
      i = a[n], (!s || s(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = r !== !1 && Kr(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Qi = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const s = e.indexOf(t, r);
  return s !== -1 && s === r;
}, eo = (e) => {
  if (!e)
    return null;
  if (Ze(e))
    return e;
  let t = e.length;
  if (!pa(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, to = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Kr(Uint8Array)), ro = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, so = (e, t) => {
  let r;
  const s = [];
  for (; (r = e.exec(t)) !== null; )
    s.push(r);
  return s;
}, ao = me("HTMLFormElement"), no = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, s) {
    return r.toUpperCase() + s;
  }
), Ls = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), io = me("RegExp"), wa = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), s = {};
  gt(r, (a, n) => {
    let i;
    (i = t(a, n, e)) !== !1 && (s[n] = i || a);
  }), Object.defineProperties(e, s);
}, oo = (e) => {
  wa(e, (t, r) => {
    if (X(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const s = e[r];
    if (X(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, lo = (e, t) => {
  const r = {}, s = (a) => {
    a.forEach((n) => {
      r[n] = !0;
    });
  };
  return Ze(e) ? s(e) : s(String(e).split(t)), r;
}, uo = () => {
}, co = (e, t) => (e = +e, Number.isFinite(e) ? e : t), kr = "abcdefghijklmnopqrstuvwxyz", Is = "0123456789", ba = {
  DIGIT: Is,
  ALPHA: kr,
  ALPHA_DIGIT: kr + kr.toUpperCase() + Is
}, ho = (e = 16, t = ba.ALPHA_DIGIT) => {
  let r = "";
  const { length: s } = t;
  for (; e--; )
    r += t[Math.random() * s | 0];
  return r;
};
function fo(e) {
  return !!(e && X(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const po = (e) => {
  const t = new Array(10), r = (s, a) => {
    if (Kt(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[a] = s;
        const n = Ze(s) ? [] : {};
        return gt(s, (i, l) => {
          const d = r(i, a + 1);
          !ct(d) && (n[l] = d);
        }), t[a] = void 0, n;
      }
    }
    return s;
  };
  return r(e, 0);
}, mo = me("AsyncFunction"), go = (e) => e && (Kt(e) || X(e)) && X(e.then) && X(e.catch), m = {
  isArray: Ze,
  isArrayBuffer: fa,
  isBuffer: Li,
  isFormData: zi,
  isArrayBufferView: Ii,
  isString: Ui,
  isNumber: pa,
  isBoolean: Wi,
  isObject: Kt,
  isPlainObject: Yt,
  isUndefined: ct,
  isDate: Bi,
  isFile: ji,
  isBlob: Hi,
  isRegExp: io,
  isFunction: X,
  isStream: Vi,
  isURLSearchParams: Gi,
  isTypedArray: to,
  isFileList: qi,
  forEach: gt,
  merge: Pr,
  extend: Ki,
  trim: $i,
  stripBOM: Ji,
  inherits: Zi,
  toFlatObject: Xi,
  kindOf: Gt,
  kindOfTest: me,
  endsWith: Qi,
  toArray: eo,
  forEachEntry: ro,
  matchAll: so,
  isHTMLForm: ao,
  hasOwnProperty: Ls,
  hasOwnProp: Ls,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wa,
  freezeMethods: oo,
  toObjectSet: lo,
  toCamelCase: no,
  noop: uo,
  toFiniteNumber: co,
  findKey: ma,
  global: ga,
  isContextDefined: ya,
  ALPHABET: ba,
  generateString: ho,
  isSpecCompliantForm: fo,
  toJSONObject: po,
  isAsyncFn: mo,
  isThenable: go
};
function A(e, t, r, s, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
m.inherits(A, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: m.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ka = A.prototype, _a = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  _a[e] = { value: e };
});
Object.defineProperties(A, _a);
Object.defineProperty(ka, "isAxiosError", { value: !0 });
A.from = (e, t, r, s, a, n) => {
  const i = Object.create(ka);
  return m.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (l) => l !== "isAxiosError"), A.call(i, e.message, t, r, s, a), i.cause = e, i.name = e.name, n && Object.assign(i, n), i;
};
const yo = null;
function Nr(e) {
  return m.isPlainObject(e) || m.isArray(e);
}
function Sa(e) {
  return m.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Us(e, t, r) {
  return e ? e.concat(t).map(function(s, a) {
    return s = Sa(s), !r && a ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function wo(e) {
  return m.isArray(e) && !e.some(Nr);
}
const bo = m.toFlatObject(m, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Jt(e, t, r) {
  if (!m.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = m.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(c, h) {
    return !m.isUndefined(h[c]);
  });
  const s = r.metaTokens, a = r.visitor || p, n = r.dots, i = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(t);
  if (!m.isFunction(a))
    throw new TypeError("visitor must be a function");
  function d(c) {
    if (c === null)
      return "";
    if (m.isDate(c))
      return c.toISOString();
    if (!l && m.isBlob(c))
      throw new A("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(c) || m.isTypedArray(c) ? l && typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function p(c, h, g) {
    let w = c;
    if (c && !g && typeof c == "object") {
      if (m.endsWith(h, "{}"))
        h = s ? h : h.slice(0, -2), c = JSON.stringify(c);
      else if (m.isArray(c) && wo(c) || (m.isFileList(c) || m.endsWith(h, "[]")) && (w = m.toArray(c)))
        return h = Sa(h), w.forEach(function(z, Ce) {
          !(m.isUndefined(z) || z === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Us([h], Ce, n) : i === null ? h : h + "[]",
            d(z)
          );
        }), !1;
    }
    return Nr(c) ? !0 : (t.append(Us(g, h, n), d(c)), !1);
  }
  const o = [], _ = Object.assign(bo, {
    defaultVisitor: p,
    convertValue: d,
    isVisitable: Nr
  });
  function f(c, h) {
    if (!m.isUndefined(c)) {
      if (o.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      o.push(c), m.forEach(c, function(g, w) {
        (!(m.isUndefined(g) || g === null) && a.call(
          t,
          g,
          m.isString(w) ? w.trim() : w,
          h,
          _
        )) === !0 && f(g, h ? h.concat(w) : [w]);
      }), o.pop();
    }
  }
  if (!m.isObject(e))
    throw new TypeError("data must be an object");
  return f(e), t;
}
function Ws(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Jr(e, t) {
  this._pairs = [], e && Jt(e, this, t);
}
const va = Jr.prototype;
va.append = function(e, t) {
  this._pairs.push([e, t]);
};
va.toString = function(e) {
  const t = e ? function(r) {
    return e.call(this, r, Ws);
  } : Ws;
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
function ko(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Oa(e, t, r) {
  if (!t)
    return e;
  const s = r && r.encode || ko, a = r && r.serialize;
  let n;
  if (a ? n = a(t, r) : n = m.isURLSearchParams(t) ? t.toString() : new Jr(t, r).toString(s), n) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return e;
}
class Bs {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    m.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ta = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _o = typeof URLSearchParams < "u" ? URLSearchParams : Jr, So = typeof FormData < "u" ? FormData : null, vo = typeof Blob < "u" ? Blob : null, Oo = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _o,
    FormData: So,
    Blob: vo
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Da = typeof window < "u" && typeof document < "u", To = ((e) => Da && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Do = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Da,
  hasStandardBrowserEnv: To,
  hasStandardBrowserWebWorkerEnv: Do
}, Symbol.toStringTag, { value: "Module" })), de = {
  ...Mo,
  ...Oo
};
function Eo(e, t) {
  return Jt(e, new de.classes.URLSearchParams(), Object.assign({
    visitor: function(r, s, a, n) {
      return de.isNode && m.isBuffer(r) ? (this.append(s, r.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function xo(e) {
  return m.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ao(e) {
  const t = {}, r = Object.keys(e);
  let s;
  const a = r.length;
  let n;
  for (s = 0; s < a; s++)
    n = r[s], t[n] = e[n];
  return t;
}
function Ma(e) {
  function t(r, s, a, n) {
    let i = r[n++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), d = n >= r.length;
    return i = !i && m.isArray(a) ? a.length : i, d ? (m.hasOwnProp(a, i) ? a[i] = [a[i], s] : a[i] = s, !l) : ((!a[i] || !m.isObject(a[i])) && (a[i] = []), t(r, s, a[i], n) && m.isArray(a[i]) && (a[i] = Ao(a[i])), !l);
  }
  if (m.isFormData(e) && m.isFunction(e.entries)) {
    const r = {};
    return m.forEachEntry(e, (s, a) => {
      t(xo(s), a, r, 0);
    }), r;
  }
  return null;
}
function Ro(e, t, r) {
  if (m.isString(e))
    try {
      return (t || JSON.parse)(e), m.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
const Zr = {
  transitional: Ta,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, t) {
    const r = t.getContentType() || "", s = r.indexOf("application/json") > -1, a = m.isObject(e);
    if (a && m.isHTMLForm(e) && (e = new FormData(e)), m.isFormData(e))
      return s ? JSON.stringify(Ma(e)) : e;
    if (m.isArrayBuffer(e) || m.isBuffer(e) || m.isStream(e) || m.isFile(e) || m.isBlob(e))
      return e;
    if (m.isArrayBufferView(e))
      return e.buffer;
    if (m.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let n;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Eo(e, this.formSerializer).toString();
      if ((n = m.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const i = this.env && this.env.FormData;
        return Jt(
          n ? { "files[]": e } : e,
          i && new i(),
          this.formSerializer
        );
      }
    }
    return a || s ? (t.setContentType("application/json", !1), Ro(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || Zr.transitional, r = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (e && m.isString(e) && (r && !this.responseType || s)) {
      const a = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (n) {
        if (a)
          throw n.name === "SyntaxError" ? A.from(n, A.ERR_BAD_RESPONSE, this, null, this.response) : n;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: de.classes.FormData,
    Blob: de.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Zr.headers[e] = {};
});
const Xr = Zr, Po = m.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), No = (e) => {
  const t = {};
  let r, s, a;
  return e && e.split(`
`).forEach(function(n) {
    a = n.indexOf(":"), r = n.substring(0, a).trim().toLowerCase(), s = n.substring(a + 1).trim(), !(!r || t[r] && Po[r]) && (r === "set-cookie" ? t[r] ? t[r].push(s) : t[r] = [s] : t[r] = t[r] ? t[r] + ", " + s : s);
  }), t;
}, js = Symbol("internals");
function at(e) {
  return e && String(e).trim().toLowerCase();
}
function Ft(e) {
  return e === !1 || e == null ? e : m.isArray(e) ? e.map(Ft) : String(e);
}
function Co(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = r.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const Yo = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _r(e, t, r, s, a) {
  if (m.isFunction(s))
    return s.call(this, t, r);
  if (a && (t = r), !!m.isString(t)) {
    if (m.isString(s))
      return t.indexOf(s) !== -1;
    if (m.isRegExp(s))
      return s.test(t);
  }
}
function Fo(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, s) => r.toUpperCase() + s);
}
function Lo(e, t) {
  const r = m.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + r, {
      value: function(a, n, i) {
        return this[s].call(this, t, a, n, i);
      },
      configurable: !0
    });
  });
}
let Zt = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    const s = this;
    function a(i, l, d) {
      const p = at(l);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const o = m.findKey(s, p);
      (!o || s[o] === void 0 || d === !0 || d === void 0 && s[o] !== !1) && (s[o || l] = Ft(i));
    }
    const n = (i, l) => m.forEach(i, (d, p) => a(d, p, l));
    return m.isPlainObject(e) || e instanceof this.constructor ? n(e, t) : m.isString(e) && (e = e.trim()) && !Yo(e) ? n(No(e), t) : e != null && a(t, e, r), this;
  }
  get(e, t) {
    if (e = at(e), e) {
      const r = m.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!t)
          return s;
        if (t === !0)
          return Co(s);
        if (m.isFunction(t))
          return t.call(this, s, r);
        if (m.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = at(e), e) {
      const r = m.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || _r(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    const r = this;
    let s = !1;
    function a(n) {
      if (n = at(n), n) {
        const i = m.findKey(r, n);
        i && (!t || _r(r, r[i], i, t)) && (delete r[i], s = !0);
      }
    }
    return m.isArray(e) ? e.forEach(a) : a(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let r = t.length, s = !1;
    for (; r--; ) {
      const a = t[r];
      (!e || _r(this, this[a], a, e, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, r = {};
    return m.forEach(this, (s, a) => {
      const n = m.findKey(r, a);
      if (n) {
        t[n] = Ft(s), delete t[a];
        return;
      }
      const i = e ? Fo(a) : String(a).trim();
      i !== a && delete t[a], t[i] = Ft(s), r[i] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (r, s) => {
      r != null && r !== !1 && (t[s] = e && m.isArray(r) ? r.join(", ") : r);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const r = new this(e);
    return t.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const t = (this[js] = this[js] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function s(a) {
      const n = at(a);
      t[n] || (Lo(r, a), t[n] = !0);
    }
    return m.isArray(e) ? e.forEach(s) : s(e), this;
  }
};
Zt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.reduceDescriptors(Zt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[r] = s;
    }
  };
});
m.freezeMethods(Zt);
const Se = Zt;
function Sr(e, t) {
  const r = this || Xr, s = t || r, a = Se.from(s.headers);
  let n = s.data;
  return m.forEach(e, function(i) {
    n = i.call(r, n, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), n;
}
function Ea(e) {
  return !!(e && e.__CANCEL__);
}
function yt(e, t, r) {
  A.call(this, e ?? "canceled", A.ERR_CANCELED, t, r), this.name = "CanceledError";
}
m.inherits(yt, A, {
  __CANCEL__: !0
});
function Io(e, t, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status) ? e(r) : t(new A(
    "Request failed with status code " + r.status,
    [A.ERR_BAD_REQUEST, A.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Uo = de.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, s, a, n) {
      const i = [e + "=" + encodeURIComponent(t)];
      m.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), m.isString(s) && i.push("path=" + s), m.isString(a) && i.push("domain=" + a), n === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Wo(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Bo(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function xa(e, t) {
  return e && !Wo(t) ? Bo(e, t) : t;
}
const jo = de.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
    let r;
    function s(a) {
      let n = a;
      return e && (t.setAttribute("href", n), n = t.href), t.setAttribute("href", n), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return r = s(window.location.href), function(a) {
      const n = m.isString(a) ? s(a) : a;
      return n.protocol === r.protocol && n.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function Ho(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qo(e, t) {
  e = e || 10;
  const r = new Array(e), s = new Array(e);
  let a = 0, n = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const d = Date.now(), p = s[n];
    i || (i = d), r[a] = l, s[a] = d;
    let o = n, _ = 0;
    for (; o !== a; )
      _ += r[o++], o = o % e;
    if (a = (a + 1) % e, a === n && (n = (n + 1) % e), d - i < t)
      return;
    const f = p && d - p;
    return f ? Math.round(_ * 1e3 / f) : void 0;
  };
}
function Hs(e, t) {
  let r = 0;
  const s = qo(50, 250);
  return (a) => {
    const n = a.loaded, i = a.lengthComputable ? a.total : void 0, l = n - r, d = s(l), p = n <= i;
    r = n;
    const o = {
      loaded: n,
      total: i,
      progress: i ? n / i : void 0,
      bytes: l,
      rate: d || void 0,
      estimated: d && i && p ? (i - n) / d : void 0,
      event: a
    };
    o[t ? "download" : "upload"] = !0, e(o);
  };
}
const Vo = typeof XMLHttpRequest < "u", zo = Vo && function(e) {
  return new Promise(function(t, r) {
    let s = e.data;
    const a = Se.from(e.headers).normalize();
    let { responseType: n, withXSRFToken: i } = e, l;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let p;
    if (m.isFormData(s)) {
      if (de.hasStandardBrowserEnv || de.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((p = a.getContentType()) !== !1) {
        const [h, ...g] = p ? p.split(";").map((w) => w.trim()).filter(Boolean) : [];
        a.setContentType([h || "multipart/form-data", ...g].join("; "));
      }
    }
    let o = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(h + ":" + g));
    }
    const _ = xa(e.baseURL, e.url);
    o.open(e.method.toUpperCase(), Oa(_, e.params, e.paramsSerializer), !0), o.timeout = e.timeout;
    function f() {
      if (!o)
        return;
      const h = Se.from(
        "getAllResponseHeaders" in o && o.getAllResponseHeaders()
      ), g = {
        data: !n || n === "text" || n === "json" ? o.responseText : o.response,
        status: o.status,
        statusText: o.statusText,
        headers: h,
        config: e,
        request: o
      };
      Io(function(w) {
        t(w), d();
      }, function(w) {
        r(w), d();
      }, g), o = null;
    }
    if ("onloadend" in o ? o.onloadend = f : o.onreadystatechange = function() {
      !o || o.readyState !== 4 || o.status === 0 && !(o.responseURL && o.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, o.onabort = function() {
      o && (r(new A("Request aborted", A.ECONNABORTED, e, o)), o = null);
    }, o.onerror = function() {
      r(new A("Network Error", A.ERR_NETWORK, e, o)), o = null;
    }, o.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || Ta;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new A(
        h,
        g.clarifyTimeoutError ? A.ETIMEDOUT : A.ECONNABORTED,
        e,
        o
      )), o = null;
    }, de.hasStandardBrowserEnv && (i && m.isFunction(i) && (i = i(e)), i || i !== !1 && jo(_))) {
      const h = e.xsrfHeaderName && e.xsrfCookieName && Uo.read(e.xsrfCookieName);
      h && a.set(e.xsrfHeaderName, h);
    }
    s === void 0 && a.setContentType(null), "setRequestHeader" in o && m.forEach(a.toJSON(), function(h, g) {
      o.setRequestHeader(g, h);
    }), m.isUndefined(e.withCredentials) || (o.withCredentials = !!e.withCredentials), n && n !== "json" && (o.responseType = e.responseType), typeof e.onDownloadProgress == "function" && o.addEventListener("progress", Hs(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && o.upload && o.upload.addEventListener("progress", Hs(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (h) => {
      o && (r(!h || h.type ? new yt(null, e, o) : h), o.abort(), o = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const c = Ho(_);
    if (c && de.protocols.indexOf(c) === -1) {
      r(new A("Unsupported protocol " + c + ":", A.ERR_BAD_REQUEST, e));
      return;
    }
    o.send(s || null);
  });
}, Cr = {
  http: yo,
  xhr: zo
};
m.forEach(Cr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const qs = (e) => `- ${e}`, Go = (e) => m.isFunction(e) || e === null || e === !1, Aa = {
  getAdapter: (e) => {
    e = m.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, s;
    const a = {};
    for (let n = 0; n < t; n++) {
      r = e[n];
      let i;
      if (s = r, !Go(r) && (s = Cr[(i = String(r)).toLowerCase()], s === void 0))
        throw new A(`Unknown adapter '${i}'`);
      if (s)
        break;
      a[i || "#" + n] = s;
    }
    if (!s) {
      const n = Object.entries(a).map(
        ([l, d]) => `adapter ${l} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? n.length > 1 ? `since :
` + n.map(qs).join(`
`) : " " + qs(n[0]) : "as no adapter specified";
      throw new A(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: Cr
};
function vr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new yt(null, e);
}
function Vs(e) {
  return vr(e), e.headers = Se.from(e.headers), e.data = Sr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Aa.getAdapter(e.adapter || Xr.adapter)(e).then(function(t) {
    return vr(e), t.data = Sr.call(
      e,
      e.transformResponse,
      t
    ), t.headers = Se.from(t.headers), t;
  }, function(t) {
    return Ea(t) || (vr(e), t && t.response && (t.response.data = Sr.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = Se.from(t.response.headers))), Promise.reject(t);
  });
}
const zs = (e) => e instanceof Se ? { ...e } : e;
function Je(e, t) {
  t = t || {};
  const r = {};
  function s(p, o, _) {
    return m.isPlainObject(p) && m.isPlainObject(o) ? m.merge.call({ caseless: _ }, p, o) : m.isPlainObject(o) ? m.merge({}, o) : m.isArray(o) ? o.slice() : o;
  }
  function a(p, o, _) {
    if (m.isUndefined(o)) {
      if (!m.isUndefined(p))
        return s(void 0, p, _);
    } else
      return s(p, o, _);
  }
  function n(p, o) {
    if (!m.isUndefined(o))
      return s(void 0, o);
  }
  function i(p, o) {
    if (m.isUndefined(o)) {
      if (!m.isUndefined(p))
        return s(void 0, p);
    } else
      return s(void 0, o);
  }
  function l(p, o, _) {
    if (_ in t)
      return s(p, o);
    if (_ in e)
      return s(void 0, p);
  }
  const d = {
    url: n,
    method: n,
    data: n,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (p, o) => a(zs(p), zs(o), !0)
  };
  return m.forEach(Object.keys(Object.assign({}, e, t)), function(p) {
    const o = d[p] || a, _ = o(e[p], t[p], p);
    m.isUndefined(_) && o !== l || (r[p] = _);
  }), r;
}
const Ra = "1.6.8", Qr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Qr[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Gs = {};
Qr.transitional = function(e, t, r) {
  function s(a, n) {
    return "[Axios v" + Ra + "] Transitional option '" + a + "'" + n + (r ? ". " + r : "");
  }
  return (a, n, i) => {
    if (e === !1)
      throw new A(
        s(n, " has been removed" + (t ? " in " + t : "")),
        A.ERR_DEPRECATED
      );
    return t && !Gs[n] && (Gs[n] = !0, console.warn(
      s(
        n,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(a, n, i) : !0;
  };
};
function $o(e, t, r) {
  if (typeof e != "object")
    throw new A("options must be an object", A.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let a = s.length;
  for (; a-- > 0; ) {
    const n = s[a], i = t[n];
    if (i) {
      const l = e[n], d = l === void 0 || i(l, n, e);
      if (d !== !0)
        throw new A("option " + n + " must be " + d, A.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new A("Unknown option " + n, A.ERR_BAD_OPTION);
  }
}
const Yr = {
  assertOptions: $o,
  validators: Qr
}, xe = Yr.validators;
let Bt = class {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Bs(),
      response: new Bs()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
      }
      throw r;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Je(this.defaults, t);
    const { transitional: r, paramsSerializer: s, headers: a } = t;
    r !== void 0 && Yr.assertOptions(r, {
      silentJSONParsing: xe.transitional(xe.boolean),
      forcedJSONParsing: xe.transitional(xe.boolean),
      clarifyTimeoutError: xe.transitional(xe.boolean)
    }, !1), s != null && (m.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : Yr.assertOptions(s, {
      encode: xe.function,
      serialize: xe.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let n = a && m.merge(
      a.common,
      a[t.method]
    );
    a && m.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (c) => {
        delete a[c];
      }
    ), t.headers = Se.concat(n, a);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(c) {
      typeof c.runWhen == "function" && c.runWhen(t) === !1 || (l = l && c.synchronous, i.unshift(c.fulfilled, c.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(c) {
      d.push(c.fulfilled, c.rejected);
    });
    let p, o = 0, _;
    if (!l) {
      const c = [Vs.bind(this), void 0];
      for (c.unshift.apply(c, i), c.push.apply(c, d), _ = c.length, p = Promise.resolve(t); o < _; )
        p = p.then(c[o++], c[o++]);
      return p;
    }
    _ = i.length;
    let f = t;
    for (o = 0; o < _; ) {
      const c = i[o++], h = i[o++];
      try {
        f = c(f);
      } catch (g) {
        h.call(this, g);
        break;
      }
    }
    try {
      p = Vs.call(this, f);
    } catch (c) {
      return Promise.reject(c);
    }
    for (o = 0, _ = d.length; o < _; )
      p = p.then(d[o++], d[o++]);
    return p;
  }
  getUri(e) {
    e = Je(this.defaults, e);
    const t = xa(e.baseURL, e.url);
    return Oa(t, e.params, e.paramsSerializer);
  }
};
m.forEach(["delete", "get", "head", "options"], function(e) {
  Bt.prototype[e] = function(t, r) {
    return this.request(Je(r || {}, {
      method: e,
      url: t,
      data: (r || {}).data
    }));
  };
});
m.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(s, a, n) {
      return this.request(Je(n || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: a
      }));
    };
  }
  Bt.prototype[e] = t(), Bt.prototype[e + "Form"] = t(!0);
});
const Lt = Bt;
let Ko = class Pa {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const s = this;
    this.promise.then((a) => {
      if (!s._listeners)
        return;
      let n = s._listeners.length;
      for (; n-- > 0; )
        s._listeners[n](a);
      s._listeners = null;
    }), this.promise.then = (a) => {
      let n;
      const i = new Promise((l) => {
        s.subscribe(l), n = l;
      }).then(a);
      return i.cancel = function() {
        s.unsubscribe(n);
      }, i;
    }, t(function(a, n, i) {
      s.reason || (s.reason = new yt(a, n, i), r(s.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Pa(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
const Jo = Ko;
function Zo(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Xo(e) {
  return m.isObject(e) && e.isAxiosError === !0;
}
const Fr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Fr).forEach(([e, t]) => {
  Fr[t] = e;
});
const Qo = Fr;
function Na(e) {
  const t = new Lt(e), r = da(Lt.prototype.request, t);
  return m.extend(r, Lt.prototype, t, { allOwnKeys: !0 }), m.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Na(Je(e, s));
  }, r;
}
const H = Na(Xr);
H.Axios = Lt;
H.CanceledError = yt;
H.CancelToken = Jo;
H.isCancel = Ea;
H.VERSION = Ra;
H.toFormData = Jt;
H.AxiosError = A;
H.Cancel = H.CanceledError;
H.all = function(e) {
  return Promise.all(e);
};
H.spread = Zo;
H.isAxiosError = Xo;
H.mergeConfig = Je;
H.AxiosHeaders = Se;
H.formToJSON = (e) => Ma(m.isHTMLForm(e) ? new FormData(e) : e);
H.getAdapter = Aa.getAdapter;
H.HttpStatusCode = Qo;
H.default = H;
const {
  Axios: Wd,
  AxiosError: Bd,
  CanceledError: jd,
  isCancel: Hd,
  CancelToken: qd,
  VERSION: Vd,
  all: zd,
  Cancel: Gd,
  isAxiosError: $d,
  spread: Kd,
  toFormData: Jd,
  AxiosHeaders: Zd,
  HttpStatusCode: Rt,
  formToJSON: Xd,
  getAdapter: Qd,
  mergeConfig: ef
} = H;
var He = null;
typeof WebSocket < "u" ? He = WebSocket : typeof MozWebSocket < "u" ? He = MozWebSocket : typeof global < "u" ? He = global.WebSocket || global.MozWebSocket : typeof window < "u" ? He = window.WebSocket || window.MozWebSocket : typeof self < "u" && (He = self.WebSocket || self.MozWebSocket);
const el = He, Or = {
  SCHEMA_DIR_RELATIVE_PATH: "./../schemas/",
  // JSON Schema 相对于 node 的目录的路径
  SCHEMA_FILENAME_PAYLOAD: "payload.schema.json",
  // JSON Schema 的 payload 文件名
  SCHEMA_FILENAME_RESPONSE: "response.schema.json",
  // JSON Schema 的 response 文件名
  SIYUAN_DEFAULT_BASE_URL: "http://localhost:6806/",
  // 思源内核服务的默认 baseURL
  SIYUAN_DEFAULT_TOKEN: "",
  // 思源内核服务的默认 token
  REQUEST_TIMEOUT: 6e4
  // 请求超时时间 (单位: ms)
};
var $s, Ks, Js, Zs, Xs;
const Lr = class u {
  constructor(t = {}, r = "xhr") {
    re(this, "_type", "xhr"), re(this, "_baseURL", ((Ks = ($s = globalThis.top) == null ? void 0 : $s.document) == null ? void 0 : Ks.baseURI) ?? ((Zs = (Js = globalThis.parent) == null ? void 0 : Js.document) == null ? void 0 : Zs.baseURI) ?? ((Xs = globalThis.location) == null ? void 0 : Xs.origin) ?? Or.SIYUAN_DEFAULT_BASE_URL), re(this, "_token", Or.SIYUAN_DEFAULT_TOKEN), re(this, "_axios", H.create({
      baseURL: this._baseURL,
      timeout: Or.REQUEST_TIMEOUT,
      headers: {
        Authorization: `Token ${this._token}`
      }
    })), re(this, "_fetch", Ni.create({
      baseURL: this._baseURL,
      headers: {
        Authorization: `Token ${this._token}`
      }
    })), this._setClientType(r), this._updateOptions(t, r);
  }
  static headers2record(t) {
    const r = {};
    return t.forEach((s, a) => {
      r[a] = s;
    }), r;
  }
  static entries2record(t) {
    const r = {};
    for (const [s, a] of t)
      r[s] = a;
    return r;
  }
  /* 设置默认使用的客户端类型 */
  _setClientType(t) {
    this._type = t;
  }
  _updateOptions(t, r = this._type) {
    switch (this._token = t.token ?? this._token, this._baseURL = t.baseURL ?? this._baseURL, r) {
      case "fetch":
        const s = t;
        if (s.token) {
          const a = "Authorization", n = `Token ${t.token}`;
          Array.isArray(s.headers) ? s.headers.push([
            a,
            n
          ]) : s.headers instanceof Headers ? s.headers.set(
            a,
            n
          ) : typeof s.headers == "object" ? s.headers[a] = n : s.headers = {
            [a]: n
          }, delete t.token;
        }
        this._fetch = this._fetch.create(s);
        break;
      case "xhr":
      default:
        for (const [a, n] of Object.entries(t))
          switch (a) {
            case "token":
              this._axios.defaults.headers.Authorization = `Token ${this._token}`;
              break;
            default:
              this._axios.defaults[a] = n;
              break;
          }
        break;
    }
    this._baseURL = t.baseURL ?? this._baseURL;
  }
  /* 👇 WebSocket 👇 */
  /* 消息广播 */
  broadcast(t, r, s) {
    const a = (s == null ? void 0 : s.baseURL) ?? this._baseURL, n = (s == null ? void 0 : s.token) ?? this._token, i = new URLSearchParams(t);
    n && i.set("token", n);
    const l = new URL(a);
    return l.protocol = l.protocol.replace(/^http/, "ws"), l.pathname = l.pathname.endsWith("/") ? `${l.pathname}${u.ws.broadcast.pathname.substring(1)}` : `${l.pathname}${u.ws.broadcast.pathname}`, l.search = i.toString(), new el(l, r);
  }
  /* 👇 由 JSON Schema 生成的类型定义👇 */
  /* 上传资源文件 */
  async upload(t, r) {
    const s = new FormData();
    return s.append("assetsDirPath", t.assetsDirPath ?? "/assets/"), t.files.forEach((a) => s.append("file[]", a)), await this._request(
      u.api.asset.upload.pathname,
      u.api.asset.upload.method,
      s,
      r
    );
  }
  /* 获取块属性 */
  async getBlockAttrs(t, r) {
    return await this._request(
      u.api.attr.getBlockAttrs.pathname,
      u.api.attr.getBlockAttrs.method,
      t,
      r
    );
  }
  /* 获取所有书签 */
  async getBookmarkLabels(t) {
    return await this._request(
      u.api.attr.getBookmarkLabels.pathname,
      u.api.attr.getBookmarkLabels.method,
      void 0,
      t
    );
  }
  /* 设置块属性 */
  async setBlockAttrs(t, r) {
    return await this._request(
      u.api.attr.setBlockAttrs.pathname,
      u.api.attr.setBlockAttrs.method,
      t,
      r
    );
  }
  /* 在下级块尾部插入块 */
  async appendBlock(t, r) {
    return await this._request(
      u.api.block.appendBlock.pathname,
      u.api.block.appendBlock.method,
      t,
      r
    );
  }
  /* 删除块 */
  async deleteBlock(t, r) {
    return await this._request(
      u.api.block.deleteBlock.pathname,
      u.api.block.deleteBlock.method,
      t,
      r
    );
  }
  /* 获得块面包屑 */
  async getBlockBreadcrumb(t, r) {
    return await this._request(
      u.api.block.getBlockBreadcrumb.pathname,
      u.api.block.getBlockBreadcrumb.method,
      t,
      r
    );
  }
  /* 获得块的 DOM */
  async getBlockDOM(t, r) {
    return await this._request(
      u.api.block.getBlockDOM.pathname,
      u.api.block.getBlockDOM.method,
      t,
      r
    );
  }
  /* 获得块所在文档的信息 */
  async getBlockInfo(t, r) {
    return await this._request(
      u.api.block.getBlockInfo.pathname,
      u.api.block.getBlockInfo.method,
      t,
      r
    );
  }
  /* 获得块的 kramdown 源码 */
  async getBlockKramdown(t, r) {
    return await this._request(
      u.api.block.getBlockKramdown.pathname,
      u.api.block.getBlockKramdown.method,
      t,
      r
    );
  }
  /* 获得指定块的所有下级块 */
  async getChildBlocks(t, r) {
    return await this._request(
      u.api.block.getChildBlocks.pathname,
      u.api.block.getChildBlocks.method,
      t,
      r
    );
  }
  /* 获得指定块所在文档信息 */
  async getDocInfo(t, r) {
    return await this._request(
      u.api.block.getDocInfo.pathname,
      u.api.block.getDocInfo.method,
      t,
      r
    );
  }
  /* 插入块 */
  async insertBlock(t, r) {
    return await this._request(
      u.api.block.insertBlock.pathname,
      u.api.block.insertBlock.method,
      t,
      r
    );
  }
  /* 移动块 */
  async moveBlock(t, r) {
    return await this._request(
      u.api.block.moveBlock.pathname,
      u.api.block.moveBlock.method,
      t,
      r
    );
  }
  /* 在下级块首部插入块 */
  async prependBlock(t, r) {
    return await this._request(
      u.api.block.prependBlock.pathname,
      u.api.block.prependBlock.method,
      t,
      r
    );
  }
  /* 转移块引用 */
  async transferBlockRef(t, r) {
    return await this._request(
      u.api.block.transferBlockRef.pathname,
      u.api.block.transferBlockRef.method,
      t,
      r
    );
  }
  /* 更新块 */
  async updateBlock(t, r) {
    return await this._request(
      u.api.block.updateBlock.pathname,
      u.api.block.updateBlock.method,
      t,
      r
    );
  }
  /* 获取指定广播频道的信息 */
  async getChannelInfo(t, r) {
    return await this._request(
      u.api.broadcast.getChannelInfo.pathname,
      u.api.broadcast.getChannelInfo.method,
      t,
      r
    );
  }
  /* 获取所有广播频道信息 */
  async getChannels(t) {
    return await this._request(
      u.api.broadcast.getChannels.pathname,
      u.api.broadcast.getChannels.method,
      void 0,
      t
    );
  }
  /* 推送广播消息 */
  async postMessage(t, r) {
    return await this._request(
      u.api.broadcast.postMessage.pathname,
      u.api.broadcast.postMessage.method,
      t,
      r
    );
  }
  /* 调用 pandoc 转换转换文件 */
  async pandoc(t, r) {
    return await this._request(
      u.api.convert.pandoc.pathname,
      u.api.convert.pandoc.method,
      t,
      r
    );
  }
  /* 打包文件与文件夹以导出 */
  async exportResources(t, r) {
    return await this._request(
      u.api.export.exportResources.pathname,
      u.api.export.exportResources.method,
      t,
      r
    );
  }
  /* 导出指定文档块为 Markdown */
  async exportMdContent(t, r) {
    return await this._request(
      u.api.export.exportMdContent.pathname,
      u.api.export.exportMdContent.method,
      t,
      r
    );
  }
  async getFile(t, r = "text", s) {
    return await this._request(
      u.api.file.getFile.pathname,
      u.api.file.getFile.method,
      t,
      s,
      !1,
      r
    );
  }
  /* 设置文件 */
  async putFile(t, r) {
    t.file !== void 0 && !(t.file instanceof File) && (t.file = new File(
      [t.file],
      t.path.split("/").pop()
    ));
    const s = new FormData();
    for (const [a, n] of Object.entries(t))
      t.hasOwnProperty(a) && (n instanceof Blob ? s.append(a, n) : s.append(a, String(n)));
    return await this._request(
      u.api.file.putFile.pathname,
      u.api.file.putFile.method,
      s,
      r
    );
  }
  /* 获取文件目录下级内容 */
  async readDir(t, r) {
    return await this._request(
      u.api.file.readDir.pathname,
      u.api.file.readDir.method,
      t,
      r
    );
  }
  /* 删除文件/目录 */
  async removeFile(t, r) {
    return await this._request(
      u.api.file.removeFile.pathname,
      u.api.file.removeFile.method,
      t,
      r
    );
  }
  /* 重命名/移动文件/目录 */
  async renameFile(t, r) {
    return await this._request(
      u.api.file.renameFile.pathname,
      u.api.file.renameFile.method,
      t,
      r
    );
  }
  /* 创建今天的每日笔记 (Daily Note) */
  async createDailyNote(t, r) {
    return await this._request(
      u.api.filetree.createDailyNote.pathname,
      u.api.filetree.createDailyNote.method,
      t,
      r
    );
  }
  /* 通过 Markdown 创建文档 */
  async createDocWithMd(t, r) {
    return await this._request(
      u.api.filetree.createDocWithMd.pathname,
      u.api.filetree.createDocWithMd.method,
      t,
      r
    );
  }
  /* 获取文档内容 */
  async getDoc(t, r) {
    return await this._request(
      u.api.filetree.getDoc.pathname,
      u.api.filetree.getDoc.method,
      t,
      r
    );
  }
  /* 根据 ID 获取人类可读路径 */
  async getHPathByID(t, r) {
    return await this._request(
      u.api.filetree.getHPathByID.pathname,
      u.api.filetree.getHPathByID.method,
      t,
      r
    );
  }
  /* 根据路径获取人类可读路径 */
  async getHPathByPath(t, r) {
    return await this._request(
      u.api.filetree.getHPathByPath.pathname,
      u.api.filetree.getHPathByPath.method,
      t,
      r
    );
  }
  /* 根据人类可读路径获取文档 ID 列表 */
  async getIDsByHPath(t, r) {
    return await this._request(
      u.api.filetree.getIDsByHPath.pathname,
      u.api.filetree.getIDsByHPath.method,
      t,
      r
    );
  }
  /* 查询子文档 */
  async listDocsByPath(t, r) {
    return await this._request(
      u.api.filetree.listDocsByPath.pathname,
      u.api.filetree.listDocsByPath.method,
      t,
      r
    );
  }
  /* 批量移动文档 */
  async moveDocs(t, r) {
    return await this._request(
      u.api.filetree.moveDocs.pathname,
      u.api.filetree.moveDocs.method,
      t,
      r
    );
  }
  /* 删除文档 */
  async removeDoc(t, r) {
    return await this._request(
      u.api.filetree.removeDoc.pathname,
      u.api.filetree.removeDoc.method,
      t,
      r
    );
  }
  /* 文档重命名 */
  async renameDoc(t, r) {
    return await this._request(
      u.api.filetree.renameDoc.pathname,
      u.api.filetree.renameDoc.method,
      t,
      r
    );
  }
  /* 搜索文档 */
  async searchDocs(t, r) {
    return await this._request(
      u.api.filetree.searchDocs.pathname,
      u.api.filetree.searchDocs.method,
      t,
      r
    );
  }
  /* 获取历史文档内容 */
  async getDocHistoryContent(t, r) {
    return await this._request(
      u.api.history.getDocHistoryContent.pathname,
      u.api.history.getDocHistoryContent.method,
      t,
      r
    );
  }
  /* 查询历史项 */
  async getHistoryItems(t, r) {
    return await this._request(
      u.api.history.getHistoryItems.pathname,
      u.api.history.getHistoryItems.method,
      t,
      r
    );
  }
  /* 收集箱速记内容 */
  async getShorthand(t, r) {
    return await this._request(
      u.api.inbox.getShorthand.pathname,
      u.api.inbox.getShorthand.method,
      t,
      r
    );
  }
  /* 回显请求内容 */
  async echo(t, r) {
    if (t)
      switch (r ?? (r = {
        type: this._type
      }), r == null ? void 0 : r.type) {
        case "fetch": {
          const s = {};
          t.headers && (s.headers = t.headers), t.query && (s.query = u.entries2record(t.query.entries())), r.options ? Object.assign(s, r.options) : r.options = s;
          break;
        }
        case "xhr": {
          const s = {};
          t.headers && (s.headers = Array.isArray(t.headers) ? u.entries2record(t.headers) : t.headers instanceof Headers ? u.headers2record(t.headers) : t.headers), t.query && (s.params = t.query), r.options ? Object.assign(s, r.options) : r.options = s;
          break;
        }
      }
    return await this._request(
      u.api.network.echo.pathname,
      (t == null ? void 0 : t.method) ?? u.api.network.echo.method,
      t == null ? void 0 : t.body,
      r
    );
  }
  /* 正向代理 */
  async forwardProxy(t, r) {
    return await this._request(
      u.api.network.forwardProxy.pathname,
      u.api.network.forwardProxy.method,
      t,
      r
    );
  }
  /* 关闭笔记本 */
  async closeNotebook(t, r) {
    return await this._request(
      u.api.notebook.closeNotebook.pathname,
      u.api.notebook.closeNotebook.method,
      t,
      r
    );
  }
  /* 创建笔记本 */
  async createNotebook(t, r) {
    return await this._request(
      u.api.notebook.createNotebook.pathname,
      u.api.notebook.createNotebook.method,
      t,
      r
    );
  }
  /* 获取笔记本配置信息 */
  async getNotebookConf(t, r) {
    return await this._request(
      u.api.notebook.getNotebookConf.pathname,
      u.api.notebook.getNotebookConf.method,
      t,
      r
    );
  }
  /* 列出笔记本信息 */
  async lsNotebooks(t) {
    return await this._request(
      u.api.notebook.lsNotebooks.pathname,
      u.api.notebook.lsNotebooks.method,
      void 0,
      t
    );
  }
  /* 打开笔记本 */
  async openNotebook(t, r) {
    return await this._request(
      u.api.notebook.openNotebook.pathname,
      u.api.notebook.openNotebook.method,
      t,
      r
    );
  }
  /* 删除笔记本 */
  async removeNotebook(t, r) {
    return await this._request(
      u.api.notebook.removeNotebook.pathname,
      u.api.notebook.removeNotebook.method,
      t,
      r
    );
  }
  /* 重命名笔记本 */
  async renameNotebook(t, r) {
    return await this._request(
      u.api.notebook.renameNotebook.pathname,
      u.api.notebook.renameNotebook.method,
      t,
      r
    );
  }
  /* 设置笔记本配置 */
  async setNotebookConf(t, r) {
    return await this._request(
      u.api.notebook.setNotebookConf.pathname,
      u.api.notebook.setNotebookConf.method,
      t,
      r
    );
  }
  /* 推送错误消息 */
  async pushErrMsg(t, r) {
    return await this._request(
      u.api.notification.pushErrMsg.pathname,
      u.api.notification.pushErrMsg.method,
      t,
      r
    );
  }
  /* 推送提示消息 */
  async pushMsg(t, r) {
    return await this._request(
      u.api.notification.pushMsg.pathname,
      u.api.notification.pushMsg.method,
      t,
      r
    );
  }
  /* 获取文档大纲 */
  async getDocOutline(t, r) {
    return await this._request(
      u.api.outline.getDocOutline.pathname,
      u.api.outline.getDocOutline.method,
      t,
      r
    );
  }
  /* SQL 查询 */
  async sql(t, r) {
    return await this._request(
      u.api.query.sql.pathname,
      u.api.query.sql.method,
      t,
      r
    );
  }
  /* 读取快照文件内容 */
  async openRepoSnapshotDoc(t, r) {
    return await this._request(
      u.api.repo.openRepoSnapshotDoc.pathname,
      u.api.repo.openRepoSnapshotDoc.method,
      t,
      r
    );
  }
  /* 全局搜索 */
  async fullTextSearchBlock(t, r) {
    return await this._request(
      u.api.search.fullTextSearchBlock.pathname,
      u.api.search.fullTextSearchBlock.method,
      t,
      r
    );
  }
  /* 获取代码片段 */
  async getSnippet(t, r) {
    return await this._request(
      u.api.snippet.getSnippet.pathname,
      u.api.snippet.getSnippet.method,
      t,
      r
    );
  }
  /* 设置代码片段 */
  async setSnippet(t, r) {
    return await this._request(
      u.api.snippet.setSnippet.pathname,
      u.api.snippet.setSnippet.method,
      t,
      r
    );
  }
  /* 等待业务数据持久化完成 */
  async flushTransaction(t) {
    return await this._request(
      u.api.sqlite.flushTransaction.pathname,
      u.api.sqlite.flushTransaction.method,
      t
    );
  }
  /* 获取所有本地存储的数据 */
  async getLocalStorage(t) {
    return await this._request(
      u.api.storage.getLocalStorage.pathname,
      u.api.storage.getLocalStorage.method,
      void 0,
      t
    );
  }
  /* 查询最近打开的文档 */
  async getRecentDocs(t) {
    return await this._request(
      u.api.storage.getRecentDocs.pathname,
      u.api.storage.getRecentDocs.method,
      void 0,
      t
    );
  }
  /* 持久化本地存储 */
  async setLocalStorage(t, r) {
    return await this._request(
      u.api.storage.setLocalStorage.pathname,
      u.api.storage.setLocalStorage.method,
      t,
      r
    );
  }
  /* 持久化一项本地存储 */
  async setLocalStorageVal(t, r) {
    return await this._request(
      u.api.storage.setLocalStorageVal.pathname,
      u.api.storage.setLocalStorageVal.method,
      t,
      r
    );
  }
  /* 获取内核启动进度 */
  async bootProgress(t) {
    return await this._request(
      u.api.system.bootProgress.pathname,
      u.api.system.bootProgress.method,
      void 0,
      t
    );
  }
  /* 获得内核 Unix 时间戳 (单位: ms) */
  async currentTime(t) {
    return await this._request(
      u.api.system.currentTime.pathname,
      u.api.system.currentTime.method,
      void 0,
      t
    );
  }
  /* 获得配置 */
  async getConf(t) {
    return await this._request(
      u.api.system.getConf.pathname,
      u.api.system.getConf.method,
      void 0,
      t
    );
  }
  /* 注销登录状态 */
  async logoutAuth(t) {
    return await this._request(
      u.api.system.logoutAuth.pathname,
      u.api.system.logoutAuth.method,
      void 0,
      t
    );
  }
  /* 获得内核版本 */
  async version(t) {
    return await this._request(
      u.api.system.version.pathname,
      u.api.system.version.method,
      void 0,
      t
    );
  }
  /* 渲染 kramdown 模板文件 */
  async render(t, r) {
    return await this._request(
      u.api.template.render.pathname,
      u.api.template.render.method,
      t,
      r
    );
  }
  /* 渲染 Sprig 模板 */
  async renderSprig(t, r) {
    return await this._request(
      u.api.template.renderSprig.pathname,
      u.api.template.renderSprig.method,
      t,
      r
    );
  }
  async _request(t, r, s, a, n = !0, i = "json") {
    try {
      switch ((a == null ? void 0 : a.type) ?? this._type) {
        case "fetch": {
          const l = a == null ? void 0 : a.options;
          i = (() => {
            switch (i) {
              case "arraybuffer":
                return "arrayBuffer";
              case "document":
                return "text";
              default:
                return i;
            }
          })();
          const d = await this._fetch(
            t,
            {
              method: r,
              body: s,
              responseType: i,
              onResponse: async (p) => {
                switch (p.response.status) {
                  case Rt.Ok:
                    switch (i) {
                      case "blob":
                        p.response._data.contentType = p.response.headers.get("content-type");
                        break;
                      default:
                        break;
                    }
                    break;
                  case Rt.Accepted:
                    t === u.api.file.getFile.pathname && this._parseFetchResponse(p.response._data);
                    break;
                  default:
                    break;
                }
              },
              ...l
            }
          );
          return n && i === "json" && typeof d == "object" ? this._parseFetchResponse(d) : d;
        }
        case "xhr":
        default: {
          const l = a == null ? void 0 : a.options;
          i = (() => {
            switch (i) {
              case "arrayBuffer":
                return "arraybuffer";
              default:
                return i;
            }
          })();
          const d = await this._axios.request({
            url: t,
            method: r,
            data: s,
            responseType: i,
            ...l
          });
          switch (d.status) {
            case Rt.Ok:
              if (n && i === "json" && typeof d.data == "object")
                return this._parseAxiosResponse(d);
              switch (i) {
                case "blob":
                  d.data.contentType = d.headers.getContentType();
                  break;
                default:
                  break;
              }
              return d.data;
            case Rt.Accepted:
              return t === u.api.file.getFile.pathname ? this._parseAxiosResponse(d) : d.data;
            default:
              throw new Ci(d);
          }
        }
      }
    } catch (l) {
      throw l;
    }
  }
  /**
   * 解析内核响应
   */
  _parseFetchResponse(t) {
    if (t.code === 0)
      return t;
    throw new Rr(t);
  }
  /**
   * 解析内核响应
   */
  _parseAxiosResponse(t) {
    if (t.data.code === 0)
      return t.data;
    throw new Rr(t.data, t);
  }
};
re(Lr, "ws", {
  broadcast: { pathname: "/ws/broadcast" }
}), re(Lr, "api", {
  asset: {
    upload: { pathname: "/api/asset/upload", method: "POST" }
  },
  attr: {
    getBlockAttrs: { pathname: "/api/attr/getBlockAttrs", method: "POST" },
    getBookmarkLabels: { pathname: "/api/attr/getBookmarkLabels", method: "POST" },
    setBlockAttrs: { pathname: "/api/attr/setBlockAttrs", method: "POST" }
  },
  block: {
    appendBlock: { pathname: "/api/block/appendBlock", method: "POST" },
    deleteBlock: { pathname: "/api/block/deleteBlock", method: "POST" },
    getBlockBreadcrumb: { pathname: "/api/block/getBlockBreadcrumb", method: "POST" },
    getBlockDOM: { pathname: "/api/block/getBlockDOM", method: "POST" },
    getBlockInfo: { pathname: "/api/block/getBlockInfo", method: "POST" },
    getBlockKramdown: { pathname: "/api/block/getBlockKramdown", method: "POST" },
    getChildBlocks: { pathname: "/api/block/getChildBlocks", method: "POST" },
    getDocInfo: { pathname: "/api/block/getDocInfo", method: "POST" },
    insertBlock: { pathname: "/api/block/insertBlock", method: "POST" },
    moveBlock: { pathname: "/api/block/moveBlock", method: "POST" },
    prependBlock: { pathname: "/api/block/prependBlock", method: "POST" },
    transferBlockRef: { pathname: "/api/block/transferBlockRef", method: "POST" },
    updateBlock: { pathname: "/api/block/updateBlock", method: "POST" }
  },
  broadcast: {
    getChannelInfo: { pathname: "/api/broadcast/getChannelInfo", method: "POST" },
    getChannels: { pathname: "/api/broadcast/getChannels", method: "POST" },
    postMessage: { pathname: "/api/broadcast/postMessage", method: "POST" }
  },
  convert: {
    pandoc: { pathname: "/api/convert/pandoc", method: "POST" }
  },
  export: {
    exportMdContent: { pathname: "/api/export/exportMdContent", method: "POST" },
    exportResources: { pathname: "/api/export/exportResources", method: "POST" }
  },
  file: {
    getFile: { pathname: "/api/file/getFile", method: "POST" },
    putFile: { pathname: "/api/file/putFile", method: "POST" },
    readDir: { pathname: "/api/file/readDir", method: "POST" },
    removeFile: { pathname: "/api/file/removeFile", method: "POST" },
    renameFile: { pathname: "/api/file/renameFile", method: "POST" }
  },
  filetree: {
    createDailyNote: { pathname: "/api/filetree/createDailyNote", method: "POST" },
    createDocWithMd: { pathname: "/api/filetree/createDocWithMd", method: "POST" },
    getDoc: { pathname: "/api/filetree/getDoc", method: "POST" },
    getHPathByID: { pathname: "/api/filetree/getHPathByID", method: "POST" },
    getHPathByPath: { pathname: "/api/filetree/getHPathByPath", method: "POST" },
    getIDsByHPath: { pathname: "/api/filetree/getIDsByHPath", method: "POST" },
    listDocsByPath: { pathname: "/api/filetree/listDocsByPath", method: "POST" },
    moveDocs: { pathname: "/api/filetree/moveDocs", method: "POST" },
    removeDoc: { pathname: "/api/filetree/removeDoc", method: "POST" },
    renameDoc: { pathname: "/api/filetree/renameDoc", method: "POST" },
    searchDocs: { pathname: "/api/filetree/searchDocs", method: "POST" }
  },
  history: {
    getDocHistoryContent: { pathname: "/api/history/getDocHistoryContent", method: "POST" },
    getHistoryItems: { pathname: "/api/history/getHistoryItems", method: "POST" }
  },
  inbox: {
    getShorthand: { pathname: "/api/inbox/getShorthand", method: "POST" }
  },
  network: {
    echo: { pathname: "/api/network/echo", method: "POST" },
    forwardProxy: { pathname: "/api/network/forwardProxy", method: "POST" }
  },
  notebook: {
    closeNotebook: { pathname: "/api/notebook/closeNotebook", method: "POST" },
    createNotebook: { pathname: "/api/notebook/createNotebook", method: "POST" },
    getNotebookConf: { pathname: "/api/notebook/getNotebookConf", method: "POST" },
    lsNotebooks: { pathname: "/api/notebook/lsNotebooks", method: "POST" },
    openNotebook: { pathname: "/api/notebook/openNotebook", method: "POST" },
    removeNotebook: { pathname: "/api/notebook/removeNotebook", method: "POST" },
    renameNotebook: { pathname: "/api/notebook/renameNotebook", method: "POST" },
    setNotebookConf: { pathname: "/api/notebook/setNotebookConf", method: "POST" }
  },
  notification: {
    pushErrMsg: { pathname: "/api/notification/pushErrMsg", method: "POST" },
    pushMsg: { pathname: "/api/notification/pushMsg", method: "POST" }
  },
  outline: {
    getDocOutline: { pathname: "/api/outline/getDocOutline", method: "POST" }
  },
  query: {
    sql: { pathname: "/api/query/sql", method: "POST" }
  },
  repo: {
    openRepoSnapshotDoc: { pathname: "/api/repo/openRepoSnapshotDoc", method: "POST" }
  },
  search: {
    fullTextSearchBlock: { pathname: "/api/search/fullTextSearchBlock", method: "POST" }
  },
  snippet: {
    getSnippet: { pathname: "/api/snippet/getSnippet", method: "POST" },
    setSnippet: { pathname: "/api/snippet/setSnippet", method: "POST" }
  },
  sqlite: {
    flushTransaction: { pathname: "/api/sqlite/flushTransaction", method: "POST" }
  },
  storage: {
    getLocalStorage: { pathname: "/api/storage/getLocalStorage", method: "POST" },
    getRecentDocs: { pathname: "/api/storage/getRecentDocs", method: "POST" },
    setLocalStorage: { pathname: "/api/storage/setLocalStorage", method: "POST" },
    setLocalStorageVal: { pathname: "/api/storage/setLocalStorageVal", method: "POST" }
  },
  system: {
    bootProgress: { pathname: "/api/system/bootProgress", method: "POST" },
    currentTime: { pathname: "/api/system/currentTime", method: "POST" },
    getConf: { pathname: "/api/system/getConf", method: "POST" },
    logoutAuth: { pathname: "/api/system/logoutAuth", method: "POST" },
    version: { pathname: "/api/system/version", method: "POST" }
  },
  template: {
    render: { pathname: "/api/template/render", method: "POST" },
    renderSprig: { pathname: "/api/template/renderSprig", method: "POST" }
  }
});
let tl = Lr;
class rl {
  constructor(t, r, s, a) {
    ue(this, "map", /* @__PURE__ */ new Map());
    ue(this, "counter", Math.random());
    ue(this, "errerEventListener", async (t) => {
      this.logger.warn(t);
    });
    ue(this, "messageEventListener", async (t) => {
      const r = t.data;
      switch (r.type) {
        case "call": {
          try {
            if (r.uuid && r.uuid !== this.uuid)
              break;
            if (r.handler.name in this.handlers) {
              const s = this.handlers[r.handler.name], a = await s.func.call(s.this, ...r.handler.args), n = {
                type: "return",
                id: r.id,
                handler: {
                  name: r.handler.name,
                  result: a
                }
              };
              this.port.postMessage(n);
            }
          } catch (s) {
            const a = {
              type: "error",
              id: r.id,
              error: s
            };
            this.port.postMessage(a);
          }
          break;
        }
        case "error": {
          const s = this.map.get(r.id);
          s && (this.map.delete(r.id), s.reject(r.error));
          break;
        }
        case "return": {
          const s = this.map.get(r.id);
          s && (this.map.delete(r.id), s.resolve(r.handler.result));
          break;
        }
      }
    });
    this.port = t, this.logger = r, this.handlers = s, this.uuid = a, this.port.addEventListener("error", this.errerEventListener), this.port.addEventListener("messageerror", this.errerEventListener), this.port.addEventListener("message", this.messageEventListener);
  }
  /**
   * 调用远程函数
   * @param name 函数名称
   * @param args 函数参数
   * @returns 函数返回值
   */
  async call(t, ...r) {
    return new Promise((s, a) => {
      const n = this.counter++;
      this.map.set(n, { resolve: s, reject: a });
      const i = {
        type: "call",
        id: n,
        handler: {
          name: t,
          args: r
        }
      };
      this.port.postMessage(i);
    });
  }
  /**
   * 调用指定客户端的远程函数
   * @param uuid 客户端 UUID
   * @param name 函数名称
   * @param args 函数参数
   * @returns 函数返回值
   */
  async singleCall(t, r, ...s) {
    return new Promise((a, n) => {
      const i = this.counter++;
      this.map.set(i, { resolve: a, reject: n });
      const l = {
        type: "call",
        id: i,
        uuid: r,
        handler: {
          name: t,
          args: s
        }
      };
      this.port.postMessage(l);
    });
  }
}
function* sl(e = 0) {
  for (; ; )
    yield e++;
}
const al = sl(Math.round(Math.random() * (36 ** 8 - 1)));
function nl(e, t) {
  return `${e.getFullYear().toString().padStart(4, "0")}${(e.getMonth() + 1).toString().padStart(2, "0")}${e.getDate().toString().padStart(2, "0")}${e.getHours().toString().padStart(2, "0")}${e.getMinutes().toString().padStart(2, "0")}${e.getSeconds().toString().padStart(2, "0")}-${t.toString(36).padStart(7, "0").slice(-7)}`;
}
function il(e = /* @__PURE__ */ new Date(), t = al) {
  return nl(e, t.next().value);
}
class ol extends rl {
  constructor(r, s, a = {}, n = il()) {
    super(
      // @ts-ignore
      r,
      s,
      a,
      n
    );
    ue(this, "pingEventListener", async (r) => {
      r.data === "ping" && this.port.postMessage("pong");
    });
    this.port.addEventListener("message", this.pingEventListener);
  }
  close() {
    switch (!0) {
      case "close" in this.port:
        this.port.close();
        break;
      case "terminate" in this.port:
        this.port.terminate();
        break;
    }
  }
}
var ll = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ir = { exports: {} };
(function(e, t) {
  (function(r, s) {
    var a = "1.0.37", n = "", i = "?", l = "function", d = "undefined", p = "object", o = "string", _ = "major", f = "model", c = "name", h = "type", g = "vendor", w = "version", z = "architecture", Ce = "console", D = "mobile", M = "tablet", K = "smarttv", We = "wearable", cr = "embedded", hr = 500, St = "Amazon", tt = "Apple", Ss = "ASUS", vs = "BlackBerry", Ye = "Browser", vt = "Chrome", Nn = "Edge", Ot = "Firefox", Tt = "Google", Os = "Huawei", dr = "LG", fr = "Microsoft", Ts = "Motorola", Dt = "Opera", Mt = "Samsung", Ds = "Sharp", Et = "Sony", pr = "Xiaomi", mr = "Zebra", Ms = "Facebook", Es = "Chromium OS", xs = "Mac OS", Cn = function(x, Y) {
      var O = {};
      for (var I in x)
        Y[I] && Y[I].length % 2 === 0 ? O[I] = Y[I].concat(x[I]) : O[I] = x[I];
      return O;
    }, xt = function(x) {
      for (var Y = {}, O = 0; O < x.length; O++)
        Y[x[O].toUpperCase()] = x[O];
      return Y;
    }, As = function(x, Y) {
      return typeof x === o ? rt(Y).indexOf(rt(x)) !== -1 : !1;
    }, rt = function(x) {
      return x.toLowerCase();
    }, Yn = function(x) {
      return typeof x === o ? x.replace(/[^\d\.]/g, n).split(".")[0] : s;
    }, gr = function(x, Y) {
      if (typeof x === o)
        return x = x.replace(/^\s\s*/, n), typeof Y === d ? x : x.substring(0, hr);
    }, st = function(x, Y) {
      for (var O = 0, I, Ee, oe, C, v, le; O < Y.length && !v; ) {
        var wr = Y[O], Ns = Y[O + 1];
        for (I = Ee = 0; I < wr.length && !v && wr[I]; )
          if (v = wr[I++].exec(x), v)
            for (oe = 0; oe < Ns.length; oe++)
              le = v[++Ee], C = Ns[oe], typeof C === p && C.length > 0 ? C.length === 2 ? typeof C[1] == l ? this[C[0]] = C[1].call(this, le) : this[C[0]] = C[1] : C.length === 3 ? typeof C[1] === l && !(C[1].exec && C[1].test) ? this[C[0]] = le ? C[1].call(this, le, C[2]) : s : this[C[0]] = le ? le.replace(C[1], C[2]) : s : C.length === 4 && (this[C[0]] = le ? C[3].call(this, le.replace(C[1], C[2])) : s) : this[C] = le || s;
        O += 2;
      }
    }, yr = function(x, Y) {
      for (var O in Y)
        if (typeof Y[O] === p && Y[O].length > 0) {
          for (var I = 0; I < Y[O].length; I++)
            if (As(Y[O][I], x))
              return O === i ? s : O;
        } else if (As(Y[O], x))
          return O === i ? s : O;
      return x;
    }, Fn = {
      "1.0": "/8",
      "1.2": "/1",
      "1.3": "/3",
      "2.0": "/412",
      "2.0.2": "/416",
      "2.0.3": "/417",
      "2.0.4": "/419",
      "?": "/"
    }, Rs = {
      ME: "4.90",
      "NT 3.11": "NT3.51",
      "NT 4.0": "NT4.0",
      2e3: "NT 5.0",
      XP: ["NT 5.1", "NT 5.2"],
      Vista: "NT 6.0",
      7: "NT 6.1",
      8: "NT 6.2",
      "8.1": "NT 6.3",
      10: ["NT 6.4", "NT 10.0"],
      RT: "ARM"
    }, Ps = {
      browser: [
        [
          /\b(?:crmo|crios)\/([\w\.]+)/i
          // Chrome for Android/iOS
        ],
        [w, [c, "Chrome"]],
        [
          /edg(?:e|ios|a)?\/([\w\.]+)/i
          // Microsoft Edge
        ],
        [w, [c, "Edge"]],
        [
          // Presto based
          /(opera mini)\/([-\w\.]+)/i,
          // Opera Mini
          /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
          // Opera Mobi/Tablet
          /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
          // Opera
        ],
        [c, w],
        [
          /opios[\/ ]+([\w\.]+)/i
          // Opera mini on iphone >= 8.0
        ],
        [w, [c, Dt + " Mini"]],
        [
          /\bopr\/([\w\.]+)/i
          // Opera Webkit
        ],
        [w, [c, Dt]],
        [
          // Mixed
          /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
          // Baidu
        ],
        [w, [c, "Baidu"]],
        [
          /(kindle)\/([\w\.]+)/i,
          // Kindle
          /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
          // Lunascape/Maxthon/Netfront/Jasmine/Blazer
          // Trident based
          /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
          // Avant/IEMobile/SlimBrowser
          /(?:ms|\()(ie) ([\w\.]+)/i,
          // Internet Explorer
          // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
          /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
          // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
          /(heytap|ovi)browser\/([\d\.]+)/i,
          // Heytap/Ovi
          /(weibo)__([\d\.]+)/i
          // Weibo
        ],
        [c, w],
        [
          /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
          // UCBrowser
        ],
        [w, [c, "UC" + Ye]],
        [
          /microm.+\bqbcore\/([\w\.]+)/i,
          // WeChat Desktop for Windows Built-in Browser
          /\bqbcore\/([\w\.]+).+microm/i,
          /micromessenger\/([\w\.]+)/i
          // WeChat
        ],
        [w, [c, "WeChat"]],
        [
          /konqueror\/([\w\.]+)/i
          // Konqueror
        ],
        [w, [c, "Konqueror"]],
        [
          /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
          // IE11
        ],
        [w, [c, "IE"]],
        [
          /ya(?:search)?browser\/([\w\.]+)/i
          // Yandex
        ],
        [w, [c, "Yandex"]],
        [
          /slbrowser\/([\w\.]+)/i
          // Smart Lenovo Browser
        ],
        [w, [c, "Smart Lenovo " + Ye]],
        [
          /(avast|avg)\/([\w\.]+)/i
          // Avast/AVG Secure Browser
        ],
        [[c, /(.+)/, "$1 Secure " + Ye], w],
        [
          /\bfocus\/([\w\.]+)/i
          // Firefox Focus
        ],
        [w, [c, Ot + " Focus"]],
        [
          /\bopt\/([\w\.]+)/i
          // Opera Touch
        ],
        [w, [c, Dt + " Touch"]],
        [
          /coc_coc\w+\/([\w\.]+)/i
          // Coc Coc Browser
        ],
        [w, [c, "Coc Coc"]],
        [
          /dolfin\/([\w\.]+)/i
          // Dolphin
        ],
        [w, [c, "Dolphin"]],
        [
          /coast\/([\w\.]+)/i
          // Opera Coast
        ],
        [w, [c, Dt + " Coast"]],
        [
          /miuibrowser\/([\w\.]+)/i
          // MIUI Browser
        ],
        [w, [c, "MIUI " + Ye]],
        [
          /fxios\/([-\w\.]+)/i
          // Firefox for iOS
        ],
        [w, [c, Ot]],
        [
          /\bqihu|(qi?ho?o?|360)browser/i
          // 360
        ],
        [[c, "360 " + Ye]],
        [
          /(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i
        ],
        [[c, /(.+)/, "$1 " + Ye], w],
        [
          // Oculus/Sailfish/HuaweiBrowser/VivoBrowser
          /samsungbrowser\/([\w\.]+)/i
          // Samsung Internet
        ],
        [w, [c, Mt + " Internet"]],
        [
          /(comodo_dragon)\/([\w\.]+)/i
          // Comodo Dragon
        ],
        [[c, /_/g, " "], w],
        [
          /metasr[\/ ]?([\d\.]+)/i
          // Sogou Explorer
        ],
        [w, [c, "Sogou Explorer"]],
        [
          /(sogou)mo\w+\/([\d\.]+)/i
          // Sogou Mobile
        ],
        [[c, "Sogou Mobile"], w],
        [
          /(electron)\/([\w\.]+) safari/i,
          // Electron-based App
          /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
          // Tesla
          /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i
          // QQBrowser/2345 Browser
        ],
        [c, w],
        [
          /(lbbrowser)/i,
          // LieBao Browser
          /\[(linkedin)app\]/i
          // LinkedIn App for iOS & Android
        ],
        [c],
        [
          // WebView
          /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
          // Facebook App for iOS & Android
        ],
        [[c, Ms], w],
        [
          /(Klarna)\/([\w\.]+)/i,
          // Klarna Shopping Browser for iOS & Android
          /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
          // Kakao App
          /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
          // Naver InApp
          /safari (line)\/([\w\.]+)/i,
          // Line App for iOS
          /\b(line)\/([\w\.]+)\/iab/i,
          // Line App for Android
          /(alipay)client\/([\w\.]+)/i,
          // Alipay
          /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
          // Chromium/Instagram/Snapchat
        ],
        [c, w],
        [
          /\bgsa\/([\w\.]+) .*safari\//i
          // Google Search Appliance on iOS
        ],
        [w, [c, "GSA"]],
        [
          /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
          // TikTok
        ],
        [w, [c, "TikTok"]],
        [
          /headlesschrome(?:\/([\w\.]+)| )/i
          // Chrome Headless
        ],
        [w, [c, vt + " Headless"]],
        [
          / wv\).+(chrome)\/([\w\.]+)/i
          // Chrome WebView
        ],
        [[c, vt + " WebView"], w],
        [
          /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
          // Android Browser
        ],
        [w, [c, "Android " + Ye]],
        [
          /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
          // Chrome/OmniWeb/Arora/Tizen/Nokia
        ],
        [c, w],
        [
          /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
          // Mobile Safari
        ],
        [w, [c, "Mobile Safari"]],
        [
          /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
          // Safari & Safari Mobile
        ],
        [w, c],
        [
          /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
          // Safari < 3.0
        ],
        [c, [w, yr, Fn]],
        [
          /(webkit|khtml)\/([\w\.]+)/i
        ],
        [c, w],
        [
          // Gecko based
          /(navigator|netscape\d?)\/([-\w\.]+)/i
          // Netscape
        ],
        [[c, "Netscape"], w],
        [
          /mobile vr; rv:([\w\.]+)\).+firefox/i
          // Firefox Reality
        ],
        [w, [c, Ot + " Reality"]],
        [
          /ekiohf.+(flow)\/([\w\.]+)/i,
          // Flow
          /(swiftfox)/i,
          // Swiftfox
          /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
          // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
          /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
          // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
          /(firefox)\/([\w\.]+)/i,
          // Other Firefox-based
          /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
          // Mozilla
          // Other
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
          // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
          /(links) \(([\w\.]+)/i,
          // Links
          /panasonic;(viera)/i
          // Panasonic Viera
        ],
        [c, w],
        [
          /(cobalt)\/([\w\.]+)/i
          // Cobalt
        ],
        [c, [w, /master.|lts./, ""]]
      ],
      cpu: [
        [
          /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
          // AMD64 (x64)
        ],
        [[z, "amd64"]],
        [
          /(ia32(?=;))/i
          // IA32 (quicktime)
        ],
        [[z, rt]],
        [
          /((?:i[346]|x)86)[;\)]/i
          // IA32 (x86)
        ],
        [[z, "ia32"]],
        [
          /\b(aarch64|arm(v?8e?l?|_?64))\b/i
          // ARM64
        ],
        [[z, "arm64"]],
        [
          /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
          // ARMHF
        ],
        [[z, "armhf"]],
        [
          // PocketPC mistakenly identified as PowerPC
          /windows (ce|mobile); ppc;/i
        ],
        [[z, "arm"]],
        [
          /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
          // PowerPC
        ],
        [[z, /ower/, n, rt]],
        [
          /(sun4\w)[;\)]/i
          // SPARC
        ],
        [[z, "sparc"]],
        [
          /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
          // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
        ],
        [[z, rt]]
      ],
      device: [
        [
          //////////////////////////
          // MOBILES & TABLETS
          /////////////////////////
          // Samsung
          /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
        ],
        [f, [g, Mt], [h, M]],
        [
          /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
          /samsung[- ]([-\w]+)/i,
          /sec-(sgh\w+)/i
        ],
        [f, [g, Mt], [h, D]],
        [
          // Apple
          /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
          // iPod/iPhone
        ],
        [f, [g, tt], [h, D]],
        [
          /\((ipad);[-\w\),; ]+apple/i,
          // iPad
          /applecoremedia\/[\w\.]+ \((ipad)/i,
          /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
        ],
        [f, [g, tt], [h, M]],
        [
          /(macintosh);/i
        ],
        [f, [g, tt]],
        [
          // Sharp
          /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
        ],
        [f, [g, Ds], [h, D]],
        [
          // Huawei
          /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
        ],
        [f, [g, Os], [h, M]],
        [
          /(?:huawei|honor)([-\w ]+)[;\)]/i,
          /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
        ],
        [f, [g, Os], [h, D]],
        [
          // Xiaomi
          /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
          // Xiaomi POCO
          /\b; (\w+) build\/hm\1/i,
          // Xiaomi Hongmi 'numeric' models
          /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
          // Xiaomi Hongmi
          /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
          // Xiaomi Redmi
          /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
          // Xiaomi Redmi 'numeric' models
          /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
          // Xiaomi Mi
        ],
        [[f, /_/g, " "], [g, pr], [h, D]],
        [
          /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
          // Redmi Pad
          /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
          // Mi Pad tablets
        ],
        [[f, /_/g, " "], [g, pr], [h, M]],
        [
          // OPPO
          /; (\w+) bui.+ oppo/i,
          /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
        ],
        [f, [g, "OPPO"], [h, D]],
        [
          // Vivo
          /vivo (\w+)(?: bui|\))/i,
          /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
        ],
        [f, [g, "Vivo"], [h, D]],
        [
          // Realme
          /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
        ],
        [f, [g, "Realme"], [h, D]],
        [
          // Motorola
          /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
          /\bmot(?:orola)?[- ](\w*)/i,
          /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
        ],
        [f, [g, Ts], [h, D]],
        [
          /\b(mz60\d|xoom[2 ]{0,2}) build\//i
        ],
        [f, [g, Ts], [h, M]],
        [
          // LG
          /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
        ],
        [f, [g, dr], [h, M]],
        [
          /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
          /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
          /\blg-?([\d\w]+) bui/i
        ],
        [f, [g, dr], [h, D]],
        [
          // Lenovo
          /(ideatab[-\w ]+)/i,
          /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
        ],
        [f, [g, "Lenovo"], [h, M]],
        [
          // Nokia
          /(?:maemo|nokia).*(n900|lumia \d+)/i,
          /nokia[-_ ]?([-\w\.]*)/i
        ],
        [[f, /_/g, " "], [g, "Nokia"], [h, D]],
        [
          // Google
          /(pixel c)\b/i
          // Google Pixel C
        ],
        [f, [g, Tt], [h, M]],
        [
          /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
          // Google Pixel
        ],
        [f, [g, Tt], [h, D]],
        [
          // Sony
          /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
        ],
        [f, [g, Et], [h, D]],
        [
          /sony tablet [ps]/i,
          /\b(?:sony)?sgp\w+(?: bui|\))/i
        ],
        [[f, "Xperia Tablet"], [g, Et], [h, M]],
        [
          // OnePlus
          / (kb2005|in20[12]5|be20[12][59])\b/i,
          /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
        ],
        [f, [g, "OnePlus"], [h, D]],
        [
          // Amazon
          /(alexa)webm/i,
          /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
          // Kindle Fire without Silk / Echo Show
          /(kf[a-z]+)( bui|\)).+silk\//i
          // Kindle Fire HD
        ],
        [f, [g, St], [h, M]],
        [
          /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
          // Fire Phone
        ],
        [[f, /(.+)/g, "Fire Phone $1"], [g, St], [h, D]],
        [
          // BlackBerry
          /(playbook);[-\w\),; ]+(rim)/i
          // BlackBerry PlayBook
        ],
        [f, g, [h, M]],
        [
          /\b((?:bb[a-f]|st[hv])100-\d)/i,
          /\(bb10; (\w+)/i
          // BlackBerry 10
        ],
        [f, [g, vs], [h, D]],
        [
          // Asus
          /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
        ],
        [f, [g, Ss], [h, M]],
        [
          / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
        ],
        [f, [g, Ss], [h, D]],
        [
          // HTC
          /(nexus 9)/i
          // HTC Nexus 9
        ],
        [f, [g, "HTC"], [h, M]],
        [
          /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
          // HTC
          // ZTE
          /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
          /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
          // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
        ],
        [g, [f, /_/g, " "], [h, D]],
        [
          // Acer
          /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
        ],
        [f, [g, "Acer"], [h, M]],
        [
          // Meizu
          /droid.+; (m[1-5] note) bui/i,
          /\bmz-([-\w]{2,})/i
        ],
        [f, [g, "Meizu"], [h, D]],
        [
          // Ulefone
          /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
        ],
        [f, [g, "Ulefone"], [h, D]],
        [
          // MIXED
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
          // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
          /(hp) ([\w ]+\w)/i,
          // HP iPAQ
          /(asus)-?(\w+)/i,
          // Asus
          /(microsoft); (lumia[\w ]+)/i,
          // Microsoft Lumia
          /(lenovo)[-_ ]?([-\w]+)/i,
          // Lenovo
          /(jolla)/i,
          // Jolla
          /(oppo) ?([\w ]+) bui/i
          // OPPO
        ],
        [g, f, [h, D]],
        [
          /(kobo)\s(ereader|touch)/i,
          // Kobo
          /(archos) (gamepad2?)/i,
          // Archos
          /(hp).+(touchpad(?!.+tablet)|tablet)/i,
          // HP TouchPad
          /(kindle)\/([\w\.]+)/i,
          // Kindle
          /(nook)[\w ]+build\/(\w+)/i,
          // Nook
          /(dell) (strea[kpr\d ]*[\dko])/i,
          // Dell Streak
          /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
          // Le Pan Tablets
          /(trinity)[- ]*(t\d{3}) bui/i,
          // Trinity Tablets
          /(gigaset)[- ]+(q\w{1,9}) bui/i,
          // Gigaset Tablets
          /(vodafone) ([\w ]+)(?:\)| bui)/i
          // Vodafone
        ],
        [g, f, [h, M]],
        [
          /(surface duo)/i
          // Surface Duo
        ],
        [f, [g, fr], [h, M]],
        [
          /droid [\d\.]+; (fp\du?)(?: b|\))/i
          // Fairphone
        ],
        [f, [g, "Fairphone"], [h, D]],
        [
          /(u304aa)/i
          // AT&T
        ],
        [f, [g, "AT&T"], [h, D]],
        [
          /\bsie-(\w*)/i
          // Siemens
        ],
        [f, [g, "Siemens"], [h, D]],
        [
          /\b(rct\w+) b/i
          // RCA Tablets
        ],
        [f, [g, "RCA"], [h, M]],
        [
          /\b(venue[\d ]{2,7}) b/i
          // Dell Venue Tablets
        ],
        [f, [g, "Dell"], [h, M]],
        [
          /\b(q(?:mv|ta)\w+) b/i
          // Verizon Tablet
        ],
        [f, [g, "Verizon"], [h, M]],
        [
          /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
          // Barnes & Noble Tablet
        ],
        [f, [g, "Barnes & Noble"], [h, M]],
        [
          /\b(tm\d{3}\w+) b/i
        ],
        [f, [g, "NuVision"], [h, M]],
        [
          /\b(k88) b/i
          // ZTE K Series Tablet
        ],
        [f, [g, "ZTE"], [h, M]],
        [
          /\b(nx\d{3}j) b/i
          // ZTE Nubia
        ],
        [f, [g, "ZTE"], [h, D]],
        [
          /\b(gen\d{3}) b.+49h/i
          // Swiss GEN Mobile
        ],
        [f, [g, "Swiss"], [h, D]],
        [
          /\b(zur\d{3}) b/i
          // Swiss ZUR Tablet
        ],
        [f, [g, "Swiss"], [h, M]],
        [
          /\b((zeki)?tb.*\b) b/i
          // Zeki Tablets
        ],
        [f, [g, "Zeki"], [h, M]],
        [
          /\b([yr]\d{2}) b/i,
          /\b(dragon[- ]+touch |dt)(\w{5}) b/i
          // Dragon Touch Tablet
        ],
        [[g, "Dragon Touch"], f, [h, M]],
        [
          /\b(ns-?\w{0,9}) b/i
          // Insignia Tablets
        ],
        [f, [g, "Insignia"], [h, M]],
        [
          /\b((nxa|next)-?\w{0,9}) b/i
          // NextBook Tablets
        ],
        [f, [g, "NextBook"], [h, M]],
        [
          /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
          // Voice Xtreme Phones
        ],
        [[g, "Voice"], f, [h, D]],
        [
          /\b(lvtel\-)?(v1[12]) b/i
          // LvTel Phones
        ],
        [[g, "LvTel"], f, [h, D]],
        [
          /\b(ph-1) /i
          // Essential PH-1
        ],
        [f, [g, "Essential"], [h, D]],
        [
          /\b(v(100md|700na|7011|917g).*\b) b/i
          // Envizen Tablets
        ],
        [f, [g, "Envizen"], [h, M]],
        [
          /\b(trio[-\w\. ]+) b/i
          // MachSpeed Tablets
        ],
        [f, [g, "MachSpeed"], [h, M]],
        [
          /\btu_(1491) b/i
          // Rotor Tablets
        ],
        [f, [g, "Rotor"], [h, M]],
        [
          /(shield[\w ]+) b/i
          // Nvidia Shield Tablets
        ],
        [f, [g, "Nvidia"], [h, M]],
        [
          /(sprint) (\w+)/i
          // Sprint Phones
        ],
        [g, f, [h, D]],
        [
          /(kin\.[onetw]{3})/i
          // Microsoft Kin
        ],
        [[f, /\./g, " "], [g, fr], [h, D]],
        [
          /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
          // Zebra
        ],
        [f, [g, mr], [h, M]],
        [
          /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
        ],
        [f, [g, mr], [h, D]],
        [
          ///////////////////
          // SMARTTVS
          ///////////////////
          /smart-tv.+(samsung)/i
          // Samsung
        ],
        [g, [h, K]],
        [
          /hbbtv.+maple;(\d+)/i
        ],
        [[f, /^/, "SmartTV"], [g, Mt], [h, K]],
        [
          /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
          // LG SmartTV
        ],
        [[g, dr], [h, K]],
        [
          /(apple) ?tv/i
          // Apple TV
        ],
        [g, [f, tt + " TV"], [h, K]],
        [
          /crkey/i
          // Google Chromecast
        ],
        [[f, vt + "cast"], [g, Tt], [h, K]],
        [
          /droid.+aft(\w+)( bui|\))/i
          // Fire TV
        ],
        [f, [g, St], [h, K]],
        [
          /\(dtv[\);].+(aquos)/i,
          /(aquos-tv[\w ]+)\)/i
          // Sharp
        ],
        [f, [g, Ds], [h, K]],
        [
          /(bravia[\w ]+)( bui|\))/i
          // Sony
        ],
        [f, [g, Et], [h, K]],
        [
          /(mitv-\w{5}) bui/i
          // Xiaomi
        ],
        [f, [g, pr], [h, K]],
        [
          /Hbbtv.*(technisat) (.*);/i
          // TechniSAT
        ],
        [g, f, [h, K]],
        [
          /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
          // Roku
          /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
          // HbbTV devices
        ],
        [[g, gr], [f, gr], [h, K]],
        [
          /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
          // SmartTV from Unidentified Vendors
        ],
        [[h, K]],
        [
          ///////////////////
          // CONSOLES
          ///////////////////
          /(ouya)/i,
          // Ouya
          /(nintendo) ([wids3utch]+)/i
          // Nintendo
        ],
        [g, f, [h, Ce]],
        [
          /droid.+; (shield) bui/i
          // Nvidia
        ],
        [f, [g, "Nvidia"], [h, Ce]],
        [
          /(playstation [345portablevi]+)/i
          // Playstation
        ],
        [f, [g, Et], [h, Ce]],
        [
          /\b(xbox(?: one)?(?!; xbox))[\); ]/i
          // Microsoft Xbox
        ],
        [f, [g, fr], [h, Ce]],
        [
          ///////////////////
          // WEARABLES
          ///////////////////
          /((pebble))app/i
          // Pebble
        ],
        [g, f, [h, We]],
        [
          /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
          // Apple Watch
        ],
        [f, [g, tt], [h, We]],
        [
          /droid.+; (glass) \d/i
          // Google Glass
        ],
        [f, [g, Tt], [h, We]],
        [
          /droid.+; (wt63?0{2,3})\)/i
        ],
        [f, [g, mr], [h, We]],
        [
          /(quest( 2| pro)?)/i
          // Oculus Quest
        ],
        [f, [g, Ms], [h, We]],
        [
          ///////////////////
          // EMBEDDED
          ///////////////////
          /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
          // Tesla
        ],
        [g, [h, cr]],
        [
          /(aeobc)\b/i
          // Echo Dot
        ],
        [f, [g, St], [h, cr]],
        [
          ////////////////////
          // MIXED (GENERIC)
          ///////////////////
          /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
          // Android Phones from Unidentified Vendors
        ],
        [f, [h, D]],
        [
          /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
          // Android Tablets from Unidentified Vendors
        ],
        [f, [h, M]],
        [
          /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
          // Unidentifiable Tablet
        ],
        [[h, M]],
        [
          /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
          // Unidentifiable Mobile
        ],
        [[h, D]],
        [
          /(android[-\w\. ]{0,9});.+buil/i
          // Generic Android Device
        ],
        [f, [g, "Generic"]]
      ],
      engine: [
        [
          /windows.+ edge\/([\w\.]+)/i
          // EdgeHTML
        ],
        [w, [c, Nn + "HTML"]],
        [
          /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
          // Blink
        ],
        [w, [c, "Blink"]],
        [
          /(presto)\/([\w\.]+)/i,
          // Presto
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
          // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
          /ekioh(flow)\/([\w\.]+)/i,
          // Flow
          /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
          // KHTML/Tasman/Links
          /(icab)[\/ ]([23]\.[\d\.]+)/i,
          // iCab
          /\b(libweb)/i
        ],
        [c, w],
        [
          /rv\:([\w\.]{1,9})\b.+(gecko)/i
          // Gecko
        ],
        [w, c]
      ],
      os: [
        [
          // Windows
          /microsoft (windows) (vista|xp)/i
          // Windows (iTunes)
        ],
        [c, w],
        [
          /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
          // Windows Phone
        ],
        [c, [w, yr, Rs]],
        [
          /windows nt 6\.2; (arm)/i,
          // Windows RT
          /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
          /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
        ],
        [[w, yr, Rs], [c, "Windows"]],
        [
          // iOS/macOS
          /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
          // iOS
          /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
          /cfnetwork\/.+darwin/i
        ],
        [[w, /_/g, "."], [c, "iOS"]],
        [
          /(mac os x) ?([\w\. ]*)/i,
          /(macintosh|mac_powerpc\b)(?!.+haiku)/i
          // Mac OS
        ],
        [[c, xs], [w, /_/g, "."]],
        [
          // Mobile OSes
          /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
          // Android-x86/HarmonyOS
        ],
        [w, c],
        [
          // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
          /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
          /(blackberry)\w*\/([\w\.]*)/i,
          // Blackberry
          /(tizen|kaios)[\/ ]([\w\.]+)/i,
          // Tizen/KaiOS
          /\((series40);/i
          // Series 40
        ],
        [c, w],
        [
          /\(bb(10);/i
          // BlackBerry 10
        ],
        [w, [c, vs]],
        [
          /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
          // Symbian
        ],
        [w, [c, "Symbian"]],
        [
          /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
          // Firefox OS
        ],
        [w, [c, Ot + " OS"]],
        [
          /web0s;.+rt(tv)/i,
          /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
          // WebOS
        ],
        [w, [c, "webOS"]],
        [
          /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
          // watchOS
        ],
        [w, [c, "watchOS"]],
        [
          // Google Chromecast
          /crkey\/([\d\.]+)/i
          // Google Chromecast
        ],
        [w, [c, vt + "cast"]],
        [
          /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
          // Chromium OS
        ],
        [[c, Es], w],
        [
          // Smart TVs
          /panasonic;(viera)/i,
          // Panasonic Viera
          /(netrange)mmh/i,
          // Netrange
          /(nettv)\/(\d+\.[\w\.]+)/i,
          // NetTV
          // Console
          /(nintendo|playstation) ([wids345portablevuch]+)/i,
          // Nintendo/Playstation
          /(xbox); +xbox ([^\);]+)/i,
          // Microsoft Xbox (360, One, X, S, Series X, Series S)
          // Other
          /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
          // Joli/Palm
          /(mint)[\/\(\) ]?(\w*)/i,
          // Mint
          /(mageia|vectorlinux)[; ]/i,
          // Mageia/VectorLinux
          /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
          // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
          /(hurd|linux) ?([\w\.]*)/i,
          // Hurd/Linux
          /(gnu) ?([\w\.]*)/i,
          // GNU
          /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
          // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
          /(haiku) (\w+)/i
          // Haiku
        ],
        [c, w],
        [
          /(sunos) ?([\w\.\d]*)/i
          // Solaris
        ],
        [[c, "Solaris"], w],
        [
          /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
          // Solaris
          /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
          // AIX
          /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
          // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
          /(unix) ?([\w\.]*)/i
          // UNIX
        ],
        [c, w]
      ]
    }, te = function(x, Y) {
      if (typeof x === p && (Y = x, x = s), !(this instanceof te))
        return new te(x, Y).getResult();
      var O = typeof r !== d && r.navigator ? r.navigator : s, I = x || (O && O.userAgent ? O.userAgent : n), Ee = O && O.userAgentData ? O.userAgentData : s, oe = Y ? Cn(Ps, Y) : Ps, C = O && O.userAgent == I;
      return this.getBrowser = function() {
        var v = {};
        return v[c] = s, v[w] = s, st.call(v, I, oe.browser), v[_] = Yn(v[w]), C && O && O.brave && typeof O.brave.isBrave == l && (v[c] = "Brave"), v;
      }, this.getCPU = function() {
        var v = {};
        return v[z] = s, st.call(v, I, oe.cpu), v;
      }, this.getDevice = function() {
        var v = {};
        return v[g] = s, v[f] = s, v[h] = s, st.call(v, I, oe.device), C && !v[h] && Ee && Ee.mobile && (v[h] = D), C && v[f] == "Macintosh" && O && typeof O.standalone !== d && O.maxTouchPoints && O.maxTouchPoints > 2 && (v[f] = "iPad", v[h] = M), v;
      }, this.getEngine = function() {
        var v = {};
        return v[c] = s, v[w] = s, st.call(v, I, oe.engine), v;
      }, this.getOS = function() {
        var v = {};
        return v[c] = s, v[w] = s, st.call(v, I, oe.os), C && !v[c] && Ee && Ee.platform != "Unknown" && (v[c] = Ee.platform.replace(/chrome os/i, Es).replace(/macos/i, xs)), v;
      }, this.getResult = function() {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      }, this.getUA = function() {
        return I;
      }, this.setUA = function(v) {
        return I = typeof v === o && v.length > hr ? gr(v, hr) : v, this;
      }, this.setUA(I), this;
    };
    te.VERSION = a, te.BROWSER = xt([c, w, _]), te.CPU = xt([z]), te.DEVICE = xt([f, g, h, Ce, D, K, M, We, cr]), te.ENGINE = te.OS = xt([c, w]), e.exports && (t = e.exports = te), t.UAParser = te;
    var Be = typeof r !== d && (r.jQuery || r.Zepto);
    if (Be && !Be.ua) {
      var At = new te();
      Be.ua = At.getResult(), Be.ua.get = function() {
        return At.getUA();
      }, Be.ua.set = function(x) {
        At.setUA(x);
        var Y = At.getResult();
        for (var O in Y)
          Be.ua[O] = Y[O];
      };
    }
  })(typeof window == "object" ? window : ll);
})(Ir, Ir.exports);
var ul = Ir.exports;
const cl = new ul.UAParser(), Qs = cl.getResult();
class hl {
  constructor(t, r = !0) {
    ue(this, "FLAG_FIREFOX");
    this.label = t, this.collapsed = r, this.FLAG_FIREFOX = Qs.browser.name === "Firefox" || Qs.engine.name === "Gecko";
  }
  /**
   * 输出
   * @param func: 所使用的输出函数
   * @param multiple: 是否进行多次输出
   * @param args: 输出函数的参数
   */
  stdout(t, r, ...s) {
    const a = this.FLAG_FIREFOX ? `[${this.label}] - <${t.name.toUpperCase()}>` : `[\x1B[4m${this.label}\x1B[0m] - <\x1B[1m${t.name.toUpperCase()}\x1B[0m>`;
    if (this.collapsed ? globalThis.console.groupCollapsed(a) : globalThis.console.group(a), r)
      for (const n of s)
        Array.isArray(n) ? t(...n) : t(n);
    else
      t(...s);
    globalThis.console.trace(), globalThis.console.groupEnd();
  }
  clear(...t) {
    this.stdout(globalThis.console.clear, !1, ...t);
  }
  countReset(...t) {
    this.stdout(globalThis.console.countReset, !1, ...t);
  }
  count(...t) {
    this.stdout(globalThis.console.count, !1, ...t);
  }
  counts(...t) {
    this.stdout(globalThis.console.count, !0, ...t);
  }
  assert(...t) {
    this.stdout(globalThis.console.assert, !1, ...t);
  }
  asserts(...t) {
    this.stdout(globalThis.console.assert, !0, ...t);
  }
  dir(...t) {
    this.stdout(globalThis.console.dir, !1, ...t);
  }
  dirs(...t) {
    this.stdout(globalThis.console.dir, !0, ...t);
  }
  dirxml(...t) {
    this.stdout(globalThis.console.dirxml, !1, ...t);
  }
  dirxmls(...t) {
    this.stdout(globalThis.console.dirxml, !0, ...t);
  }
  table(...t) {
    this.stdout(globalThis.console.table, !1, ...t);
  }
  tables(...t) {
    this.stdout(globalThis.console.table, !0, ...t);
  }
  debug(...t) {
    this.stdout(globalThis.console.debug, !1, ...t);
  }
  debugs(...t) {
    this.stdout(globalThis.console.debug, !0, ...t);
  }
  info(...t) {
    this.stdout(globalThis.console.info, !1, ...t);
  }
  infos(...t) {
    this.stdout(globalThis.console.info, !0, ...t);
  }
  log(...t) {
    this.stdout(globalThis.console.log, !1, ...t);
  }
  logs(...t) {
    this.stdout(globalThis.console.log, !0, ...t);
  }
  warn(...t) {
    this.stdout(globalThis.console.warn, !1, ...t);
  }
  warns(...t) {
    this.stdout(globalThis.console.warn, !0, ...t);
  }
  error(...t) {
    this.stdout(globalThis.console.error, !1, ...t);
  }
  errors(...t) {
    this.stdout(globalThis.console.error, !0, ...t);
  }
}
function dl(e, t) {
  return e.endsWith(t) ? e.slice(0, -t.length) : e;
}
var Ur = /* @__PURE__ */ ((e) => (e.Coding = "coding", e.Building = "building", e.Indexing = "indexing", e.Debugging = "debugging", e.Browsing = "browsing", e.RunningTests = "running tests", e.WritingTests = "writing tests", e.ManualTesting = "manual testing", e.WritingDocs = "writing docs", e.CodeReviewing = "code reviewing", e.Researching = "researching", e.Learning = "learning", e.Designing = "designing", e))(Ur || {}), Ca = /* @__PURE__ */ ((e) => (e.App = "app", e.File = "file", e.Domain = "domain", e))(Ca || {});
const fl = {
  wakatime: {
    api_url: "",
    api_key: "",
    timeout: 30,
    hide_branch_names: !0,
    hide_file_names: !0,
    offline: !1,
    includeID: [],
    excludeID: [],
    include: [],
    exclude: [],
    heartbeats: !1,
    project: "",
    language: "",
    hostname: "",
    interval: 60,
    view: {
      category: Ur.Browsing
    },
    edit: {
      category: Ur.Learning
    },
    system_name: "",
    system_version: "unknown",
    system_arch: "unknown",
    useragent: ""
  }
}, fe = {
  OFFLINE_CACHE_PATH: "temp/.wakatime/cache",
  // 缓存文件目录路径
  WAKATIME_DEFAULT_API_URL: "https://wakatime.com/api/v1",
  // 默认 API 地址
  WAKATIME_STATUS_BAR_PATHNAME: "users/current/statusbar/today",
  // 状态栏数据 API 地址
  WAKATIME_HEARTBEATS_PATHNAME: "users/current/heartbeats",
  // 心跳数据 API 路径地址
  WAKATIME_HEARTBEATS_BULK: 25,
  // 每次提交数量限制
  WAKATIME_CLIENT_NAME: "wakatime",
  // 客户端名称
  WAKATIME_CLIENT_VERSION: "1.90.0",
  // 客户端版本
  WAKATIME_EDITOR_NAME: "siyuan",
  // 编辑器名称
  WAKATIME_PLUGIN_NAME: "siyuan-wakatime",
  // 插件名称
  WAKATIME_DEFAULT_LANGUAGE: "Siyuan",
  // 默认语言名称
  WAKATIME_WORKER_FILE_NAME: "wakatime",
  // web worker 文件名
  WAKATIME_WORKER_BROADCAST_CHANNEL_NAME: "wakatime-worker",
  // web worker 广播通道名称
  CACHE_CHECK_INTERVAL: 5 * 60 * 1e3,
  // 缓存检查时间间隔
  CACHE_COMMIT_INTERVAL: 1 * 1e3
  // 缓存每次提交时间间隔
};
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ya;
function b() {
  return Ya.apply(null, arguments);
}
function pl(e) {
  Ya = e;
}
function ae(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ie(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function P(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function es(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (P(e, t))
      return !1;
  return !0;
}
function $(e) {
  return e === void 0;
}
function Te(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function wt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Fa(e, t) {
  var r = [], s, a = e.length;
  for (s = 0; s < a; ++s)
    r.push(t(e[s], s));
  return r;
}
function Ae(e, t) {
  for (var r in t)
    P(t, r) && (e[r] = t[r]);
  return P(t, "toString") && (e.toString = t.toString), P(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function ge(e, t, r, s) {
  return nn(e, t, r, s, !0).utc();
}
function ml() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function T(e) {
  return e._pf == null && (e._pf = ml()), e._pf;
}
var Wr;
Array.prototype.some ? Wr = Array.prototype.some : Wr = function(e) {
  var t = Object(this), r = t.length >>> 0, s;
  for (s = 0; s < r; s++)
    if (s in t && e.call(this, t[s], s, t))
      return !0;
  return !1;
};
function ts(e) {
  var t = null, r = !1, s = e._d && !isNaN(e._d.getTime());
  if (s && (t = T(e), r = Wr.call(t.parsedDateParts, function(a) {
    return a != null;
  }), s = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = s;
  else
    return s;
  return e._isValid;
}
function Xt(e) {
  var t = ge(NaN);
  return e != null ? Ae(T(t), e) : T(t).userInvalidated = !0, t;
}
var ea = b.momentProperties = [], Tr = !1;
function rs(e, t) {
  var r, s, a, n = ea.length;
  if ($(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), $(t._i) || (e._i = t._i), $(t._f) || (e._f = t._f), $(t._l) || (e._l = t._l), $(t._strict) || (e._strict = t._strict), $(t._tzm) || (e._tzm = t._tzm), $(t._isUTC) || (e._isUTC = t._isUTC), $(t._offset) || (e._offset = t._offset), $(t._pf) || (e._pf = T(t)), $(t._locale) || (e._locale = t._locale), n > 0)
    for (r = 0; r < n; r++)
      s = ea[r], a = t[s], $(a) || (e[s] = a);
  return e;
}
function bt(e) {
  rs(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Tr === !1 && (Tr = !0, b.updateOffset(this), Tr = !1);
}
function ne(e) {
  return e instanceof bt || e != null && e._isAMomentObject != null;
}
function La(e) {
  b.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Q(e, t) {
  var r = !0;
  return Ae(function() {
    if (b.deprecationHandler != null && b.deprecationHandler(null, e), r) {
      var s = [], a, n, i, l = arguments.length;
      for (n = 0; n < l; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            P(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        s.push(a);
      }
      La(
        e + `
Arguments: ` + Array.prototype.slice.call(s).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var ta = {};
function Ia(e, t) {
  b.deprecationHandler != null && b.deprecationHandler(e, t), ta[e] || (La(t), ta[e] = !0);
}
b.suppressDeprecationWarnings = !1;
b.deprecationHandler = null;
function ye(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function gl(e) {
  var t, r;
  for (r in e)
    P(e, r) && (t = e[r], ye(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Br(e, t) {
  var r = Ae({}, e), s;
  for (s in t)
    P(t, s) && (Ie(e[s]) && Ie(t[s]) ? (r[s] = {}, Ae(r[s], e[s]), Ae(r[s], t[s])) : t[s] != null ? r[s] = t[s] : delete r[s]);
  for (s in e)
    P(e, s) && !P(t, s) && Ie(e[s]) && (r[s] = Ae({}, r[s]));
  return r;
}
function ss(e) {
  e != null && this.set(e);
}
var jr;
Object.keys ? jr = Object.keys : jr = function(e) {
  var t, r = [];
  for (t in e)
    P(e, t) && r.push(t);
  return r;
};
var yl = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function wl(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return ye(s) ? s.call(t, r) : s;
}
function pe(e, t, r) {
  var s = "" + Math.abs(e), a = t - s.length, n = e >= 0;
  return (n ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + s;
}
var as = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Pt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Dr = {}, Ge = {};
function S(e, t, r, s) {
  var a = s;
  typeof s == "string" && (a = function() {
    return this[s]();
  }), e && (Ge[e] = a), t && (Ge[t[0]] = function() {
    return pe(a.apply(this, arguments), t[1], t[2]);
  }), r && (Ge[r] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function bl(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function kl(e) {
  var t = e.match(as), r, s;
  for (r = 0, s = t.length; r < s; r++)
    Ge[t[r]] ? t[r] = Ge[t[r]] : t[r] = bl(t[r]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < s; i++)
      n += ye(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function It(e, t) {
  return e.isValid() ? (t = Ua(t, e.localeData()), Dr[t] = Dr[t] || kl(t), Dr[t](e)) : e.localeData().invalidDate();
}
function Ua(e, t) {
  var r = 5;
  function s(a) {
    return t.longDateFormat(a) || a;
  }
  for (Pt.lastIndex = 0; r >= 0 && Pt.test(e); )
    e = e.replace(
      Pt,
      s
    ), Pt.lastIndex = 0, r -= 1;
  return e;
}
var _l = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Sl(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(as).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var vl = "Invalid date";
function Ol() {
  return this._invalidDate;
}
var Tl = "%d", Dl = /\d{1,2}/;
function Ml(e) {
  return this._ordinal.replace("%d", e);
}
var El = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function xl(e, t, r, s) {
  var a = this._relativeTime[r];
  return ye(a) ? a(e, t, r, s) : a.replace(/%d/i, e);
}
function Al(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return ye(r) ? r(t) : r.replace(/%s/i, t);
}
var ra = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function ee(e) {
  return typeof e == "string" ? ra[e] || ra[e.toLowerCase()] : void 0;
}
function ns(e) {
  var t = {}, r, s;
  for (s in e)
    P(e, s) && (r = ee(s), r && (t[r] = e[s]));
  return t;
}
var Rl = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function Pl(e) {
  var t = [], r;
  for (r in e)
    P(e, r) && t.push({ unit: r, priority: Rl[r] });
  return t.sort(function(s, a) {
    return s.priority - a.priority;
  }), t;
}
var Wa = /\d/, J = /\d\d/, Ba = /\d{3}/, is = /\d{4}/, Qt = /[+-]?\d{6}/, W = /\d\d?/, ja = /\d\d\d\d?/, Ha = /\d\d\d\d\d\d?/, er = /\d{1,3}/, os = /\d{1,4}/, tr = /[+-]?\d{1,6}/, Xe = /\d+/, rr = /[+-]?\d+/, Nl = /Z|[+-]\d\d:?\d\d/gi, sr = /Z|[+-]\d\d(?::?\d\d)?/gi, Cl = /[+-]?\d+(\.\d{1,3})?/, kt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Qe = /^[1-9]\d?/, ls = /^([1-9]\d|\d)/, jt;
jt = {};
function k(e, t, r) {
  jt[e] = ye(t) ? t : function(s, a) {
    return s && r ? r : t;
  };
}
function Yl(e, t) {
  return P(jt, e) ? jt[e](t._strict, t._locale) : new RegExp(Fl(e));
}
function Fl(e) {
  return ve(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, s, a, n) {
        return r || s || a || n;
      }
    )
  );
}
function ve(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Z(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function E(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = Z(t)), r;
}
var Hr = {};
function L(e, t) {
  var r, s = t, a;
  for (typeof e == "string" && (e = [e]), Te(t) && (s = function(n, i) {
    i[t] = E(n);
  }), a = e.length, r = 0; r < a; r++)
    Hr[e[r]] = s;
}
function _t(e, t) {
  L(e, function(r, s, a, n) {
    a._w = a._w || {}, t(r, a._w, a, n);
  });
}
function Ll(e, t, r) {
  t != null && P(Hr, e) && Hr[e](t, r._a, r, e);
}
function ar(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var V = 0, ke = 1, he = 2, q = 3, se = 4, _e = 5, Le = 6, Il = 7, Ul = 8;
S("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? pe(e, 4) : "+" + e;
});
S(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
S(0, ["YYYY", 4], 0, "year");
S(0, ["YYYYY", 5], 0, "year");
S(0, ["YYYYYY", 6, !0], 0, "year");
k("Y", rr);
k("YY", W, J);
k("YYYY", os, is);
k("YYYYY", tr, Qt);
k("YYYYYY", tr, Qt);
L(["YYYYY", "YYYYYY"], V);
L("YYYY", function(e, t) {
  t[V] = e.length === 2 ? b.parseTwoDigitYear(e) : E(e);
});
L("YY", function(e, t) {
  t[V] = b.parseTwoDigitYear(e);
});
L("Y", function(e, t) {
  t[V] = parseInt(e, 10);
});
function lt(e) {
  return ar(e) ? 366 : 365;
}
b.parseTwoDigitYear = function(e) {
  return E(e) + (E(e) > 68 ? 1900 : 2e3);
};
var qa = et("FullYear", !0);
function Wl() {
  return ar(this.year());
}
function et(e, t) {
  return function(r) {
    return r != null ? (Va(this, e, r), b.updateOffset(this, t), this) : ht(this, e);
  };
}
function ht(e, t) {
  if (!e.isValid())
    return NaN;
  var r = e._d, s = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return s ? r.getUTCMilliseconds() : r.getMilliseconds();
    case "Seconds":
      return s ? r.getUTCSeconds() : r.getSeconds();
    case "Minutes":
      return s ? r.getUTCMinutes() : r.getMinutes();
    case "Hours":
      return s ? r.getUTCHours() : r.getHours();
    case "Date":
      return s ? r.getUTCDate() : r.getDate();
    case "Day":
      return s ? r.getUTCDay() : r.getDay();
    case "Month":
      return s ? r.getUTCMonth() : r.getMonth();
    case "FullYear":
      return s ? r.getUTCFullYear() : r.getFullYear();
    default:
      return NaN;
  }
}
function Va(e, t, r) {
  var s, a, n, i, l;
  if (!(!e.isValid() || isNaN(r))) {
    switch (s = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? s.setUTCMilliseconds(r) : s.setMilliseconds(r));
      case "Seconds":
        return void (a ? s.setUTCSeconds(r) : s.setSeconds(r));
      case "Minutes":
        return void (a ? s.setUTCMinutes(r) : s.setMinutes(r));
      case "Hours":
        return void (a ? s.setUTCHours(r) : s.setHours(r));
      case "Date":
        return void (a ? s.setUTCDate(r) : s.setDate(r));
      case "FullYear":
        break;
      default:
        return;
    }
    n = r, i = e.month(), l = e.date(), l = l === 29 && i === 1 && !ar(n) ? 28 : l, a ? s.setUTCFullYear(n, i, l) : s.setFullYear(n, i, l);
  }
}
function Bl(e) {
  return e = ee(e), ye(this[e]) ? this[e]() : this;
}
function jl(e, t) {
  if (typeof e == "object") {
    e = ns(e);
    var r = Pl(e), s, a = r.length;
    for (s = 0; s < a; s++)
      this[r[s].unit](e[r[s].unit]);
  } else if (e = ee(e), ye(this[e]))
    return this[e](t);
  return this;
}
function Hl(e, t) {
  return (e % t + t) % t;
}
var j;
Array.prototype.indexOf ? j = Array.prototype.indexOf : j = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function us(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Hl(t, 12);
  return e += (t - r) / 12, r === 1 ? ar(e) ? 29 : 28 : 31 - r % 7 % 2;
}
S("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
S("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
S("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
k("M", W, Qe);
k("MM", W, J);
k("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
k("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
L(["M", "MM"], function(e, t) {
  t[ke] = E(e) - 1;
});
L(["MMM", "MMMM"], function(e, t, r, s) {
  var a = r._locale.monthsParse(e, s, r._strict);
  a != null ? t[ke] = a : T(r).invalidMonth = e;
});
var ql = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), za = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ga = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Vl = kt, zl = kt;
function Gl(e, t) {
  return e ? ae(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ga).test(t) ? "format" : "standalone"][e.month()] : ae(this._months) ? this._months : this._months.standalone;
}
function $l(e, t) {
  return e ? ae(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ga.test(t) ? "format" : "standalone"][e.month()] : ae(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Kl(e, t, r) {
  var s, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      n = ge([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(n, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (a = j.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = j.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = j.call(this._shortMonthsParse, i), a !== -1 ? a : (a = j.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = j.call(this._longMonthsParse, i), a !== -1 ? a : (a = j.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function Jl(e, t, r) {
  var s, a, n;
  if (this._monthsParseExact)
    return Kl.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
    if (a = ge([2e3, s]), r && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[s] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[s] && (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[s] = new RegExp(n.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[s].test(e))
      return s;
    if (r && t === "MMM" && this._shortMonthsParse[s].test(e))
      return s;
    if (!r && this._monthsParse[s].test(e))
      return s;
  }
}
function $a(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = E(t);
    else if (t = e.localeData().monthsParse(t), !Te(t))
      return e;
  }
  var r = t, s = e.date();
  return s = s < 29 ? s : Math.min(s, us(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, s) : e._d.setMonth(r, s), e;
}
function Ka(e) {
  return e != null ? ($a(this, e), b.updateOffset(this, !0), this) : ht(this, "Month");
}
function Zl() {
  return us(this.year(), this.month());
}
function Xl(e) {
  return this._monthsParseExact ? (P(this, "_monthsRegex") || Ja.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (P(this, "_monthsShortRegex") || (this._monthsShortRegex = Vl), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Ql(e) {
  return this._monthsParseExact ? (P(this, "_monthsRegex") || Ja.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (P(this, "_monthsRegex") || (this._monthsRegex = zl), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Ja() {
  function e(d, p) {
    return p.length - d.length;
  }
  var t = [], r = [], s = [], a, n, i, l;
  for (a = 0; a < 12; a++)
    n = ge([2e3, a]), i = ve(this.monthsShort(n, "")), l = ve(this.months(n, "")), t.push(i), r.push(l), s.push(l), s.push(i);
  t.sort(e), r.sort(e), s.sort(e), this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function eu(e, t, r, s, a, n, i) {
  var l;
  return e < 100 && e >= 0 ? (l = new Date(e + 400, t, r, s, a, n, i), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, r, s, a, n, i), l;
}
function dt(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ht(e, t, r) {
  var s = 7 + t - r, a = (7 + dt(e, 0, s).getUTCDay() - t) % 7;
  return -a + s - 1;
}
function Za(e, t, r, s, a) {
  var n = (7 + r - s) % 7, i = Ht(e, s, a), l = 1 + 7 * (t - 1) + n + i, d, p;
  return l <= 0 ? (d = e - 1, p = lt(d) + l) : l > lt(e) ? (d = e + 1, p = l - lt(e)) : (d = e, p = l), {
    year: d,
    dayOfYear: p
  };
}
function ft(e, t, r) {
  var s = Ht(e.year(), t, r), a = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + Oe(i, t, r)) : a > Oe(e.year(), t, r) ? (n = a - Oe(e.year(), t, r), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function Oe(e, t, r) {
  var s = Ht(e, t, r), a = Ht(e + 1, t, r);
  return (lt(e) - s + a) / 7;
}
S("w", ["ww", 2], "wo", "week");
S("W", ["WW", 2], "Wo", "isoWeek");
k("w", W, Qe);
k("ww", W, J);
k("W", W, Qe);
k("WW", W, J);
_t(
  ["w", "ww", "W", "WW"],
  function(e, t, r, s) {
    t[s.substr(0, 1)] = E(e);
  }
);
function tu(e) {
  return ft(e, this._week.dow, this._week.doy).week;
}
var ru = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function su() {
  return this._week.dow;
}
function au() {
  return this._week.doy;
}
function nu(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function iu(e) {
  var t = ft(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
S("d", 0, "do", "day");
S("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
S("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
S("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
S("e", 0, 0, "weekday");
S("E", 0, 0, "isoWeekday");
k("d", W);
k("e", W);
k("E", W);
k("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
k("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
k("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
_t(["dd", "ddd", "dddd"], function(e, t, r, s) {
  var a = r._locale.weekdaysParse(e, s, r._strict);
  a != null ? t.d = a : T(r).invalidWeekday = e;
});
_t(["d", "e", "E"], function(e, t, r, s) {
  t[s] = E(e);
});
function ou(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function lu(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function cs(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var uu = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Xa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), cu = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), hu = kt, du = kt, fu = kt;
function pu(e, t) {
  var r = ae(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? cs(r, this._week.dow) : e ? r[e.day()] : r;
}
function mu(e) {
  return e === !0 ? cs(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function gu(e) {
  return e === !0 ? cs(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function yu(e, t, r) {
  var s, a, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
      n = ge([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(n, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (a = j.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = j.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = j.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = j.call(this._weekdaysParse, i), a !== -1 || (a = j.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = j.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = j.call(this._shortWeekdaysParse, i), a !== -1 || (a = j.call(this._weekdaysParse, i), a !== -1) ? a : (a = j.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = j.call(this._minWeekdaysParse, i), a !== -1 || (a = j.call(this._weekdaysParse, i), a !== -1) ? a : (a = j.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function wu(e, t, r) {
  var s, a, n;
  if (this._weekdaysParseExact)
    return yu.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
    if (a = ge([2e3, 1]).day(s), r && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[s] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[s] = new RegExp(n.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[s].test(e))
      return s;
    if (r && t === "ddd" && this._shortWeekdaysParse[s].test(e))
      return s;
    if (r && t === "dd" && this._minWeekdaysParse[s].test(e))
      return s;
    if (!r && this._weekdaysParse[s].test(e))
      return s;
  }
}
function bu(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = ht(this, "Day");
  return e != null ? (e = ou(e, this.localeData()), this.add(e - t, "d")) : t;
}
function ku(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function _u(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = lu(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Su(e) {
  return this._weekdaysParseExact ? (P(this, "_weekdaysRegex") || hs.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (P(this, "_weekdaysRegex") || (this._weekdaysRegex = hu), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function vu(e) {
  return this._weekdaysParseExact ? (P(this, "_weekdaysRegex") || hs.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (P(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = du), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Ou(e) {
  return this._weekdaysParseExact ? (P(this, "_weekdaysRegex") || hs.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (P(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = fu), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function hs() {
  function e(o, _) {
    return _.length - o.length;
  }
  var t = [], r = [], s = [], a = [], n, i, l, d, p;
  for (n = 0; n < 7; n++)
    i = ge([2e3, 1]).day(n), l = ve(this.weekdaysMin(i, "")), d = ve(this.weekdaysShort(i, "")), p = ve(this.weekdays(i, "")), t.push(l), r.push(d), s.push(p), a.push(l), a.push(d), a.push(p);
  t.sort(e), r.sort(e), s.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function ds() {
  return this.hours() % 12 || 12;
}
function Tu() {
  return this.hours() || 24;
}
S("H", ["HH", 2], 0, "hour");
S("h", ["hh", 2], 0, ds);
S("k", ["kk", 2], 0, Tu);
S("hmm", 0, 0, function() {
  return "" + ds.apply(this) + pe(this.minutes(), 2);
});
S("hmmss", 0, 0, function() {
  return "" + ds.apply(this) + pe(this.minutes(), 2) + pe(this.seconds(), 2);
});
S("Hmm", 0, 0, function() {
  return "" + this.hours() + pe(this.minutes(), 2);
});
S("Hmmss", 0, 0, function() {
  return "" + this.hours() + pe(this.minutes(), 2) + pe(this.seconds(), 2);
});
function Qa(e, t) {
  S(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Qa("a", !0);
Qa("A", !1);
function en(e, t) {
  return t._meridiemParse;
}
k("a", en);
k("A", en);
k("H", W, ls);
k("h", W, Qe);
k("k", W, Qe);
k("HH", W, J);
k("hh", W, J);
k("kk", W, J);
k("hmm", ja);
k("hmmss", Ha);
k("Hmm", ja);
k("Hmmss", Ha);
L(["H", "HH"], q);
L(["k", "kk"], function(e, t, r) {
  var s = E(e);
  t[q] = s === 24 ? 0 : s;
});
L(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
L(["h", "hh"], function(e, t, r) {
  t[q] = E(e), T(r).bigHour = !0;
});
L("hmm", function(e, t, r) {
  var s = e.length - 2;
  t[q] = E(e.substr(0, s)), t[se] = E(e.substr(s)), T(r).bigHour = !0;
});
L("hmmss", function(e, t, r) {
  var s = e.length - 4, a = e.length - 2;
  t[q] = E(e.substr(0, s)), t[se] = E(e.substr(s, 2)), t[_e] = E(e.substr(a)), T(r).bigHour = !0;
});
L("Hmm", function(e, t, r) {
  var s = e.length - 2;
  t[q] = E(e.substr(0, s)), t[se] = E(e.substr(s));
});
L("Hmmss", function(e, t, r) {
  var s = e.length - 4, a = e.length - 2;
  t[q] = E(e.substr(0, s)), t[se] = E(e.substr(s, 2)), t[_e] = E(e.substr(a));
});
function Du(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Mu = /[ap]\.?m?\.?/i, Eu = et("Hours", !0);
function xu(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var tn = {
  calendar: yl,
  longDateFormat: _l,
  invalidDate: vl,
  ordinal: Tl,
  dayOfMonthOrdinalParse: Dl,
  relativeTime: El,
  months: ql,
  monthsShort: za,
  week: ru,
  weekdays: uu,
  weekdaysMin: cu,
  weekdaysShort: Xa,
  meridiemParse: Mu
}, B = {}, nt = {}, pt;
function Au(e, t) {
  var r, s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1)
    if (e[r] !== t[r])
      return r;
  return s;
}
function sa(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Ru(e) {
  for (var t = 0, r, s, a, n; t < e.length; ) {
    for (n = sa(e[t]).split("-"), r = n.length, s = sa(e[t + 1]), s = s ? s.split("-") : null; r > 0; ) {
      if (a = nr(n.slice(0, r).join("-")), a)
        return a;
      if (s && s.length >= r && Au(n, s) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return pt;
}
function Pu(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function nr(e) {
  var t = null, r;
  if (B[e] === void 0 && typeof module < "u" && module && module.exports && Pu(e))
    try {
      t = pt._abbr, r = require, r("./locale/" + e), Pe(t);
    } catch {
      B[e] = null;
    }
  return B[e];
}
function Pe(e, t) {
  var r;
  return e && ($(t) ? r = De(e) : r = fs(e, t), r ? pt = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), pt._abbr;
}
function fs(e, t) {
  if (t !== null) {
    var r, s = tn;
    if (t.abbr = e, B[e] != null)
      Ia(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), s = B[e]._config;
    else if (t.parentLocale != null)
      if (B[t.parentLocale] != null)
        s = B[t.parentLocale]._config;
      else if (r = nr(t.parentLocale), r != null)
        s = r._config;
      else
        return nt[t.parentLocale] || (nt[t.parentLocale] = []), nt[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return B[e] = new ss(Br(s, t)), nt[e] && nt[e].forEach(function(a) {
      fs(a.name, a.config);
    }), Pe(e), B[e];
  } else
    return delete B[e], null;
}
function Nu(e, t) {
  if (t != null) {
    var r, s, a = tn;
    B[e] != null && B[e].parentLocale != null ? B[e].set(Br(B[e]._config, t)) : (s = nr(e), s != null && (a = s._config), t = Br(a, t), s == null && (t.abbr = e), r = new ss(t), r.parentLocale = B[e], B[e] = r), Pe(e);
  } else
    B[e] != null && (B[e].parentLocale != null ? (B[e] = B[e].parentLocale, e === Pe() && Pe(e)) : B[e] != null && delete B[e]);
  return B[e];
}
function De(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return pt;
  if (!ae(e)) {
    if (t = nr(e), t)
      return t;
    e = [e];
  }
  return Ru(e);
}
function Cu() {
  return jr(B);
}
function ps(e) {
  var t, r = e._a;
  return r && T(e).overflow === -2 && (t = r[ke] < 0 || r[ke] > 11 ? ke : r[he] < 1 || r[he] > us(r[V], r[ke]) ? he : r[q] < 0 || r[q] > 24 || r[q] === 24 && (r[se] !== 0 || r[_e] !== 0 || r[Le] !== 0) ? q : r[se] < 0 || r[se] > 59 ? se : r[_e] < 0 || r[_e] > 59 ? _e : r[Le] < 0 || r[Le] > 999 ? Le : -1, T(e)._overflowDayOfYear && (t < V || t > he) && (t = he), T(e)._overflowWeeks && t === -1 && (t = Il), T(e)._overflowWeekday && t === -1 && (t = Ul), T(e).overflow = t), e;
}
var Yu = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Fu = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Lu = /Z|[+-]\d\d(?::?\d\d)?/, Nt = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Mr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Iu = /^\/?Date\((-?\d+)/i, Uu = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Wu = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function rn(e) {
  var t, r, s = e._i, a = Yu.exec(s) || Fu.exec(s), n, i, l, d, p = Nt.length, o = Mr.length;
  if (a) {
    for (T(e).iso = !0, t = 0, r = p; t < r; t++)
      if (Nt[t][1].exec(a[1])) {
        i = Nt[t][0], n = Nt[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, r = o; t < r; t++)
        if (Mr[t][1].exec(a[3])) {
          l = (a[2] || " ") + Mr[t][0];
          break;
        }
      if (l == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && l != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (Lu.exec(a[4]))
        d = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (l || "") + (d || ""), gs(e);
  } else
    e._isValid = !1;
}
function Bu(e, t, r, s, a, n) {
  var i = [
    ju(e),
    za.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function ju(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Hu(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function qu(e, t, r) {
  if (e) {
    var s = Xa.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (s !== a)
      return T(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Vu(e, t, r) {
  if (e)
    return Wu[e];
  if (t)
    return 0;
  var s = parseInt(r, 10), a = s % 100, n = (s - a) / 100;
  return n * 60 + a;
}
function sn(e) {
  var t = Uu.exec(Hu(e._i)), r;
  if (t) {
    if (r = Bu(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !qu(t[1], r, e))
      return;
    e._a = r, e._tzm = Vu(t[8], t[9], t[10]), e._d = dt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), T(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function zu(e) {
  var t = Iu.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (rn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (sn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : b.createFromInputFallback(e);
}
b.createFromInputFallback = Q(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function qe(e, t, r) {
  return e ?? t ?? r;
}
function Gu(e) {
  var t = new Date(b.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function ms(e) {
  var t, r, s = [], a, n, i;
  if (!e._d) {
    for (a = Gu(e), e._w && e._a[he] == null && e._a[ke] == null && $u(e), e._dayOfYear != null && (i = qe(e._a[V], a[V]), (e._dayOfYear > lt(i) || e._dayOfYear === 0) && (T(e)._overflowDayOfYear = !0), r = dt(i, 0, e._dayOfYear), e._a[ke] = r.getUTCMonth(), e._a[he] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[q] === 24 && e._a[se] === 0 && e._a[_e] === 0 && e._a[Le] === 0 && (e._nextDay = !0, e._a[q] = 0), e._d = (e._useUTC ? dt : eu).apply(
      null,
      s
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[q] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (T(e).weekdayMismatch = !0);
  }
}
function $u(e) {
  var t, r, s, a, n, i, l, d, p;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, r = qe(
    t.GG,
    e._a[V],
    ft(U(), 1, 4).year
  ), s = qe(t.W, 1), a = qe(t.E, 1), (a < 1 || a > 7) && (d = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, p = ft(U(), n, i), r = qe(t.gg, e._a[V], p.year), s = qe(t.w, p.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (d = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (d = !0)) : a = n), s < 1 || s > Oe(r, n, i) ? T(e)._overflowWeeks = !0 : d != null ? T(e)._overflowWeekday = !0 : (l = Za(r, s, a, n, i), e._a[V] = l.year, e._dayOfYear = l.dayOfYear);
}
b.ISO_8601 = function() {
};
b.RFC_2822 = function() {
};
function gs(e) {
  if (e._f === b.ISO_8601) {
    rn(e);
    return;
  }
  if (e._f === b.RFC_2822) {
    sn(e);
    return;
  }
  e._a = [], T(e).empty = !0;
  var t = "" + e._i, r, s, a, n, i, l = t.length, d = 0, p, o;
  for (a = Ua(e._f, e._locale).match(as) || [], o = a.length, r = 0; r < o; r++)
    n = a[r], s = (t.match(Yl(n, e)) || [])[0], s && (i = t.substr(0, t.indexOf(s)), i.length > 0 && T(e).unusedInput.push(i), t = t.slice(
      t.indexOf(s) + s.length
    ), d += s.length), Ge[n] ? (s ? T(e).empty = !1 : T(e).unusedTokens.push(n), Ll(n, s, e)) : e._strict && !s && T(e).unusedTokens.push(n);
  T(e).charsLeftOver = l - d, t.length > 0 && T(e).unusedInput.push(t), e._a[q] <= 12 && T(e).bigHour === !0 && e._a[q] > 0 && (T(e).bigHour = void 0), T(e).parsedDateParts = e._a.slice(0), T(e).meridiem = e._meridiem, e._a[q] = Ku(
    e._locale,
    e._a[q],
    e._meridiem
  ), p = T(e).era, p !== null && (e._a[V] = e._locale.erasConvertYear(p, e._a[V])), ms(e), ps(e);
}
function Ku(e, t, r) {
  var s;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (s = e.isPM(r), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)), t);
}
function Ju(e) {
  var t, r, s, a, n, i, l = !1, d = e._f.length;
  if (d === 0) {
    T(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < d; a++)
    n = 0, i = !1, t = rs({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], gs(t), ts(t) && (i = !0), n += T(t).charsLeftOver, n += T(t).unusedTokens.length * 10, T(t).score = n, l ? n < s && (s = n, r = t) : (s == null || n < s || i) && (s = n, r = t, i && (l = !0));
  Ae(e, r || t);
}
function Zu(e) {
  if (!e._d) {
    var t = ns(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Fa(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(s) {
        return s && parseInt(s, 10);
      }
    ), ms(e);
  }
}
function Xu(e) {
  var t = new bt(ps(an(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function an(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || De(e._l), t === null || r === void 0 && t === "" ? Xt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ne(t) ? new bt(ps(t)) : (wt(t) ? e._d = t : ae(r) ? Ju(e) : r ? gs(e) : Qu(e), ts(e) || (e._d = null), e));
}
function Qu(e) {
  var t = e._i;
  $(t) ? e._d = new Date(b.now()) : wt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? zu(e) : ae(t) ? (e._a = Fa(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), ms(e)) : Ie(t) ? Zu(e) : Te(t) ? e._d = new Date(t) : b.createFromInputFallback(e);
}
function nn(e, t, r, s, a) {
  var n = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (r === !0 || r === !1) && (s = r, r = void 0), (Ie(e) && es(e) || ae(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = r, n._i = e, n._f = t, n._strict = s, Xu(n);
}
function U(e, t, r, s) {
  return nn(e, t, r, s, !1);
}
var ec = Q(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = U.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Xt();
  }
), tc = Q(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = U.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Xt();
  }
);
function on(e, t) {
  var r, s;
  if (t.length === 1 && ae(t[0]) && (t = t[0]), !t.length)
    return U();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function rc() {
  var e = [].slice.call(arguments, 0);
  return on("isBefore", e);
}
function sc() {
  var e = [].slice.call(arguments, 0);
  return on("isAfter", e);
}
var ac = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, it = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function nc(e) {
  var t, r = !1, s, a = it.length;
  for (t in e)
    if (P(e, t) && !(j.call(it, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < a; ++s)
    if (e[it[s]]) {
      if (r)
        return !1;
      parseFloat(e[it[s]]) !== E(e[it[s]]) && (r = !0);
    }
  return !0;
}
function ic() {
  return this._isValid;
}
function oc() {
  return ie(NaN);
}
function ir(e) {
  var t = ns(e), r = t.year || 0, s = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, l = t.hour || 0, d = t.minute || 0, p = t.second || 0, o = t.millisecond || 0;
  this._isValid = nc(t), this._milliseconds = +o + p * 1e3 + // 1000
  d * 6e4 + // 1000 * 60
  l * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + s * 3 + r * 12, this._data = {}, this._locale = De(), this._bubble();
}
function Ut(e) {
  return e instanceof ir;
}
function qr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function lc(e, t, r) {
  var s = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < s; i++)
    (r && e[i] !== t[i] || !r && E(e[i]) !== E(t[i])) && n++;
  return n + a;
}
function ln(e, t) {
  S(e, 0, 0, function() {
    var r = this.utcOffset(), s = "+";
    return r < 0 && (r = -r, s = "-"), s + pe(~~(r / 60), 2) + t + pe(~~r % 60, 2);
  });
}
ln("Z", ":");
ln("ZZ", "");
k("Z", sr);
k("ZZ", sr);
L(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = ys(sr, e);
});
var uc = /([\+\-]|\d\d)/gi;
function ys(e, t) {
  var r = (t || "").match(e), s, a, n;
  return r === null ? null : (s = r[r.length - 1] || [], a = (s + "").match(uc) || ["-", 0, 0], n = +(a[1] * 60) + E(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function ws(e, t) {
  var r, s;
  return t._isUTC ? (r = t.clone(), s = (ne(e) || wt(e) ? e.valueOf() : U(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + s), b.updateOffset(r, !1), r) : U(e).local();
}
function Vr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
b.updateOffset = function() {
};
function cc(e, t, r) {
  var s = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = ys(sr, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (a = Vr(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), s !== e && (!t || this._changeInProgress ? hn(
      this,
      ie(e - s, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, b.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? s : Vr(this);
}
function hc(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function dc(e) {
  return this.utcOffset(0, e);
}
function fc(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Vr(this), "m")), this;
}
function pc() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = ys(Nl, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function mc(e) {
  return this.isValid() ? (e = e ? U(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function gc() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function yc() {
  if (!$(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return rs(e, this), e = an(e), e._a ? (t = e._isUTC ? ge(e._a) : U(e._a), this._isDSTShifted = this.isValid() && lc(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function wc() {
  return this.isValid() ? !this._isUTC : !1;
}
function bc() {
  return this.isValid() ? this._isUTC : !1;
}
function un() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var kc = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, _c = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ie(e, t) {
  var r = e, s = null, a, n, i;
  return Ut(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Te(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (s = kc.exec(e)) ? (a = s[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: E(s[he]) * a,
    h: E(s[q]) * a,
    m: E(s[se]) * a,
    s: E(s[_e]) * a,
    ms: E(qr(s[Le] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (s = _c.exec(e)) ? (a = s[1] === "-" ? -1 : 1, r = {
    y: Fe(s[2], a),
    M: Fe(s[3], a),
    w: Fe(s[4], a),
    d: Fe(s[5], a),
    h: Fe(s[6], a),
    m: Fe(s[7], a),
    s: Fe(s[8], a)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = Sc(
    U(r.from),
    U(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), n = new ir(r), Ut(e) && P(e, "_locale") && (n._locale = e._locale), Ut(e) && P(e, "_isValid") && (n._isValid = e._isValid), n;
}
ie.fn = ir.prototype;
ie.invalid = oc;
function Fe(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function aa(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function Sc(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = ws(t, e), e.isBefore(t) ? r = aa(e, t) : (r = aa(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function cn(e, t) {
  return function(r, s) {
    var a, n;
    return s !== null && !isNaN(+s) && (Ia(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = r, r = s, s = n), a = ie(r, s), hn(this, a, e), this;
  };
}
function hn(e, t, r, s) {
  var a = t._milliseconds, n = qr(t._days), i = qr(t._months);
  e.isValid() && (s = s ?? !0, i && $a(e, ht(e, "Month") + i * r), n && Va(e, "Date", ht(e, "Date") + n * r), a && e._d.setTime(e._d.valueOf() + a * r), s && b.updateOffset(e, n || i));
}
var vc = cn(1, "add"), Oc = cn(-1, "subtract");
function dn(e) {
  return typeof e == "string" || e instanceof String;
}
function Tc(e) {
  return ne(e) || wt(e) || dn(e) || Te(e) || Mc(e) || Dc(e) || e === null || e === void 0;
}
function Dc(e) {
  var t = Ie(e) && !es(e), r = !1, s = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], a, n, i = s.length;
  for (a = 0; a < i; a += 1)
    n = s[a], r = r || P(e, n);
  return t && r;
}
function Mc(e) {
  var t = ae(e), r = !1;
  return t && (r = e.filter(function(s) {
    return !Te(s) && dn(e);
  }).length === 0), t && r;
}
function Ec(e) {
  var t = Ie(e) && !es(e), r = !1, s = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < s.length; a += 1)
    n = s[a], r = r || P(e, n);
  return t && r;
}
function xc(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function Ac(e, t) {
  arguments.length === 1 && (arguments[0] ? Tc(arguments[0]) ? (e = arguments[0], t = void 0) : Ec(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || U(), s = ws(r, this).startOf("day"), a = b.calendarFormat(this, s) || "sameElse", n = t && (ye(t[a]) ? t[a].call(this, r) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, U(r))
  );
}
function Rc() {
  return new bt(this);
}
function Pc(e, t) {
  var r = ne(e) ? e : U(e);
  return this.isValid() && r.isValid() ? (t = ee(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Nc(e, t) {
  var r = ne(e) ? e : U(e);
  return this.isValid() && r.isValid() ? (t = ee(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Cc(e, t, r, s) {
  var a = ne(e) ? e : U(e), n = ne(t) ? t : U(t);
  return this.isValid() && a.isValid() && n.isValid() ? (s = s || "()", (s[0] === "(" ? this.isAfter(a, r) : !this.isBefore(a, r)) && (s[1] === ")" ? this.isBefore(n, r) : !this.isAfter(n, r))) : !1;
}
function Yc(e, t) {
  var r = ne(e) ? e : U(e), s;
  return this.isValid() && r.isValid() ? (t = ee(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (s = r.valueOf(), this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1;
}
function Fc(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Lc(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Ic(e, t, r) {
  var s, a, n;
  if (!this.isValid())
    return NaN;
  if (s = ws(e, this), !s.isValid())
    return NaN;
  switch (a = (s.utcOffset() - this.utcOffset()) * 6e4, t = ee(t), t) {
    case "year":
      n = Wt(this, s) / 12;
      break;
    case "month":
      n = Wt(this, s);
      break;
    case "quarter":
      n = Wt(this, s) / 3;
      break;
    case "second":
      n = (this - s) / 1e3;
      break;
    case "minute":
      n = (this - s) / 6e4;
      break;
    case "hour":
      n = (this - s) / 36e5;
      break;
    case "day":
      n = (this - s - a) / 864e5;
      break;
    case "week":
      n = (this - s - a) / 6048e5;
      break;
    default:
      n = this - s;
  }
  return r ? n : Z(n);
}
function Wt(e, t) {
  if (e.date() < t.date())
    return -Wt(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(r, "months"), a, n;
  return t - s < 0 ? (a = e.clone().add(r - 1, "months"), n = (t - s) / (s - a)) : (a = e.clone().add(r + 1, "months"), n = (t - s) / (a - s)), -(r + n) || 0;
}
b.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
b.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Uc() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Wc(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? It(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ye(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", It(r, "Z")) : It(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Bc() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, s, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(r + s + a + n);
}
function jc(e) {
  e || (e = this.isUtc() ? b.defaultFormatUtc : b.defaultFormat);
  var t = It(this, e);
  return this.localeData().postformat(t);
}
function Hc(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || U(e).isValid()) ? ie({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function qc(e) {
  return this.from(U(), e);
}
function Vc(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || U(e).isValid()) ? ie({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function zc(e) {
  return this.to(U(), e);
}
function fn(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = De(e), t != null && (this._locale = t), this);
}
var pn = Q(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function mn() {
  return this._locale;
}
var qt = 1e3, $e = 60 * qt, Vt = 60 * $e, gn = (365 * 400 + 97) * 24 * Vt;
function Ke(e, t) {
  return (e % t + t) % t;
}
function yn(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - gn : new Date(e, t, r).valueOf();
}
function wn(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - gn : Date.UTC(e, t, r);
}
function Gc(e) {
  var t, r;
  if (e = ee(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? wn : yn, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Ke(
        t + (this._isUTC ? 0 : this.utcOffset() * $e),
        Vt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ke(t, $e);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ke(t, qt);
      break;
  }
  return this._d.setTime(t), b.updateOffset(this, !0), this;
}
function $c(e) {
  var t, r;
  if (e = ee(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? wn : yn, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Vt - Ke(
        t + (this._isUTC ? 0 : this.utcOffset() * $e),
        Vt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += $e - Ke(t, $e) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += qt - Ke(t, qt) - 1;
      break;
  }
  return this._d.setTime(t), b.updateOffset(this, !0), this;
}
function Kc() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Jc() {
  return Math.floor(this.valueOf() / 1e3);
}
function Zc() {
  return new Date(this.valueOf());
}
function Xc() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Qc() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function eh() {
  return this.isValid() ? this.toISOString() : null;
}
function th() {
  return ts(this);
}
function rh() {
  return Ae({}, T(this));
}
function sh() {
  return T(this).overflow;
}
function ah() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
S("N", 0, 0, "eraAbbr");
S("NN", 0, 0, "eraAbbr");
S("NNN", 0, 0, "eraAbbr");
S("NNNN", 0, 0, "eraName");
S("NNNNN", 0, 0, "eraNarrow");
S("y", ["y", 1], "yo", "eraYear");
S("y", ["yy", 2], 0, "eraYear");
S("y", ["yyy", 3], 0, "eraYear");
S("y", ["yyyy", 4], 0, "eraYear");
k("N", bs);
k("NN", bs);
k("NNN", bs);
k("NNNN", mh);
k("NNNNN", gh);
L(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, s) {
    var a = r._locale.erasParse(e, s, r._strict);
    a ? T(r).era = a : T(r).invalidEra = e;
  }
);
k("y", Xe);
k("yy", Xe);
k("yyy", Xe);
k("yyyy", Xe);
k("yo", yh);
L(["y", "yy", "yyy", "yyyy"], V);
L(["yo"], function(e, t, r, s) {
  var a;
  r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[V] = r._locale.eraYearOrdinalParse(e, a) : t[V] = parseInt(e, 10);
});
function nh(e, t) {
  var r, s, a, n = this._eras || De("en")._eras;
  for (r = 0, s = n.length; r < s; ++r) {
    switch (typeof n[r].since) {
      case "string":
        a = b(n[r].since).startOf("day"), n[r].since = a.valueOf();
        break;
    }
    switch (typeof n[r].until) {
      case "undefined":
        n[r].until = 1 / 0;
        break;
      case "string":
        a = b(n[r].until).startOf("day").valueOf(), n[r].until = a.valueOf();
        break;
    }
  }
  return n;
}
function ih(e, t, r) {
  var s, a, n = this.eras(), i, l, d;
  for (e = e.toUpperCase(), s = 0, a = n.length; s < a; ++s)
    if (i = n[s].name.toUpperCase(), l = n[s].abbr.toUpperCase(), d = n[s].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (l === e)
            return n[s];
          break;
        case "NNNN":
          if (i === e)
            return n[s];
          break;
        case "NNNNN":
          if (d === e)
            return n[s];
          break;
      }
    else if ([i, l, d].indexOf(e) >= 0)
      return n[s];
}
function oh(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? b(e.since).year() : b(e.since).year() + (t - e.offset) * r;
}
function lh() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].name;
  return "";
}
function uh() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].narrow;
  return "";
}
function ch() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].abbr;
  return "";
}
function hh() {
  var e, t, r, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = a[e].since <= a[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return (this.year() - b(a[e].since).year()) * r + a[e].offset;
  return this.year();
}
function dh(e) {
  return P(this, "_erasNameRegex") || ks.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function fh(e) {
  return P(this, "_erasAbbrRegex") || ks.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function ph(e) {
  return P(this, "_erasNarrowRegex") || ks.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function bs(e, t) {
  return t.erasAbbrRegex(e);
}
function mh(e, t) {
  return t.erasNameRegex(e);
}
function gh(e, t) {
  return t.erasNarrowRegex(e);
}
function yh(e, t) {
  return t._eraYearOrdinalRegex || Xe;
}
function ks() {
  var e = [], t = [], r = [], s = [], a, n, i, l, d, p = this.eras();
  for (a = 0, n = p.length; a < n; ++a)
    i = ve(p[a].name), l = ve(p[a].abbr), d = ve(p[a].narrow), t.push(i), e.push(l), r.push(d), s.push(i), s.push(l), s.push(d);
  this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
S(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
S(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function or(e, t) {
  S(0, [e, e.length], 0, t);
}
or("gggg", "weekYear");
or("ggggg", "weekYear");
or("GGGG", "isoWeekYear");
or("GGGGG", "isoWeekYear");
k("G", rr);
k("g", rr);
k("GG", W, J);
k("gg", W, J);
k("GGGG", os, is);
k("gggg", os, is);
k("GGGGG", tr, Qt);
k("ggggg", tr, Qt);
_t(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, s) {
    t[s.substr(0, 2)] = E(e);
  }
);
_t(["gg", "GG"], function(e, t, r, s) {
  t[s] = b.parseTwoDigitYear(e);
});
function wh(e) {
  return bn.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function bh(e) {
  return bn.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function kh() {
  return Oe(this.year(), 1, 4);
}
function _h() {
  return Oe(this.isoWeekYear(), 1, 4);
}
function Sh() {
  var e = this.localeData()._week;
  return Oe(this.year(), e.dow, e.doy);
}
function vh() {
  var e = this.localeData()._week;
  return Oe(this.weekYear(), e.dow, e.doy);
}
function bn(e, t, r, s, a) {
  var n;
  return e == null ? ft(this, s, a).year : (n = Oe(e, s, a), t > n && (t = n), Oh.call(this, e, t, r, s, a));
}
function Oh(e, t, r, s, a) {
  var n = Za(e, t, r, s, a), i = dt(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
S("Q", 0, "Qo", "quarter");
k("Q", Wa);
L("Q", function(e, t) {
  t[ke] = (E(e) - 1) * 3;
});
function Th(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
S("D", ["DD", 2], "Do", "date");
k("D", W, Qe);
k("DD", W, J);
k("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
L(["D", "DD"], he);
L("Do", function(e, t) {
  t[he] = E(e.match(W)[0]);
});
var kn = et("Date", !0);
S("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
k("DDD", er);
k("DDDD", Ba);
L(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = E(e);
});
function Dh(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
S("m", ["mm", 2], 0, "minute");
k("m", W, ls);
k("mm", W, J);
L(["m", "mm"], se);
var Mh = et("Minutes", !1);
S("s", ["ss", 2], 0, "second");
k("s", W, ls);
k("ss", W, J);
L(["s", "ss"], _e);
var Eh = et("Seconds", !1);
S("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
S(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
S(0, ["SSS", 3], 0, "millisecond");
S(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
S(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
S(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
S(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
S(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
S(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
k("S", er, Wa);
k("SS", er, J);
k("SSS", er, Ba);
var Re, _n;
for (Re = "SSSS"; Re.length <= 9; Re += "S")
  k(Re, Xe);
function xh(e, t) {
  t[Le] = E(("0." + e) * 1e3);
}
for (Re = "S"; Re.length <= 9; Re += "S")
  L(Re, xh);
_n = et("Milliseconds", !1);
S("z", 0, 0, "zoneAbbr");
S("zz", 0, 0, "zoneName");
function Ah() {
  return this._isUTC ? "UTC" : "";
}
function Rh() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var y = bt.prototype;
y.add = vc;
y.calendar = Ac;
y.clone = Rc;
y.diff = Ic;
y.endOf = $c;
y.format = jc;
y.from = Hc;
y.fromNow = qc;
y.to = Vc;
y.toNow = zc;
y.get = Bl;
y.invalidAt = sh;
y.isAfter = Pc;
y.isBefore = Nc;
y.isBetween = Cc;
y.isSame = Yc;
y.isSameOrAfter = Fc;
y.isSameOrBefore = Lc;
y.isValid = th;
y.lang = pn;
y.locale = fn;
y.localeData = mn;
y.max = tc;
y.min = ec;
y.parsingFlags = rh;
y.set = jl;
y.startOf = Gc;
y.subtract = Oc;
y.toArray = Xc;
y.toObject = Qc;
y.toDate = Zc;
y.toISOString = Wc;
y.inspect = Bc;
typeof Symbol < "u" && Symbol.for != null && (y[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
y.toJSON = eh;
y.toString = Uc;
y.unix = Jc;
y.valueOf = Kc;
y.creationData = ah;
y.eraName = lh;
y.eraNarrow = uh;
y.eraAbbr = ch;
y.eraYear = hh;
y.year = qa;
y.isLeapYear = Wl;
y.weekYear = wh;
y.isoWeekYear = bh;
y.quarter = y.quarters = Th;
y.month = Ka;
y.daysInMonth = Zl;
y.week = y.weeks = nu;
y.isoWeek = y.isoWeeks = iu;
y.weeksInYear = Sh;
y.weeksInWeekYear = vh;
y.isoWeeksInYear = kh;
y.isoWeeksInISOWeekYear = _h;
y.date = kn;
y.day = y.days = bu;
y.weekday = ku;
y.isoWeekday = _u;
y.dayOfYear = Dh;
y.hour = y.hours = Eu;
y.minute = y.minutes = Mh;
y.second = y.seconds = Eh;
y.millisecond = y.milliseconds = _n;
y.utcOffset = cc;
y.utc = dc;
y.local = fc;
y.parseZone = pc;
y.hasAlignedHourOffset = mc;
y.isDST = gc;
y.isLocal = wc;
y.isUtcOffset = bc;
y.isUtc = un;
y.isUTC = un;
y.zoneAbbr = Ah;
y.zoneName = Rh;
y.dates = Q(
  "dates accessor is deprecated. Use date instead.",
  kn
);
y.months = Q(
  "months accessor is deprecated. Use month instead",
  Ka
);
y.years = Q(
  "years accessor is deprecated. Use year instead",
  qa
);
y.zone = Q(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  hc
);
y.isDSTShifted = Q(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  yc
);
function Ph(e) {
  return U(e * 1e3);
}
function Nh() {
  return U.apply(null, arguments).parseZone();
}
function Sn(e) {
  return e;
}
var N = ss.prototype;
N.calendar = wl;
N.longDateFormat = Sl;
N.invalidDate = Ol;
N.ordinal = Ml;
N.preparse = Sn;
N.postformat = Sn;
N.relativeTime = xl;
N.pastFuture = Al;
N.set = gl;
N.eras = nh;
N.erasParse = ih;
N.erasConvertYear = oh;
N.erasAbbrRegex = fh;
N.erasNameRegex = dh;
N.erasNarrowRegex = ph;
N.months = Gl;
N.monthsShort = $l;
N.monthsParse = Jl;
N.monthsRegex = Ql;
N.monthsShortRegex = Xl;
N.week = tu;
N.firstDayOfYear = au;
N.firstDayOfWeek = su;
N.weekdays = pu;
N.weekdaysMin = gu;
N.weekdaysShort = mu;
N.weekdaysParse = wu;
N.weekdaysRegex = Su;
N.weekdaysShortRegex = vu;
N.weekdaysMinRegex = Ou;
N.isPM = Du;
N.meridiem = xu;
function zt(e, t, r, s) {
  var a = De(), n = ge().set(s, t);
  return a[r](n, e);
}
function vn(e, t, r) {
  if (Te(e) && (t = e, e = void 0), e = e || "", t != null)
    return zt(e, t, r, "month");
  var s, a = [];
  for (s = 0; s < 12; s++)
    a[s] = zt(e, s, r, "month");
  return a;
}
function _s(e, t, r, s) {
  typeof e == "boolean" ? (Te(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, Te(t) && (r = t, t = void 0), t = t || "");
  var a = De(), n = e ? a._week.dow : 0, i, l = [];
  if (r != null)
    return zt(t, (r + n) % 7, s, "day");
  for (i = 0; i < 7; i++)
    l[i] = zt(t, (i + n) % 7, s, "day");
  return l;
}
function Ch(e, t) {
  return vn(e, t, "months");
}
function Yh(e, t) {
  return vn(e, t, "monthsShort");
}
function Fh(e, t, r) {
  return _s(e, t, r, "weekdays");
}
function Lh(e, t, r) {
  return _s(e, t, r, "weekdaysShort");
}
function Ih(e, t, r) {
  return _s(e, t, r, "weekdaysMin");
}
Pe("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, r = E(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
b.lang = Q(
  "moment.lang is deprecated. Use moment.locale instead.",
  Pe
);
b.langData = Q(
  "moment.langData is deprecated. Use moment.localeData instead.",
  De
);
var we = Math.abs;
function Uh() {
  var e = this._data;
  return this._milliseconds = we(this._milliseconds), this._days = we(this._days), this._months = we(this._months), e.milliseconds = we(e.milliseconds), e.seconds = we(e.seconds), e.minutes = we(e.minutes), e.hours = we(e.hours), e.months = we(e.months), e.years = we(e.years), this;
}
function On(e, t, r, s) {
  var a = ie(t, r);
  return e._milliseconds += s * a._milliseconds, e._days += s * a._days, e._months += s * a._months, e._bubble();
}
function Wh(e, t) {
  return On(this, e, t, 1);
}
function Bh(e, t) {
  return On(this, e, t, -1);
}
function na(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function jh() {
  var e = this._milliseconds, t = this._days, r = this._months, s = this._data, a, n, i, l, d;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += na(zr(r) + t) * 864e5, t = 0, r = 0), s.milliseconds = e % 1e3, a = Z(e / 1e3), s.seconds = a % 60, n = Z(a / 60), s.minutes = n % 60, i = Z(n / 60), s.hours = i % 24, t += Z(i / 24), d = Z(Tn(t)), r += d, t -= na(zr(d)), l = Z(r / 12), r %= 12, s.days = t, s.months = r, s.years = l, this;
}
function Tn(e) {
  return e * 4800 / 146097;
}
function zr(e) {
  return e * 146097 / 4800;
}
function Hh(e) {
  if (!this.isValid())
    return NaN;
  var t, r, s = this._milliseconds;
  if (e = ee(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + s / 864e5, r = this._months + Tn(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(zr(this._months)), e) {
      case "week":
        return t / 7 + s / 6048e5;
      case "day":
        return t + s / 864e5;
      case "hour":
        return t * 24 + s / 36e5;
      case "minute":
        return t * 1440 + s / 6e4;
      case "second":
        return t * 86400 + s / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + s;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Me(e) {
  return function() {
    return this.as(e);
  };
}
var Dn = Me("ms"), qh = Me("s"), Vh = Me("m"), zh = Me("h"), Gh = Me("d"), $h = Me("w"), Kh = Me("M"), Jh = Me("Q"), Zh = Me("y"), Xh = Dn;
function Qh() {
  return ie(this);
}
function ed(e) {
  return e = ee(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ue(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var td = Ue("milliseconds"), rd = Ue("seconds"), sd = Ue("minutes"), ad = Ue("hours"), nd = Ue("days"), id = Ue("months"), od = Ue("years");
function ld() {
  return Z(this.days() / 7);
}
var be = Math.round, Ve = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function ud(e, t, r, s, a) {
  return a.relativeTime(t || 1, !!r, e, s);
}
function cd(e, t, r, s) {
  var a = ie(e).abs(), n = be(a.as("s")), i = be(a.as("m")), l = be(a.as("h")), d = be(a.as("d")), p = be(a.as("M")), o = be(a.as("w")), _ = be(a.as("y")), f = n <= r.ss && ["s", n] || n < r.s && ["ss", n] || i <= 1 && ["m"] || i < r.m && ["mm", i] || l <= 1 && ["h"] || l < r.h && ["hh", l] || d <= 1 && ["d"] || d < r.d && ["dd", d];
  return r.w != null && (f = f || o <= 1 && ["w"] || o < r.w && ["ww", o]), f = f || p <= 1 && ["M"] || p < r.M && ["MM", p] || _ <= 1 && ["y"] || ["yy", _], f[2] = t, f[3] = +e > 0, f[4] = s, ud.apply(null, f);
}
function hd(e) {
  return e === void 0 ? be : typeof e == "function" ? (be = e, !0) : !1;
}
function dd(e, t) {
  return Ve[e] === void 0 ? !1 : t === void 0 ? Ve[e] : (Ve[e] = t, e === "s" && (Ve.ss = t - 1), !0);
}
function fd(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, s = Ve, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (s = Object.assign({}, Ve, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), a = this.localeData(), n = cd(this, !r, s, a), r && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var Er = Math.abs;
function je(e) {
  return (e > 0) - (e < 0) || +e;
}
function lr() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Er(this._milliseconds) / 1e3, t = Er(this._days), r = Er(this._months), s, a, n, i, l = this.asSeconds(), d, p, o, _;
  return l ? (s = Z(e / 60), a = Z(s / 60), e %= 60, s %= 60, n = Z(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", d = l < 0 ? "-" : "", p = je(this._months) !== je(l) ? "-" : "", o = je(this._days) !== je(l) ? "-" : "", _ = je(this._milliseconds) !== je(l) ? "-" : "", d + "P" + (n ? p + n + "Y" : "") + (r ? p + r + "M" : "") + (t ? o + t + "D" : "") + (a || s || e ? "T" : "") + (a ? _ + a + "H" : "") + (s ? _ + s + "M" : "") + (e ? _ + i + "S" : "")) : "P0D";
}
var R = ir.prototype;
R.isValid = ic;
R.abs = Uh;
R.add = Wh;
R.subtract = Bh;
R.as = Hh;
R.asMilliseconds = Dn;
R.asSeconds = qh;
R.asMinutes = Vh;
R.asHours = zh;
R.asDays = Gh;
R.asWeeks = $h;
R.asMonths = Kh;
R.asQuarters = Jh;
R.asYears = Zh;
R.valueOf = Xh;
R._bubble = jh;
R.clone = Qh;
R.get = ed;
R.milliseconds = td;
R.seconds = rd;
R.minutes = sd;
R.hours = ad;
R.days = nd;
R.weeks = ld;
R.months = id;
R.years = od;
R.humanize = fd;
R.toISOString = lr;
R.toString = lr;
R.toJSON = lr;
R.locale = fn;
R.localeData = mn;
R.toIsoString = Q(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  lr
);
R.lang = pn;
S("X", 0, 0, "unix");
S("x", 0, 0, "valueOf");
k("x", rr);
k("X", Cl);
L("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
L("x", function(e, t, r) {
  r._d = new Date(E(e));
});
//! moment.js
b.version = "2.30.1";
pl(U);
b.fn = y;
b.min = rc;
b.max = sc;
b.now = ac;
b.utc = ge;
b.unix = Ph;
b.months = Ch;
b.isDate = wt;
b.locale = Pe;
b.invalid = Xt;
b.duration = ie;
b.isMoment = ne;
b.weekdays = Fh;
b.parseZone = Nh;
b.localeData = De;
b.isDuration = Ut;
b.monthsShort = Yh;
b.weekdaysMin = Ih;
b.defineLocale = fs;
b.updateLocale = Nu;
b.locales = Cu;
b.weekdaysShort = Lh;
b.normalizeUnits = ee;
b.relativeTimeRounding = hd;
b.relativeTimeThreshold = dd;
b.calendarFormat = xc;
b.prototype = y;
b.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
function pd(e) {
  return e.split(`
`).filter((t) => t.trim().length > 0).map((t) => JSON.parse(t));
}
function md(e) {
  return e.map((t) => JSON.stringify(t)).join(`
`);
}
const gd = {
  parse: pd,
  stringify: md
};
class mt {
  // 缓存文件文本
  constructor(t, r, s = void 0) {
    ue(this, "filepath");
    // 缓存文件路径
    ue(this, "data", []);
    // 缓存的数据
    ue(this, "lines", []);
    this.client = t, this.directory = r, this.filename = s, this.init(this.filename);
  }
  /**
   * 构造缓存文件名
   * @param date 时间日期
   * @param format 时间日期格式化字符串
   * REF: https://momentjs.com/docs/#/parsing/string-format/
   * @param extension 文件扩展名
   * @returns 文件名
   */
  static buildCacheFileName(t = /* @__PURE__ */ new Date(), r = "YYYY-MM-DD", s = "jsonl") {
    return `${b(t).format(r)}.${s}`;
  }
  /* 初始化 */
  init(t = mt.buildCacheFileName()) {
    this.filename = t, this.filepath = this.buildCacheFilePath(), this.clear();
  }
  /**
   * 构造缓存文件路径
   * @param directory 目录路径
   * @param filename 文件名
   * @returns 文件路径
   */
  buildCacheFilePath(t = this.directory, r = this.filename) {
    return `${t}/${r}`;
  }
  /**
   * 获取所有缓存文件的路径
   * @param directory 缓存文件目录路径
   * @returns 文件路径列表
   */
  async getAllCacheFilePath(t = this.directory) {
    return (await this.client.readDir({ path: t })).data.filter((s) => s.isDir === !1).map((s) => this.buildCacheFilePath(t, s.name));
  }
  /**
   * 获取所有缓存文件的名称
   * @param directory 缓存文件目录路径
   * @returns 文件路径列表
   */
  async getAllCacheFileName(t = this.directory) {
    return (await this.client.readDir({ path: t })).data.filter((s) => s.isDir === !1).map((s) => s.name);
  }
  /**
   * 清空数据
   */
  clear() {
    this.length = 0;
  }
  get length() {
    return this.data.length;
  }
  set length(t) {
    this.data.length = t, this.lines.length = t;
  }
  at(t) {
    return this.data.at(t);
  }
  toString() {
    return this.lines.join(`
`);
  }
  toLocaleString() {
    return this.toString();
  }
  push(...t) {
    return this.data.push(...t), this.lines.push(...t.map((r) => JSON.stringify(r))), this.length;
  }
  pop() {
    return this.lines.pop(), this.data.pop();
  }
  shift() {
    return this.lines.shift(), this.data.shift();
  }
  unshift(...t) {
    return this.data.unshift(...t), this.lines.unshift(...t.map((r) => JSON.stringify(r))), this.length;
  }
  slice(t, r) {
    return this.data.slice(t, r);
  }
  splice(t, r, ...s) {
    return this.data.splice(t, r, ...s);
  }
  forEach(t, r) {
    this.data.forEach(t, r);
  }
  map(t, r) {
    return this.data.map(t, r);
  }
  /**
   * 迭代器, 可用于 for...of 循环
   * REF: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
   */
  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }
  /**
   * 类型标签
   */
  get [Symbol.toStringTag]() {
    return "Cache";
  }
  /**
   * 强制类型转换
   */
  [Symbol.toPrimitive](t) {
    switch (t) {
      case "number":
        return this.length;
      case "string":
        return this.toString();
      default:
        return this.data;
    }
  }
  /**
   * 加载数据
   * @param filepath 文件路径
   * @returns 是否加载成功
   */
  async load(t = this.filepath) {
    if ((await this.client.readDir({ path: this.directory })).data.some((s) => s.name === this.filename && s.isDir === !1)) {
      const s = await this.client.getFile({ path: t }, "text");
      return this.clear(), this.push(...gd.parse(s)), !0;
    }
    return !1;
  }
  /**
   * 移除数据
   * @param filepath 文件路径
   * @returns 是否移除成功
   */
  async remove(t = this.filepath) {
    return (await this.client.readDir({ path: this.directory })).data.some((s) => s.name === this.filename && s.isDir === !1) ? (await this.client.removeFile({ path: t }), !0) : !1;
  }
  /**
   * 缓存持久化 (自动更新缓存文件名)
   * @param update (在需要时) 更新文件名
   * @param filepath 文件路径
   * @returns 缓存是否持久化成功
   */
  async save(t = !0, r = this.filepath) {
    try {
      const s = await this._save(r);
      return t && mt.buildCacheFileName() !== this.filename && this.init(), s;
    } catch {
      return !1;
    }
  }
  /**
   * 保存缓存数据为 jsonlines 文件
   * @param filepath 文件路径
   * @param terminator 行终止符
   * @returns 是否持久化成功
   */
  async _save(t, r = `
`) {
    return this.data.length > 0 ? (await this.client.putFile({
      path: t,
      file: this.lines.join(r)
    }), !0) : !1;
  }
}
async function yd(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const G = fl, wd = new hl(`${self.name}-worker:${fe.WAKATIME_WORKER_FILE_NAME}`), Ne = new tl(
  {
    baseURL: dl(self.location.pathname, `plugins/${self.name}/workers/${fe.WAKATIME_WORKER_FILE_NAME}.js`)
  },
  "fetch"
), Mn = /* @__PURE__ */ new Map(), ut = new mt(Ne, fe.OFFLINE_CACHE_PATH), Ct = [], ze = {
  heartbeat: 0,
  // 心跳定时器
  cacheCheck: 0
  // 缓存检查定时器
}, F = {
  url: "",
  method: "POST",
  headers: {
    Authorization: "",
    "User-Agent": "",
    "X-Machine-Name": ""
  },
  project: "",
  language: "",
  includeID: [],
  excludeID: [],
  include: [],
  exclude: [],
  blocks: /* @__PURE__ */ new Map(),
  roots: /* @__PURE__ */ new Map(),
  actions: new Array()
};
async function bd(e = fe.OFFLINE_CACHE_PATH) {
  return Ne.putFile({
    isDir: !0,
    path: e
  });
}
function kd(e = G.wakatime.interval) {
  clearInterval(ze.heartbeat), ze.heartbeat = setInterval(En, e * 1e3), clearInterval(ze.cacheCheck), ze.cacheCheck = setInterval(vd, fe.CACHE_CHECK_INTERVAL);
}
function _d() {
  F.includeID = Md(), F.excludeID = xd(), F.include = Ed(), F.exclude = Ad();
}
async function Sd() {
  const t = (await Ne.lsNotebooks()).data.notebooks;
  return t.forEach((r) => Mn.set(r.id, r)), t;
}
async function En() {
  const e = Array.from(F.roots.values());
  F.blocks.clear(), F.roots.clear();
  const t = e.filter((a) => {
    const n = `${a.box}${a.path}`;
    return ia(
      n,
      F.includeID,
      F.excludeID
    );
  }), s = (await Td(t)).filter((a) => {
    const n = a.entity;
    return ia(
      n,
      F.include,
      F.exclude
    );
  });
  if (F.actions.push(...s), F.actions.length > 0) {
    const a = F.actions.slice();
    F.actions.length = 0;
    const n = [];
    for (let i = 0; i < a.length; i += fe.WAKATIME_HEARTBEATS_BULK)
      n.push(xn(a.slice(i, i + fe.WAKATIME_HEARTBEATS_BULK)));
    if (G.wakatime.heartbeats)
      for (const i of n)
        await An(
          i,
          (l) => {
            G.wakatime.offline && ut.push(l.payload);
          }
        );
    else
      G.wakatime.offline && ut.push(...n.map((i) => i.payload));
    await ut.save();
  }
}
async function vd() {
  const e = await ut.getAllCacheFileName();
  if (Ct.length = 0, Ct.push(...e.map((t) => new mt(
    Ne,
    fe.OFFLINE_CACHE_PATH,
    t
  ))), Ct.length > 0)
    for (const t of Ct)
      if (G.wakatime.heartbeats) {
        await t.load();
        const r = [];
        for (let s = 0; s < t.length; ++s) {
          const a = t.at(s);
          if (await An(
            xn(a),
            (n) => r.push(n.payload)
          ), s === 0 && r.length > 0)
            return;
          await yd(fe.CACHE_COMMIT_INTERVAL);
        }
        if (r.length > 0) {
          t.clear(), t.push(...r), await t.save();
          return;
        } else
          await t.remove();
      } else
        return;
}
async function Od(e, t, r) {
  var n;
  const s = G.wakatime.hide_branch_names ? e.box : (n = Mn.get(e.box)) == null ? void 0 : n.name, a = G.wakatime.hide_file_names ? `${s}${e.path}` : `${s}${(await Ne.getHPathByPath({
    path: e.path,
    notebook: e.box
  })).data}.sy`;
  return {
    type: Ca.File,
    category: r ? G.wakatime.edit.category : G.wakatime.view.category,
    project: F.project,
    branch: s,
    entity: a,
    language: F.language,
    time: t,
    is_write: r
  };
}
async function Td(e) {
  return Promise.all(e.flatMap((t) => t.events.map((r) => Od(
    t,
    r.time,
    r.is_write
  ))));
}
function xn(e) {
  return {
    url: Array.isArray(e) ? `${F.url}.bulk` : F.url,
    method: F.method,
    headers: [
      F.headers
    ],
    timeout: G.wakatime.timeout * 1e3,
    payload: e
  };
}
async function An(e, t) {
  try {
    const r = await Ne.forwardProxy(e);
    return 200 <= r.data.status && r.data.status < 300 || t(e), r;
  } catch {
    t(e);
  }
}
function ia(e, t, r) {
  if (t.length > 0) {
    let s = !1;
    for (const a of t)
      if (typeof a == "string") {
        if (e.includes(a)) {
          s = !0;
          break;
        }
      } else if (a instanceof RegExp && a.test(e)) {
        s = !0;
        break;
      }
    if (!s)
      return !1;
  }
  if (r.length > 0) {
    let s = !0;
    for (const a of r)
      if (typeof a == "string") {
        if (e.includes(a)) {
          s = !1;
          break;
        }
      } else if (a instanceof RegExp && a.test(e)) {
        s = !1;
        break;
      }
    return s;
  }
  return !0;
}
function Dd(e = /* @__PURE__ */ new Date()) {
  return e.getTime() / 1e3;
}
function Rn() {
  return Dd();
}
function Md() {
  return ur(G.wakatime.includeID);
}
function Ed() {
  return ur(G.wakatime.include);
}
function xd() {
  return ur(G.wakatime.excludeID);
}
function Ad() {
  return ur(G.wakatime.exclude);
}
function ur(e) {
  return e.filter((t) => {
    if (t = t.trim(), t !== "" && t !== "//") {
      if (t.startsWith("/") && t.endsWith("/"))
        try {
          return new RegExp(t.slice(1, -1)), !0;
        } catch (r) {
          return Ne.pushErrMsg({ msg: r }), !1;
        }
      return !0;
    } else
      return !1;
  }).map((t) => t.startsWith("/") && t.endsWith("/") ? new RegExp(t.slice(1, -1)) : t);
}
function Pn(e) {
  var r;
  let t = F.roots.get(e.id);
  if (t) {
    const s = {
      time: e.time,
      is_write: e.is_write
    };
    ((r = t.events.at(-1)) == null ? void 0 : r.is_write) === s.is_write && t.events.pop(), t.events.push(s);
  } else
    t = {
      id: e.id,
      box: e.box,
      path: e.path,
      events: [{
        time: e.time,
        is_write: e.is_write
      }]
    }, F.roots.set(e.id, t);
  return t;
}
async function Rd() {
  await bd(), await ut.load(), await Sd();
}
async function Pd() {
  clearInterval(ze.heartbeat), clearInterval(ze.cacheCheck), await En();
}
function Nd() {
  kd(), _d();
}
function Cd(e, t) {
  Object.assign(G, e), Object.assign(F, t);
}
function Yd(e) {
  const t = Rn();
  F.blocks.set(e.id, e.id), Pn({
    ...e,
    time: t,
    is_write: !1
  });
}
async function Fd(e) {
  try {
    const t = Rn();
    let r = F.blocks.get(e), s = r && F.roots.get(r);
    if (!s) {
      const a = await Ne.getBlockInfo({ id: e });
      r = a.data.rootID, s = {
        id: r,
        box: a.data.box,
        path: a.data.path,
        events: []
      }, F.blocks.set(e, r), F.roots.set(r, s);
    }
    Pn({
      id: s.id,
      box: s.box,
      path: s.path,
      time: t,
      is_write: !0
    });
  } catch (t) {
    if (t instanceof Rr)
      return;
    throw t;
  }
}
const Ld = {
  onload: {
    this: self,
    func: Rd
  },
  unload: {
    this: self,
    func: Pd
  },
  restart: {
    this: self,
    func: Nd
  },
  updateConfig: {
    this: self,
    func: Cd
  },
  addViewEvent: {
    this: self,
    func: Yd
  },
  addEditEvent: {
    this: self,
    func: Fd
  }
}, Id = new BroadcastChannel(fe.WAKATIME_WORKER_BROADCAST_CHANNEL_NAME);
new ol(
  Id,
  wd,
  Ld
);
export {
  Fd as addEditEvent,
  Yd as addViewEvent,
  Rd as onload,
  Nd as restart,
  Pd as unload,
  Cd as updateConfig
};
