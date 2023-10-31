var Yn = Object.defineProperty;
var Fn = (e, t, r) => t in e ? Yn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ae = (e, t, r) => (Fn(e, typeof t != "symbol" ? t + "" : t, r), r);
var Ln = Object.defineProperty, In = (e, t, r) => t in e ? Ln(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, le = (e, t, r) => (In(e, typeof t != "symbol" ? t + "" : t, r), r);
const Un = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Wn = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Bn = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function jn(e, t) {
  if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
    Hn(e);
    return;
  }
  return t;
}
function Hn(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function qn(e, t = {}) {
  if (typeof e != "string")
    return e;
  const r = e.trim();
  if (e[0] === '"' && e[e.length - 1] === '"')
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
  if (!Bn.test(e)) {
    if (t.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (Un.test(e) || Wn.test(e)) {
      if (t.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, jn);
    }
    return JSON.parse(e);
  } catch (s) {
    if (t.strict)
      throw s;
    return e;
  }
}
const Vn = /#/g, $n = /&/g, Gn = /=/g, hr = /\+/g, zn = /%5e/gi, Kn = /%60/gi, Jn = /%7c/gi, Zn = /%20/gi;
function Qn(e) {
  return encodeURI("" + e).replace(Jn, "|");
}
function zt(e) {
  return Qn(typeof e == "string" ? e : JSON.stringify(e)).replace(hr, "%2B").replace(Zn, "+").replace(Vn, "%23").replace($n, "%26").replace(Kn, "`").replace(zn, "^");
}
function It(e) {
  return zt(e).replace(Gn, "%3D");
}
function us(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function Xn(e) {
  return us(e.replace(hr, " "));
}
function ea(e) {
  return us(e.replace(hr, " "));
}
function ta(e = "") {
  const t = {};
  e[0] === "?" && (e = e.slice(1));
  for (const r of e.split("&")) {
    const s = r.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2)
      continue;
    const n = Xn(s[1]);
    if (n === "__proto__" || n === "constructor")
      continue;
    const a = ea(s[2] || "");
    t[n] === void 0 ? t[n] = a : Array.isArray(t[n]) ? t[n].push(a) : t[n] = [t[n], a];
  }
  return t;
}
function ra(e, t) {
  return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map((r) => `${It(e)}=${zt(r)}`).join("&") : `${It(e)}=${zt(t)}` : It(e);
}
function sa(e) {
  return Object.keys(e).filter((t) => e[t] !== void 0).map((t) => ra(t, e[t])).filter(Boolean).join("&");
}
const na = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, aa = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, ia = /^([/\\]\s*){2,}[^/\\]/;
function cs(e, t = {}) {
  return typeof t == "boolean" && (t = { acceptRelative: t }), t.strict ? na.test(e) : aa.test(e) || (t.acceptRelative ? ia.test(e) : !1);
}
const oa = /\/$|\/\?/;
function Kt(e = "", t = !1) {
  return t ? oa.test(e) : e.endsWith("/");
}
function la(e = "", t = !1) {
  if (!t)
    return (Kt(e) ? e.slice(0, -1) : e) || "/";
  if (!Kt(e, !0))
    return e || "/";
  const [r, ...s] = e.split("?");
  return (r.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "");
}
function ua(e = "", t = !1) {
  if (!t)
    return e.endsWith("/") ? e : e + "/";
  if (Kt(e, !0))
    return e || "/";
  const [r, ...s] = e.split("?");
  return r + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
}
function ca(e, t) {
  if (da(t) || cs(e))
    return e;
  const r = la(t);
  return e.startsWith(r) ? e : ma(r, e);
}
function ha(e, t) {
  const r = hs(e), s = { ...ta(r.search), ...t };
  return r.search = sa(s), ya(r);
}
function da(e) {
  return !e || e === "/";
}
function fa(e) {
  return e && e !== "/";
}
const pa = /^\.?\//;
function ma(e, ...t) {
  let r = e || "";
  for (const s of t.filter((n) => fa(n)))
    if (r) {
      const n = s.replace(pa, "");
      r = ua(r) + n;
    } else
      r = s;
  return r;
}
function hs(e = "", t) {
  const r = e.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/
  );
  if (r) {
    const [, w, k = ""] = r;
    return {
      protocol: w,
      pathname: k,
      href: w + k,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!cs(e, { acceptRelative: !0 }))
    return t ? hs(t + e) : Ir(e);
  const [, s = "", n, a = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, i = "", o = ""] = a.match(/([^#/?]*)(.*)?/) || [], { pathname: h, search: u, hash: l } = Ir(
    o.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol: s,
    auth: n ? n.slice(0, Math.max(0, n.length - 1)) : "",
    host: i,
    pathname: h,
    search: u,
    hash: l
  };
}
function Ir(e = "") {
  const [t = "", r = "", s = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: t,
    search: r,
    hash: s
  };
}
function ya(e) {
  const t = e.pathname || "", r = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "", s = e.hash || "", n = e.auth ? e.auth + "@" : "", a = e.host || "";
  return (e.protocol ? e.protocol + "//" : "") + n + a + t + r + s;
}
class ga extends Error {
  constructor(t, r) {
    super(t, r), this.name = "FetchError", r != null && r.cause && !this.cause && (this.cause = r.cause);
  }
}
function wa(e) {
  var t, r, s, n, a;
  const i = ((t = e.error) == null ? void 0 : t.message) || ((r = e.error) == null ? void 0 : r.toString()) || "", o = ((s = e.request) == null ? void 0 : s.method) || ((n = e.options) == null ? void 0 : n.method) || "GET", h = ((a = e.request) == null ? void 0 : a.url) || String(e.request) || "/", u = `[${o}] ${JSON.stringify(h)}`, l = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>", w = `${u}: ${l}${i ? ` ${i}` : ""}`, k = new ga(
    w,
    e.error ? { cause: e.error } : void 0
  );
  for (const p of ["request", "options", "response"])
    Object.defineProperty(k, p, {
      get() {
        return e[p];
      }
    });
  for (const [p, D] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ])
    Object.defineProperty(k, p, {
      get() {
        return e.response && e.response[D];
      }
    });
  return k;
}
const _a = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function Ur(e = "GET") {
  return _a.has(e.toUpperCase());
}
function ba(e) {
  if (e === void 0)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function";
}
const ka = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]), Sa = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function va(e = "") {
  if (!e)
    return "json";
  const t = e.split(";").shift() || "";
  return Sa.test(t) ? "json" : ka.has(t) || t.startsWith("text/") ? "text" : "blob";
}
function Oa(e, t, r = globalThis.Headers) {
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
    for (const [n, a] of new r((e == null ? void 0 : e.headers) || {}))
      s.headers.set(n, a);
  }
  return s;
}
const Ta = /* @__PURE__ */ new Set([
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
]), Da = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function ds(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: r = globalThis.Headers,
    AbortController: s = globalThis.AbortController
  } = e;
  async function n(o) {
    const h = o.error && o.error.name === "AbortError" && !o.options.timeout || !1;
    if (o.options.retry !== !1 && !h) {
      let l;
      typeof o.options.retry == "number" ? l = o.options.retry : l = Ur(o.options.method) ? 0 : 1;
      const w = o.response && o.response.status || 500;
      if (l > 0 && (Array.isArray(o.options.retryStatusCodes) ? o.options.retryStatusCodes.includes(w) : Ta.has(w))) {
        const k = o.options.retryDelay || 0;
        return k > 0 && await new Promise((p) => setTimeout(p, k)), a(o.request, {
          ...o.options,
          retry: l - 1,
          timeout: o.options.timeout
        });
      }
    }
    const u = wa(o);
    throw Error.captureStackTrace && Error.captureStackTrace(u, a), u;
  }
  const a = async function(o, h = {}) {
    var u;
    const l = {
      request: o,
      options: Oa(h, e.defaults, r),
      response: void 0,
      error: void 0
    };
    if (l.options.method = (u = l.options.method) == null ? void 0 : u.toUpperCase(), l.options.onRequest && await l.options.onRequest(l), typeof l.request == "string" && (l.options.baseURL && (l.request = ca(l.request, l.options.baseURL)), (l.options.query || l.options.params) && (l.request = ha(l.request, {
      ...l.options.params,
      ...l.options.query
    }))), l.options.body && Ur(l.options.method) && (ba(l.options.body) ? (l.options.body = typeof l.options.body == "string" ? l.options.body : JSON.stringify(l.options.body), l.options.headers = new r(l.options.headers || {}), l.options.headers.has("content-type") || l.options.headers.set("content-type", "application/json"), l.options.headers.has("accept") || l.options.headers.set("accept", "application/json")) : (
      // ReadableStream Body
      ("pipeTo" in l.options.body && typeof l.options.body.pipeTo == "function" || // Node.js Stream Body
      typeof l.options.body.pipe == "function") && ("duplex" in l.options || (l.options.duplex = "half"))
    )), !l.options.signal && l.options.timeout) {
      const w = new s();
      setTimeout(() => w.abort(), l.options.timeout), l.options.signal = w.signal;
    }
    try {
      l.response = await t(
        l.request,
        l.options
      );
    } catch (w) {
      return l.error = w, l.options.onRequestError && await l.options.onRequestError(l), await n(l);
    }
    if (l.response.body && !Da.has(l.response.status) && l.options.method !== "HEAD") {
      const w = (l.options.parseResponse ? "json" : l.options.responseType) || va(l.response.headers.get("content-type") || "");
      switch (w) {
        case "json": {
          const k = await l.response.text(), p = l.options.parseResponse || qn;
          l.response._data = p(k);
          break;
        }
        case "stream": {
          l.response._data = l.response.body;
          break;
        }
        default:
          l.response._data = await l.response[w]();
      }
    }
    return l.options.onResponse && await l.options.onResponse(l), !l.options.ignoreResponseError && l.response.status >= 400 && l.response.status < 600 ? (l.options.onResponseError && await l.options.onResponseError(l), await n(l)) : l.response;
  }, i = async function(o, h) {
    return (await a(o, h))._data;
  };
  return i.raw = a, i.native = (...o) => t(...o), i.create = (o = {}) => ds({
    ...e,
    defaults: {
      ...e.defaults,
      ...o
    }
  }), i;
}
const dr = function() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}(), Ma = dr.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))), Ea = dr.Headers, Aa = dr.AbortController, Ra = ds({ fetch: Ma, Headers: Ea, AbortController: Aa });
class xa extends Error {
  constructor(t) {
    super(t.statusText), le(this, "status"), this.response = t, this.status = t.status;
  }
}
class Jt extends Error {
  constructor(t, r) {
    super(t.msg), le(this, "code"), this.body = t, this.response = r, this.code = t.code;
  }
}
function Z(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
function Wr(e, t) {
  for (var r = "", s = 0, n = -1, a = 0, i, o = 0; o <= e.length; ++o) {
    if (o < e.length)
      i = e.charCodeAt(o);
    else {
      if (i === 47)
        break;
      i = 47;
    }
    if (i === 47) {
      if (!(n === o - 1 || a === 1))
        if (n !== o - 1 && a === 2) {
          if (r.length < 2 || s !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
            if (r.length > 2) {
              var h = r.lastIndexOf("/");
              if (h !== r.length - 1) {
                h === -1 ? (r = "", s = 0) : (r = r.slice(0, h), s = r.length - 1 - r.lastIndexOf("/")), n = o, a = 0;
                continue;
              }
            } else if (r.length === 2 || r.length === 1) {
              r = "", s = 0, n = o, a = 0;
              continue;
            }
          }
          t && (r.length > 0 ? r += "/.." : r = "..", s = 2);
        } else
          r.length > 0 ? r += "/" + e.slice(n + 1, o) : r = e.slice(n + 1, o), s = o - n - 1;
      n = o, a = 0;
    } else
      i === 46 && a !== -1 ? ++a : a = -1;
  }
  return r;
}
function Pa(e, t) {
  var r = t.dir || t.root, s = t.base || (t.name || "") + (t.ext || "");
  return r ? r === t.root ? r + s : r + e + s : s;
}
var Be = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", t = !1, r, s = arguments.length - 1; s >= -1 && !t; s--) {
      var n;
      s >= 0 ? n = arguments[s] : (r === void 0 && (r = process.cwd()), n = r), Z(n), n.length !== 0 && (e = n + "/" + e, t = n.charCodeAt(0) === 47);
    }
    return e = Wr(e, !t), t ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  },
  normalize: function(e) {
    if (Z(e), e.length === 0)
      return ".";
    var t = e.charCodeAt(0) === 47, r = e.charCodeAt(e.length - 1) === 47;
    return e = Wr(e, !t), e.length === 0 && !t && (e = "."), e.length > 0 && r && (e += "/"), t ? "/" + e : e;
  },
  isAbsolute: function(e) {
    return Z(e), e.length > 0 && e.charCodeAt(0) === 47;
  },
  join: function() {
    if (arguments.length === 0)
      return ".";
    for (var e, t = 0; t < arguments.length; ++t) {
      var r = arguments[t];
      Z(r), r.length > 0 && (e === void 0 ? e = r : e += "/" + r);
    }
    return e === void 0 ? "." : Be.normalize(e);
  },
  relative: function(e, t) {
    if (Z(e), Z(t), e === t || (e = Be.resolve(e), t = Be.resolve(t), e === t))
      return "";
    for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r)
      ;
    for (var s = e.length, n = s - r, a = 1; a < t.length && t.charCodeAt(a) === 47; ++a)
      ;
    for (var i = t.length, o = i - a, h = n < o ? n : o, u = -1, l = 0; l <= h; ++l) {
      if (l === h) {
        if (o > h) {
          if (t.charCodeAt(a + l) === 47)
            return t.slice(a + l + 1);
          if (l === 0)
            return t.slice(a + l);
        } else
          n > h && (e.charCodeAt(r + l) === 47 ? u = l : l === 0 && (u = 0));
        break;
      }
      var w = e.charCodeAt(r + l), k = t.charCodeAt(a + l);
      if (w !== k)
        break;
      w === 47 && (u = l);
    }
    var p = "";
    for (l = r + u + 1; l <= s; ++l)
      (l === s || e.charCodeAt(l) === 47) && (p.length === 0 ? p += ".." : p += "/..");
    return p.length > 0 ? p + t.slice(a + u) : (a += u, t.charCodeAt(a) === 47 && ++a, t.slice(a));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (Z(e), e.length === 0)
      return ".";
    for (var t = e.charCodeAt(0), r = t === 47, s = -1, n = !0, a = e.length - 1; a >= 1; --a)
      if (t = e.charCodeAt(a), t === 47) {
        if (!n) {
          s = a;
          break;
        }
      } else
        n = !1;
    return s === -1 ? r ? "/" : "." : r && s === 1 ? "//" : e.slice(0, s);
  },
  basename: function(e, t) {
    if (t !== void 0 && typeof t != "string")
      throw new TypeError('"ext" argument must be a string');
    Z(e);
    var r = 0, s = -1, n = !0, a;
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e)
        return "";
      var i = t.length - 1, o = -1;
      for (a = e.length - 1; a >= 0; --a) {
        var h = e.charCodeAt(a);
        if (h === 47) {
          if (!n) {
            r = a + 1;
            break;
          }
        } else
          o === -1 && (n = !1, o = a + 1), i >= 0 && (h === t.charCodeAt(i) ? --i === -1 && (s = a) : (i = -1, s = o));
      }
      return r === s ? s = o : s === -1 && (s = e.length), e.slice(r, s);
    } else {
      for (a = e.length - 1; a >= 0; --a)
        if (e.charCodeAt(a) === 47) {
          if (!n) {
            r = a + 1;
            break;
          }
        } else
          s === -1 && (n = !1, s = a + 1);
      return s === -1 ? "" : e.slice(r, s);
    }
  },
  extname: function(e) {
    Z(e);
    for (var t = -1, r = 0, s = -1, n = !0, a = 0, i = e.length - 1; i >= 0; --i) {
      var o = e.charCodeAt(i);
      if (o === 47) {
        if (!n) {
          r = i + 1;
          break;
        }
        continue;
      }
      s === -1 && (n = !1, s = i + 1), o === 46 ? t === -1 ? t = i : a !== 1 && (a = 1) : t !== -1 && (a = -1);
    }
    return t === -1 || s === -1 || // We saw a non-dot character immediately before the dot
    a === 0 || // The (right-most) trimmed path component is exactly '..'
    a === 1 && t === s - 1 && t === r + 1 ? "" : e.slice(t, s);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return Pa("/", e);
  },
  parse: function(e) {
    Z(e);
    var t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    var r = e.charCodeAt(0), s = r === 47, n;
    s ? (t.root = "/", n = 1) : n = 0;
    for (var a = -1, i = 0, o = -1, h = !0, u = e.length - 1, l = 0; u >= n; --u) {
      if (r = e.charCodeAt(u), r === 47) {
        if (!h) {
          i = u + 1;
          break;
        }
        continue;
      }
      o === -1 && (h = !1, o = u + 1), r === 46 ? a === -1 ? a = u : l !== 1 && (l = 1) : a !== -1 && (l = -1);
    }
    return a === -1 || o === -1 || // We saw a non-dot character immediately before the dot
    l === 0 || // The (right-most) trimmed path component is exactly '..'
    l === 1 && a === o - 1 && a === i + 1 ? o !== -1 && (i === 0 && s ? t.base = t.name = e.slice(1, o) : t.base = t.name = e.slice(i, o)) : (i === 0 && s ? (t.name = e.slice(1, a), t.base = e.slice(1, o)) : (t.name = e.slice(i, a), t.base = e.slice(i, o)), t.ext = e.slice(a, o)), i > 0 ? t.dir = e.slice(0, i - 1) : s && (t.dir = "/"), t;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
Be.posix = Be;
function fs(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Na } = Object.prototype, { getPrototypeOf: fr } = Object, _t = ((e) => (t) => {
  const r = Na.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), re = (e) => (e = e.toLowerCase(), (t) => _t(t) === e), bt = (e) => (t) => typeof t === e, { isArray: Ye } = Array, Ve = bt("undefined");
function Ca(e) {
  return e !== null && !Ve(e) && e.constructor !== null && !Ve(e.constructor) && q(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ps = re("ArrayBuffer");
function Ya(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ps(e.buffer), t;
}
const Fa = bt("string"), q = bt("function"), ms = bt("number"), kt = (e) => e !== null && typeof e == "object", La = (e) => e === !0 || e === !1, it = (e) => {
  if (_t(e) !== "object")
    return !1;
  const t = fr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ia = re("Date"), Ua = re("File"), Wa = re("Blob"), Ba = re("FileList"), ja = (e) => kt(e) && q(e.pipe), Ha = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || q(e.append) && ((t = _t(e)) === "formdata" || // detect form-data instance
  t === "object" && q(e.toString) && e.toString() === "[object FormData]"));
}, qa = re("URLSearchParams"), Va = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Je(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, n;
  if (typeof e != "object" && (e = [e]), Ye(e))
    for (s = 0, n = e.length; s < n; s++)
      t.call(null, e[s], s, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let o;
    for (s = 0; s < i; s++)
      o = a[s], t.call(null, e[o], o, e);
  }
}
function ys(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let s = r.length, n;
  for (; s-- > 0; )
    if (n = r[s], t === n.toLowerCase())
      return n;
  return null;
}
const gs = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), ws = (e) => !Ve(e) && e !== gs;
function Zt() {
  const { caseless: e } = ws(this) && this || {}, t = {}, r = (s, n) => {
    const a = e && ys(t, n) || n;
    it(t[a]) && it(s) ? t[a] = Zt(t[a], s) : it(s) ? t[a] = Zt({}, s) : Ye(s) ? t[a] = s.slice() : t[a] = s;
  };
  for (let s = 0, n = arguments.length; s < n; s++)
    arguments[s] && Je(arguments[s], r);
  return t;
}
const $a = (e, t, r, { allOwnKeys: s } = {}) => (Je(t, (n, a) => {
  r && q(n) ? e[a] = fs(n, r) : e[a] = n;
}, { allOwnKeys: s }), e), Ga = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), za = (e, t, r, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Ka = (e, t, r, s) => {
  let n, a, i;
  const o = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (n = Object.getOwnPropertyNames(e), a = n.length; a-- > 0; )
      i = n[a], (!s || s(i, e, t)) && !o[i] && (t[i] = e[i], o[i] = !0);
    e = r !== !1 && fr(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Ja = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const s = e.indexOf(t, r);
  return s !== -1 && s === r;
}, Za = (e) => {
  if (!e)
    return null;
  if (Ye(e))
    return e;
  let t = e.length;
  if (!ms(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Qa = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && fr(Uint8Array)), Xa = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const n = s.value;
    t.call(e, n[0], n[1]);
  }
}, ei = (e, t) => {
  let r;
  const s = [];
  for (; (r = e.exec(t)) !== null; )
    s.push(r);
  return s;
}, ti = re("HTMLFormElement"), ri = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, s) {
    return r.toUpperCase() + s;
  }
), Br = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), si = re("RegExp"), _s = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), s = {};
  Je(r, (n, a) => {
    let i;
    (i = t(n, a, e)) !== !1 && (s[a] = i || n);
  }), Object.defineProperties(e, s);
}, ni = (e) => {
  _s(e, (t, r) => {
    if (q(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const s = e[r];
    if (q(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, ai = (e, t) => {
  const r = {}, s = (n) => {
    n.forEach((a) => {
      r[a] = !0;
    });
  };
  return Ye(e) ? s(e) : s(String(e).split(t)), r;
}, ii = () => {
}, oi = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ut = "abcdefghijklmnopqrstuvwxyz", jr = "0123456789", bs = {
  DIGIT: jr,
  ALPHA: Ut,
  ALPHA_DIGIT: Ut + Ut.toUpperCase() + jr
}, li = (e = 16, t = bs.ALPHA_DIGIT) => {
  let r = "";
  const { length: s } = t;
  for (; e--; )
    r += t[Math.random() * s | 0];
  return r;
};
function ui(e) {
  return !!(e && q(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ci = (e) => {
  const t = new Array(10), r = (s, n) => {
    if (kt(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[n] = s;
        const a = Ye(s) ? [] : {};
        return Je(s, (i, o) => {
          const h = r(i, n + 1);
          !Ve(h) && (a[o] = h);
        }), t[n] = void 0, a;
      }
    }
    return s;
  };
  return r(e, 0);
}, hi = re("AsyncFunction"), di = (e) => e && (kt(e) || q(e)) && q(e.then) && q(e.catch), d = {
  isArray: Ye,
  isArrayBuffer: ps,
  isBuffer: Ca,
  isFormData: Ha,
  isArrayBufferView: Ya,
  isString: Fa,
  isNumber: ms,
  isBoolean: La,
  isObject: kt,
  isPlainObject: it,
  isUndefined: Ve,
  isDate: Ia,
  isFile: Ua,
  isBlob: Wa,
  isRegExp: si,
  isFunction: q,
  isStream: ja,
  isURLSearchParams: qa,
  isTypedArray: Qa,
  isFileList: Ba,
  forEach: Je,
  merge: Zt,
  extend: $a,
  trim: Va,
  stripBOM: Ga,
  inherits: za,
  toFlatObject: Ka,
  kindOf: _t,
  kindOfTest: re,
  endsWith: Ja,
  toArray: Za,
  forEachEntry: Xa,
  matchAll: ei,
  isHTMLForm: ti,
  hasOwnProperty: Br,
  hasOwnProp: Br,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _s,
  freezeMethods: ni,
  toObjectSet: ai,
  toCamelCase: ri,
  noop: ii,
  toFiniteNumber: oi,
  findKey: ys,
  global: gs,
  isContextDefined: ws,
  ALPHABET: bs,
  generateString: li,
  isSpecCompliantForm: ui,
  toJSONObject: ci,
  isAsyncFn: hi,
  isThenable: di
};
function S(e, t, r, s, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), n && (this.response = n);
}
d.inherits(S, Error, {
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
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ks = S.prototype, Ss = {};
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
  Ss[e] = { value: e };
});
Object.defineProperties(S, Ss);
Object.defineProperty(ks, "isAxiosError", { value: !0 });
S.from = (e, t, r, s, n, a) => {
  const i = Object.create(ks);
  return d.toFlatObject(e, i, function(o) {
    return o !== Error.prototype;
  }, (o) => o !== "isAxiosError"), S.call(i, e.message, t, r, s, n), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
const fi = null;
function Qt(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function vs(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Hr(e, t, r) {
  return e ? e.concat(t).map(function(s, n) {
    return s = vs(s), !r && n ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function pi(e) {
  return d.isArray(e) && !e.some(Qt);
}
const mi = d.toFlatObject(d, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function St(e, t, r) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = d.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, D) {
    return !d.isUndefined(D[p]);
  });
  const s = r.metaTokens, n = r.visitor || u, a = r.dots, i = r.indexes, o = (r.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(n))
    throw new TypeError("visitor must be a function");
  function h(p) {
    if (p === null)
      return "";
    if (d.isDate(p))
      return p.toISOString();
    if (!o && d.isBlob(p))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(p) || d.isTypedArray(p) ? o && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, D, W) {
    let ye = p;
    if (p && !W && typeof p == "object") {
      if (d.endsWith(D, "{}"))
        D = s ? D : D.slice(0, -2), p = JSON.stringify(p);
      else if (d.isArray(p) && pi(p) || (d.isFileList(p) || d.endsWith(D, "[]")) && (ye = d.toArray(p)))
        return D = vs(D), ye.forEach(function(Lt, Cn) {
          !(d.isUndefined(Lt) || Lt === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Hr([D], Cn, a) : i === null ? D : D + "[]",
            h(Lt)
          );
        }), !1;
    }
    return Qt(p) ? !0 : (t.append(Hr(W, D, a), h(p)), !1);
  }
  const l = [], w = Object.assign(mi, {
    defaultVisitor: u,
    convertValue: h,
    isVisitable: Qt
  });
  function k(p, D) {
    if (!d.isUndefined(p)) {
      if (l.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + D.join("."));
      l.push(p), d.forEach(p, function(W, ye) {
        (!(d.isUndefined(W) || W === null) && n.call(
          t,
          W,
          d.isString(ye) ? ye.trim() : ye,
          D,
          w
        )) === !0 && k(W, D ? D.concat(ye) : [ye]);
      }), l.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return k(e), t;
}
function qr(e) {
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
function pr(e, t) {
  this._pairs = [], e && St(e, this, t);
}
const Os = pr.prototype;
Os.append = function(e, t) {
  this._pairs.push([e, t]);
};
Os.toString = function(e) {
  const t = e ? function(r) {
    return e.call(this, r, qr);
  } : qr;
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
function yi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ts(e, t, r) {
  if (!t)
    return e;
  const s = r && r.encode || yi, n = r && r.serialize;
  let a;
  if (n ? a = n(t, r) : a = d.isURLSearchParams(t) ? t.toString() : new pr(t, r).toString(s), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class gi {
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
    d.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Vr = gi, Ds = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, wi = typeof URLSearchParams < "u" ? URLSearchParams : pr, _i = typeof FormData < "u" ? FormData : null, bi = typeof Blob < "u" ? Blob : null, ki = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Si = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), X = {
  isBrowser: !0,
  classes: {
    URLSearchParams: wi,
    FormData: _i,
    Blob: bi
  },
  isStandardBrowserEnv: ki,
  isStandardBrowserWebWorkerEnv: Si,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function vi(e, t) {
  return St(e, new X.classes.URLSearchParams(), Object.assign({
    visitor: function(r, s, n, a) {
      return X.isNode && d.isBuffer(r) ? (this.append(s, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Oi(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ti(e) {
  const t = {}, r = Object.keys(e);
  let s;
  const n = r.length;
  let a;
  for (s = 0; s < n; s++)
    a = r[s], t[a] = e[a];
  return t;
}
function Ms(e) {
  function t(r, s, n, a) {
    let i = r[a++];
    const o = Number.isFinite(+i), h = a >= r.length;
    return i = !i && d.isArray(n) ? n.length : i, h ? (d.hasOwnProp(n, i) ? n[i] = [n[i], s] : n[i] = s, !o) : ((!n[i] || !d.isObject(n[i])) && (n[i] = []), t(r, s, n[i], a) && d.isArray(n[i]) && (n[i] = Ti(n[i])), !o);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const r = {};
    return d.forEachEntry(e, (s, n) => {
      t(Oi(s), n, r, 0);
    }), r;
  }
  return null;
}
function Di(e, t, r) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
const mr = {
  transitional: Ds,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, t) {
    const r = t.getContentType() || "", s = r.indexOf("application/json") > -1, n = d.isObject(e);
    if (n && d.isHTMLForm(e) && (e = new FormData(e)), d.isFormData(e))
      return s && s ? JSON.stringify(Ms(e)) : e;
    if (d.isArrayBuffer(e) || d.isBuffer(e) || d.isStream(e) || d.isFile(e) || d.isBlob(e))
      return e;
    if (d.isArrayBufferView(e))
      return e.buffer;
    if (d.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (n) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return vi(e, this.formSerializer).toString();
      if ((a = d.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const i = this.env && this.env.FormData;
        return St(
          a ? { "files[]": e } : e,
          i && new i(),
          this.formSerializer
        );
      }
    }
    return n || s ? (t.setContentType("application/json", !1), Di(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || mr.transitional, r = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (e && d.isString(e) && (r && !this.responseType || s)) {
      const n = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (n)
          throw a.name === "SyntaxError" ? S.from(a, S.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: X.classes.FormData,
    Blob: X.classes.Blob
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
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  mr.headers[e] = {};
});
const yr = mr, Mi = d.toObjectSet([
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
]), Ei = (e) => {
  const t = {};
  let r, s, n;
  return e && e.split(`
`).forEach(function(a) {
    n = a.indexOf(":"), r = a.substring(0, n).trim().toLowerCase(), s = a.substring(n + 1).trim(), !(!r || t[r] && Mi[r]) && (r === "set-cookie" ? t[r] ? t[r].push(s) : t[r] = [s] : t[r] = t[r] ? t[r] + ", " + s : s);
  }), t;
}, $r = Symbol("internals");
function Ie(e) {
  return e && String(e).trim().toLowerCase();
}
function ot(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(ot) : String(e);
}
function Ai(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = r.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const Ri = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Wt(e, t, r, s, n) {
  if (d.isFunction(s))
    return s.call(this, t, r);
  if (n && (t = r), !!d.isString(t)) {
    if (d.isString(s))
      return t.indexOf(s) !== -1;
    if (d.isRegExp(s))
      return s.test(t);
  }
}
function xi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, s) => r.toUpperCase() + s);
}
function Pi(e, t) {
  const r = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + r, {
      value: function(n, a, i) {
        return this[s].call(this, t, n, a, i);
      },
      configurable: !0
    });
  });
}
let vt = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    const s = this;
    function n(i, o, h) {
      const u = Ie(o);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const l = d.findKey(s, u);
      (!l || s[l] === void 0 || h === !0 || h === void 0 && s[l] !== !1) && (s[l || o] = ot(i));
    }
    const a = (i, o) => d.forEach(i, (h, u) => n(h, u, o));
    return d.isPlainObject(e) || e instanceof this.constructor ? a(e, t) : d.isString(e) && (e = e.trim()) && !Ri(e) ? a(Ei(e), t) : e != null && n(t, e, r), this;
  }
  get(e, t) {
    if (e = Ie(e), e) {
      const r = d.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!t)
          return s;
        if (t === !0)
          return Ai(s);
        if (d.isFunction(t))
          return t.call(this, s, r);
        if (d.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = Ie(e), e) {
      const r = d.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || Wt(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    const r = this;
    let s = !1;
    function n(a) {
      if (a = Ie(a), a) {
        const i = d.findKey(r, a);
        i && (!t || Wt(r, r[i], i, t)) && (delete r[i], s = !0);
      }
    }
    return d.isArray(e) ? e.forEach(n) : n(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let r = t.length, s = !1;
    for (; r--; ) {
      const n = t[r];
      (!e || Wt(this, this[n], n, e, !0)) && (delete this[n], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, r = {};
    return d.forEach(this, (s, n) => {
      const a = d.findKey(r, n);
      if (a) {
        t[a] = ot(s), delete t[n];
        return;
      }
      const i = e ? xi(n) : String(n).trim();
      i !== n && delete t[n], t[i] = ot(s), r[i] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (r, s) => {
      r != null && r !== !1 && (t[s] = e && d.isArray(r) ? r.join(", ") : r);
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
    const t = (this[$r] = this[$r] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function s(n) {
      const a = Ie(n);
      t[a] || (Pi(r, n), t[a] = !0);
    }
    return d.isArray(e) ? e.forEach(s) : s(e), this;
  }
};
vt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(vt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[r] = s;
    }
  };
});
d.freezeMethods(vt);
const he = vt;
function Bt(e, t) {
  const r = this || yr, s = t || r, n = he.from(s.headers);
  let a = s.data;
  return d.forEach(e, function(i) {
    a = i.call(r, a, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), a;
}
function Es(e) {
  return !!(e && e.__CANCEL__);
}
function Ze(e, t, r) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, t, r), this.name = "CanceledError";
}
d.inherits(Ze, S, {
  __CANCEL__: !0
});
function Ni(e, t, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status) ? e(r) : t(new S(
    "Request failed with status code " + r.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Ci = X.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(e, t, r, s, n, a) {
        const i = [];
        i.push(e + "=" + encodeURIComponent(t)), d.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), d.isString(s) && i.push("path=" + s), d.isString(n) && i.push("domain=" + n), a === !0 && i.push("secure"), document.cookie = i.join("; ");
      },
      read: function(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove: function(e) {
        this.write(e, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Yi(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Fi(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function As(e, t) {
  return e && !Yi(t) ? Fi(e, t) : t;
}
const Li = X.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
    let r;
    function s(n) {
      let a = n;
      return e && (t.setAttribute("href", a), a = t.href), t.setAttribute("href", a), {
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
    return r = s(window.location.href), function(n) {
      const a = d.isString(n) ? s(n) : n;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Ii(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ui(e, t) {
  e = e || 10;
  const r = new Array(e), s = new Array(e);
  let n = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(o) {
    const h = Date.now(), u = s[a];
    i || (i = h), r[n] = o, s[n] = h;
    let l = a, w = 0;
    for (; l !== n; )
      w += r[l++], l = l % e;
    if (n = (n + 1) % e, n === a && (a = (a + 1) % e), h - i < t)
      return;
    const k = u && h - u;
    return k ? Math.round(w * 1e3 / k) : void 0;
  };
}
function Gr(e, t) {
  let r = 0;
  const s = Ui(50, 250);
  return (n) => {
    const a = n.loaded, i = n.lengthComputable ? n.total : void 0, o = a - r, h = s(o), u = a <= i;
    r = a;
    const l = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: o,
      rate: h || void 0,
      estimated: h && i && u ? (i - a) / h : void 0,
      event: n
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Wi = typeof XMLHttpRequest < "u", Bi = Wi && function(e) {
  return new Promise(function(t, r) {
    let s = e.data;
    const n = he.from(e.headers).normalize(), a = e.responseType;
    let i;
    function o() {
      e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
    }
    let h;
    d.isFormData(s) && (X.isStandardBrowserEnv || X.isStandardBrowserWebWorkerEnv ? n.setContentType(!1) : n.getContentType(/^\s*multipart\/form-data/) ? d.isString(h = n.getContentType()) && n.setContentType(h.replace(/^\s*(multipart\/form-data);+/, "$1")) : n.setContentType("multipart/form-data"));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", D = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      n.set("Authorization", "Basic " + btoa(p + ":" + D));
    }
    const l = As(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Ts(l, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function w() {
      if (!u)
        return;
      const p = he.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), D = {
        data: !a || a === "text" || a === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: p,
        config: e,
        request: u
      };
      Ni(function(W) {
        t(W), o();
      }, function(W) {
        r(W), o();
      }, D), u = null;
    }
    if ("onloadend" in u ? u.onloadend = w : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, u.onabort = function() {
      u && (r(new S("Request aborted", S.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new S("Network Error", S.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const D = e.transitional || Ds;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), r(new S(
        p,
        D.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        e,
        u
      )), u = null;
    }, X.isStandardBrowserEnv) {
      const p = (e.withCredentials || Li(l)) && e.xsrfCookieName && Ci.read(e.xsrfCookieName);
      p && n.set(e.xsrfHeaderName, p);
    }
    s === void 0 && n.setContentType(null), "setRequestHeader" in u && d.forEach(n.toJSON(), function(p, D) {
      u.setRequestHeader(D, p);
    }), d.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && a !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Gr(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Gr(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = (p) => {
      u && (r(!p || p.type ? new Ze(null, e, u) : p), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
    const k = Ii(l);
    if (k && X.protocols.indexOf(k) === -1) {
      r(new S("Unsupported protocol " + k + ":", S.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(s || null);
  });
}, Xt = {
  http: fi,
  xhr: Bi
};
d.forEach(Xt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const zr = (e) => `- ${e}`, ji = (e) => d.isFunction(e) || e === null || e === !1, Rs = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, s;
    const n = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let i;
      if (s = r, !ji(r) && (s = Xt[(i = String(r)).toLowerCase()], s === void 0))
        throw new S(`Unknown adapter '${i}'`);
      if (s)
        break;
      n[i || "#" + a] = s;
    }
    if (!s) {
      const a = Object.entries(n).map(
        ([o, h]) => `adapter ${o} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? a.length > 1 ? `since :
` + a.map(zr).join(`
`) : " " + zr(a[0]) : "as no adapter specified";
      throw new S(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: Xt
};
function jt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ze(null, e);
}
function Kr(e) {
  return jt(e), e.headers = he.from(e.headers), e.data = Bt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rs.getAdapter(e.adapter || yr.adapter)(e).then(function(t) {
    return jt(e), t.data = Bt.call(
      e,
      e.transformResponse,
      t
    ), t.headers = he.from(t.headers), t;
  }, function(t) {
    return Es(t) || (jt(e), t && t.response && (t.response.data = Bt.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = he.from(t.response.headers))), Promise.reject(t);
  });
}
const Jr = (e) => e instanceof he ? e.toJSON() : e;
function Ce(e, t) {
  t = t || {};
  const r = {};
  function s(u, l, w) {
    return d.isPlainObject(u) && d.isPlainObject(l) ? d.merge.call({ caseless: w }, u, l) : d.isPlainObject(l) ? d.merge({}, l) : d.isArray(l) ? l.slice() : l;
  }
  function n(u, l, w) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(u))
        return s(void 0, u, w);
    } else
      return s(u, l, w);
  }
  function a(u, l) {
    if (!d.isUndefined(l))
      return s(void 0, l);
  }
  function i(u, l) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(u))
        return s(void 0, u);
    } else
      return s(void 0, l);
  }
  function o(u, l, w) {
    if (w in t)
      return s(u, l);
    if (w in e)
      return s(void 0, u);
  }
  const h = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
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
    validateStatus: o,
    headers: (u, l) => n(Jr(u), Jr(l), !0)
  };
  return d.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const l = h[u] || n, w = l(e[u], t[u], u);
    d.isUndefined(w) && l !== o || (r[u] = w);
  }), r;
}
const xs = "1.5.1", gr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  gr[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Zr = {};
gr.transitional = function(e, t, r) {
  function s(n, a) {
    return "[Axios v" + xs + "] Transitional option '" + n + "'" + a + (r ? ". " + r : "");
  }
  return (n, a, i) => {
    if (e === !1)
      throw new S(
        s(a, " has been removed" + (t ? " in " + t : "")),
        S.ERR_DEPRECATED
      );
    return t && !Zr[a] && (Zr[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(n, a, i) : !0;
  };
};
function Hi(e, t, r) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let n = s.length;
  for (; n-- > 0; ) {
    const a = s[n], i = t[a];
    if (i) {
      const o = e[a], h = o === void 0 || i(o, a, e);
      if (h !== !0)
        throw new S("option " + a + " must be " + h, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new S("Unknown option " + a, S.ERR_BAD_OPTION);
  }
}
const er = {
  assertOptions: Hi,
  validators: gr
}, ge = er.validators;
let dt = class {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Vr(),
      response: new Vr()
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
  request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Ce(this.defaults, t);
    const { transitional: r, paramsSerializer: s, headers: n } = t;
    r !== void 0 && er.assertOptions(r, {
      silentJSONParsing: ge.transitional(ge.boolean),
      forcedJSONParsing: ge.transitional(ge.boolean),
      clarifyTimeoutError: ge.transitional(ge.boolean)
    }, !1), s != null && (d.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : er.assertOptions(s, {
      encode: ge.function,
      serialize: ge.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let a = n && d.merge(
      n.common,
      n[t.method]
    );
    n && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete n[p];
      }
    ), t.headers = he.concat(a, n);
    const i = [];
    let o = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(t) === !1 || (o = o && p.synchronous, i.unshift(p.fulfilled, p.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(p) {
      h.push(p.fulfilled, p.rejected);
    });
    let u, l = 0, w;
    if (!o) {
      const p = [Kr.bind(this), void 0];
      for (p.unshift.apply(p, i), p.push.apply(p, h), w = p.length, u = Promise.resolve(t); l < w; )
        u = u.then(p[l++], p[l++]);
      return u;
    }
    w = i.length;
    let k = t;
    for (l = 0; l < w; ) {
      const p = i[l++], D = i[l++];
      try {
        k = p(k);
      } catch (W) {
        D.call(this, W);
        break;
      }
    }
    try {
      u = Kr.call(this, k);
    } catch (p) {
      return Promise.reject(p);
    }
    for (l = 0, w = h.length; l < w; )
      u = u.then(h[l++], h[l++]);
    return u;
  }
  getUri(e) {
    e = Ce(this.defaults, e);
    const t = As(e.baseURL, e.url);
    return Ts(t, e.params, e.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function(e) {
  dt.prototype[e] = function(t, r) {
    return this.request(Ce(r || {}, {
      method: e,
      url: t,
      data: (r || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(s, n, a) {
      return this.request(Ce(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: n
      }));
    };
  }
  dt.prototype[e] = t(), dt.prototype[e + "Form"] = t(!0);
});
const lt = dt;
let qi = class Ps {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(n) {
      r = n;
    });
    const s = this;
    this.promise.then((n) => {
      if (!s._listeners)
        return;
      let a = s._listeners.length;
      for (; a-- > 0; )
        s._listeners[a](n);
      s._listeners = null;
    }), this.promise.then = (n) => {
      let a;
      const i = new Promise((o) => {
        s.subscribe(o), a = o;
      }).then(n);
      return i.cancel = function() {
        s.unsubscribe(a);
      }, i;
    }, t(function(n, a, i) {
      s.reason || (s.reason = new Ze(n, a, i), r(s.reason));
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
      token: new Ps(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
const Vi = qi;
function $i(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Gi(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const tr = {
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
Object.entries(tr).forEach(([e, t]) => {
  tr[t] = e;
});
const zi = tr;
function Ns(e) {
  const t = new lt(e), r = fs(lt.prototype.request, t);
  return d.extend(r, lt.prototype, t, { allOwnKeys: !0 }), d.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Ns(Ce(e, s));
  }, r;
}
const N = Ns(yr);
N.Axios = lt;
N.CanceledError = Ze;
N.CancelToken = Vi;
N.isCancel = Es;
N.VERSION = xs;
N.toFormData = St;
N.AxiosError = S;
N.Cancel = N.CanceledError;
N.all = function(e) {
  return Promise.all(e);
};
N.spread = $i;
N.isAxiosError = Gi;
N.mergeConfig = Ce;
N.AxiosHeaders = he;
N.formToJSON = (e) => Ms(d.isHTMLForm(e) ? new FormData(e) : e);
N.getAdapter = Rs.getAdapter;
N.HttpStatusCode = zi;
N.default = N;
const Cs = N, {
  Axios: Nh,
  AxiosError: Ch,
  CanceledError: Yh,
  isCancel: Fh,
  CancelToken: Lh,
  VERSION: Ih,
  all: Uh,
  Cancel: Wh,
  isAxiosError: Bh,
  spread: jh,
  toFormData: Hh,
  AxiosHeaders: qh,
  HttpStatusCode: rt,
  formToJSON: Vh,
  getAdapter: $h,
  mergeConfig: Gh
} = Cs;
var Me = null;
typeof WebSocket < "u" ? Me = WebSocket : typeof MozWebSocket < "u" ? Me = MozWebSocket : typeof global < "u" ? Me = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Me = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Me = self.WebSocket || self.MozWebSocket);
const Ki = Me, Ht = {
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
var Qr, Xr, es, ts, rs;
const rr = class c {
  constructor(t = {}, r = "xhr") {
    le(this, "_type", "xhr"), le(this, "_baseURL", ((Xr = (Qr = globalThis.top) == null ? void 0 : Qr.document) == null ? void 0 : Xr.baseURI) ?? ((ts = (es = globalThis.parent) == null ? void 0 : es.document) == null ? void 0 : ts.baseURI) ?? ((rs = globalThis.location) == null ? void 0 : rs.origin) ?? Ht.SIYUAN_DEFAULT_BASE_URL), le(this, "_token", Ht.SIYUAN_DEFAULT_TOKEN), le(this, "_axios", Cs.create({
      baseURL: this._baseURL,
      timeout: Ht.REQUEST_TIMEOUT,
      headers: {
        Authorization: `Token ${this._token}`
      }
    })), le(this, "_fetch", Ra.create({
      baseURL: this._baseURL,
      headers: {
        Authorization: `Token ${this._token}`
      }
    })), this._setClientType(r), this._updateOptions(t, r);
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
          const n = "Authorization", a = `Token ${t.token}`;
          Array.isArray(s.headers) ? s.headers.push([
            n,
            a
          ]) : s.headers instanceof Headers ? s.headers.set(
            n,
            a
          ) : typeof s.headers == "object" ? s.headers[n] = a : s.headers = {
            [n]: a
          }, delete t.token;
        }
        this._fetch = this._fetch.create(s);
        break;
      case "xhr":
      default:
        for (const [n, a] of Object.entries(t))
          switch (n) {
            case "token":
              this._axios.defaults.headers.Authorization = `Token ${this._token}`;
              break;
            default:
              this._axios.defaults[n] = a;
              break;
          }
        break;
    }
    this._baseURL = t.baseURL ?? this._baseURL;
  }
  /* 👇 WebSocket 👇 */
  /* 消息广播 */
  broadcast(t, r, s) {
    const n = (s == null ? void 0 : s.baseURL) ?? this._baseURL, a = (s == null ? void 0 : s.token) ?? this._token, i = new URLSearchParams(t);
    i.set("token", a);
    const o = new URL(n);
    return o.protocol = o.protocol.replace(/^http/, "ws"), o.pathname = o.pathname.endsWith("/") ? `${o.pathname}${c.ws.broadcast.pathname.substring(1)}` : `${o.pathname}${c.ws.broadcast.pathname}`, o.search = i.toString(), new Ki(o, r);
  }
  /* 👇 由 JSON Schema 生成的类型定义👇 */
  /* 上传资源文件 */
  async upload(t, r) {
    const s = new FormData();
    return s.append("assetsDirPath", t.assetsDirPath ?? "/assets/"), t.files.forEach((n) => s.append("file[]", n)), await this._request(
      c.api.asset.upload.pathname,
      c.api.asset.upload.method,
      s,
      r
    );
  }
  /* 获取块属性 */
  async getBlockAttrs(t, r) {
    return await this._request(
      c.api.attr.getBlockAttrs.pathname,
      c.api.attr.getBlockAttrs.method,
      t,
      r
    );
  }
  /* 获取所有书签 */
  async getBookmarkLabels(t) {
    return await this._request(
      c.api.attr.getBookmarkLabels.pathname,
      c.api.attr.getBookmarkLabels.method,
      void 0,
      t
    );
  }
  /* 设置块属性 */
  async setBlockAttrs(t, r) {
    return await this._request(
      c.api.attr.setBlockAttrs.pathname,
      c.api.attr.setBlockAttrs.method,
      t,
      r
    );
  }
  /* 在下级块尾部插入块 */
  async appendBlock(t, r) {
    return await this._request(
      c.api.block.appendBlock.pathname,
      c.api.block.appendBlock.method,
      t,
      r
    );
  }
  /* 删除块 */
  async deleteBlock(t, r) {
    return await this._request(
      c.api.block.deleteBlock.pathname,
      c.api.block.deleteBlock.method,
      t,
      r
    );
  }
  /* 获得块面包屑 */
  async getBlockBreadcrumb(t, r) {
    return await this._request(
      c.api.block.getBlockBreadcrumb.pathname,
      c.api.block.getBlockBreadcrumb.method,
      t,
      r
    );
  }
  /* 获得块的 DOM */
  async getBlockDOM(t, r) {
    return await this._request(
      c.api.block.getBlockDOM.pathname,
      c.api.block.getBlockDOM.method,
      t,
      r
    );
  }
  /* 获得块所在文档的信息 */
  async getBlockInfo(t, r) {
    return await this._request(
      c.api.block.getBlockInfo.pathname,
      c.api.block.getBlockInfo.method,
      t,
      r
    );
  }
  /* 获得块的 kramdown 源码 */
  async getBlockKramdown(t, r) {
    return await this._request(
      c.api.block.getBlockKramdown.pathname,
      c.api.block.getBlockKramdown.method,
      t,
      r
    );
  }
  /* 获得指定块的所有下级块 */
  async getChildBlocks(t, r) {
    return await this._request(
      c.api.block.getChildBlocks.pathname,
      c.api.block.getChildBlocks.method,
      t,
      r
    );
  }
  /* 获得指定块所在文档信息 */
  async getDocInfo(t, r) {
    return await this._request(
      c.api.block.getDocInfo.pathname,
      c.api.block.getDocInfo.method,
      t,
      r
    );
  }
  /* 插入块 */
  async insertBlock(t, r) {
    return await this._request(
      c.api.block.insertBlock.pathname,
      c.api.block.insertBlock.method,
      t,
      r
    );
  }
  /* 移动块 */
  async moveBlock(t, r) {
    return await this._request(
      c.api.block.moveBlock.pathname,
      c.api.block.moveBlock.method,
      t,
      r
    );
  }
  /* 在下级块首部插入块 */
  async prependBlock(t, r) {
    return await this._request(
      c.api.block.prependBlock.pathname,
      c.api.block.prependBlock.method,
      t,
      r
    );
  }
  /* 转移块引用 */
  async transferBlockRef(t, r) {
    return await this._request(
      c.api.block.transferBlockRef.pathname,
      c.api.block.transferBlockRef.method,
      t,
      r
    );
  }
  /* 更新块 */
  async updateBlock(t, r) {
    return await this._request(
      c.api.block.updateBlock.pathname,
      c.api.block.updateBlock.method,
      t,
      r
    );
  }
  /* 获取所有广播频道信息 */
  async channels(t) {
    return await this._request(
      c.api.broadcast.channels.pathname,
      c.api.broadcast.channels.method,
      void 0,
      t
    );
  }
  /* 获取指定广播频道的信息 */
  async getChannelInfo(t, r) {
    return await this._request(
      c.api.broadcast.getChannelInfo.pathname,
      c.api.broadcast.getChannelInfo.method,
      t,
      r
    );
  }
  /* 推送广播消息 */
  async postMessage(t, r) {
    return await this._request(
      c.api.broadcast.postMessage.pathname,
      c.api.broadcast.postMessage.method,
      t,
      r
    );
  }
  /* 调用 pandoc 转换转换文件 */
  async pandoc(t, r) {
    return await this._request(
      c.api.convert.pandoc.pathname,
      c.api.convert.pandoc.method,
      t,
      r
    );
  }
  /* 打包文件与文件夹以导出 */
  async exportResources(t, r) {
    return await this._request(
      c.api.export.exportResources.pathname,
      c.api.export.exportResources.method,
      t,
      r
    );
  }
  /* 导出指定文档块为 Markdown */
  async exportMdContent(t, r) {
    return await this._request(
      c.api.export.exportMdContent.pathname,
      c.api.export.exportMdContent.method,
      t,
      r
    );
  }
  async getFile(t, r = "text", s) {
    return await this._request(
      c.api.file.getFile.pathname,
      c.api.file.getFile.method,
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
    for (const [n, a] of Object.entries(t))
      t.hasOwnProperty(n) && (a instanceof Blob ? s.append(n, a) : s.append(n, String(a)));
    return await this._request(
      c.api.file.putFile.pathname,
      c.api.file.putFile.method,
      s,
      r
    );
  }
  /* 获取文件目录下级内容 */
  async readDir(t, r) {
    return await this._request(
      c.api.file.readDir.pathname,
      c.api.file.readDir.method,
      t,
      r
    );
  }
  /* 删除文件/目录 */
  async removeFile(t, r) {
    return await this._request(
      c.api.file.removeFile.pathname,
      c.api.file.removeFile.method,
      t,
      r
    );
  }
  /* 重命名/移动文件/目录 */
  async renameFile(t, r) {
    return await this._request(
      c.api.file.renameFile.pathname,
      c.api.file.renameFile.method,
      t,
      r
    );
  }
  /* 通过 Markdown 创建文档 */
  async createDocWithMd(t, r) {
    return await this._request(
      c.api.filetree.createDocWithMd.pathname,
      c.api.filetree.createDocWithMd.method,
      t,
      r
    );
  }
  /* 获取文档内容 */
  async getDoc(t, r) {
    return await this._request(
      c.api.filetree.getDoc.pathname,
      c.api.filetree.getDoc.method,
      t,
      r
    );
  }
  /* 根据 ID 获取人类可读路径 */
  async getHPathByID(t, r) {
    return await this._request(
      c.api.filetree.getHPathByID.pathname,
      c.api.filetree.getHPathByID.method,
      t,
      r
    );
  }
  /* 根据路径获取人类可读路径 */
  async getHPathByPath(t, r) {
    return await this._request(
      c.api.filetree.getHPathByPath.pathname,
      c.api.filetree.getHPathByPath.method,
      t,
      r
    );
  }
  /* 查询子文档 */
  async listDocsByPath(t, r) {
    return await this._request(
      c.api.filetree.listDocsByPath.pathname,
      c.api.filetree.listDocsByPath.method,
      t,
      r
    );
  }
  /* 批量移动文档 */
  async moveDocs(t, r) {
    return await this._request(
      c.api.filetree.moveDocs.pathname,
      c.api.filetree.moveDocs.method,
      t,
      r
    );
  }
  /* 删除文档 */
  async removeDoc(t, r) {
    return await this._request(
      c.api.filetree.removeDoc.pathname,
      c.api.filetree.removeDoc.method,
      t,
      r
    );
  }
  /* 文档重命名 */
  async renameDoc(t, r) {
    return await this._request(
      c.api.filetree.renameDoc.pathname,
      c.api.filetree.renameDoc.method,
      t,
      r
    );
  }
  /* 搜索文档 */
  async searchDocs(t, r) {
    return await this._request(
      c.api.filetree.searchDocs.pathname,
      c.api.filetree.searchDocs.method,
      t,
      r
    );
  }
  /* 获取历史文档内容 */
  async getDocHistoryContent(t, r) {
    return await this._request(
      c.api.history.getDocHistoryContent.pathname,
      c.api.history.getDocHistoryContent.method,
      t,
      r
    );
  }
  /* 查询历史项 */
  async getHistoryItems(t, r) {
    return await this._request(
      c.api.history.getHistoryItems.pathname,
      c.api.history.getHistoryItems.method,
      t,
      r
    );
  }
  /* 收集箱速记内容 */
  async getShorthand(t, r) {
    return await this._request(
      c.api.inbox.getShorthand.pathname,
      c.api.inbox.getShorthand.method,
      t,
      r
    );
  }
  /* 正向代理 */
  async forwardProxy(t, r) {
    return await this._request(
      c.api.network.forwardProxy.pathname,
      c.api.network.forwardProxy.method,
      t,
      r
    );
  }
  /* 关闭笔记本 */
  async closeNotebook(t, r) {
    return await this._request(
      c.api.notebook.closeNotebook.pathname,
      c.api.notebook.closeNotebook.method,
      t,
      r
    );
  }
  /* 创建笔记本 */
  async createNotebook(t, r) {
    return await this._request(
      c.api.notebook.createNotebook.pathname,
      c.api.notebook.createNotebook.method,
      t,
      r
    );
  }
  /* 获取笔记本配置信息 */
  async getNotebookConf(t, r) {
    return await this._request(
      c.api.notebook.getNotebookConf.pathname,
      c.api.notebook.getNotebookConf.method,
      t,
      r
    );
  }
  /* 列出笔记本信息 */
  async lsNotebooks(t) {
    return await this._request(
      c.api.notebook.lsNotebooks.pathname,
      c.api.notebook.lsNotebooks.method,
      void 0,
      t
    );
  }
  /* 打开笔记本 */
  async openNotebook(t, r) {
    return await this._request(
      c.api.notebook.openNotebook.pathname,
      c.api.notebook.openNotebook.method,
      t,
      r
    );
  }
  /* 删除笔记本 */
  async removeNotebook(t, r) {
    return await this._request(
      c.api.notebook.removeNotebook.pathname,
      c.api.notebook.removeNotebook.method,
      t,
      r
    );
  }
  /* 重命名笔记本 */
  async renameNotebook(t, r) {
    return await this._request(
      c.api.notebook.renameNotebook.pathname,
      c.api.notebook.renameNotebook.method,
      t,
      r
    );
  }
  /* 设置笔记本配置 */
  async setNotebookConf(t, r) {
    return await this._request(
      c.api.notebook.setNotebookConf.pathname,
      c.api.notebook.setNotebookConf.method,
      t,
      r
    );
  }
  /* 推送错误消息 */
  async pushErrMsg(t, r) {
    return await this._request(
      c.api.notification.pushErrMsg.pathname,
      c.api.notification.pushErrMsg.method,
      t,
      r
    );
  }
  /* 推送提示消息 */
  async pushMsg(t, r) {
    return await this._request(
      c.api.notification.pushMsg.pathname,
      c.api.notification.pushMsg.method,
      t,
      r
    );
  }
  /* SQL 查询 */
  async sql(t, r) {
    return await this._request(
      c.api.query.sql.pathname,
      c.api.query.sql.method,
      t,
      r
    );
  }
  /* 读取快照文件内容 */
  async openRepoSnapshotDoc(t, r) {
    return await this._request(
      c.api.repo.openRepoSnapshotDoc.pathname,
      c.api.repo.openRepoSnapshotDoc.method,
      t,
      r
    );
  }
  /* 全局搜索 */
  async fullTextSearchBlock(t, r) {
    return await this._request(
      c.api.search.fullTextSearchBlock.pathname,
      c.api.search.fullTextSearchBlock.method,
      t,
      r
    );
  }
  /* 获取代码片段 */
  async getSnippet(t, r) {
    return await this._request(
      c.api.snippet.getSnippet.pathname,
      c.api.snippet.getSnippet.method,
      t,
      r
    );
  }
  /* 设置代码片段 */
  async setSnippet(t, r) {
    return await this._request(
      c.api.snippet.setSnippet.pathname,
      c.api.snippet.setSnippet.method,
      t,
      r
    );
  }
  /* 获取所有本地存储的数据 */
  async getLocalStorage(t) {
    return await this._request(
      c.api.storage.getLocalStorage.pathname,
      c.api.storage.getLocalStorage.method,
      void 0,
      t
    );
  }
  /* 查询最近打开的文档 */
  async getRecentDocs(t) {
    return await this._request(
      c.api.storage.getRecentDocs.pathname,
      c.api.storage.getRecentDocs.method,
      void 0,
      t
    );
  }
  /* 持久化本地存储 */
  async setLocalStorage(t, r) {
    return await this._request(
      c.api.storage.setLocalStorage.pathname,
      c.api.storage.setLocalStorage.method,
      t,
      r
    );
  }
  /* 获取内核启动进度 */
  async bootProgress(t) {
    return await this._request(
      c.api.system.bootProgress.pathname,
      c.api.system.bootProgress.method,
      void 0,
      t
    );
  }
  /* 获得配置 */
  async getConf(t) {
    return await this._request(
      c.api.system.getConf.pathname,
      c.api.system.getConf.method,
      void 0,
      t
    );
  }
  /* 获得内核 Unix 时间戳 (单位: ms) */
  async currentTime(t) {
    return await this._request(
      c.api.system.currentTime.pathname,
      c.api.system.currentTime.method,
      void 0,
      t
    );
  }
  /* 获得内核版本 */
  async version(t) {
    return await this._request(
      c.api.system.version.pathname,
      c.api.system.version.method,
      void 0,
      t
    );
  }
  /* 渲染 kramdown 模板文件 */
  async render(t, r) {
    return await this._request(
      c.api.template.render.pathname,
      c.api.template.render.method,
      t,
      r
    );
  }
  /* 渲染 Sprig 模板 */
  async renderSprig(t, r) {
    return await this._request(
      c.api.template.renderSprig.pathname,
      c.api.template.renderSprig.method,
      t,
      r
    );
  }
  async _request(t, r, s, n, a = !0, i = "json") {
    try {
      switch ((n == null ? void 0 : n.type) ?? this._type) {
        case "fetch": {
          const o = n == null ? void 0 : n.options;
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
          const h = await this._fetch(
            t,
            {
              method: r,
              body: s,
              responseType: i,
              onResponse: async (u) => {
                switch (u.response.status) {
                  case rt.Ok:
                    break;
                  case rt.Accepted:
                    t === c.api.file.getFile.pathname && this._parseFetchResponse(u.response._data);
                    break;
                  default:
                    break;
                }
              },
              ...o
            }
          );
          return a && i === "json" && typeof h == "object" ? this._parseFetchResponse(h) : h;
        }
        case "xhr":
        default: {
          const o = n == null ? void 0 : n.options;
          i = (() => {
            switch (i) {
              case "arrayBuffer":
                return "arraybuffer";
              default:
                return i;
            }
          })();
          const h = await this._axios.request({
            url: t,
            method: r,
            data: s,
            responseType: i,
            ...o
          });
          switch (h.status) {
            case rt.Ok:
              return a && i === "json" && typeof h.data == "object" ? this._parseAxiosResponse(h) : h.data;
            case rt.Accepted:
              return t === c.api.file.getFile.pathname ? this._parseAxiosResponse(h) : h.data;
            default:
              throw new xa(h);
          }
        }
      }
    } catch (o) {
      throw o;
    }
  }
  /**
   * 解析内核响应
   */
  _parseFetchResponse(t) {
    if (t.code === 0)
      return t;
    throw new Jt(t);
  }
  /**
   * 解析内核响应
   */
  _parseAxiosResponse(t) {
    if (t.data.code === 0)
      return t.data;
    throw new Jt(t.data, t);
  }
};
le(rr, "ws", {
  broadcast: { pathname: "/ws/broadcast" }
}), le(rr, "api", {
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
    channels: { pathname: "/api/broadcast/channels", method: "GET" },
    getChannelInfo: { pathname: "/api/broadcast/getChannelInfo", method: "POST" },
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
    createDocWithMd: { pathname: "/api/filetree/createDocWithMd", method: "POST" },
    getDoc: { pathname: "/api/filetree/getDoc", method: "POST" },
    getHPathByID: { pathname: "/api/filetree/getHPathByID", method: "POST" },
    getHPathByPath: { pathname: "/api/filetree/getHPathByPath", method: "POST" },
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
  storage: {
    getLocalStorage: { pathname: "/api/storage/getLocalStorage", method: "POST" },
    getRecentDocs: { pathname: "/api/storage/getRecentDocs", method: "POST" },
    setLocalStorage: { pathname: "/api/storage/setLocalStorage", method: "POST" }
  },
  system: {
    bootProgress: { pathname: "/api/system/bootProgress", method: "POST" },
    currentTime: { pathname: "/api/system/currentTime", method: "POST" },
    getConf: { pathname: "/api/system/getConf", method: "POST" },
    version: { pathname: "/api/system/version", method: "POST" }
  },
  template: {
    render: { pathname: "/api/template/render", method: "POST" },
    renderSprig: { pathname: "/api/template/renderSprig", method: "POST" }
  }
});
let Ji = rr;
class Zi {
  constructor(t, r, s, n) {
    ae(this, "map", /* @__PURE__ */ new Map());
    ae(this, "counter", Math.random());
    ae(this, "errerEventListener", async (t) => {
      this.logger.warn(t);
    });
    ae(this, "messageEventListener", async (t) => {
      const r = t.data;
      switch (r.type) {
        case "call": {
          try {
            if (r.uuid && r.uuid !== this.uuid)
              break;
            if (r.handler.name in this.handlers) {
              const s = this.handlers[r.handler.name], n = await s.func.call(s.this, ...r.handler.args), a = {
                type: "return",
                id: r.id,
                handler: {
                  name: r.handler.name,
                  result: n
                }
              };
              this.port.postMessage(a);
            }
          } catch (s) {
            const n = {
              type: "error",
              id: r.id,
              error: s
            };
            this.port.postMessage(n);
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
    this.port = t, this.logger = r, this.handlers = s, this.uuid = n, this.port.addEventListener("error", this.errerEventListener), this.port.addEventListener("messageerror", this.errerEventListener), this.port.addEventListener("message", this.messageEventListener);
  }
  /**
   * 调用远程函数
   * @param name 函数名称
   * @param args 函数参数
   * @returns 函数返回值
   */
  async call(t, ...r) {
    return new Promise((s, n) => {
      const a = this.counter++;
      this.map.set(a, { resolve: s, reject: n });
      const i = {
        type: "call",
        id: a,
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
    return new Promise((n, a) => {
      const i = this.counter++;
      this.map.set(i, { resolve: n, reject: a });
      const o = {
        type: "call",
        id: i,
        uuid: r,
        handler: {
          name: t,
          args: s
        }
      };
      this.port.postMessage(o);
    });
  }
}
function* Qi(e = 0) {
  for (; ; )
    yield e++;
}
const Xi = Qi(Math.round(Math.random() * (36 ** 8 - 1)));
function eo(e, t) {
  return `${e.getFullYear().toString().padStart(4, "0")}${(e.getMonth() + 1).toString().padStart(2, "0")}${e.getDate().toString().padStart(2, "0")}${e.getHours().toString().padStart(2, "0")}${e.getMinutes().toString().padStart(2, "0")}${e.getSeconds().toString().padStart(2, "0")}-${t.toString(36).padStart(7, "0").slice(-7)}`;
}
function to(e = /* @__PURE__ */ new Date(), t = Xi) {
  return eo(e, t.next().value);
}
class ro extends Zi {
  constructor(r, s, n = {}, a = to()) {
    super(
      // @ts-ignore
      r,
      s,
      n,
      a
    );
    ae(this, "pingEventListener", async (r) => {
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
class so {
  constructor(t, r = !0) {
    this.label = t, this.collapsed = r;
  }
  /**
   * 输出
   * @param func: 所使用的输出函数
   * @param multiple: 是否进行多次输出
   * @param args: 输出函数的参数
   */
  stdout(t, r, ...s) {
    const n = `[\x1B[4m${this.label}\x1B[0m] - <\x1B[1m${t.name.toUpperCase()}\x1B[0m>`;
    if (this.collapsed ? globalThis.console.groupCollapsed(n) : globalThis.console.group(n), r)
      for (const a of s)
        Array.isArray(a) ? t(...a) : t(a);
    else
      t(...s);
    globalThis.console.trace(), globalThis.console.groupEnd();
  }
  dir(...t) {
    this.stdout(globalThis.console.dir, !1, ...t);
  }
  dirs(...t) {
    this.stdout(globalThis.console.dir, !0, ...t);
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
function no(e, t) {
  return e.endsWith(t) ? e.slice(0, -t.length) : e;
}
var sr = /* @__PURE__ */ ((e) => (e.Coding = "coding", e.Building = "building", e.Indexing = "indexing", e.Debugging = "debugging", e.Browsing = "browsing", e.RunningTests = "running tests", e.WritingTests = "writing tests", e.ManualTesting = "manual testing", e.WritingDocs = "writing docs", e.CodeReviewing = "code reviewing", e.Researching = "researching", e.Learning = "learning", e.Designing = "designing", e))(sr || {}), Ys = /* @__PURE__ */ ((e) => (e.App = "app", e.File = "file", e.Domain = "domain", e))(Ys || {});
const ao = {
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
      category: sr.Browsing
    },
    edit: {
      category: sr.Learning
    },
    system_name: "",
    system_version: "unknown",
    system_arch: "unknown",
    useragent: ""
  }
}, ee = {
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
  WAKATIME_CLIENT_VERSION: "1.86.0",
  // 客户端名称
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
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Fs;
function m() {
  return Fs.apply(null, arguments);
}
function io(e) {
  Fs = e;
}
function z(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Oe(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function O(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function wr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (O(e, t))
      return !1;
  return !0;
}
function U(e) {
  return e === void 0;
}
function fe(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Qe(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ls(e, t) {
  var r = [], s, n = e.length;
  for (s = 0; s < n; ++s)
    r.push(t(e[s], s));
  return r;
}
function we(e, t) {
  for (var r in t)
    O(t, r) && (e[r] = t[r]);
  return O(t, "toString") && (e.toString = t.toString), O(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function se(e, t, r, s) {
  return ln(e, t, r, s, !0).utc();
}
function oo() {
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
function _(e) {
  return e._pf == null && (e._pf = oo()), e._pf;
}
var nr;
Array.prototype.some ? nr = Array.prototype.some : nr = function(e) {
  var t = Object(this), r = t.length >>> 0, s;
  for (s = 0; s < r; s++)
    if (s in t && e.call(this, t[s], s, t))
      return !0;
  return !1;
};
function _r(e) {
  if (e._isValid == null) {
    var t = _(e), r = nr.call(t.parsedDateParts, function(n) {
      return n != null;
    }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = s;
    else
      return s;
  }
  return e._isValid;
}
function Ot(e) {
  var t = se(NaN);
  return e != null ? we(_(t), e) : _(t).userInvalidated = !0, t;
}
var ss = m.momentProperties = [], qt = !1;
function br(e, t) {
  var r, s, n, a = ss.length;
  if (U(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), U(t._i) || (e._i = t._i), U(t._f) || (e._f = t._f), U(t._l) || (e._l = t._l), U(t._strict) || (e._strict = t._strict), U(t._tzm) || (e._tzm = t._tzm), U(t._isUTC) || (e._isUTC = t._isUTC), U(t._offset) || (e._offset = t._offset), U(t._pf) || (e._pf = _(t)), U(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      s = ss[r], n = t[s], U(n) || (e[s] = n);
  return e;
}
function Xe(e) {
  br(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), qt === !1 && (qt = !0, m.updateOffset(this), qt = !1);
}
function K(e) {
  return e instanceof Xe || e != null && e._isAMomentObject != null;
}
function Is(e) {
  m.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function V(e, t) {
  var r = !0;
  return we(function() {
    if (m.deprecationHandler != null && m.deprecationHandler(null, e), r) {
      var s = [], n, a, i, o = arguments.length;
      for (a = 0; a < o; a++) {
        if (n = "", typeof arguments[a] == "object") {
          n += `
[` + a + "] ";
          for (i in arguments[0])
            O(arguments[0], i) && (n += i + ": " + arguments[0][i] + ", ");
          n = n.slice(0, -2);
        } else
          n = arguments[a];
        s.push(n);
      }
      Is(
        e + `
Arguments: ` + Array.prototype.slice.call(s).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var ns = {};
function Us(e, t) {
  m.deprecationHandler != null && m.deprecationHandler(e, t), ns[e] || (Is(t), ns[e] = !0);
}
m.suppressDeprecationWarnings = !1;
m.deprecationHandler = null;
function ne(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function lo(e) {
  var t, r;
  for (r in e)
    O(e, r) && (t = e[r], ne(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function ar(e, t) {
  var r = we({}, e), s;
  for (s in t)
    O(t, s) && (Oe(e[s]) && Oe(t[s]) ? (r[s] = {}, we(r[s], e[s]), we(r[s], t[s])) : t[s] != null ? r[s] = t[s] : delete r[s]);
  for (s in e)
    O(e, s) && !O(t, s) && Oe(e[s]) && (r[s] = we({}, r[s]));
  return r;
}
function kr(e) {
  e != null && this.set(e);
}
var ir;
Object.keys ? ir = Object.keys : ir = function(e) {
  var t, r = [];
  for (t in e)
    O(e, t) && r.push(t);
  return r;
};
var uo = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function co(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return ne(s) ? s.call(t, r) : s;
}
function te(e, t, r) {
  var s = "" + Math.abs(e), n = t - s.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s;
}
var Sr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, st = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Vt = {}, xe = {};
function g(e, t, r, s) {
  var n = s;
  typeof s == "string" && (n = function() {
    return this[s]();
  }), e && (xe[e] = n), t && (xe[t[0]] = function() {
    return te(n.apply(this, arguments), t[1], t[2]);
  }), r && (xe[r] = function() {
    return this.localeData().ordinal(
      n.apply(this, arguments),
      e
    );
  });
}
function ho(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function fo(e) {
  var t = e.match(Sr), r, s;
  for (r = 0, s = t.length; r < s; r++)
    xe[t[r]] ? t[r] = xe[t[r]] : t[r] = ho(t[r]);
  return function(n) {
    var a = "", i;
    for (i = 0; i < s; i++)
      a += ne(t[i]) ? t[i].call(n, e) : t[i];
    return a;
  };
}
function ut(e, t) {
  return e.isValid() ? (t = Ws(t, e.localeData()), Vt[t] = Vt[t] || fo(t), Vt[t](e)) : e.localeData().invalidDate();
}
function Ws(e, t) {
  var r = 5;
  function s(n) {
    return t.longDateFormat(n) || n;
  }
  for (st.lastIndex = 0; r >= 0 && st.test(e); )
    e = e.replace(
      st,
      s
    ), st.lastIndex = 0, r -= 1;
  return e;
}
var po = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function mo(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(Sr).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var yo = "Invalid date";
function go() {
  return this._invalidDate;
}
var wo = "%d", _o = /\d{1,2}/;
function bo(e) {
  return this._ordinal.replace("%d", e);
}
var ko = {
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
function So(e, t, r, s) {
  var n = this._relativeTime[r];
  return ne(n) ? n(e, t, r, s) : n.replace(/%d/i, e);
}
function vo(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return ne(r) ? r(t) : r.replace(/%s/i, t);
}
var je = {};
function F(e, t) {
  var r = e.toLowerCase();
  je[r] = je[r + "s"] = je[t] = e;
}
function $(e) {
  return typeof e == "string" ? je[e] || je[e.toLowerCase()] : void 0;
}
function vr(e) {
  var t = {}, r, s;
  for (s in e)
    O(e, s) && (r = $(s), r && (t[r] = e[s]));
  return t;
}
var Bs = {};
function L(e, t) {
  Bs[e] = t;
}
function Oo(e) {
  var t = [], r;
  for (r in e)
    O(e, r) && t.push({ unit: r, priority: Bs[r] });
  return t.sort(function(s, n) {
    return s.priority - n.priority;
  }), t;
}
function Tt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function H(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function b(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = H(t)), r;
}
function Fe(e, t) {
  return function(r) {
    return r != null ? (js(this, e, r), m.updateOffset(this, t), this) : ft(this, e);
  };
}
function ft(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function js(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && Tt(e.year()) && e.month() === 1 && e.date() === 29 ? (r = b(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    xt(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function To(e) {
  return e = $(e), ne(this[e]) ? this[e]() : this;
}
function Do(e, t) {
  if (typeof e == "object") {
    e = vr(e);
    var r = Oo(e), s, n = r.length;
    for (s = 0; s < n; s++)
      this[r[s].unit](e[r[s].unit]);
  } else if (e = $(e), ne(this[e]))
    return this[e](t);
  return this;
}
var Hs = /\d/, j = /\d\d/, qs = /\d{3}/, Or = /\d{4}/, Dt = /[+-]?\d{6}/, R = /\d\d?/, Vs = /\d\d\d\d?/, $s = /\d\d\d\d\d\d?/, Mt = /\d{1,3}/, Tr = /\d{1,4}/, Et = /[+-]?\d{1,6}/, Le = /\d+/, At = /[+-]?\d+/, Mo = /Z|[+-]\d\d:?\d\d/gi, Rt = /Z|[+-]\d\d(?::?\d\d)?/gi, Eo = /[+-]?\d+(\.\d{1,3})?/, et = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, pt;
pt = {};
function y(e, t, r) {
  pt[e] = ne(t) ? t : function(s, n) {
    return s && r ? r : t;
  };
}
function Ao(e, t) {
  return O(pt, e) ? pt[e](t._strict, t._locale) : new RegExp(Ro(e));
}
function Ro(e) {
  return B(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, s, n, a) {
        return r || s || n || a;
      }
    )
  );
}
function B(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var or = {};
function E(e, t) {
  var r, s = t, n;
  for (typeof e == "string" && (e = [e]), fe(t) && (s = function(a, i) {
    i[t] = b(a);
  }), n = e.length, r = 0; r < n; r++)
    or[e[r]] = s;
}
function tt(e, t) {
  E(e, function(r, s, n, a) {
    n._w = n._w || {}, t(r, n._w, n, a);
  });
}
function xo(e, t, r) {
  t != null && O(or, e) && or[e](t, r._a, r, e);
}
var Y = 0, ue = 1, Q = 2, C = 3, G = 4, ce = 5, ve = 6, Po = 7, No = 8;
function Co(e, t) {
  return (e % t + t) % t;
}
var P;
Array.prototype.indexOf ? P = Array.prototype.indexOf : P = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function xt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Co(t, 12);
  return e += (t - r) / 12, r === 1 ? Tt(e) ? 29 : 28 : 31 - r % 7 % 2;
}
g("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
g("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
g("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
F("month", "M");
L("month", 8);
y("M", R);
y("MM", R, j);
y("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
y("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
E(["M", "MM"], function(e, t) {
  t[ue] = b(e) - 1;
});
E(["MMM", "MMMM"], function(e, t, r, s) {
  var n = r._locale.monthsParse(e, s, r._strict);
  n != null ? t[ue] = n : _(r).invalidMonth = e;
});
var Yo = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Gs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), zs = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Fo = et, Lo = et;
function Io(e, t) {
  return e ? z(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || zs).test(t) ? "format" : "standalone"][e.month()] : z(this._months) ? this._months : this._months.standalone;
}
function Uo(e, t) {
  return e ? z(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[zs.test(t) ? "format" : "standalone"][e.month()] : z(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Wo(e, t, r) {
  var s, n, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      a = se([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (n = P.call(this._shortMonthsParse, i), n !== -1 ? n : null) : (n = P.call(this._longMonthsParse, i), n !== -1 ? n : null) : t === "MMM" ? (n = P.call(this._shortMonthsParse, i), n !== -1 ? n : (n = P.call(this._longMonthsParse, i), n !== -1 ? n : null)) : (n = P.call(this._longMonthsParse, i), n !== -1 ? n : (n = P.call(this._shortMonthsParse, i), n !== -1 ? n : null));
}
function Bo(e, t, r) {
  var s, n, a;
  if (this._monthsParseExact)
    return Wo.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
    if (n = se([2e3, s]), r && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp(
      "^" + this.months(n, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[s] = new RegExp(
      "^" + this.monthsShort(n, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[s] && (a = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[s] = new RegExp(a.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[s].test(e))
      return s;
    if (r && t === "MMM" && this._shortMonthsParse[s].test(e))
      return s;
    if (!r && this._monthsParse[s].test(e))
      return s;
  }
}
function Ks(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = b(t);
    else if (t = e.localeData().monthsParse(t), !fe(t))
      return e;
  }
  return r = Math.min(e.date(), xt(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function Js(e) {
  return e != null ? (Ks(this, e), m.updateOffset(this, !0), this) : ft(this, "Month");
}
function jo() {
  return xt(this.year(), this.month());
}
function Ho(e) {
  return this._monthsParseExact ? (O(this, "_monthsRegex") || Zs.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (O(this, "_monthsShortRegex") || (this._monthsShortRegex = Fo), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function qo(e) {
  return this._monthsParseExact ? (O(this, "_monthsRegex") || Zs.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (O(this, "_monthsRegex") || (this._monthsRegex = Lo), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Zs() {
  function e(i, o) {
    return o.length - i.length;
  }
  var t = [], r = [], s = [], n, a;
  for (n = 0; n < 12; n++)
    a = se([2e3, n]), t.push(this.monthsShort(a, "")), r.push(this.months(a, "")), s.push(this.months(a, "")), s.push(this.monthsShort(a, ""));
  for (t.sort(e), r.sort(e), s.sort(e), n = 0; n < 12; n++)
    t[n] = B(t[n]), r[n] = B(r[n]);
  for (n = 0; n < 24; n++)
    s[n] = B(s[n]);
  this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
g("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? te(e, 4) : "+" + e;
});
g(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
g(0, ["YYYY", 4], 0, "year");
g(0, ["YYYYY", 5], 0, "year");
g(0, ["YYYYYY", 6, !0], 0, "year");
F("year", "y");
L("year", 1);
y("Y", At);
y("YY", R, j);
y("YYYY", Tr, Or);
y("YYYYY", Et, Dt);
y("YYYYYY", Et, Dt);
E(["YYYYY", "YYYYYY"], Y);
E("YYYY", function(e, t) {
  t[Y] = e.length === 2 ? m.parseTwoDigitYear(e) : b(e);
});
E("YY", function(e, t) {
  t[Y] = m.parseTwoDigitYear(e);
});
E("Y", function(e, t) {
  t[Y] = parseInt(e, 10);
});
function He(e) {
  return Tt(e) ? 366 : 365;
}
m.parseTwoDigitYear = function(e) {
  return b(e) + (b(e) > 68 ? 1900 : 2e3);
};
var Qs = Fe("FullYear", !0);
function Vo() {
  return Tt(this.year());
}
function $o(e, t, r, s, n, a, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, s, n, a, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, s, n, a, i), o;
}
function $e(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function mt(e, t, r) {
  var s = 7 + t - r, n = (7 + $e(e, 0, s).getUTCDay() - t) % 7;
  return -n + s - 1;
}
function Xs(e, t, r, s, n) {
  var a = (7 + r - s) % 7, i = mt(e, s, n), o = 1 + 7 * (t - 1) + a + i, h, u;
  return o <= 0 ? (h = e - 1, u = He(h) + o) : o > He(e) ? (h = e + 1, u = o - He(e)) : (h = e, u = o), {
    year: h,
    dayOfYear: u
  };
}
function Ge(e, t, r) {
  var s = mt(e.year(), t, r), n = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, a, i;
  return n < 1 ? (i = e.year() - 1, a = n + de(i, t, r)) : n > de(e.year(), t, r) ? (a = n - de(e.year(), t, r), i = e.year() + 1) : (i = e.year(), a = n), {
    week: a,
    year: i
  };
}
function de(e, t, r) {
  var s = mt(e, t, r), n = mt(e + 1, t, r);
  return (He(e) - s + n) / 7;
}
g("w", ["ww", 2], "wo", "week");
g("W", ["WW", 2], "Wo", "isoWeek");
F("week", "w");
F("isoWeek", "W");
L("week", 5);
L("isoWeek", 5);
y("w", R);
y("ww", R, j);
y("W", R);
y("WW", R, j);
tt(
  ["w", "ww", "W", "WW"],
  function(e, t, r, s) {
    t[s.substr(0, 1)] = b(e);
  }
);
function Go(e) {
  return Ge(e, this._week.dow, this._week.doy).week;
}
var zo = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Ko() {
  return this._week.dow;
}
function Jo() {
  return this._week.doy;
}
function Zo(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Qo(e) {
  var t = Ge(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
g("d", 0, "do", "day");
g("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
g("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
g("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
g("e", 0, 0, "weekday");
g("E", 0, 0, "isoWeekday");
F("day", "d");
F("weekday", "e");
F("isoWeekday", "E");
L("day", 11);
L("weekday", 11);
L("isoWeekday", 11);
y("d", R);
y("e", R);
y("E", R);
y("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
y("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
y("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
tt(["dd", "ddd", "dddd"], function(e, t, r, s) {
  var n = r._locale.weekdaysParse(e, s, r._strict);
  n != null ? t.d = n : _(r).invalidWeekday = e;
});
tt(["d", "e", "E"], function(e, t, r, s) {
  t[s] = b(e);
});
function Xo(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function el(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Dr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var tl = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), en = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), rl = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), sl = et, nl = et, al = et;
function il(e, t) {
  var r = z(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Dr(r, this._week.dow) : e ? r[e.day()] : r;
}
function ol(e) {
  return e === !0 ? Dr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function ll(e) {
  return e === !0 ? Dr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function ul(e, t, r) {
  var s, n, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
      a = se([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (n = P.call(this._weekdaysParse, i), n !== -1 ? n : null) : t === "ddd" ? (n = P.call(this._shortWeekdaysParse, i), n !== -1 ? n : null) : (n = P.call(this._minWeekdaysParse, i), n !== -1 ? n : null) : t === "dddd" ? (n = P.call(this._weekdaysParse, i), n !== -1 || (n = P.call(this._shortWeekdaysParse, i), n !== -1) ? n : (n = P.call(this._minWeekdaysParse, i), n !== -1 ? n : null)) : t === "ddd" ? (n = P.call(this._shortWeekdaysParse, i), n !== -1 || (n = P.call(this._weekdaysParse, i), n !== -1) ? n : (n = P.call(this._minWeekdaysParse, i), n !== -1 ? n : null)) : (n = P.call(this._minWeekdaysParse, i), n !== -1 || (n = P.call(this._weekdaysParse, i), n !== -1) ? n : (n = P.call(this._shortWeekdaysParse, i), n !== -1 ? n : null));
}
function cl(e, t, r) {
  var s, n, a;
  if (this._weekdaysParseExact)
    return ul.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
    if (n = se([2e3, 1]).day(s), r && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp(
      "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[s] || (a = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[s] = new RegExp(a.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[s].test(e))
      return s;
    if (r && t === "ddd" && this._shortWeekdaysParse[s].test(e))
      return s;
    if (r && t === "dd" && this._minWeekdaysParse[s].test(e))
      return s;
    if (!r && this._weekdaysParse[s].test(e))
      return s;
  }
}
function hl(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Xo(e, this.localeData()), this.add(e - t, "d")) : t;
}
function dl(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function fl(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = el(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function pl(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || Mr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (O(this, "_weekdaysRegex") || (this._weekdaysRegex = sl), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function ml(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || Mr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (O(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = nl), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function yl(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || Mr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (O(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = al), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Mr() {
  function e(l, w) {
    return w.length - l.length;
  }
  var t = [], r = [], s = [], n = [], a, i, o, h, u;
  for (a = 0; a < 7; a++)
    i = se([2e3, 1]).day(a), o = B(this.weekdaysMin(i, "")), h = B(this.weekdaysShort(i, "")), u = B(this.weekdays(i, "")), t.push(o), r.push(h), s.push(u), n.push(o), n.push(h), n.push(u);
  t.sort(e), r.sort(e), s.sort(e), n.sort(e), this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
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
function Er() {
  return this.hours() % 12 || 12;
}
function gl() {
  return this.hours() || 24;
}
g("H", ["HH", 2], 0, "hour");
g("h", ["hh", 2], 0, Er);
g("k", ["kk", 2], 0, gl);
g("hmm", 0, 0, function() {
  return "" + Er.apply(this) + te(this.minutes(), 2);
});
g("hmmss", 0, 0, function() {
  return "" + Er.apply(this) + te(this.minutes(), 2) + te(this.seconds(), 2);
});
g("Hmm", 0, 0, function() {
  return "" + this.hours() + te(this.minutes(), 2);
});
g("Hmmss", 0, 0, function() {
  return "" + this.hours() + te(this.minutes(), 2) + te(this.seconds(), 2);
});
function tn(e, t) {
  g(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
tn("a", !0);
tn("A", !1);
F("hour", "h");
L("hour", 13);
function rn(e, t) {
  return t._meridiemParse;
}
y("a", rn);
y("A", rn);
y("H", R);
y("h", R);
y("k", R);
y("HH", R, j);
y("hh", R, j);
y("kk", R, j);
y("hmm", Vs);
y("hmmss", $s);
y("Hmm", Vs);
y("Hmmss", $s);
E(["H", "HH"], C);
E(["k", "kk"], function(e, t, r) {
  var s = b(e);
  t[C] = s === 24 ? 0 : s;
});
E(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
E(["h", "hh"], function(e, t, r) {
  t[C] = b(e), _(r).bigHour = !0;
});
E("hmm", function(e, t, r) {
  var s = e.length - 2;
  t[C] = b(e.substr(0, s)), t[G] = b(e.substr(s)), _(r).bigHour = !0;
});
E("hmmss", function(e, t, r) {
  var s = e.length - 4, n = e.length - 2;
  t[C] = b(e.substr(0, s)), t[G] = b(e.substr(s, 2)), t[ce] = b(e.substr(n)), _(r).bigHour = !0;
});
E("Hmm", function(e, t, r) {
  var s = e.length - 2;
  t[C] = b(e.substr(0, s)), t[G] = b(e.substr(s));
});
E("Hmmss", function(e, t, r) {
  var s = e.length - 4, n = e.length - 2;
  t[C] = b(e.substr(0, s)), t[G] = b(e.substr(s, 2)), t[ce] = b(e.substr(n));
});
function wl(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var _l = /[ap]\.?m?\.?/i, bl = Fe("Hours", !0);
function kl(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var sn = {
  calendar: uo,
  longDateFormat: po,
  invalidDate: yo,
  ordinal: wo,
  dayOfMonthOrdinalParse: _o,
  relativeTime: ko,
  months: Yo,
  monthsShort: Gs,
  week: zo,
  weekdays: tl,
  weekdaysMin: rl,
  weekdaysShort: en,
  meridiemParse: _l
}, x = {}, Ue = {}, ze;
function Sl(e, t) {
  var r, s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1)
    if (e[r] !== t[r])
      return r;
  return s;
}
function as(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function vl(e) {
  for (var t = 0, r, s, n, a; t < e.length; ) {
    for (a = as(e[t]).split("-"), r = a.length, s = as(e[t + 1]), s = s ? s.split("-") : null; r > 0; ) {
      if (n = Pt(a.slice(0, r).join("-")), n)
        return n;
      if (s && s.length >= r && Sl(a, s) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return ze;
}
function Ol(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Pt(e) {
  var t = null, r;
  if (x[e] === void 0 && typeof module < "u" && module && module.exports && Ol(e))
    try {
      t = ze._abbr, r = require, r("./locale/" + e), be(t);
    } catch {
      x[e] = null;
    }
  return x[e];
}
function be(e, t) {
  var r;
  return e && (U(t) ? r = pe(e) : r = Ar(e, t), r ? ze = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ze._abbr;
}
function Ar(e, t) {
  if (t !== null) {
    var r, s = sn;
    if (t.abbr = e, x[e] != null)
      Us(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), s = x[e]._config;
    else if (t.parentLocale != null)
      if (x[t.parentLocale] != null)
        s = x[t.parentLocale]._config;
      else if (r = Pt(t.parentLocale), r != null)
        s = r._config;
      else
        return Ue[t.parentLocale] || (Ue[t.parentLocale] = []), Ue[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return x[e] = new kr(ar(s, t)), Ue[e] && Ue[e].forEach(function(n) {
      Ar(n.name, n.config);
    }), be(e), x[e];
  } else
    return delete x[e], null;
}
function Tl(e, t) {
  if (t != null) {
    var r, s, n = sn;
    x[e] != null && x[e].parentLocale != null ? x[e].set(ar(x[e]._config, t)) : (s = Pt(e), s != null && (n = s._config), t = ar(n, t), s == null && (t.abbr = e), r = new kr(t), r.parentLocale = x[e], x[e] = r), be(e);
  } else
    x[e] != null && (x[e].parentLocale != null ? (x[e] = x[e].parentLocale, e === be() && be(e)) : x[e] != null && delete x[e]);
  return x[e];
}
function pe(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ze;
  if (!z(e)) {
    if (t = Pt(e), t)
      return t;
    e = [e];
  }
  return vl(e);
}
function Dl() {
  return ir(x);
}
function Rr(e) {
  var t, r = e._a;
  return r && _(e).overflow === -2 && (t = r[ue] < 0 || r[ue] > 11 ? ue : r[Q] < 1 || r[Q] > xt(r[Y], r[ue]) ? Q : r[C] < 0 || r[C] > 24 || r[C] === 24 && (r[G] !== 0 || r[ce] !== 0 || r[ve] !== 0) ? C : r[G] < 0 || r[G] > 59 ? G : r[ce] < 0 || r[ce] > 59 ? ce : r[ve] < 0 || r[ve] > 999 ? ve : -1, _(e)._overflowDayOfYear && (t < Y || t > Q) && (t = Q), _(e)._overflowWeeks && t === -1 && (t = Po), _(e)._overflowWeekday && t === -1 && (t = No), _(e).overflow = t), e;
}
var Ml = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, El = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Al = /Z|[+-]\d\d(?::?\d\d)?/, nt = [
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
], $t = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Rl = /^\/?Date\((-?\d+)/i, xl = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Pl = {
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
function nn(e) {
  var t, r, s = e._i, n = Ml.exec(s) || El.exec(s), a, i, o, h, u = nt.length, l = $t.length;
  if (n) {
    for (_(e).iso = !0, t = 0, r = u; t < r; t++)
      if (nt[t][1].exec(n[1])) {
        i = nt[t][0], a = nt[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, r = l; t < r; t++)
        if ($t[t][1].exec(n[3])) {
          o = (n[2] || " ") + $t[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && o != null) {
      e._isValid = !1;
      return;
    }
    if (n[4])
      if (Al.exec(n[4]))
        h = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (h || ""), Pr(e);
  } else
    e._isValid = !1;
}
function Nl(e, t, r, s, n, a) {
  var i = [
    Cl(e),
    Gs.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(n, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function Cl(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Yl(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Fl(e, t, r) {
  if (e) {
    var s = en.indexOf(e), n = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (s !== n)
      return _(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Ll(e, t, r) {
  if (e)
    return Pl[e];
  if (t)
    return 0;
  var s = parseInt(r, 10), n = s % 100, a = (s - n) / 100;
  return a * 60 + n;
}
function an(e) {
  var t = xl.exec(Yl(e._i)), r;
  if (t) {
    if (r = Nl(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Fl(t[1], r, e))
      return;
    e._a = r, e._tzm = Ll(t[8], t[9], t[10]), e._d = $e.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Il(e) {
  var t = Rl.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (nn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (an(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : m.createFromInputFallback(e);
}
m.createFromInputFallback = V(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Ee(e, t, r) {
  return e ?? t ?? r;
}
function Ul(e) {
  var t = new Date(m.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function xr(e) {
  var t, r, s = [], n, a, i;
  if (!e._d) {
    for (n = Ul(e), e._w && e._a[Q] == null && e._a[ue] == null && Wl(e), e._dayOfYear != null && (i = Ee(e._a[Y], n[Y]), (e._dayOfYear > He(i) || e._dayOfYear === 0) && (_(e)._overflowDayOfYear = !0), r = $e(i, 0, e._dayOfYear), e._a[ue] = r.getUTCMonth(), e._a[Q] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[C] === 24 && e._a[G] === 0 && e._a[ce] === 0 && e._a[ve] === 0 && (e._nextDay = !0, e._a[C] = 0), e._d = (e._useUTC ? $e : $o).apply(
      null,
      s
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[C] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (_(e).weekdayMismatch = !0);
  }
}
function Wl(e) {
  var t, r, s, n, a, i, o, h, u;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, r = Ee(
    t.GG,
    e._a[Y],
    Ge(A(), 1, 4).year
  ), s = Ee(t.W, 1), n = Ee(t.E, 1), (n < 1 || n > 7) && (h = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, u = Ge(A(), a, i), r = Ee(t.gg, e._a[Y], u.year), s = Ee(t.w, u.week), t.d != null ? (n = t.d, (n < 0 || n > 6) && (h = !0)) : t.e != null ? (n = t.e + a, (t.e < 0 || t.e > 6) && (h = !0)) : n = a), s < 1 || s > de(r, a, i) ? _(e)._overflowWeeks = !0 : h != null ? _(e)._overflowWeekday = !0 : (o = Xs(r, s, n, a, i), e._a[Y] = o.year, e._dayOfYear = o.dayOfYear);
}
m.ISO_8601 = function() {
};
m.RFC_2822 = function() {
};
function Pr(e) {
  if (e._f === m.ISO_8601) {
    nn(e);
    return;
  }
  if (e._f === m.RFC_2822) {
    an(e);
    return;
  }
  e._a = [], _(e).empty = !0;
  var t = "" + e._i, r, s, n, a, i, o = t.length, h = 0, u, l;
  for (n = Ws(e._f, e._locale).match(Sr) || [], l = n.length, r = 0; r < l; r++)
    a = n[r], s = (t.match(Ao(a, e)) || [])[0], s && (i = t.substr(0, t.indexOf(s)), i.length > 0 && _(e).unusedInput.push(i), t = t.slice(
      t.indexOf(s) + s.length
    ), h += s.length), xe[a] ? (s ? _(e).empty = !1 : _(e).unusedTokens.push(a), xo(a, s, e)) : e._strict && !s && _(e).unusedTokens.push(a);
  _(e).charsLeftOver = o - h, t.length > 0 && _(e).unusedInput.push(t), e._a[C] <= 12 && _(e).bigHour === !0 && e._a[C] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[C] = Bl(
    e._locale,
    e._a[C],
    e._meridiem
  ), u = _(e).era, u !== null && (e._a[Y] = e._locale.erasConvertYear(u, e._a[Y])), xr(e), Rr(e);
}
function Bl(e, t, r) {
  var s;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (s = e.isPM(r), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)), t);
}
function jl(e) {
  var t, r, s, n, a, i, o = !1, h = e._f.length;
  if (h === 0) {
    _(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (n = 0; n < h; n++)
    a = 0, i = !1, t = br({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[n], Pr(t), _r(t) && (i = !0), a += _(t).charsLeftOver, a += _(t).unusedTokens.length * 10, _(t).score = a, o ? a < s && (s = a, r = t) : (s == null || a < s || i) && (s = a, r = t, i && (o = !0));
  we(e, r || t);
}
function Hl(e) {
  if (!e._d) {
    var t = vr(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Ls(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(s) {
        return s && parseInt(s, 10);
      }
    ), xr(e);
  }
}
function ql(e) {
  var t = new Xe(Rr(on(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function on(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || pe(e._l), t === null || r === void 0 && t === "" ? Ot({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), K(t) ? new Xe(Rr(t)) : (Qe(t) ? e._d = t : z(r) ? jl(e) : r ? Pr(e) : Vl(e), _r(e) || (e._d = null), e));
}
function Vl(e) {
  var t = e._i;
  U(t) ? e._d = new Date(m.now()) : Qe(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Il(e) : z(t) ? (e._a = Ls(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), xr(e)) : Oe(t) ? Hl(e) : fe(t) ? e._d = new Date(t) : m.createFromInputFallback(e);
}
function ln(e, t, r, s, n) {
  var a = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (r === !0 || r === !1) && (s = r, r = void 0), (Oe(e) && wr(e) || z(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = n, a._l = r, a._i = e, a._f = t, a._strict = s, ql(a);
}
function A(e, t, r, s) {
  return ln(e, t, r, s, !1);
}
var $l = V(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = A.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ot();
  }
), Gl = V(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = A.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ot();
  }
);
function un(e, t) {
  var r, s;
  if (t.length === 1 && z(t[0]) && (t = t[0]), !t.length)
    return A();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function zl() {
  var e = [].slice.call(arguments, 0);
  return un("isBefore", e);
}
function Kl() {
  var e = [].slice.call(arguments, 0);
  return un("isAfter", e);
}
var Jl = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, We = [
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
function Zl(e) {
  var t, r = !1, s, n = We.length;
  for (t in e)
    if (O(e, t) && !(P.call(We, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < n; ++s)
    if (e[We[s]]) {
      if (r)
        return !1;
      parseFloat(e[We[s]]) !== b(e[We[s]]) && (r = !0);
    }
  return !0;
}
function Ql() {
  return this._isValid;
}
function Xl() {
  return J(NaN);
}
function Nt(e) {
  var t = vr(e), r = t.year || 0, s = t.quarter || 0, n = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, h = t.minute || 0, u = t.second || 0, l = t.millisecond || 0;
  this._isValid = Zl(t), this._milliseconds = +l + u * 1e3 + // 1000
  h * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +n + s * 3 + r * 12, this._data = {}, this._locale = pe(), this._bubble();
}
function ct(e) {
  return e instanceof Nt;
}
function lr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function eu(e, t, r) {
  var s = Math.min(e.length, t.length), n = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < s; i++)
    (r && e[i] !== t[i] || !r && b(e[i]) !== b(t[i])) && a++;
  return a + n;
}
function cn(e, t) {
  g(e, 0, 0, function() {
    var r = this.utcOffset(), s = "+";
    return r < 0 && (r = -r, s = "-"), s + te(~~(r / 60), 2) + t + te(~~r % 60, 2);
  });
}
cn("Z", ":");
cn("ZZ", "");
y("Z", Rt);
y("ZZ", Rt);
E(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Nr(Rt, e);
});
var tu = /([\+\-]|\d\d)/gi;
function Nr(e, t) {
  var r = (t || "").match(e), s, n, a;
  return r === null ? null : (s = r[r.length - 1] || [], n = (s + "").match(tu) || ["-", 0, 0], a = +(n[1] * 60) + b(n[2]), a === 0 ? 0 : n[0] === "+" ? a : -a);
}
function Cr(e, t) {
  var r, s;
  return t._isUTC ? (r = t.clone(), s = (K(e) || Qe(e) ? e.valueOf() : A(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + s), m.updateOffset(r, !1), r) : A(e).local();
}
function ur(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
m.updateOffset = function() {
};
function ru(e, t, r) {
  var s = this._offset || 0, n;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Nr(Rt, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (n = ur(this)), this._offset = e, this._isUTC = !0, n != null && this.add(n, "m"), s !== e && (!t || this._changeInProgress ? fn(
      this,
      J(e - s, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, m.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? s : ur(this);
}
function su(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function nu(e) {
  return this.utcOffset(0, e);
}
function au(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ur(this), "m")), this;
}
function iu() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Nr(Mo, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function ou(e) {
  return this.isValid() ? (e = e ? A(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function lu() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function uu() {
  if (!U(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return br(e, this), e = on(e), e._a ? (t = e._isUTC ? se(e._a) : A(e._a), this._isDSTShifted = this.isValid() && eu(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function cu() {
  return this.isValid() ? !this._isUTC : !1;
}
function hu() {
  return this.isValid() ? this._isUTC : !1;
}
function hn() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var du = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, fu = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function J(e, t) {
  var r = e, s = null, n, a, i;
  return ct(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : fe(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (s = du.exec(e)) ? (n = s[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: b(s[Q]) * n,
    h: b(s[C]) * n,
    m: b(s[G]) * n,
    s: b(s[ce]) * n,
    ms: b(lr(s[ve] * 1e3)) * n
    // the millisecond decimal point is included in the match
  }) : (s = fu.exec(e)) ? (n = s[1] === "-" ? -1 : 1, r = {
    y: Se(s[2], n),
    M: Se(s[3], n),
    w: Se(s[4], n),
    d: Se(s[5], n),
    h: Se(s[6], n),
    m: Se(s[7], n),
    s: Se(s[8], n)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = pu(
    A(r.from),
    A(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), a = new Nt(r), ct(e) && O(e, "_locale") && (a._locale = e._locale), ct(e) && O(e, "_isValid") && (a._isValid = e._isValid), a;
}
J.fn = Nt.prototype;
J.invalid = Xl;
function Se(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function is(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function pu(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Cr(t, e), e.isBefore(t) ? r = is(e, t) : (r = is(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function dn(e, t) {
  return function(r, s) {
    var n, a;
    return s !== null && !isNaN(+s) && (Us(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = s, s = a), n = J(r, s), fn(this, n, e), this;
  };
}
function fn(e, t, r, s) {
  var n = t._milliseconds, a = lr(t._days), i = lr(t._months);
  e.isValid() && (s = s ?? !0, i && Ks(e, ft(e, "Month") + i * r), a && js(e, "Date", ft(e, "Date") + a * r), n && e._d.setTime(e._d.valueOf() + n * r), s && m.updateOffset(e, a || i));
}
var mu = dn(1, "add"), yu = dn(-1, "subtract");
function pn(e) {
  return typeof e == "string" || e instanceof String;
}
function gu(e) {
  return K(e) || Qe(e) || pn(e) || fe(e) || _u(e) || wu(e) || e === null || e === void 0;
}
function wu(e) {
  var t = Oe(e) && !wr(e), r = !1, s = [
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
  ], n, a, i = s.length;
  for (n = 0; n < i; n += 1)
    a = s[n], r = r || O(e, a);
  return t && r;
}
function _u(e) {
  var t = z(e), r = !1;
  return t && (r = e.filter(function(s) {
    return !fe(s) && pn(e);
  }).length === 0), t && r;
}
function bu(e) {
  var t = Oe(e) && !wr(e), r = !1, s = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], n, a;
  for (n = 0; n < s.length; n += 1)
    a = s[n], r = r || O(e, a);
  return t && r;
}
function ku(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function Su(e, t) {
  arguments.length === 1 && (arguments[0] ? gu(arguments[0]) ? (e = arguments[0], t = void 0) : bu(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || A(), s = Cr(r, this).startOf("day"), n = m.calendarFormat(this, s) || "sameElse", a = t && (ne(t[n]) ? t[n].call(this, r) : t[n]);
  return this.format(
    a || this.localeData().calendar(n, this, A(r))
  );
}
function vu() {
  return new Xe(this);
}
function Ou(e, t) {
  var r = K(e) ? e : A(e);
  return this.isValid() && r.isValid() ? (t = $(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Tu(e, t) {
  var r = K(e) ? e : A(e);
  return this.isValid() && r.isValid() ? (t = $(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Du(e, t, r, s) {
  var n = K(e) ? e : A(e), a = K(t) ? t : A(t);
  return this.isValid() && n.isValid() && a.isValid() ? (s = s || "()", (s[0] === "(" ? this.isAfter(n, r) : !this.isBefore(n, r)) && (s[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function Mu(e, t) {
  var r = K(e) ? e : A(e), s;
  return this.isValid() && r.isValid() ? (t = $(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (s = r.valueOf(), this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1;
}
function Eu(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Au(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Ru(e, t, r) {
  var s, n, a;
  if (!this.isValid())
    return NaN;
  if (s = Cr(e, this), !s.isValid())
    return NaN;
  switch (n = (s.utcOffset() - this.utcOffset()) * 6e4, t = $(t), t) {
    case "year":
      a = ht(this, s) / 12;
      break;
    case "month":
      a = ht(this, s);
      break;
    case "quarter":
      a = ht(this, s) / 3;
      break;
    case "second":
      a = (this - s) / 1e3;
      break;
    case "minute":
      a = (this - s) / 6e4;
      break;
    case "hour":
      a = (this - s) / 36e5;
      break;
    case "day":
      a = (this - s - n) / 864e5;
      break;
    case "week":
      a = (this - s - n) / 6048e5;
      break;
    default:
      a = this - s;
  }
  return r ? a : H(a);
}
function ht(e, t) {
  if (e.date() < t.date())
    return -ht(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(r, "months"), n, a;
  return t - s < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - s) / (s - n)) : (n = e.clone().add(r + 1, "months"), a = (t - s) / (n - s)), -(r + a) || 0;
}
m.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
m.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function xu() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Pu(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? ut(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ne(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ut(r, "Z")) : ut(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Nu() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, s, n, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + s + n + a);
}
function Cu(e) {
  e || (e = this.isUtc() ? m.defaultFormatUtc : m.defaultFormat);
  var t = ut(this, e);
  return this.localeData().postformat(t);
}
function Yu(e, t) {
  return this.isValid() && (K(e) && e.isValid() || A(e).isValid()) ? J({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Fu(e) {
  return this.from(A(), e);
}
function Lu(e, t) {
  return this.isValid() && (K(e) && e.isValid() || A(e).isValid()) ? J({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Iu(e) {
  return this.to(A(), e);
}
function mn(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = pe(e), t != null && (this._locale = t), this);
}
var yn = V(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function gn() {
  return this._locale;
}
var yt = 1e3, Pe = 60 * yt, gt = 60 * Pe, wn = (365 * 400 + 97) * 24 * gt;
function Ne(e, t) {
  return (e % t + t) % t;
}
function _n(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - wn : new Date(e, t, r).valueOf();
}
function bn(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - wn : Date.UTC(e, t, r);
}
function Uu(e) {
  var t, r;
  if (e = $(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? bn : _n, e) {
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
      t = this._d.valueOf(), t -= Ne(
        t + (this._isUTC ? 0 : this.utcOffset() * Pe),
        gt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ne(t, Pe);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ne(t, yt);
      break;
  }
  return this._d.setTime(t), m.updateOffset(this, !0), this;
}
function Wu(e) {
  var t, r;
  if (e = $(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? bn : _n, e) {
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
      t = this._d.valueOf(), t += gt - Ne(
        t + (this._isUTC ? 0 : this.utcOffset() * Pe),
        gt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Pe - Ne(t, Pe) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += yt - Ne(t, yt) - 1;
      break;
  }
  return this._d.setTime(t), m.updateOffset(this, !0), this;
}
function Bu() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function ju() {
  return Math.floor(this.valueOf() / 1e3);
}
function Hu() {
  return new Date(this.valueOf());
}
function qu() {
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
function Vu() {
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
function $u() {
  return this.isValid() ? this.toISOString() : null;
}
function Gu() {
  return _r(this);
}
function zu() {
  return we({}, _(this));
}
function Ku() {
  return _(this).overflow;
}
function Ju() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
g("N", 0, 0, "eraAbbr");
g("NN", 0, 0, "eraAbbr");
g("NNN", 0, 0, "eraAbbr");
g("NNNN", 0, 0, "eraName");
g("NNNNN", 0, 0, "eraNarrow");
g("y", ["y", 1], "yo", "eraYear");
g("y", ["yy", 2], 0, "eraYear");
g("y", ["yyy", 3], 0, "eraYear");
g("y", ["yyyy", 4], 0, "eraYear");
y("N", Yr);
y("NN", Yr);
y("NNN", Yr);
y("NNNN", oc);
y("NNNNN", lc);
E(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, s) {
    var n = r._locale.erasParse(e, s, r._strict);
    n ? _(r).era = n : _(r).invalidEra = e;
  }
);
y("y", Le);
y("yy", Le);
y("yyy", Le);
y("yyyy", Le);
y("yo", uc);
E(["y", "yy", "yyy", "yyyy"], Y);
E(["yo"], function(e, t, r, s) {
  var n;
  r._locale._eraYearOrdinalRegex && (n = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[Y] = r._locale.eraYearOrdinalParse(e, n) : t[Y] = parseInt(e, 10);
});
function Zu(e, t) {
  var r, s, n, a = this._eras || pe("en")._eras;
  for (r = 0, s = a.length; r < s; ++r) {
    switch (typeof a[r].since) {
      case "string":
        n = m(a[r].since).startOf("day"), a[r].since = n.valueOf();
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        n = m(a[r].until).startOf("day").valueOf(), a[r].until = n.valueOf();
        break;
    }
  }
  return a;
}
function Qu(e, t, r) {
  var s, n, a = this.eras(), i, o, h;
  for (e = e.toUpperCase(), s = 0, n = a.length; s < n; ++s)
    if (i = a[s].name.toUpperCase(), o = a[s].abbr.toUpperCase(), h = a[s].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return a[s];
          break;
        case "NNNN":
          if (i === e)
            return a[s];
          break;
        case "NNNNN":
          if (h === e)
            return a[s];
          break;
      }
    else if ([i, o, h].indexOf(e) >= 0)
      return a[s];
}
function Xu(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? m(e.since).year() : m(e.since).year() + (t - e.offset) * r;
}
function ec() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].name;
  return "";
}
function tc() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].narrow;
  return "";
}
function rc() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].abbr;
  return "";
}
function sc() {
  var e, t, r, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = n[e].since <= n[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return (this.year() - m(n[e].since).year()) * r + n[e].offset;
  return this.year();
}
function nc(e) {
  return O(this, "_erasNameRegex") || Fr.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function ac(e) {
  return O(this, "_erasAbbrRegex") || Fr.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function ic(e) {
  return O(this, "_erasNarrowRegex") || Fr.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Yr(e, t) {
  return t.erasAbbrRegex(e);
}
function oc(e, t) {
  return t.erasNameRegex(e);
}
function lc(e, t) {
  return t.erasNarrowRegex(e);
}
function uc(e, t) {
  return t._eraYearOrdinalRegex || Le;
}
function Fr() {
  var e = [], t = [], r = [], s = [], n, a, i = this.eras();
  for (n = 0, a = i.length; n < a; ++n)
    t.push(B(i[n].name)), e.push(B(i[n].abbr)), r.push(B(i[n].narrow)), s.push(B(i[n].name)), s.push(B(i[n].abbr)), s.push(B(i[n].narrow));
  this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
g(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
g(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ct(e, t) {
  g(0, [e, e.length], 0, t);
}
Ct("gggg", "weekYear");
Ct("ggggg", "weekYear");
Ct("GGGG", "isoWeekYear");
Ct("GGGGG", "isoWeekYear");
F("weekYear", "gg");
F("isoWeekYear", "GG");
L("weekYear", 1);
L("isoWeekYear", 1);
y("G", At);
y("g", At);
y("GG", R, j);
y("gg", R, j);
y("GGGG", Tr, Or);
y("gggg", Tr, Or);
y("GGGGG", Et, Dt);
y("ggggg", Et, Dt);
tt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, s) {
    t[s.substr(0, 2)] = b(e);
  }
);
tt(["gg", "GG"], function(e, t, r, s) {
  t[s] = m.parseTwoDigitYear(e);
});
function cc(e) {
  return kn.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function hc(e) {
  return kn.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function dc() {
  return de(this.year(), 1, 4);
}
function fc() {
  return de(this.isoWeekYear(), 1, 4);
}
function pc() {
  var e = this.localeData()._week;
  return de(this.year(), e.dow, e.doy);
}
function mc() {
  var e = this.localeData()._week;
  return de(this.weekYear(), e.dow, e.doy);
}
function kn(e, t, r, s, n) {
  var a;
  return e == null ? Ge(this, s, n).year : (a = de(e, s, n), t > a && (t = a), yc.call(this, e, t, r, s, n));
}
function yc(e, t, r, s, n) {
  var a = Xs(e, t, r, s, n), i = $e(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
g("Q", 0, "Qo", "quarter");
F("quarter", "Q");
L("quarter", 7);
y("Q", Hs);
E("Q", function(e, t) {
  t[ue] = (b(e) - 1) * 3;
});
function gc(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
g("D", ["DD", 2], "Do", "date");
F("date", "D");
L("date", 9);
y("D", R);
y("DD", R, j);
y("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
E(["D", "DD"], Q);
E("Do", function(e, t) {
  t[Q] = b(e.match(R)[0]);
});
var Sn = Fe("Date", !0);
g("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
F("dayOfYear", "DDD");
L("dayOfYear", 4);
y("DDD", Mt);
y("DDDD", qs);
E(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = b(e);
});
function wc(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
g("m", ["mm", 2], 0, "minute");
F("minute", "m");
L("minute", 14);
y("m", R);
y("mm", R, j);
E(["m", "mm"], G);
var _c = Fe("Minutes", !1);
g("s", ["ss", 2], 0, "second");
F("second", "s");
L("second", 15);
y("s", R);
y("ss", R, j);
E(["s", "ss"], ce);
var bc = Fe("Seconds", !1);
g("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
g(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
g(0, ["SSS", 3], 0, "millisecond");
g(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
g(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
g(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
g(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
g(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
g(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
F("millisecond", "ms");
L("millisecond", 16);
y("S", Mt, Hs);
y("SS", Mt, j);
y("SSS", Mt, qs);
var _e, vn;
for (_e = "SSSS"; _e.length <= 9; _e += "S")
  y(_e, Le);
function kc(e, t) {
  t[ve] = b(("0." + e) * 1e3);
}
for (_e = "S"; _e.length <= 9; _e += "S")
  E(_e, kc);
vn = Fe("Milliseconds", !1);
g("z", 0, 0, "zoneAbbr");
g("zz", 0, 0, "zoneName");
function Sc() {
  return this._isUTC ? "UTC" : "";
}
function vc() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var f = Xe.prototype;
f.add = mu;
f.calendar = Su;
f.clone = vu;
f.diff = Ru;
f.endOf = Wu;
f.format = Cu;
f.from = Yu;
f.fromNow = Fu;
f.to = Lu;
f.toNow = Iu;
f.get = To;
f.invalidAt = Ku;
f.isAfter = Ou;
f.isBefore = Tu;
f.isBetween = Du;
f.isSame = Mu;
f.isSameOrAfter = Eu;
f.isSameOrBefore = Au;
f.isValid = Gu;
f.lang = yn;
f.locale = mn;
f.localeData = gn;
f.max = Gl;
f.min = $l;
f.parsingFlags = zu;
f.set = Do;
f.startOf = Uu;
f.subtract = yu;
f.toArray = qu;
f.toObject = Vu;
f.toDate = Hu;
f.toISOString = Pu;
f.inspect = Nu;
typeof Symbol < "u" && Symbol.for != null && (f[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
f.toJSON = $u;
f.toString = xu;
f.unix = ju;
f.valueOf = Bu;
f.creationData = Ju;
f.eraName = ec;
f.eraNarrow = tc;
f.eraAbbr = rc;
f.eraYear = sc;
f.year = Qs;
f.isLeapYear = Vo;
f.weekYear = cc;
f.isoWeekYear = hc;
f.quarter = f.quarters = gc;
f.month = Js;
f.daysInMonth = jo;
f.week = f.weeks = Zo;
f.isoWeek = f.isoWeeks = Qo;
f.weeksInYear = pc;
f.weeksInWeekYear = mc;
f.isoWeeksInYear = dc;
f.isoWeeksInISOWeekYear = fc;
f.date = Sn;
f.day = f.days = hl;
f.weekday = dl;
f.isoWeekday = fl;
f.dayOfYear = wc;
f.hour = f.hours = bl;
f.minute = f.minutes = _c;
f.second = f.seconds = bc;
f.millisecond = f.milliseconds = vn;
f.utcOffset = ru;
f.utc = nu;
f.local = au;
f.parseZone = iu;
f.hasAlignedHourOffset = ou;
f.isDST = lu;
f.isLocal = cu;
f.isUtcOffset = hu;
f.isUtc = hn;
f.isUTC = hn;
f.zoneAbbr = Sc;
f.zoneName = vc;
f.dates = V(
  "dates accessor is deprecated. Use date instead.",
  Sn
);
f.months = V(
  "months accessor is deprecated. Use month instead",
  Js
);
f.years = V(
  "years accessor is deprecated. Use year instead",
  Qs
);
f.zone = V(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  su
);
f.isDSTShifted = V(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  uu
);
function Oc(e) {
  return A(e * 1e3);
}
function Tc() {
  return A.apply(null, arguments).parseZone();
}
function On(e) {
  return e;
}
var T = kr.prototype;
T.calendar = co;
T.longDateFormat = mo;
T.invalidDate = go;
T.ordinal = bo;
T.preparse = On;
T.postformat = On;
T.relativeTime = So;
T.pastFuture = vo;
T.set = lo;
T.eras = Zu;
T.erasParse = Qu;
T.erasConvertYear = Xu;
T.erasAbbrRegex = ac;
T.erasNameRegex = nc;
T.erasNarrowRegex = ic;
T.months = Io;
T.monthsShort = Uo;
T.monthsParse = Bo;
T.monthsRegex = qo;
T.monthsShortRegex = Ho;
T.week = Go;
T.firstDayOfYear = Jo;
T.firstDayOfWeek = Ko;
T.weekdays = il;
T.weekdaysMin = ll;
T.weekdaysShort = ol;
T.weekdaysParse = cl;
T.weekdaysRegex = pl;
T.weekdaysShortRegex = ml;
T.weekdaysMinRegex = yl;
T.isPM = wl;
T.meridiem = kl;
function wt(e, t, r, s) {
  var n = pe(), a = se().set(s, t);
  return n[r](a, e);
}
function Tn(e, t, r) {
  if (fe(e) && (t = e, e = void 0), e = e || "", t != null)
    return wt(e, t, r, "month");
  var s, n = [];
  for (s = 0; s < 12; s++)
    n[s] = wt(e, s, r, "month");
  return n;
}
function Lr(e, t, r, s) {
  typeof e == "boolean" ? (fe(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, fe(t) && (r = t, t = void 0), t = t || "");
  var n = pe(), a = e ? n._week.dow : 0, i, o = [];
  if (r != null)
    return wt(t, (r + a) % 7, s, "day");
  for (i = 0; i < 7; i++)
    o[i] = wt(t, (i + a) % 7, s, "day");
  return o;
}
function Dc(e, t) {
  return Tn(e, t, "months");
}
function Mc(e, t) {
  return Tn(e, t, "monthsShort");
}
function Ec(e, t, r) {
  return Lr(e, t, r, "weekdays");
}
function Ac(e, t, r) {
  return Lr(e, t, r, "weekdaysShort");
}
function Rc(e, t, r) {
  return Lr(e, t, r, "weekdaysMin");
}
be("en", {
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
    var t = e % 10, r = b(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
m.lang = V(
  "moment.lang is deprecated. Use moment.locale instead.",
  be
);
m.langData = V(
  "moment.langData is deprecated. Use moment.localeData instead.",
  pe
);
var ie = Math.abs;
function xc() {
  var e = this._data;
  return this._milliseconds = ie(this._milliseconds), this._days = ie(this._days), this._months = ie(this._months), e.milliseconds = ie(e.milliseconds), e.seconds = ie(e.seconds), e.minutes = ie(e.minutes), e.hours = ie(e.hours), e.months = ie(e.months), e.years = ie(e.years), this;
}
function Dn(e, t, r, s) {
  var n = J(t, r);
  return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble();
}
function Pc(e, t) {
  return Dn(this, e, t, 1);
}
function Nc(e, t) {
  return Dn(this, e, t, -1);
}
function os(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Cc() {
  var e = this._milliseconds, t = this._days, r = this._months, s = this._data, n, a, i, o, h;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += os(cr(r) + t) * 864e5, t = 0, r = 0), s.milliseconds = e % 1e3, n = H(e / 1e3), s.seconds = n % 60, a = H(n / 60), s.minutes = a % 60, i = H(a / 60), s.hours = i % 24, t += H(i / 24), h = H(Mn(t)), r += h, t -= os(cr(h)), o = H(r / 12), r %= 12, s.days = t, s.months = r, s.years = o, this;
}
function Mn(e) {
  return e * 4800 / 146097;
}
function cr(e) {
  return e * 146097 / 4800;
}
function Yc(e) {
  if (!this.isValid())
    return NaN;
  var t, r, s = this._milliseconds;
  if (e = $(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + s / 864e5, r = this._months + Mn(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(cr(this._months)), e) {
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
function Fc() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + b(this._months / 12) * 31536e6 : NaN;
}
function me(e) {
  return function() {
    return this.as(e);
  };
}
var Lc = me("ms"), Ic = me("s"), Uc = me("m"), Wc = me("h"), Bc = me("d"), jc = me("w"), Hc = me("M"), qc = me("Q"), Vc = me("y");
function $c() {
  return J(this);
}
function Gc(e) {
  return e = $(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Te(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var zc = Te("milliseconds"), Kc = Te("seconds"), Jc = Te("minutes"), Zc = Te("hours"), Qc = Te("days"), Xc = Te("months"), eh = Te("years");
function th() {
  return H(this.days() / 7);
}
var oe = Math.round, Ae = {
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
function rh(e, t, r, s, n) {
  return n.relativeTime(t || 1, !!r, e, s);
}
function sh(e, t, r, s) {
  var n = J(e).abs(), a = oe(n.as("s")), i = oe(n.as("m")), o = oe(n.as("h")), h = oe(n.as("d")), u = oe(n.as("M")), l = oe(n.as("w")), w = oe(n.as("y")), k = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || i <= 1 && ["m"] || i < r.m && ["mm", i] || o <= 1 && ["h"] || o < r.h && ["hh", o] || h <= 1 && ["d"] || h < r.d && ["dd", h];
  return r.w != null && (k = k || l <= 1 && ["w"] || l < r.w && ["ww", l]), k = k || u <= 1 && ["M"] || u < r.M && ["MM", u] || w <= 1 && ["y"] || ["yy", w], k[2] = t, k[3] = +e > 0, k[4] = s, rh.apply(null, k);
}
function nh(e) {
  return e === void 0 ? oe : typeof e == "function" ? (oe = e, !0) : !1;
}
function ah(e, t) {
  return Ae[e] === void 0 ? !1 : t === void 0 ? Ae[e] : (Ae[e] = t, e === "s" && (Ae.ss = t - 1), !0);
}
function ih(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, s = Ae, n, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (s = Object.assign({}, Ae, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), n = this.localeData(), a = sh(this, !r, s, n), r && (a = n.pastFuture(+this, a)), n.postformat(a);
}
var Gt = Math.abs;
function De(e) {
  return (e > 0) - (e < 0) || +e;
}
function Yt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Gt(this._milliseconds) / 1e3, t = Gt(this._days), r = Gt(this._months), s, n, a, i, o = this.asSeconds(), h, u, l, w;
  return o ? (s = H(e / 60), n = H(s / 60), e %= 60, s %= 60, a = H(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", h = o < 0 ? "-" : "", u = De(this._months) !== De(o) ? "-" : "", l = De(this._days) !== De(o) ? "-" : "", w = De(this._milliseconds) !== De(o) ? "-" : "", h + "P" + (a ? u + a + "Y" : "") + (r ? u + r + "M" : "") + (t ? l + t + "D" : "") + (n || s || e ? "T" : "") + (n ? w + n + "H" : "") + (s ? w + s + "M" : "") + (e ? w + i + "S" : "")) : "P0D";
}
var v = Nt.prototype;
v.isValid = Ql;
v.abs = xc;
v.add = Pc;
v.subtract = Nc;
v.as = Yc;
v.asMilliseconds = Lc;
v.asSeconds = Ic;
v.asMinutes = Uc;
v.asHours = Wc;
v.asDays = Bc;
v.asWeeks = jc;
v.asMonths = Hc;
v.asQuarters = qc;
v.asYears = Vc;
v.valueOf = Fc;
v._bubble = Cc;
v.clone = $c;
v.get = Gc;
v.milliseconds = zc;
v.seconds = Kc;
v.minutes = Jc;
v.hours = Zc;
v.days = Qc;
v.weeks = th;
v.months = Xc;
v.years = eh;
v.humanize = ih;
v.toISOString = Yt;
v.toString = Yt;
v.toJSON = Yt;
v.locale = mn;
v.localeData = gn;
v.toIsoString = V(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Yt
);
v.lang = yn;
g("X", 0, 0, "unix");
g("x", 0, 0, "valueOf");
y("x", At);
y("X", Eo);
E("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
E("x", function(e, t, r) {
  r._d = new Date(b(e));
});
//! moment.js
m.version = "2.29.4";
io(A);
m.fn = f;
m.min = zl;
m.max = Kl;
m.now = Jl;
m.utc = se;
m.unix = Oc;
m.months = Dc;
m.isDate = Qe;
m.locale = be;
m.invalid = Ot;
m.duration = J;
m.isMoment = K;
m.weekdays = Ec;
m.parseZone = Tc;
m.localeData = pe;
m.isDuration = ct;
m.monthsShort = Mc;
m.weekdaysMin = Rc;
m.defineLocale = Ar;
m.updateLocale = Tl;
m.locales = Dl;
m.weekdaysShort = Ac;
m.normalizeUnits = $;
m.relativeTimeRounding = nh;
m.relativeTimeThreshold = ah;
m.calendarFormat = ku;
m.prototype = f;
m.HTML5_FMT = {
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
function oh(e) {
  return e.split(`
`).filter((t) => t.trim().length > 0).map((t) => JSON.parse(t));
}
function lh(e) {
  return e.map((t) => JSON.stringify(t)).join(`
`);
}
const uh = {
  parse: oh,
  stringify: lh
};
class Ke {
  // 缓存文件文本
  constructor(t, r, s = void 0) {
    ae(this, "filepath");
    // 缓存文件路径
    ae(this, "data", []);
    // 缓存的数据
    ae(this, "lines", []);
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
    return `${m(t).format(r)}.${s}`;
  }
  /* 初始化 */
  init(t = Ke.buildCacheFileName()) {
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
      return this.clear(), this.push(...uh.parse(s)), !0;
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
      return t && Ke.buildCacheFileName() !== this.filename && this.init(), s;
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
async function ch(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const I = ao, hh = new so(`${self.name}-worker:${ee.WAKATIME_WORKER_FILE_NAME}`), ke = new Ji(
  {
    baseURL: no(self.location.pathname, `plugins/${self.name}/workers/${ee.WAKATIME_WORKER_FILE_NAME}.js`)
  },
  "fetch"
), En = /* @__PURE__ */ new Map(), qe = new Ke(ke, ee.OFFLINE_CACHE_PATH), at = [], Re = {
  heartbeat: 0,
  // 心跳定时器
  cacheCheck: 0
  // 缓存检查定时器
}, M = {
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
async function dh(e = ee.OFFLINE_CACHE_PATH) {
  return ke.putFile({
    isDir: !0,
    path: e
  });
}
function fh(e = I.wakatime.interval) {
  clearInterval(Re.heartbeat), Re.heartbeat = setInterval(An, e * 1e3), clearInterval(Re.cacheCheck), Re.cacheCheck = setInterval(yh, ee.CACHE_CHECK_INTERVAL);
}
function ph() {
  M.includeID = bh(), M.excludeID = Sh(), M.include = kh(), M.exclude = vh();
}
async function mh() {
  const t = (await ke.lsNotebooks()).data.notebooks;
  return t.forEach((r) => En.set(r.id, r)), t;
}
async function An() {
  const e = Array.from(M.roots.values());
  M.blocks.clear(), M.roots.clear();
  const t = e.filter((n) => {
    const a = `${n.box}${n.path}`;
    return ls(
      a,
      M.includeID,
      M.excludeID
    );
  }), s = (await wh(t)).filter((n) => {
    const a = n.entity;
    return ls(
      a,
      M.include,
      M.exclude
    );
  });
  if (M.actions.push(...s), M.actions.length > 0) {
    const n = M.actions.slice();
    M.actions.length = 0;
    const a = [];
    for (let i = 0; i < n.length; i += ee.WAKATIME_HEARTBEATS_BULK)
      a.push(Rn(n.slice(i, i + ee.WAKATIME_HEARTBEATS_BULK)));
    if (I.wakatime.heartbeats)
      for (const i of a)
        await xn(
          i,
          (o) => {
            I.wakatime.offline && qe.push(o.payload);
          }
        );
    else
      I.wakatime.offline && qe.push(...a.map((i) => i.payload));
    await qe.save();
  }
}
async function yh() {
  const e = await qe.getAllCacheFileName();
  if (at.length = 0, at.push(...e.map((t) => new Ke(
    ke,
    ee.OFFLINE_CACHE_PATH,
    t
  ))), at.length > 0)
    for (const t of at)
      if (I.wakatime.heartbeats) {
        await t.load();
        const r = [];
        for (let s = 0; s < t.length; ++s) {
          const n = t.at(s);
          if (await xn(
            Rn(n),
            (a) => r.push(a.payload)
          ), s === 0 && r.length > 0)
            return;
          await ch(ee.CACHE_COMMIT_INTERVAL);
        }
        if (r.length > 0) {
          t.clear(), t.push(...r), await t.save();
          return;
        } else
          await t.remove();
      } else
        return;
}
async function gh(e, t, r) {
  var a;
  const s = I.wakatime.hide_branch_names ? e.box : (a = En.get(e.box)) == null ? void 0 : a.name, n = I.wakatime.hide_file_names ? `${s}${e.path}` : `${s}${(await ke.getHPathByPath({
    path: e.path,
    notebook: e.box
  })).data}.sy`;
  return {
    type: Ys.File,
    category: r ? I.wakatime.edit.category : I.wakatime.view.category,
    project: M.project,
    branch: s,
    entity: n,
    language: M.language,
    time: t,
    is_write: r
  };
}
async function wh(e) {
  return Promise.all(e.flatMap((t) => t.events.map((r) => gh(
    t,
    r.time,
    r.is_write
  ))));
}
function Rn(e) {
  return {
    url: Array.isArray(e) ? `${M.url}.bulk` : M.url,
    method: M.method,
    headers: [
      M.headers
    ],
    timeout: I.wakatime.timeout * 1e3,
    payload: e
  };
}
async function xn(e, t) {
  try {
    const r = await ke.forwardProxy(e);
    return 200 <= r.data.status && r.data.status < 300 || t(e), r;
  } catch {
    t(e);
  }
}
function ls(e, t, r) {
  if (t.length > 0) {
    let s = !1;
    for (const n of t)
      if (typeof n == "string") {
        if (e.includes(n)) {
          s = !0;
          break;
        }
      } else if (n instanceof RegExp && n.test(e)) {
        s = !0;
        break;
      }
    if (!s)
      return !1;
  }
  if (r.length > 0) {
    let s = !0;
    for (const n of r)
      if (typeof n == "string") {
        if (e.includes(n)) {
          s = !1;
          break;
        }
      } else if (n instanceof RegExp && n.test(e)) {
        s = !1;
        break;
      }
    return s;
  }
  return !0;
}
function _h(e = /* @__PURE__ */ new Date()) {
  return e.getTime() / 1e3;
}
function Pn() {
  return _h();
}
function bh() {
  return Ft(I.wakatime.includeID);
}
function kh() {
  return Ft(I.wakatime.include);
}
function Sh() {
  return Ft(I.wakatime.excludeID);
}
function vh() {
  return Ft(I.wakatime.exclude);
}
function Ft(e) {
  return e.filter((t) => {
    if (t = t.trim(), t !== "" && t !== "//") {
      if (t.startsWith("/") && t.endsWith("/"))
        try {
          return new RegExp(t.slice(1, -1)), !0;
        } catch (r) {
          return ke.pushErrMsg({ msg: r }), !1;
        }
      return !0;
    } else
      return !1;
  }).map((t) => t.startsWith("/") && t.endsWith("/") ? new RegExp(t.slice(1, -1)) : t);
}
function Nn(e) {
  var r;
  let t = M.roots.get(e.id);
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
    }, M.roots.set(e.id, t);
  return t;
}
async function Oh() {
  await dh(), await qe.load(), await mh();
}
async function Th() {
  clearInterval(Re.heartbeat), clearInterval(Re.cacheCheck), await An();
}
function Dh() {
  fh(), ph();
}
function Mh(e, t) {
  Object.assign(I, e), Object.assign(M, t);
}
function Eh(e) {
  const t = Pn();
  M.blocks.set(e.id, e.id), Nn({
    ...e,
    time: t,
    is_write: !1
  });
}
async function Ah(e) {
  try {
    const t = Pn();
    let r = M.blocks.get(e), s = r && M.roots.get(r);
    if (!s) {
      const n = await ke.getBlockInfo({ id: e });
      r = n.data.rootID, s = {
        id: r,
        box: n.data.box,
        path: n.data.path,
        events: []
      }, M.blocks.set(e, r), M.roots.set(r, s);
    }
    Nn({
      id: s.id,
      box: s.box,
      path: s.path,
      time: t,
      is_write: !0
    });
  } catch (t) {
    if (t instanceof Jt)
      return;
    throw t;
  }
}
const Rh = {
  onload: {
    this: self,
    func: Oh
  },
  unload: {
    this: self,
    func: Th
  },
  restart: {
    this: self,
    func: Dh
  },
  updateConfig: {
    this: self,
    func: Mh
  },
  addViewEvent: {
    this: self,
    func: Eh
  },
  addEditEvent: {
    this: self,
    func: Ah
  }
}, xh = new BroadcastChannel(ee.WAKATIME_WORKER_BROADCAST_CHANNEL_NAME);
new ro(
  xh,
  hh,
  Rh
);
export {
  Ah as addEditEvent,
  Eh as addViewEvent,
  Oh as onload,
  Dh as restart,
  Th as unload,
  Mh as updateConfig
};
