var Es = Object.defineProperty;
var Rs = (e, t, r) => t in e ? Es(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Qe = (e, t, r) => (Rs(e, typeof t != "symbol" ? t + "" : t, r), r);
var xs = Object.defineProperty, Ps = (e, t, r) => t in e ? xs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, me = (e, t, r) => (Ps(e, typeof t != "symbol" ? t + "" : t, r), r);
function tn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ns } = Object.prototype, { getPrototypeOf: or } = Object, yt = ((e) => (t) => {
  const r = Ns.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ee = (e) => (e = e.toLowerCase(), (t) => yt(t) === e), gt = (e) => (t) => typeof t === e, { isArray: Ne } = Array, Be = gt("undefined");
function As(e) {
  return e !== null && !Be(e) && e.constructor !== null && !Be(e.constructor) && H(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const rn = ee("ArrayBuffer");
function Ys(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && rn(e.buffer), t;
}
const Cs = gt("string"), H = gt("function"), nn = gt("number"), _t = (e) => e !== null && typeof e == "object", Fs = (e) => e === !0 || e === !1, rt = (e) => {
  if (yt(e) !== "object")
    return !1;
  const t = or(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ls = ee("Date"), Is = ee("File"), Us = ee("Blob"), Ws = ee("FileList"), Bs = (e) => _t(e) && H(e.pipe), js = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || H(e.append) && ((t = yt(e)) === "formdata" || // detect form-data instance
  t === "object" && H(e.toString) && e.toString() === "[object FormData]"));
}, Hs = ee("URLSearchParams"), qs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ge(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), Ne(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let u;
    for (n = 0; n < i; n++)
      u = a[n], t.call(null, e[u], u, e);
  }
}
function sn(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const an = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), on = (e) => !Be(e) && e !== an;
function Gt() {
  const { caseless: e } = on(this) && this || {}, t = {}, r = (n, s) => {
    const a = e && sn(t, s) || s;
    rt(t[a]) && rt(n) ? t[a] = Gt(t[a], n) : rt(n) ? t[a] = Gt({}, n) : Ne(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Ge(arguments[n], r);
  return t;
}
const Vs = (e, t, r, { allOwnKeys: n } = {}) => (Ge(t, (s, a) => {
  r && H(s) ? e[a] = tn(s, r) : e[a] = s;
}, { allOwnKeys: n }), e), Gs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), $s = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, zs = (e, t, r, n) => {
  let s, a, i;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      i = s[a], (!n || n(i, e, t)) && !u[i] && (t[i] = e[i], u[i] = !0);
    e = r !== !1 && or(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Ks = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Js = (e) => {
  if (!e)
    return null;
  if (Ne(e))
    return e;
  let t = e.length;
  if (!nn(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Zs = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && or(Uint8Array)), Qs = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let n;
  for (; (n = r.next()) && !n.done; ) {
    const s = n.value;
    t.call(e, s[0], s[1]);
  }
}, Xs = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, ea = ee("HTMLFormElement"), ta = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, n) {
    return r.toUpperCase() + n;
  }
), Nr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), ra = ee("RegExp"), ln = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ge(r, (s, a) => {
    t(s, a, e) !== !1 && (n[a] = s);
  }), Object.defineProperties(e, n);
}, na = (e) => {
  ln(e, (t, r) => {
    if (H(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (H(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, sa = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((a) => {
      r[a] = !0;
    });
  };
  return Ne(e) ? n(e) : n(String(e).split(t)), r;
}, aa = () => {
}, ia = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ft = "abcdefghijklmnopqrstuvwxyz", Ar = "0123456789", un = {
  DIGIT: Ar,
  ALPHA: Ft,
  ALPHA_DIGIT: Ft + Ft.toUpperCase() + Ar
}, oa = (e = 16, t = un.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function la(e) {
  return !!(e && H(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ua = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (_t(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const a = Ne(n) ? [] : {};
        return Ge(n, (i, u) => {
          const o = r(i, s + 1);
          !Be(o) && (a[u] = o);
        }), t[s] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, ca = ee("AsyncFunction"), ha = (e) => e && (_t(e) || H(e)) && H(e.then) && H(e.catch), c = {
  isArray: Ne,
  isArrayBuffer: rn,
  isBuffer: As,
  isFormData: js,
  isArrayBufferView: Ys,
  isString: Cs,
  isNumber: nn,
  isBoolean: Fs,
  isObject: _t,
  isPlainObject: rt,
  isUndefined: Be,
  isDate: Ls,
  isFile: Is,
  isBlob: Us,
  isRegExp: ra,
  isFunction: H,
  isStream: Bs,
  isURLSearchParams: Hs,
  isTypedArray: Zs,
  isFileList: Ws,
  forEach: Ge,
  merge: Gt,
  extend: Vs,
  trim: qs,
  stripBOM: Gs,
  inherits: $s,
  toFlatObject: zs,
  kindOf: yt,
  kindOfTest: ee,
  endsWith: Ks,
  toArray: Js,
  forEachEntry: Qs,
  matchAll: Xs,
  isHTMLForm: ea,
  hasOwnProperty: Nr,
  hasOwnProp: Nr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ln,
  freezeMethods: na,
  toObjectSet: sa,
  toCamelCase: ta,
  noop: aa,
  toFiniteNumber: ia,
  findKey: sn,
  global: an,
  isContextDefined: on,
  ALPHABET: un,
  generateString: oa,
  isSpecCompliantForm: la,
  toJSONObject: ua,
  isAsyncFn: ca,
  isThenable: ha
};
function O(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
c.inherits(O, Error, {
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
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const cn = O.prototype, hn = {};
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
  hn[e] = { value: e };
});
Object.defineProperties(O, hn);
Object.defineProperty(cn, "isAxiosError", { value: !0 });
O.from = (e, t, r, n, s, a) => {
  const i = Object.create(cn);
  return c.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (u) => u !== "isAxiosError"), O.call(i, e.message, t, r, n, s), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
const da = null;
function $t(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function dn(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Yr(e, t, r) {
  return e ? e.concat(t).map(function(n, s) {
    return n = dn(n), !r && s ? "[" + n + "]" : n;
  }).join(r ? "." : "") : t;
}
function fa(e) {
  return c.isArray(e) && !e.some($t);
}
const pa = c.toFlatObject(c, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function wt(e, t, r) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = c.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, x) {
    return !c.isUndefined(x[y]);
  });
  const n = r.metaTokens, s = r.visitor || d, a = r.dots, i = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function o(y) {
    if (y === null)
      return "";
    if (c.isDate(y))
      return y.toISOString();
    if (!u && c.isBlob(y))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(y) || c.isTypedArray(y) ? u && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function d(y, x, ne) {
    let fe = y;
    if (y && !ne && typeof y == "object") {
      if (c.endsWith(x, "{}"))
        x = n ? x : x.slice(0, -2), y = JSON.stringify(y);
      else if (c.isArray(y) && fa(y) || (c.isFileList(y) || c.endsWith(x, "[]")) && (fe = c.toArray(y)))
        return x = dn(x), fe.forEach(function(Ct, Ms) {
          !(c.isUndefined(Ct) || Ct === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Yr([x], Ms, a) : i === null ? x : x + "[]",
            o(Ct)
          );
        }), !1;
    }
    return $t(y) ? !0 : (t.append(Yr(ne, x, a), o(y)), !1);
  }
  const f = [], w = Object.assign(pa, {
    defaultVisitor: d,
    convertValue: o,
    isVisitable: $t
  });
  function k(y, x) {
    if (!c.isUndefined(y)) {
      if (f.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      f.push(y), c.forEach(y, function(ne, fe) {
        (!(c.isUndefined(ne) || ne === null) && s.call(
          t,
          ne,
          c.isString(fe) ? fe.trim() : fe,
          x,
          w
        )) === !0 && k(ne, x ? x.concat(fe) : [fe]);
      }), f.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return k(e), t;
}
function Cr(e) {
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
function lr(e, t) {
  this._pairs = [], e && wt(e, this, t);
}
const fn = lr.prototype;
fn.append = function(e, t) {
  this._pairs.push([e, t]);
};
fn.toString = function(e) {
  const t = e ? function(r) {
    return e.call(this, r, Cr);
  } : Cr;
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
function ma(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function pn(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ma, s = r && r.serialize;
  let a;
  if (s ? a = s(t, r) : a = c.isURLSearchParams(t) ? t.toString() : new lr(t, r).toString(n), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class ya {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    c.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Fr = ya, mn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ga = typeof URLSearchParams < "u" ? URLSearchParams : lr, _a = typeof FormData < "u" ? FormData : null, wa = typeof Blob < "u" ? Blob : null, ba = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), ka = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Z = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ga,
    FormData: _a,
    Blob: wa
  },
  isStandardBrowserEnv: ba,
  isStandardBrowserWebWorkerEnv: ka,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Sa(e, t) {
  return wt(e, new Z.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, a) {
      return Z.isNode && c.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Oa(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function va(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let a;
  for (n = 0; n < s; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function yn(e) {
  function t(r, n, s, a) {
    let i = r[a++];
    const u = Number.isFinite(+i), o = a >= r.length;
    return i = !i && c.isArray(s) ? s.length : i, o ? (c.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !u) : ((!s[i] || !c.isObject(s[i])) && (s[i] = []), t(r, n, s[i], a) && c.isArray(s[i]) && (s[i] = va(s[i])), !u);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const r = {};
    return c.forEachEntry(e, (n, s) => {
      t(Oa(n), s, r, 0);
    }), r;
  }
  return null;
}
const Da = {
  "Content-Type": void 0
};
function Ta(e, t, r) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const bt = {
  transitional: mn,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, t) {
    const r = t.getContentType() || "", n = r.indexOf("application/json") > -1, s = c.isObject(e);
    if (s && c.isHTMLForm(e) && (e = new FormData(e)), c.isFormData(e))
      return n && n ? JSON.stringify(yn(e)) : e;
    if (c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e))
      return e;
    if (c.isArrayBufferView(e))
      return e.buffer;
    if (c.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Sa(e, this.formSerializer).toString();
      if ((a = c.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const i = this.env && this.env.FormData;
        return wt(
          a ? { "files[]": e } : e,
          i && new i(),
          this.formSerializer
        );
      }
    }
    return s || n ? (t.setContentType("application/json", !1), Ta(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || bt.transitional, r = t && t.forcedJSONParsing, n = this.responseType === "json";
    if (e && c.isString(e) && (r && !this.responseType || n)) {
      const s = !(t && t.silentJSONParsing) && n;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? O.from(a, O.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Z.classes.FormData,
    Blob: Z.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
c.forEach(["delete", "get", "head"], function(e) {
  bt.headers[e] = {};
});
c.forEach(["post", "put", "patch"], function(e) {
  bt.headers[e] = c.merge(Da);
});
const ur = bt, Ma = c.toObjectSet([
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
]), Ea = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), r = a.substring(0, s).trim().toLowerCase(), n = a.substring(s + 1).trim(), !(!r || t[r] && Ma[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Lr = Symbol("internals");
function Ce(e) {
  return e && String(e).trim().toLowerCase();
}
function nt(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(nt) : String(e);
}
function Ra(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const xa = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Lt(e, t, r, n, s) {
  if (c.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!c.isString(t)) {
    if (c.isString(n))
      return t.indexOf(n) !== -1;
    if (c.isRegExp(n))
      return n.test(t);
  }
}
function Pa(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Na(e, t) {
  const r = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, a, i) {
        return this[n].call(this, t, s, a, i);
      },
      configurable: !0
    });
  });
}
let kt = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    const n = this;
    function s(i, u, o) {
      const d = Ce(u);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = c.findKey(n, d);
      (!f || n[f] === void 0 || o === !0 || o === void 0 && n[f] !== !1) && (n[f || u] = nt(i));
    }
    const a = (i, u) => c.forEach(i, (o, d) => s(o, d, u));
    return c.isPlainObject(e) || e instanceof this.constructor ? a(e, t) : c.isString(e) && (e = e.trim()) && !xa(e) ? a(Ea(e), t) : e != null && s(t, e, r), this;
  }
  get(e, t) {
    if (e = Ce(e), e) {
      const r = c.findKey(this, e);
      if (r) {
        const n = this[r];
        if (!t)
          return n;
        if (t === !0)
          return Ra(n);
        if (c.isFunction(t))
          return t.call(this, n, r);
        if (c.isRegExp(t))
          return t.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = Ce(e), e) {
      const r = c.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || Lt(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    const r = this;
    let n = !1;
    function s(a) {
      if (a = Ce(a), a) {
        const i = c.findKey(r, a);
        i && (!t || Lt(r, r[i], i, t)) && (delete r[i], n = !0);
      }
    }
    return c.isArray(e) ? e.forEach(s) : s(e), n;
  }
  clear(e) {
    const t = Object.keys(this);
    let r = t.length, n = !1;
    for (; r--; ) {
      const s = t[r];
      (!e || Lt(this, this[s], s, e, !0)) && (delete this[s], n = !0);
    }
    return n;
  }
  normalize(e) {
    const t = this, r = {};
    return c.forEach(this, (n, s) => {
      const a = c.findKey(r, s);
      if (a) {
        t[a] = nt(n), delete t[s];
        return;
      }
      const i = e ? Pa(s) : String(s).trim();
      i !== s && delete t[s], t[i] = nt(n), r[i] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, n) => {
      r != null && r !== !1 && (t[n] = e && c.isArray(r) ? r.join(", ") : r);
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
    return t.forEach((n) => r.set(n)), r;
  }
  static accessor(e) {
    const t = (this[Lr] = this[Lr] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function n(s) {
      const a = Ce(s);
      t[a] || (Na(r, s), t[a] = !0);
    }
    return c.isArray(e) ? e.forEach(n) : n(e), this;
  }
};
kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.freezeMethods(kt.prototype);
c.freezeMethods(kt);
const le = kt;
function It(e, t) {
  const r = this || ur, n = t || r, s = le.from(n.headers);
  let a = n.data;
  return c.forEach(e, function(i) {
    a = i.call(r, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function gn(e) {
  return !!(e && e.__CANCEL__);
}
function $e(e, t, r) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, r), this.name = "CanceledError";
}
c.inherits($e, O, {
  __CANCEL__: !0
});
function Aa(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new O(
    "Request failed with status code " + r.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Ya = Z.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(e, t, r, n, s, a) {
        const i = [];
        i.push(e + "=" + encodeURIComponent(t)), c.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), c.isString(n) && i.push("path=" + n), c.isString(s) && i.push("domain=" + s), a === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function Ca(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Fa(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _n(e, t) {
  return e && !Ca(t) ? Fa(e, t) : t;
}
const La = Z.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
    let r;
    function n(s) {
      let a = s;
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
    return r = n(window.location.href), function(s) {
      const a = c.isString(s) ? n(s) : s;
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
function Ia(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ua(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const o = Date.now(), d = n[a];
    i || (i = o), r[s] = u, n[s] = o;
    let f = a, w = 0;
    for (; f !== s; )
      w += r[f++], f = f % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), o - i < t)
      return;
    const k = d && o - d;
    return k ? Math.round(w * 1e3 / k) : void 0;
  };
}
function Ir(e, t) {
  let r = 0;
  const n = Ua(50, 250);
  return (s) => {
    const a = s.loaded, i = s.lengthComputable ? s.total : void 0, u = a - r, o = n(u), d = a <= i;
    r = a;
    const f = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: u,
      rate: o || void 0,
      estimated: o && i && d ? (i - a) / o : void 0,
      event: s
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const Wa = typeof XMLHttpRequest < "u", Ba = Wa && function(e) {
  return new Promise(function(t, r) {
    let n = e.data;
    const s = le.from(e.headers).normalize(), a = e.responseType;
    let i;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
    }
    c.isFormData(n) && (Z.isStandardBrowserEnv || Z.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
    let o = new XMLHttpRequest();
    if (e.auth) {
      const k = e.auth.username || "", y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(k + ":" + y));
    }
    const d = _n(e.baseURL, e.url);
    o.open(e.method.toUpperCase(), pn(d, e.params, e.paramsSerializer), !0), o.timeout = e.timeout;
    function f() {
      if (!o)
        return;
      const k = le.from(
        "getAllResponseHeaders" in o && o.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? o.responseText : o.response,
        status: o.status,
        statusText: o.statusText,
        headers: k,
        config: e,
        request: o
      };
      Aa(function(x) {
        t(x), u();
      }, function(x) {
        r(x), u();
      }, y), o = null;
    }
    if ("onloadend" in o ? o.onloadend = f : o.onreadystatechange = function() {
      !o || o.readyState !== 4 || o.status === 0 && !(o.responseURL && o.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, o.onabort = function() {
      o && (r(new O("Request aborted", O.ECONNABORTED, e, o)), o = null);
    }, o.onerror = function() {
      r(new O("Network Error", O.ERR_NETWORK, e, o)), o = null;
    }, o.ontimeout = function() {
      let k = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || mn;
      e.timeoutErrorMessage && (k = e.timeoutErrorMessage), r(new O(
        k,
        y.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        e,
        o
      )), o = null;
    }, Z.isStandardBrowserEnv) {
      const k = (e.withCredentials || La(d)) && e.xsrfCookieName && Ya.read(e.xsrfCookieName);
      k && s.set(e.xsrfHeaderName, k);
    }
    n === void 0 && s.setContentType(null), "setRequestHeader" in o && c.forEach(s.toJSON(), function(k, y) {
      o.setRequestHeader(y, k);
    }), c.isUndefined(e.withCredentials) || (o.withCredentials = !!e.withCredentials), a && a !== "json" && (o.responseType = e.responseType), typeof e.onDownloadProgress == "function" && o.addEventListener("progress", Ir(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && o.upload && o.upload.addEventListener("progress", Ir(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = (k) => {
      o && (r(!k || k.type ? new $e(null, e, o) : k), o.abort(), o = null);
    }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
    const w = Ia(d);
    if (w && Z.protocols.indexOf(w) === -1) {
      r(new O("Unsupported protocol " + w + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    o.send(n || null);
  });
}, st = {
  http: da,
  xhr: Ba
};
c.forEach(st, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ja = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let s = 0; s < t && (r = e[s], !(n = c.isString(r) ? st[r.toLowerCase()] : r)); s++)
      ;
    if (!n)
      throw n === !1 ? new O(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        c.hasOwnProp(st, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!c.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: st
};
function Ut(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new $e(null, e);
}
function Ur(e) {
  return Ut(e), e.headers = le.from(e.headers), e.data = It.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ja.getAdapter(e.adapter || ur.adapter)(e).then(function(t) {
    return Ut(e), t.data = It.call(
      e,
      e.transformResponse,
      t
    ), t.headers = le.from(t.headers), t;
  }, function(t) {
    return gn(t) || (Ut(e), t && t.response && (t.response.data = It.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = le.from(t.response.headers))), Promise.reject(t);
  });
}
const Wr = (e) => e instanceof le ? e.toJSON() : e;
function Pe(e, t) {
  t = t || {};
  const r = {};
  function n(d, f, w) {
    return c.isPlainObject(d) && c.isPlainObject(f) ? c.merge.call({ caseless: w }, d, f) : c.isPlainObject(f) ? c.merge({}, f) : c.isArray(f) ? f.slice() : f;
  }
  function s(d, f, w) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(d))
        return n(void 0, d, w);
    } else
      return n(d, f, w);
  }
  function a(d, f) {
    if (!c.isUndefined(f))
      return n(void 0, f);
  }
  function i(d, f) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(d))
        return n(void 0, d);
    } else
      return n(void 0, f);
  }
  function u(d, f, w) {
    if (w in t)
      return n(d, f);
    if (w in e)
      return n(void 0, d);
  }
  const o = {
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
    validateStatus: u,
    headers: (d, f) => s(Wr(d), Wr(f), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = o[d] || s, w = f(e[d], t[d], d);
    c.isUndefined(w) && f !== u || (r[d] = w);
  }), r;
}
const wn = "1.4.0", cr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  cr[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Br = {};
cr.transitional = function(e, t, r) {
  function n(s, a) {
    return "[Axios v" + wn + "] Transitional option '" + s + "'" + a + (r ? ". " + r : "");
  }
  return (s, a, i) => {
    if (e === !1)
      throw new O(
        n(a, " has been removed" + (t ? " in " + t : "")),
        O.ERR_DEPRECATED
      );
    return t && !Br[a] && (Br[a] = !0, console.warn(
      n(
        a,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(s, a, i) : !0;
  };
};
function Ha(e, t, r) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const a = n[s], i = t[a];
    if (i) {
      const u = e[a], o = u === void 0 || i(u, a, e);
      if (o !== !0)
        throw new O("option " + a + " must be " + o, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new O("Unknown option " + a, O.ERR_BAD_OPTION);
  }
}
const zt = {
  assertOptions: Ha,
  validators: cr
}, pe = zt.validators;
let ut = class {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Fr(),
      response: new Fr()
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
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Pe(this.defaults, t);
    const { transitional: r, paramsSerializer: n, headers: s } = t;
    r !== void 0 && zt.assertOptions(r, {
      silentJSONParsing: pe.transitional(pe.boolean),
      forcedJSONParsing: pe.transitional(pe.boolean),
      clarifyTimeoutError: pe.transitional(pe.boolean)
    }, !1), n != null && (c.isFunction(n) ? t.paramsSerializer = {
      serialize: n
    } : zt.assertOptions(n, {
      encode: pe.function,
      serialize: pe.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = s && c.merge(
      s.common,
      s[t.method]
    ), a && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete s[y];
      }
    ), t.headers = le.concat(a, s);
    const i = [];
    let u = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(t) === !1 || (u = u && y.synchronous, i.unshift(y.fulfilled, y.rejected));
    });
    const o = [];
    this.interceptors.response.forEach(function(y) {
      o.push(y.fulfilled, y.rejected);
    });
    let d, f = 0, w;
    if (!u) {
      const y = [Ur.bind(this), void 0];
      for (y.unshift.apply(y, i), y.push.apply(y, o), w = y.length, d = Promise.resolve(t); f < w; )
        d = d.then(y[f++], y[f++]);
      return d;
    }
    w = i.length;
    let k = t;
    for (f = 0; f < w; ) {
      const y = i[f++], x = i[f++];
      try {
        k = y(k);
      } catch (ne) {
        x.call(this, ne);
        break;
      }
    }
    try {
      d = Ur.call(this, k);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, w = o.length; f < w; )
      d = d.then(o[f++], o[f++]);
    return d;
  }
  getUri(e) {
    e = Pe(this.defaults, e);
    const t = _n(e.baseURL, e.url);
    return pn(t, e.params, e.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function(e) {
  ut.prototype[e] = function(t, r) {
    return this.request(Pe(r || {}, {
      method: e,
      url: t,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(n, s, a) {
      return this.request(Pe(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: n,
        data: s
      }));
    };
  }
  ut.prototype[e] = t(), ut.prototype[e + "Form"] = t(!0);
});
const at = ut;
let qa = class bn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const i = new Promise((u) => {
        n.subscribe(u), a = u;
      }).then(s);
      return i.cancel = function() {
        n.unsubscribe(a);
      }, i;
    }, t(function(s, a, i) {
      n.reason || (n.reason = new $e(s, a, i), r(n.reason));
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
      token: new bn(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
const Va = qa;
function Ga(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function $a(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const Kt = {
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
Object.entries(Kt).forEach(([e, t]) => {
  Kt[t] = e;
});
const za = Kt;
function kn(e) {
  const t = new at(e), r = tn(at.prototype.request, t);
  return c.extend(r, at.prototype, t, { allOwnKeys: !0 }), c.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(n) {
    return kn(Pe(e, n));
  }, r;
}
const Y = kn(ur);
Y.Axios = at;
Y.CanceledError = $e;
Y.CancelToken = Va;
Y.isCancel = gn;
Y.VERSION = wn;
Y.toFormData = wt;
Y.AxiosError = O;
Y.Cancel = Y.CanceledError;
Y.all = function(e) {
  return Promise.all(e);
};
Y.spread = Ga;
Y.isAxiosError = $a;
Y.mergeConfig = Pe;
Y.AxiosHeaders = le;
Y.formToJSON = (e) => yn(c.isHTMLForm(e) ? new FormData(e) : e);
Y.HttpStatusCode = za;
Y.default = Y;
const Sn = Y, {
  Axios: bh,
  AxiosError: kh,
  CanceledError: Sh,
  isCancel: Oh,
  CancelToken: vh,
  VERSION: Dh,
  all: Th,
  Cancel: Mh,
  isAxiosError: Eh,
  spread: Rh,
  toFormData: xh,
  AxiosHeaders: Ph,
  HttpStatusCode: Ka,
  formToJSON: Nh,
  mergeConfig: Ah
} = Sn, Ja = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Za = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Qa = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function Xa(e, t) {
  if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
    ei(e);
    return;
  }
  return t;
}
function ei(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function ti(e, t = {}) {
  if (typeof e != "string")
    return e;
  const r = e.trim();
  if (e[0] === '"' && e[e.length - 1] === '"')
    return r.slice(1, -1);
  const n = r.toLowerCase();
  if (n === "true")
    return !0;
  if (n === "false")
    return !1;
  if (n !== "undefined") {
    if (n === "null")
      return null;
    if (n === "nan")
      return Number.NaN;
    if (n === "infinity")
      return Number.POSITIVE_INFINITY;
    if (n === "-infinity")
      return Number.NEGATIVE_INFINITY;
    if (!Qa.test(e)) {
      if (t.strict)
        throw new SyntaxError("[destr] Invalid JSON");
      return e;
    }
    try {
      if (Ja.test(e) || Za.test(e)) {
        if (t.strict)
          throw new Error("[destr] Possible prototype pollution");
        return JSON.parse(e, Xa);
      }
      return JSON.parse(e);
    } catch (s) {
      if (t.strict)
        throw s;
      return e;
    }
  }
}
const ri = /#/g, ni = /&/g, si = /=/g, hr = /\+/g, ai = /%5e/gi, ii = /%60/gi, oi = /%7c/gi, li = /%20/gi;
function ui(e) {
  return encodeURI("" + e).replace(oi, "|");
}
function Jt(e) {
  return ui(typeof e == "string" ? e : JSON.stringify(e)).replace(hr, "%2B").replace(li, "+").replace(ri, "%23").replace(ni, "%26").replace(ii, "`").replace(ai, "^");
}
function Wt(e) {
  return Jt(e).replace(si, "%3D");
}
function On(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function ci(e) {
  return On(e.replace(hr, " "));
}
function hi(e) {
  return On(e.replace(hr, " "));
}
function di(e = "") {
  const t = {};
  e[0] === "?" && (e = e.slice(1));
  for (const r of e.split("&")) {
    const n = r.match(/([^=]+)=?(.*)/) || [];
    if (n.length < 2)
      continue;
    const s = ci(n[1]);
    if (s === "__proto__" || s === "constructor")
      continue;
    const a = hi(n[2] || "");
    t[s] === void 0 ? t[s] = a : Array.isArray(t[s]) ? t[s].push(a) : t[s] = [t[s], a];
  }
  return t;
}
function fi(e, t) {
  return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map((r) => `${Wt(e)}=${Jt(r)}`).join("&") : `${Wt(e)}=${Jt(t)}` : Wt(e);
}
function pi(e) {
  return Object.keys(e).filter((t) => e[t] !== void 0).map((t) => fi(t, e[t])).filter(Boolean).join("&");
}
const mi = /^\w{2,}:([/\\]{1,2})/, yi = /^\w{2,}:([/\\]{2})?/, gi = /^([/\\]\s*){2,}[^/\\]/;
function vn(e, t = {}) {
  return typeof t == "boolean" && (t = { acceptRelative: t }), t.strict ? mi.test(e) : yi.test(e) || (t.acceptRelative ? gi.test(e) : !1);
}
const _i = /\/$|\/\?/;
function Zt(e = "", t = !1) {
  return t ? _i.test(e) : e.endsWith("/");
}
function wi(e = "", t = !1) {
  if (!t)
    return (Zt(e) ? e.slice(0, -1) : e) || "/";
  if (!Zt(e, !0))
    return e || "/";
  const [r, ...n] = e.split("?");
  return (r.slice(0, -1) || "/") + (n.length > 0 ? `?${n.join("?")}` : "");
}
function bi(e = "", t = !1) {
  if (!t)
    return e.endsWith("/") ? e : e + "/";
  if (Zt(e, !0))
    return e || "/";
  const [r, ...n] = e.split("?");
  return r + "/" + (n.length > 0 ? `?${n.join("?")}` : "");
}
function ki(e, t) {
  if (Oi(t) || vn(e))
    return e;
  const r = wi(t);
  return e.startsWith(r) ? e : Ti(r, e);
}
function Si(e, t) {
  const r = Dn(e), n = { ...di(r.search), ...t };
  return r.search = pi(n), Mi(r);
}
function Oi(e) {
  return !e || e === "/";
}
function vi(e) {
  return e && e !== "/";
}
const Di = /^\.?\//;
function Ti(e, ...t) {
  let r = e || "";
  for (const n of t.filter((s) => vi(s)))
    if (r) {
      const s = n.replace(Di, "");
      r = bi(r) + s;
    } else
      r = n;
  return r;
}
function Dn(e = "", t) {
  if (!vn(e, { acceptRelative: !0 }))
    return t ? Dn(t + e) : jr(e);
  const [r = "", n, s = ""] = (e.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1), [a = "", i = ""] = (s.match(/([^#/?]*)(.*)?/) || []).splice(1), { pathname: u, search: o, hash: d } = jr(
    i.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol: r,
    auth: n ? n.slice(0, Math.max(0, n.length - 1)) : "",
    host: a,
    pathname: u,
    search: o,
    hash: d
  };
}
function jr(e = "") {
  const [t = "", r = "", n = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: t,
    search: r,
    hash: n
  };
}
function Mi(e) {
  const t = e.pathname + (e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "") + e.hash;
  return e.protocol ? e.protocol + "//" + (e.auth ? e.auth + "@" : "") + e.host + t : t;
}
class Ei extends Error {
  constructor() {
    super(...arguments), this.name = "FetchError";
  }
}
function Ri(e, t, r) {
  let n = "";
  t && (n = t.message), e && r ? n = `${n} (${r.status} ${r.statusText} (${e.toString()}))` : e && (n = `${n} (${e.toString()})`);
  const s = new Ei(n);
  return Object.defineProperty(s, "request", {
    get() {
      return e;
    }
  }), Object.defineProperty(s, "response", {
    get() {
      return r;
    }
  }), Object.defineProperty(s, "data", {
    get() {
      return r && r._data;
    }
  }), Object.defineProperty(s, "status", {
    get() {
      return r && r.status;
    }
  }), Object.defineProperty(s, "statusText", {
    get() {
      return r && r.statusText;
    }
  }), Object.defineProperty(s, "statusCode", {
    get() {
      return r && r.status;
    }
  }), Object.defineProperty(s, "statusMessage", {
    get() {
      return r && r.statusText;
    }
  }), s;
}
const xi = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function Hr(e = "GET") {
  return xi.has(e.toUpperCase());
}
function Pi(e) {
  if (e === void 0)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function";
}
const Ni = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]), Ai = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Yi(e = "") {
  if (!e)
    return "json";
  const t = e.split(";").shift() || "";
  return Ai.test(t) ? "json" : Ni.has(t) || t.startsWith("text/") ? "text" : "blob";
}
function Ci(e, t, r = globalThis.Headers) {
  const n = {
    ...t,
    ...e
  };
  if (t != null && t.params && e != null && e.params && (n.params = {
    ...t == null ? void 0 : t.params,
    ...e == null ? void 0 : e.params
  }), t != null && t.query && e != null && e.query && (n.query = {
    ...t == null ? void 0 : t.query,
    ...e == null ? void 0 : e.query
  }), t != null && t.headers && e != null && e.headers) {
    n.headers = new r((t == null ? void 0 : t.headers) || {});
    for (const [s, a] of new r((e == null ? void 0 : e.headers) || {}))
      n.headers.set(s, a);
  }
  return n;
}
const Fi = /* @__PURE__ */ new Set([
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
]);
function Tn(e) {
  const { fetch: t, Headers: r } = e;
  function n(i) {
    const u = i.error && i.error.name === "AbortError" || !1;
    if (i.options.retry !== !1 && !u) {
      let d;
      typeof i.options.retry == "number" ? d = i.options.retry : d = Hr(i.options.method) ? 0 : 1;
      const f = i.response && i.response.status || 500;
      if (d > 0 && Fi.has(f))
        return s(i.request, {
          ...i.options,
          retry: d - 1
        });
    }
    const o = Ri(
      i.request,
      i.error,
      i.response
    );
    throw Error.captureStackTrace && Error.captureStackTrace(o, s), o;
  }
  const s = async function(i, u = {}) {
    const o = {
      request: i,
      options: Ci(u, e.defaults, r),
      response: void 0,
      error: void 0
    };
    o.options.onRequest && await o.options.onRequest(o), typeof o.request == "string" && (o.options.baseURL && (o.request = ki(o.request, o.options.baseURL)), (o.options.query || o.options.params) && (o.request = Si(o.request, {
      ...o.options.params,
      ...o.options.query
    })), o.options.body && Hr(o.options.method) && Pi(o.options.body) && (o.options.body = typeof o.options.body == "string" ? o.options.body : JSON.stringify(o.options.body), o.options.headers = new r(o.options.headers || {}), o.options.headers.has("content-type") || o.options.headers.set("content-type", "application/json"), o.options.headers.has("accept") || o.options.headers.set("accept", "application/json")));
    try {
      o.response = await t(
        o.request,
        o.options
      );
    } catch (f) {
      return o.error = f, o.options.onRequestError && await o.options.onRequestError(o), await n(o);
    }
    const d = (o.options.parseResponse ? "json" : o.options.responseType) || Yi(o.response.headers.get("content-type") || "");
    if (d === "json") {
      const f = await o.response.text(), w = o.options.parseResponse || ti;
      o.response._data = w(f);
    } else
      d === "stream" ? o.response._data = o.response.body : o.response._data = await o.response[d]();
    return o.options.onResponse && await o.options.onResponse(o), !o.options.ignoreResponseError && o.response.status >= 400 && o.response.status < 600 ? (o.options.onResponseError && await o.options.onResponseError(o), await n(o)) : o.response;
  }, a = async function(i, u) {
    return (await s(i, u))._data;
  };
  return a.raw = s, a.native = t, a.create = (i = {}) => Tn({
    ...e,
    defaults: {
      ...e.defaults,
      ...i
    }
  }), a;
}
const Mn = function() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}(), Li = Mn.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))), Ii = Mn.Headers, Ui = Tn({ fetch: Li, Headers: Ii }), Bt = {
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
class Wi extends Error {
  constructor(t) {
    super(t.statusText), me(this, "status"), this.response = t, this.status = t.status;
  }
}
class Qt extends Error {
  constructor(t, r) {
    super(t.msg), me(this, "code"), this.body = t, this.response = r, this.code = t.code;
  }
}
var qr, Vr, Gr, $r, zr;
const En = class l {
  constructor(t = {}, r = "xhr") {
    me(this, "_type", "xhr"), me(this, "_baseURL", ((Vr = (qr = globalThis.top) == null ? void 0 : qr.document) == null ? void 0 : Vr.baseURI) ?? (($r = (Gr = globalThis.parent) == null ? void 0 : Gr.document) == null ? void 0 : $r.baseURI) ?? ((zr = globalThis.location) == null ? void 0 : zr.origin) ?? Bt.SIYUAN_DEFAULT_BASE_URL), me(this, "_token", Bt.SIYUAN_DEFAULT_TOKEN), me(this, "_axios", Sn.create({
      baseURL: this._baseURL,
      timeout: Bt.REQUEST_TIMEOUT,
      headers: {
        Authorization: `Token ${this._token}`
      }
    })), me(this, "_fetch", Ui.create({
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
    switch (this._token = t.token ?? this._token, r) {
      case "fetch":
        const n = t;
        if (n.token) {
          const s = "Authorization", a = `Token ${t.token}`;
          Array.isArray(n.headers) ? n.headers.push([
            s,
            a
          ]) : n.headers instanceof Headers ? n.headers.set(
            s,
            a
          ) : typeof n.headers == "object" ? n.headers[s] = a : n.headers = {
            [s]: a
          }, delete t.token;
        }
        this._fetch = this._fetch.create(n);
        break;
      case "xhr":
      default:
        for (const [s, a] of Object.entries(t))
          switch (s) {
            case "token":
              this._axios.defaults.headers.Authorization = `Token ${t.token}`;
              break;
            default:
              this._axios.defaults[s] = a;
              break;
          }
        break;
    }
    this._baseURL = t.baseURL ?? this._baseURL;
  }
  /* 全局搜索 */
  async fullTextSearchBlock(t, r) {
    return await this._request(
      l.api.search.fullTextSearchBlock.pathname,
      l.api.search.fullTextSearchBlock.method,
      t,
      r
    );
  }
  /* 获得配置 */
  async getConf(t) {
    return await this._request(
      l.api.system.getConf.pathname,
      l.api.system.getConf.method,
      void 0,
      t
    );
  }
  /* 👇 由 JSON Schema 生成的类型定义👇 */
  /* 上传资源文件 */
  async upload(t, r) {
    const n = new FormData();
    return n.append("assetsDirPath", t.assetsDirPath ?? "/assets/"), t.files.forEach((s) => n.append("file[]", s)), await this._request(
      l.api.asset.upload.pathname,
      l.api.asset.upload.method,
      n,
      r
    );
  }
  /* 获取块属性 */
  async getBlockAttrs(t, r) {
    return await this._request(
      l.api.attr.getBlockAttrs.pathname,
      l.api.attr.getBlockAttrs.method,
      t,
      r
    );
  }
  /* 获取所有书签 */
  async getBookmarkLabels(t) {
    return await this._request(
      l.api.attr.getBookmarkLabels.pathname,
      l.api.attr.getBookmarkLabels.method,
      void 0,
      t
    );
  }
  /* 设置块属性 */
  async setBlockAttrs(t, r) {
    return await this._request(
      l.api.attr.setBlockAttrs.pathname,
      l.api.attr.setBlockAttrs.method,
      t,
      r
    );
  }
  /* 在下级块尾部插入块 */
  async appendBlock(t, r) {
    return await this._request(
      l.api.block.appendBlock.pathname,
      l.api.block.appendBlock.method,
      t,
      r
    );
  }
  /* 删除块 */
  async deleteBlock(t, r) {
    return await this._request(
      l.api.block.deleteBlock.pathname,
      l.api.block.deleteBlock.method,
      t,
      r
    );
  }
  /* 获得块面包屑 */
  async getBlockBreadcrumb(t, r) {
    return await this._request(
      l.api.block.getBlockBreadcrumb.pathname,
      l.api.block.getBlockBreadcrumb.method,
      t,
      r
    );
  }
  /* 获得块的 DOM */
  async getBlockDOM(t, r) {
    return await this._request(
      l.api.block.getBlockDOM.pathname,
      l.api.block.getBlockDOM.method,
      t,
      r
    );
  }
  /* 获得块所在文档的信息 */
  async getBlockInfo(t, r) {
    return await this._request(
      l.api.block.getBlockInfo.pathname,
      l.api.block.getBlockInfo.method,
      t,
      r
    );
  }
  /* 获得块的 kramdown 源码 */
  async getBlockKramdown(t, r) {
    return await this._request(
      l.api.block.getBlockKramdown.pathname,
      l.api.block.getBlockKramdown.method,
      t,
      r
    );
  }
  /* 获得指定块的所有下级块 */
  async getChildBlocks(t, r) {
    return await this._request(
      l.api.block.getChildBlocks.pathname,
      l.api.block.getChildBlocks.method,
      t,
      r
    );
  }
  /* 获得指定块所在文档信息 */
  async getDocInfo(t, r) {
    return await this._request(
      l.api.block.getDocInfo.pathname,
      l.api.block.getDocInfo.method,
      t,
      r
    );
  }
  /* 插入块 */
  async insertBlock(t, r) {
    return await this._request(
      l.api.block.insertBlock.pathname,
      l.api.block.insertBlock.method,
      t,
      r
    );
  }
  /* 移动块 */
  async moveBlock(t, r) {
    return await this._request(
      l.api.block.moveBlock.pathname,
      l.api.block.moveBlock.method,
      t,
      r
    );
  }
  /* 在下级块首部插入块 */
  async prependBlock(t, r) {
    return await this._request(
      l.api.block.prependBlock.pathname,
      l.api.block.prependBlock.method,
      t,
      r
    );
  }
  /* 转移块引用 */
  async transferBlockRef(t, r) {
    return await this._request(
      l.api.block.transferBlockRef.pathname,
      l.api.block.transferBlockRef.method,
      t,
      r
    );
  }
  /* 更新块 */
  async updateBlock(t, r) {
    return await this._request(
      l.api.block.updateBlock.pathname,
      l.api.block.updateBlock.method,
      t,
      r
    );
  }
  /* 调用 pandoc 转换转换文件 */
  async pandoc(t, r) {
    return await this._request(
      l.api.convert.pandoc.pathname,
      l.api.convert.pandoc.method,
      t,
      r
    );
  }
  /* 打包文件与文件夹以导出 */
  async exportResources(t, r) {
    return await this._request(
      l.api.export.exportResources.pathname,
      l.api.export.exportResources.method,
      t,
      r
    );
  }
  /* 导出指定文档块为 Markdown */
  async exportMdContent(t, r) {
    return await this._request(
      l.api.export.exportMdContent.pathname,
      l.api.export.exportMdContent.method,
      t,
      r
    );
  }
  async getFile(t, r = "text", n) {
    return await this._request(
      l.api.file.getFile.pathname,
      l.api.file.getFile.method,
      t,
      n,
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
    const n = new FormData();
    for (const [s, a] of Object.entries(t))
      t.hasOwnProperty(s) && (a instanceof Blob ? n.append(s, a) : n.append(s, String(a)));
    return await this._request(
      l.api.file.putFile.pathname,
      l.api.file.putFile.method,
      n,
      r
    );
  }
  /* 获取文件目录下级内容 */
  async readDir(t, r) {
    return await this._request(
      l.api.file.readDir.pathname,
      l.api.file.readDir.method,
      t,
      r
    );
  }
  /* 删除文件/目录 */
  async removeFile(t, r) {
    return await this._request(
      l.api.file.removeFile.pathname,
      l.api.file.removeFile.method,
      t,
      r
    );
  }
  /* 重命名/移动文件/目录 */
  async renameFile(t, r) {
    return await this._request(
      l.api.file.renameFile.pathname,
      l.api.file.renameFile.method,
      t,
      r
    );
  }
  /* 通过 Markdown 创建文档 */
  async createDocWithMd(t, r) {
    return await this._request(
      l.api.filetree.createDocWithMd.pathname,
      l.api.filetree.createDocWithMd.method,
      t,
      r
    );
  }
  /* 获取文档内容 */
  async getDoc(t, r) {
    return await this._request(
      l.api.filetree.getDoc.pathname,
      l.api.filetree.getDoc.method,
      t,
      r
    );
  }
  /* 根据 ID 获取人类可读路径 */
  async getHPathByID(t, r) {
    return await this._request(
      l.api.filetree.getHPathByID.pathname,
      l.api.filetree.getHPathByID.method,
      t,
      r
    );
  }
  /* 根据路径获取人类可读路径 */
  async getHPathByPath(t, r) {
    return await this._request(
      l.api.filetree.getHPathByPath.pathname,
      l.api.filetree.getHPathByPath.method,
      t,
      r
    );
  }
  /* 查询子文档 */
  async listDocsByPath(t, r) {
    return await this._request(
      l.api.filetree.listDocsByPath.pathname,
      l.api.filetree.listDocsByPath.method,
      t,
      r
    );
  }
  /* 批量移动文档 */
  async moveDocs(t, r) {
    return await this._request(
      l.api.filetree.moveDocs.pathname,
      l.api.filetree.moveDocs.method,
      t,
      r
    );
  }
  /* 删除文档 */
  async removeDoc(t, r) {
    return await this._request(
      l.api.filetree.removeDoc.pathname,
      l.api.filetree.removeDoc.method,
      t,
      r
    );
  }
  /* 文档重命名 */
  async renameDoc(t, r) {
    return await this._request(
      l.api.filetree.renameDoc.pathname,
      l.api.filetree.renameDoc.method,
      t,
      r
    );
  }
  /* 搜索文档 */
  async searchDocs(t, r) {
    return await this._request(
      l.api.filetree.searchDocs.pathname,
      l.api.filetree.searchDocs.method,
      t,
      r
    );
  }
  /* 获取历史文档内容 */
  async getDocHistoryContent(t, r) {
    return await this._request(
      l.api.history.getDocHistoryContent.pathname,
      l.api.history.getDocHistoryContent.method,
      t,
      r
    );
  }
  /* 查询历史项 */
  async getHistoryItems(t, r) {
    return await this._request(
      l.api.history.getHistoryItems.pathname,
      l.api.history.getHistoryItems.method,
      t,
      r
    );
  }
  /* 收集箱速记内容 */
  async getShorthand(t, r) {
    return await this._request(
      l.api.inbox.getShorthand.pathname,
      l.api.inbox.getShorthand.method,
      t,
      r
    );
  }
  /* 正向代理 */
  async forwardProxy(t, r) {
    return await this._request(
      l.api.network.forwardProxy.pathname,
      l.api.network.forwardProxy.method,
      t,
      r
    );
  }
  /* 关闭笔记本 */
  async closeNotebook(t, r) {
    return await this._request(
      l.api.notebook.closeNotebook.pathname,
      l.api.notebook.closeNotebook.method,
      t,
      r
    );
  }
  /* 创建笔记本 */
  async createNotebook(t, r) {
    return await this._request(
      l.api.notebook.createNotebook.pathname,
      l.api.notebook.createNotebook.method,
      t,
      r
    );
  }
  /* 获取笔记本配置信息 */
  async getNotebookConf(t, r) {
    return await this._request(
      l.api.notebook.getNotebookConf.pathname,
      l.api.notebook.getNotebookConf.method,
      t,
      r
    );
  }
  /* 列出笔记本信息 */
  async lsNotebooks(t) {
    return await this._request(
      l.api.notebook.lsNotebooks.pathname,
      l.api.notebook.lsNotebooks.method,
      void 0,
      t
    );
  }
  /* 打开笔记本 */
  async openNotebook(t, r) {
    return await this._request(
      l.api.notebook.openNotebook.pathname,
      l.api.notebook.openNotebook.method,
      t,
      r
    );
  }
  /* 删除笔记本 */
  async removeNotebook(t, r) {
    return await this._request(
      l.api.notebook.removeNotebook.pathname,
      l.api.notebook.removeNotebook.method,
      t,
      r
    );
  }
  /* 重命名笔记本 */
  async renameNotebook(t, r) {
    return await this._request(
      l.api.notebook.renameNotebook.pathname,
      l.api.notebook.renameNotebook.method,
      t,
      r
    );
  }
  /* 设置笔记本配置 */
  async setNotebookConf(t, r) {
    return await this._request(
      l.api.notebook.setNotebookConf.pathname,
      l.api.notebook.setNotebookConf.method,
      t,
      r
    );
  }
  /* 推送错误消息 */
  async pushErrMsg(t, r) {
    return await this._request(
      l.api.notification.pushErrMsg.pathname,
      l.api.notification.pushErrMsg.method,
      t,
      r
    );
  }
  /* 推送提示消息 */
  async pushMsg(t, r) {
    return await this._request(
      l.api.notification.pushMsg.pathname,
      l.api.notification.pushMsg.method,
      t,
      r
    );
  }
  /* SQL 查询 */
  async sql(t, r) {
    return await this._request(
      l.api.query.sql.pathname,
      l.api.query.sql.method,
      t,
      r
    );
  }
  /* 读取快照文件内容 */
  async openRepoSnapshotDoc(t, r) {
    return await this._request(
      l.api.repo.openRepoSnapshotDoc.pathname,
      l.api.repo.openRepoSnapshotDoc.method,
      t,
      r
    );
  }
  /* 获取代码片段 */
  async getSnippet(t, r) {
    return await this._request(
      l.api.snippet.getSnippet.pathname,
      l.api.snippet.getSnippet.method,
      t,
      r
    );
  }
  /* 设置代码片段 */
  async setSnippet(t, r) {
    return await this._request(
      l.api.snippet.setSnippet.pathname,
      l.api.snippet.setSnippet.method,
      t,
      r
    );
  }
  /* 查询最近打开的文档 */
  async getRecentDocs(t) {
    return await this._request(
      l.api.storage.getRecentDocs.pathname,
      l.api.storage.getRecentDocs.method,
      void 0,
      t
    );
  }
  /* 获取内核启动进度 */
  async bootProgress(t) {
    return await this._request(
      l.api.system.bootProgress.pathname,
      l.api.system.bootProgress.method,
      void 0,
      t
    );
  }
  /* 获得内核 Unix 时间戳 (单位: ms) */
  async currentTime(t) {
    return await this._request(
      l.api.system.currentTime.pathname,
      l.api.system.currentTime.method,
      void 0,
      t
    );
  }
  /* 获得内核版本 */
  async version(t) {
    return await this._request(
      l.api.system.version.pathname,
      l.api.system.version.method,
      void 0,
      t
    );
  }
  /* 渲染 kramdown 模板文件 */
  async render(t, r) {
    return await this._request(
      l.api.template.render.pathname,
      l.api.template.render.method,
      t,
      r
    );
  }
  /* 渲染 Sprig 模板 */
  async renderSprig(t, r) {
    return await this._request(
      l.api.template.renderSprig.pathname,
      l.api.template.renderSprig.method,
      t,
      r
    );
  }
  async _request(t, r, n, s, a = !0, i = "json") {
    try {
      switch ((s == null ? void 0 : s.type) ?? this._type) {
        case "fetch": {
          const u = s == null ? void 0 : s.options;
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
          const o = await this._fetch(
            t,
            {
              method: r,
              body: n,
              responseType: i,
              ...u
            }
          );
          return a && i === "json" && typeof o == "object" ? this._parseFetchResponse(o) : o;
        }
        case "xhr":
        default: {
          const u = s == null ? void 0 : s.options;
          i = (() => {
            switch (i) {
              case "arrayBuffer":
                return "arraybuffer";
              default:
                return i;
            }
          })();
          const o = await this._axios.request({
            url: t,
            method: r,
            data: n,
            responseType: i,
            ...u
          });
          if (o.status === Ka.Ok)
            return a && i === "json" && typeof o.data == "object" ? this._parseAxiosResponse(o) : o.data;
          throw new Wi(o);
        }
      }
    } catch (u) {
      throw u;
    }
  }
  /**
   * 解析内核响应
   */
  _parseFetchResponse(t) {
    if (t.code === 0)
      return t;
    throw new Qt(t);
  }
  /**
   * 解析内核响应
   */
  _parseAxiosResponse(t) {
    if (t.data.code === 0)
      return t.data;
    throw new Qt(t.data, t);
  }
};
me(En, "api", {
  // TODO: refactor
  search: {
    fullTextSearchBlock: { pathname: "/api/search/fullTextSearchBlock", method: "POST" }
  },
  asset: {
    upload: { pathname: "/api/asset/upload", method: "POST" }
  },
  attr: {
    getBlockAttrs: { pathname: "/api/attr/getBlockAttrs", method: "POST" },
    setBlockAttrs: { pathname: "/api/attr/setBlockAttrs", method: "POST" },
    getBookmarkLabels: { pathname: "/api/attr/getBookmarkLabels", method: "POST" }
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
    lsNotebooks: { pathname: "/api/notebook/lsNotebooks", method: "POST" },
    getNotebookConf: { pathname: "/api/notebook/getNotebookConf", method: "POST" },
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
  snippet: {
    getSnippet: { pathname: "/api/snippet/getSnippet", method: "POST" },
    setSnippet: { pathname: "/api/snippet/setSnippet", method: "POST" }
  },
  storage: {
    getRecentDocs: { pathname: "/api/storage/getRecentDocs", method: "POST" }
  },
  system: {
    bootProgress: { pathname: "/api/system/bootProgress", method: "POST" },
    currentTime: { pathname: "/api/system/currentTime", method: "POST" },
    version: { pathname: "/api/system/version", method: "POST" },
    // TODO: refactor
    getConf: { pathname: "/api/system/getConf", method: "POST" }
  },
  template: {
    render: { pathname: "/api/template/render", method: "POST" },
    renderSprig: { pathname: "/api/template/renderSprig", method: "POST" }
  }
});
let Bi = En;
class ji {
  constructor(t, r, n) {
    this.port = t, this.handlers = r, this.logger = n, this.map = /* @__PURE__ */ new Map(), this.counter = Math.random(), this.errerEventListener = async (s) => {
      this.logger.warn(s);
    }, this.messageEventListener = async (s) => {
      const a = s.data;
      switch (a.type) {
        case "call": {
          try {
            if (a.handler.name in this.handlers) {
              const i = this.handlers[a.handler.name], u = await i.func.call(i.this, ...a.handler.args), o = {
                type: "return",
                id: a.id,
                handler: {
                  name: a.handler.name,
                  result: u
                }
              };
              this.port.postMessage(o);
            }
          } catch (i) {
            const u = {
              type: "error",
              id: a.id,
              error: i
            };
            this.port.postMessage(u);
          }
          break;
        }
        case "error": {
          const i = this.map.get(a.id);
          i && (i.reject(a.error), this.map.delete(a.id));
          break;
        }
        case "return": {
          const i = this.map.get(a.id);
          i && (i.resolve(a.handler.result), this.map.delete(a.id));
          break;
        }
      }
    }, this.port.addEventListener("error", this.errerEventListener), this.port.addEventListener("messageerror", this.errerEventListener), this.port.addEventListener("message", this.messageEventListener);
  }
  async call(t, ...r) {
    return new Promise((n, s) => {
      const a = this.counter++;
      this.map.set(a, { resolve: n, reject: s });
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
}
class Hi extends ji {
  constructor(t, r, n = {}) {
    super(
      // @ts-ignore
      t,
      n,
      r
    ), this.self = t, this.logger = r, this.handlers = n, this.pingEventListener = async (s) => {
      s.data === "ping" && this.port.postMessage("pong");
    }, this.port.addEventListener("message", this.pingEventListener);
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
class qi {
  constructor(t, r = !0) {
    this.label = t, this.collapsed = r;
  }
  /**
   * 输出
   * @param func: 所使用的输出函数
   * @param multiple: 是否进行多次输出
   * @param args: 输出函数的参数
   */
  stdout(t, r, ...n) {
    const s = `[\x1B[4m${this.label}\x1B[0m] - <\x1B[1m${t.name.toUpperCase()}\x1B[0m>`;
    if (this.collapsed ? globalThis.console.groupCollapsed(s) : globalThis.console.group(s), r)
      for (const a of n)
        Array.isArray(a) ? t(...a) : t(a);
    else
      t(...n);
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
function Vi(e, t) {
  return e.endsWith(t) ? e.slice(0, -t.length) : e;
}
var Xt = /* @__PURE__ */ ((e) => (e.Coding = "coding", e.Building = "building", e.Indexing = "indexing", e.Debugging = "debugging", e.Browsing = "browsing", e.RunningTests = "running tests", e.WritingTests = "writing tests", e.ManualTesting = "manual testing", e.WritingDocs = "writing docs", e.CodeReviewing = "code reviewing", e.Researching = "researching", e.Learning = "learning", e.Designing = "designing", e))(Xt || {}), Rn = /* @__PURE__ */ ((e) => (e.App = "app", e.File = "file", e.Domain = "domain", e))(Rn || {});
const Gi = {
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
      category: Xt.Browsing
    },
    edit: {
      category: Xt.Learning
    },
    system_name: "",
    system_version: "unknown",
    system_arch: "unknown",
    useragent: ""
  }
}, Q = {
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
  WAKATIME_CLIENT_VERSION: "1.76.0",
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
var xn;
function p() {
  return xn.apply(null, arguments);
}
function $i(e) {
  xn = e;
}
function $(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Se(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function v(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function dr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (v(e, t))
      return !1;
  return !0;
}
function U(e) {
  return e === void 0;
}
function ce(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ze(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Pn(e, t) {
  var r = [], n, s = e.length;
  for (n = 0; n < s; ++n)
    r.push(t(e[n], n));
  return r;
}
function ye(e, t) {
  for (var r in t)
    v(t, r) && (e[r] = t[r]);
  return v(t, "toString") && (e.toString = t.toString), v(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function te(e, t, r, n) {
  return ts(e, t, r, n, !0).utc();
}
function zi() {
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
  return e._pf == null && (e._pf = zi()), e._pf;
}
var er;
Array.prototype.some ? er = Array.prototype.some : er = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function fr(e) {
  if (e._isValid == null) {
    var t = _(e), r = er.call(t.parsedDateParts, function(s) {
      return s != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function St(e) {
  var t = te(NaN);
  return e != null ? ye(_(t), e) : _(t).userInvalidated = !0, t;
}
var Kr = p.momentProperties = [], jt = !1;
function pr(e, t) {
  var r, n, s, a = Kr.length;
  if (U(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), U(t._i) || (e._i = t._i), U(t._f) || (e._f = t._f), U(t._l) || (e._l = t._l), U(t._strict) || (e._strict = t._strict), U(t._tzm) || (e._tzm = t._tzm), U(t._isUTC) || (e._isUTC = t._isUTC), U(t._offset) || (e._offset = t._offset), U(t._pf) || (e._pf = _(t)), U(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      n = Kr[r], s = t[n], U(s) || (e[n] = s);
  return e;
}
function Ke(e) {
  pr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), jt === !1 && (jt = !0, p.updateOffset(this), jt = !1);
}
function z(e) {
  return e instanceof Ke || e != null && e._isAMomentObject != null;
}
function Nn(e) {
  p.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function q(e, t) {
  var r = !0;
  return ye(function() {
    if (p.deprecationHandler != null && p.deprecationHandler(null, e), r) {
      var n = [], s, a, i, u = arguments.length;
      for (a = 0; a < u; a++) {
        if (s = "", typeof arguments[a] == "object") {
          s += `
[` + a + "] ";
          for (i in arguments[0])
            v(arguments[0], i) && (s += i + ": " + arguments[0][i] + ", ");
          s = s.slice(0, -2);
        } else
          s = arguments[a];
        n.push(s);
      }
      Nn(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Jr = {};
function An(e, t) {
  p.deprecationHandler != null && p.deprecationHandler(e, t), Jr[e] || (Nn(t), Jr[e] = !0);
}
p.suppressDeprecationWarnings = !1;
p.deprecationHandler = null;
function re(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Ki(e) {
  var t, r;
  for (r in e)
    v(e, r) && (t = e[r], re(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function tr(e, t) {
  var r = ye({}, e), n;
  for (n in t)
    v(t, n) && (Se(e[n]) && Se(t[n]) ? (r[n] = {}, ye(r[n], e[n]), ye(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    v(e, n) && !v(t, n) && Se(e[n]) && (r[n] = ye({}, r[n]));
  return r;
}
function mr(e) {
  e != null && this.set(e);
}
var rr;
Object.keys ? rr = Object.keys : rr = function(e) {
  var t, r = [];
  for (t in e)
    v(e, t) && r.push(t);
  return r;
};
var Ji = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Zi(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return re(n) ? n.call(t, r) : n;
}
function X(e, t, r) {
  var n = "" + Math.abs(e), s = t - n.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n;
}
var yr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Xe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ht = {}, Ee = {};
function g(e, t, r, n) {
  var s = n;
  typeof n == "string" && (s = function() {
    return this[n]();
  }), e && (Ee[e] = s), t && (Ee[t[0]] = function() {
    return X(s.apply(this, arguments), t[1], t[2]);
  }), r && (Ee[r] = function() {
    return this.localeData().ordinal(
      s.apply(this, arguments),
      e
    );
  });
}
function Qi(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Xi(e) {
  var t = e.match(yr), r, n;
  for (r = 0, n = t.length; r < n; r++)
    Ee[t[r]] ? t[r] = Ee[t[r]] : t[r] = Qi(t[r]);
  return function(s) {
    var a = "", i;
    for (i = 0; i < n; i++)
      a += re(t[i]) ? t[i].call(s, e) : t[i];
    return a;
  };
}
function it(e, t) {
  return e.isValid() ? (t = Yn(t, e.localeData()), Ht[t] = Ht[t] || Xi(t), Ht[t](e)) : e.localeData().invalidDate();
}
function Yn(e, t) {
  var r = 5;
  function n(s) {
    return t.longDateFormat(s) || s;
  }
  for (Xe.lastIndex = 0; r >= 0 && Xe.test(e); )
    e = e.replace(
      Xe,
      n
    ), Xe.lastIndex = 0, r -= 1;
  return e;
}
var eo = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function to(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(yr).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var ro = "Invalid date";
function no() {
  return this._invalidDate;
}
var so = "%d", ao = /\d{1,2}/;
function io(e) {
  return this._ordinal.replace("%d", e);
}
var oo = {
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
function lo(e, t, r, n) {
  var s = this._relativeTime[r];
  return re(s) ? s(e, t, r, n) : s.replace(/%d/i, e);
}
function uo(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return re(r) ? r(t) : r.replace(/%s/i, t);
}
var Ie = {};
function F(e, t) {
  var r = e.toLowerCase();
  Ie[r] = Ie[r + "s"] = Ie[t] = e;
}
function V(e) {
  return typeof e == "string" ? Ie[e] || Ie[e.toLowerCase()] : void 0;
}
function gr(e) {
  var t = {}, r, n;
  for (n in e)
    v(e, n) && (r = V(n), r && (t[r] = e[n]));
  return t;
}
var Cn = {};
function L(e, t) {
  Cn[e] = t;
}
function co(e) {
  var t = [], r;
  for (r in e)
    v(e, r) && t.push({ unit: r, priority: Cn[r] });
  return t.sort(function(n, s) {
    return n.priority - s.priority;
  }), t;
}
function Ot(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function j(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function b(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = j(t)), r;
}
function Ae(e, t) {
  return function(r) {
    return r != null ? (Fn(this, e, r), p.updateOffset(this, t), this) : ct(this, e);
  };
}
function ct(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Fn(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && Ot(e.year()) && e.month() === 1 && e.date() === 29 ? (r = b(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    Rt(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function ho(e) {
  return e = V(e), re(this[e]) ? this[e]() : this;
}
function fo(e, t) {
  if (typeof e == "object") {
    e = gr(e);
    var r = co(e), n, s = r.length;
    for (n = 0; n < s; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = V(e), re(this[e]))
    return this[e](t);
  return this;
}
var Ln = /\d/, B = /\d\d/, In = /\d{3}/, _r = /\d{4}/, vt = /[+-]?\d{6}/, R = /\d\d?/, Un = /\d\d\d\d?/, Wn = /\d\d\d\d\d\d?/, Dt = /\d{1,3}/, wr = /\d{1,4}/, Tt = /[+-]?\d{1,6}/, Ye = /\d+/, Mt = /[+-]?\d+/, po = /Z|[+-]\d\d:?\d\d/gi, Et = /Z|[+-]\d\d(?::?\d\d)?/gi, mo = /[+-]?\d+(\.\d{1,3})?/, Je = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ht;
ht = {};
function m(e, t, r) {
  ht[e] = re(t) ? t : function(n, s) {
    return n && r ? r : t;
  };
}
function yo(e, t) {
  return v(ht, e) ? ht[e](t._strict, t._locale) : new RegExp(go(e));
}
function go(e) {
  return W(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, s, a) {
        return r || n || s || a;
      }
    )
  );
}
function W(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var nr = {};
function M(e, t) {
  var r, n = t, s;
  for (typeof e == "string" && (e = [e]), ce(t) && (n = function(a, i) {
    i[t] = b(a);
  }), s = e.length, r = 0; r < s; r++)
    nr[e[r]] = n;
}
function Ze(e, t) {
  M(e, function(r, n, s, a) {
    s._w = s._w || {}, t(r, s._w, s, a);
  });
}
function _o(e, t, r) {
  t != null && v(nr, e) && nr[e](t, r._a, r, e);
}
var C = 0, ie = 1, J = 2, A = 3, G = 4, oe = 5, ke = 6, wo = 7, bo = 8;
function ko(e, t) {
  return (e % t + t) % t;
}
var N;
Array.prototype.indexOf ? N = Array.prototype.indexOf : N = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Rt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = ko(t, 12);
  return e += (t - r) / 12, r === 1 ? Ot(e) ? 29 : 28 : 31 - r % 7 % 2;
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
m("M", R);
m("MM", R, B);
m("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
m("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
M(["M", "MM"], function(e, t) {
  t[ie] = b(e) - 1;
});
M(["MMM", "MMMM"], function(e, t, r, n) {
  var s = r._locale.monthsParse(e, n, r._strict);
  s != null ? t[ie] = s : _(r).invalidMonth = e;
});
var So = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Bn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), jn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Oo = Je, vo = Je;
function Do(e, t) {
  return e ? $(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || jn).test(t) ? "format" : "standalone"][e.month()] : $(this._months) ? this._months : this._months.standalone;
}
function To(e, t) {
  return e ? $(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[jn.test(t) ? "format" : "standalone"][e.month()] : $(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Mo(e, t, r) {
  var n, s, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      a = te([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (s = N.call(this._shortMonthsParse, i), s !== -1 ? s : null) : (s = N.call(this._longMonthsParse, i), s !== -1 ? s : null) : t === "MMM" ? (s = N.call(this._shortMonthsParse, i), s !== -1 ? s : (s = N.call(this._longMonthsParse, i), s !== -1 ? s : null)) : (s = N.call(this._longMonthsParse, i), s !== -1 ? s : (s = N.call(this._shortMonthsParse, i), s !== -1 ? s : null));
}
function Eo(e, t, r) {
  var n, s, a;
  if (this._monthsParseExact)
    return Mo.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (s = te([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(s, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(s, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[n] && (a = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(a.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!r && this._monthsParse[n].test(e))
      return n;
  }
}
function Hn(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = b(t);
    else if (t = e.localeData().monthsParse(t), !ce(t))
      return e;
  }
  return r = Math.min(e.date(), Rt(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function qn(e) {
  return e != null ? (Hn(this, e), p.updateOffset(this, !0), this) : ct(this, "Month");
}
function Ro() {
  return Rt(this.year(), this.month());
}
function xo(e) {
  return this._monthsParseExact ? (v(this, "_monthsRegex") || Vn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (v(this, "_monthsShortRegex") || (this._monthsShortRegex = Oo), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Po(e) {
  return this._monthsParseExact ? (v(this, "_monthsRegex") || Vn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (v(this, "_monthsRegex") || (this._monthsRegex = vo), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Vn() {
  function e(i, u) {
    return u.length - i.length;
  }
  var t = [], r = [], n = [], s, a;
  for (s = 0; s < 12; s++)
    a = te([2e3, s]), t.push(this.monthsShort(a, "")), r.push(this.months(a, "")), n.push(this.months(a, "")), n.push(this.monthsShort(a, ""));
  for (t.sort(e), r.sort(e), n.sort(e), s = 0; s < 12; s++)
    t[s] = W(t[s]), r[s] = W(r[s]);
  for (s = 0; s < 24; s++)
    n[s] = W(n[s]);
  this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
g("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? X(e, 4) : "+" + e;
});
g(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
g(0, ["YYYY", 4], 0, "year");
g(0, ["YYYYY", 5], 0, "year");
g(0, ["YYYYYY", 6, !0], 0, "year");
F("year", "y");
L("year", 1);
m("Y", Mt);
m("YY", R, B);
m("YYYY", wr, _r);
m("YYYYY", Tt, vt);
m("YYYYYY", Tt, vt);
M(["YYYYY", "YYYYYY"], C);
M("YYYY", function(e, t) {
  t[C] = e.length === 2 ? p.parseTwoDigitYear(e) : b(e);
});
M("YY", function(e, t) {
  t[C] = p.parseTwoDigitYear(e);
});
M("Y", function(e, t) {
  t[C] = parseInt(e, 10);
});
function Ue(e) {
  return Ot(e) ? 366 : 365;
}
p.parseTwoDigitYear = function(e) {
  return b(e) + (b(e) > 68 ? 1900 : 2e3);
};
var Gn = Ae("FullYear", !0);
function No() {
  return Ot(this.year());
}
function Ao(e, t, r, n, s, a, i) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, r, n, s, a, i), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, r, n, s, a, i), u;
}
function je(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function dt(e, t, r) {
  var n = 7 + t - r, s = (7 + je(e, 0, n).getUTCDay() - t) % 7;
  return -s + n - 1;
}
function $n(e, t, r, n, s) {
  var a = (7 + r - n) % 7, i = dt(e, n, s), u = 1 + 7 * (t - 1) + a + i, o, d;
  return u <= 0 ? (o = e - 1, d = Ue(o) + u) : u > Ue(e) ? (o = e + 1, d = u - Ue(e)) : (o = e, d = u), {
    year: o,
    dayOfYear: d
  };
}
function He(e, t, r) {
  var n = dt(e.year(), t, r), s = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, i;
  return s < 1 ? (i = e.year() - 1, a = s + ue(i, t, r)) : s > ue(e.year(), t, r) ? (a = s - ue(e.year(), t, r), i = e.year() + 1) : (i = e.year(), a = s), {
    week: a,
    year: i
  };
}
function ue(e, t, r) {
  var n = dt(e, t, r), s = dt(e + 1, t, r);
  return (Ue(e) - n + s) / 7;
}
g("w", ["ww", 2], "wo", "week");
g("W", ["WW", 2], "Wo", "isoWeek");
F("week", "w");
F("isoWeek", "W");
L("week", 5);
L("isoWeek", 5);
m("w", R);
m("ww", R, B);
m("W", R);
m("WW", R, B);
Ze(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = b(e);
  }
);
function Yo(e) {
  return He(e, this._week.dow, this._week.doy).week;
}
var Co = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Fo() {
  return this._week.dow;
}
function Lo() {
  return this._week.doy;
}
function Io(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Uo(e) {
  var t = He(this, 1, 4).week;
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
m("d", R);
m("e", R);
m("E", R);
m("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
m("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
m("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Ze(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var s = r._locale.weekdaysParse(e, n, r._strict);
  s != null ? t.d = s : _(r).invalidWeekday = e;
});
Ze(["d", "e", "E"], function(e, t, r, n) {
  t[n] = b(e);
});
function Wo(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Bo(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function br(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var jo = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), zn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ho = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), qo = Je, Vo = Je, Go = Je;
function $o(e, t) {
  var r = $(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? br(r, this._week.dow) : e ? r[e.day()] : r;
}
function zo(e) {
  return e === !0 ? br(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Ko(e) {
  return e === !0 ? br(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Jo(e, t, r) {
  var n, s, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      a = te([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (s = N.call(this._weekdaysParse, i), s !== -1 ? s : null) : t === "ddd" ? (s = N.call(this._shortWeekdaysParse, i), s !== -1 ? s : null) : (s = N.call(this._minWeekdaysParse, i), s !== -1 ? s : null) : t === "dddd" ? (s = N.call(this._weekdaysParse, i), s !== -1 || (s = N.call(this._shortWeekdaysParse, i), s !== -1) ? s : (s = N.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : t === "ddd" ? (s = N.call(this._shortWeekdaysParse, i), s !== -1 || (s = N.call(this._weekdaysParse, i), s !== -1) ? s : (s = N.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : (s = N.call(this._minWeekdaysParse, i), s !== -1 || (s = N.call(this._weekdaysParse, i), s !== -1) ? s : (s = N.call(this._shortWeekdaysParse, i), s !== -1 ? s : null));
}
function Zo(e, t, r) {
  var n, s, a;
  if (this._weekdaysParseExact)
    return Jo.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (s = te([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (a = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(a.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!r && this._weekdaysParse[n].test(e))
      return n;
  }
}
function Qo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Wo(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Xo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function el(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Bo(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function tl(e) {
  return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || kr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (v(this, "_weekdaysRegex") || (this._weekdaysRegex = qo), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function rl(e) {
  return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || kr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (v(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Vo), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function nl(e) {
  return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || kr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (v(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Go), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function kr() {
  function e(f, w) {
    return w.length - f.length;
  }
  var t = [], r = [], n = [], s = [], a, i, u, o, d;
  for (a = 0; a < 7; a++)
    i = te([2e3, 1]).day(a), u = W(this.weekdaysMin(i, "")), o = W(this.weekdaysShort(i, "")), d = W(this.weekdays(i, "")), t.push(u), r.push(o), n.push(d), s.push(u), s.push(o), s.push(d);
  t.sort(e), r.sort(e), n.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Sr() {
  return this.hours() % 12 || 12;
}
function sl() {
  return this.hours() || 24;
}
g("H", ["HH", 2], 0, "hour");
g("h", ["hh", 2], 0, Sr);
g("k", ["kk", 2], 0, sl);
g("hmm", 0, 0, function() {
  return "" + Sr.apply(this) + X(this.minutes(), 2);
});
g("hmmss", 0, 0, function() {
  return "" + Sr.apply(this) + X(this.minutes(), 2) + X(this.seconds(), 2);
});
g("Hmm", 0, 0, function() {
  return "" + this.hours() + X(this.minutes(), 2);
});
g("Hmmss", 0, 0, function() {
  return "" + this.hours() + X(this.minutes(), 2) + X(this.seconds(), 2);
});
function Kn(e, t) {
  g(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Kn("a", !0);
Kn("A", !1);
F("hour", "h");
L("hour", 13);
function Jn(e, t) {
  return t._meridiemParse;
}
m("a", Jn);
m("A", Jn);
m("H", R);
m("h", R);
m("k", R);
m("HH", R, B);
m("hh", R, B);
m("kk", R, B);
m("hmm", Un);
m("hmmss", Wn);
m("Hmm", Un);
m("Hmmss", Wn);
M(["H", "HH"], A);
M(["k", "kk"], function(e, t, r) {
  var n = b(e);
  t[A] = n === 24 ? 0 : n;
});
M(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
M(["h", "hh"], function(e, t, r) {
  t[A] = b(e), _(r).bigHour = !0;
});
M("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[A] = b(e.substr(0, n)), t[G] = b(e.substr(n)), _(r).bigHour = !0;
});
M("hmmss", function(e, t, r) {
  var n = e.length - 4, s = e.length - 2;
  t[A] = b(e.substr(0, n)), t[G] = b(e.substr(n, 2)), t[oe] = b(e.substr(s)), _(r).bigHour = !0;
});
M("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[A] = b(e.substr(0, n)), t[G] = b(e.substr(n));
});
M("Hmmss", function(e, t, r) {
  var n = e.length - 4, s = e.length - 2;
  t[A] = b(e.substr(0, n)), t[G] = b(e.substr(n, 2)), t[oe] = b(e.substr(s));
});
function al(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var il = /[ap]\.?m?\.?/i, ol = Ae("Hours", !0);
function ll(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Zn = {
  calendar: Ji,
  longDateFormat: eo,
  invalidDate: ro,
  ordinal: so,
  dayOfMonthOrdinalParse: ao,
  relativeTime: oo,
  months: So,
  monthsShort: Bn,
  week: Co,
  weekdays: jo,
  weekdaysMin: Ho,
  weekdaysShort: zn,
  meridiemParse: il
}, P = {}, Fe = {}, qe;
function ul(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function Zr(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function cl(e) {
  for (var t = 0, r, n, s, a; t < e.length; ) {
    for (a = Zr(e[t]).split("-"), r = a.length, n = Zr(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (s = xt(a.slice(0, r).join("-")), s)
        return s;
      if (n && n.length >= r && ul(a, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return qe;
}
function hl(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function xt(e) {
  var t = null, r;
  if (P[e] === void 0 && typeof module < "u" && module && module.exports && hl(e))
    try {
      t = qe._abbr, r = require, r("./locale/" + e), _e(t);
    } catch {
      P[e] = null;
    }
  return P[e];
}
function _e(e, t) {
  var r;
  return e && (U(t) ? r = he(e) : r = Or(e, t), r ? qe = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), qe._abbr;
}
function Or(e, t) {
  if (t !== null) {
    var r, n = Zn;
    if (t.abbr = e, P[e] != null)
      An(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = P[e]._config;
    else if (t.parentLocale != null)
      if (P[t.parentLocale] != null)
        n = P[t.parentLocale]._config;
      else if (r = xt(t.parentLocale), r != null)
        n = r._config;
      else
        return Fe[t.parentLocale] || (Fe[t.parentLocale] = []), Fe[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return P[e] = new mr(tr(n, t)), Fe[e] && Fe[e].forEach(function(s) {
      Or(s.name, s.config);
    }), _e(e), P[e];
  } else
    return delete P[e], null;
}
function dl(e, t) {
  if (t != null) {
    var r, n, s = Zn;
    P[e] != null && P[e].parentLocale != null ? P[e].set(tr(P[e]._config, t)) : (n = xt(e), n != null && (s = n._config), t = tr(s, t), n == null && (t.abbr = e), r = new mr(t), r.parentLocale = P[e], P[e] = r), _e(e);
  } else
    P[e] != null && (P[e].parentLocale != null ? (P[e] = P[e].parentLocale, e === _e() && _e(e)) : P[e] != null && delete P[e]);
  return P[e];
}
function he(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return qe;
  if (!$(e)) {
    if (t = xt(e), t)
      return t;
    e = [e];
  }
  return cl(e);
}
function fl() {
  return rr(P);
}
function vr(e) {
  var t, r = e._a;
  return r && _(e).overflow === -2 && (t = r[ie] < 0 || r[ie] > 11 ? ie : r[J] < 1 || r[J] > Rt(r[C], r[ie]) ? J : r[A] < 0 || r[A] > 24 || r[A] === 24 && (r[G] !== 0 || r[oe] !== 0 || r[ke] !== 0) ? A : r[G] < 0 || r[G] > 59 ? G : r[oe] < 0 || r[oe] > 59 ? oe : r[ke] < 0 || r[ke] > 999 ? ke : -1, _(e)._overflowDayOfYear && (t < C || t > J) && (t = J), _(e)._overflowWeeks && t === -1 && (t = wo), _(e)._overflowWeekday && t === -1 && (t = bo), _(e).overflow = t), e;
}
var pl = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ml = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, yl = /Z|[+-]\d\d(?::?\d\d)?/, et = [
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
], qt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], gl = /^\/?Date\((-?\d+)/i, _l = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, wl = {
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
function Qn(e) {
  var t, r, n = e._i, s = pl.exec(n) || ml.exec(n), a, i, u, o, d = et.length, f = qt.length;
  if (s) {
    for (_(e).iso = !0, t = 0, r = d; t < r; t++)
      if (et[t][1].exec(s[1])) {
        i = et[t][0], a = et[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (s[3]) {
      for (t = 0, r = f; t < r; t++)
        if (qt[t][1].exec(s[3])) {
          u = (s[2] || " ") + qt[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && u != null) {
      e._isValid = !1;
      return;
    }
    if (s[4])
      if (yl.exec(s[4]))
        o = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (u || "") + (o || ""), Tr(e);
  } else
    e._isValid = !1;
}
function bl(e, t, r, n, s, a) {
  var i = [
    kl(e),
    Bn.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(s, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function kl(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Sl(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Ol(e, t, r) {
  if (e) {
    var n = zn.indexOf(e), s = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== s)
      return _(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function vl(e, t, r) {
  if (e)
    return wl[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), s = n % 100, a = (n - s) / 100;
  return a * 60 + s;
}
function Xn(e) {
  var t = _l.exec(Sl(e._i)), r;
  if (t) {
    if (r = bl(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Ol(t[1], r, e))
      return;
    e._a = r, e._tzm = vl(t[8], t[9], t[10]), e._d = je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Dl(e) {
  var t = gl.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Qn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Xn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : p.createFromInputFallback(e);
}
p.createFromInputFallback = q(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function De(e, t, r) {
  return e ?? t ?? r;
}
function Tl(e) {
  var t = new Date(p.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Dr(e) {
  var t, r, n = [], s, a, i;
  if (!e._d) {
    for (s = Tl(e), e._w && e._a[J] == null && e._a[ie] == null && Ml(e), e._dayOfYear != null && (i = De(e._a[C], s[C]), (e._dayOfYear > Ue(i) || e._dayOfYear === 0) && (_(e)._overflowDayOfYear = !0), r = je(i, 0, e._dayOfYear), e._a[ie] = r.getUTCMonth(), e._a[J] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = s[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[A] === 24 && e._a[G] === 0 && e._a[oe] === 0 && e._a[ke] === 0 && (e._nextDay = !0, e._a[A] = 0), e._d = (e._useUTC ? je : Ao).apply(
      null,
      n
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[A] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (_(e).weekdayMismatch = !0);
  }
}
function Ml(e) {
  var t, r, n, s, a, i, u, o, d;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, r = De(
    t.GG,
    e._a[C],
    He(E(), 1, 4).year
  ), n = De(t.W, 1), s = De(t.E, 1), (s < 1 || s > 7) && (o = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, d = He(E(), a, i), r = De(t.gg, e._a[C], d.year), n = De(t.w, d.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (o = !0)) : t.e != null ? (s = t.e + a, (t.e < 0 || t.e > 6) && (o = !0)) : s = a), n < 1 || n > ue(r, a, i) ? _(e)._overflowWeeks = !0 : o != null ? _(e)._overflowWeekday = !0 : (u = $n(r, n, s, a, i), e._a[C] = u.year, e._dayOfYear = u.dayOfYear);
}
p.ISO_8601 = function() {
};
p.RFC_2822 = function() {
};
function Tr(e) {
  if (e._f === p.ISO_8601) {
    Qn(e);
    return;
  }
  if (e._f === p.RFC_2822) {
    Xn(e);
    return;
  }
  e._a = [], _(e).empty = !0;
  var t = "" + e._i, r, n, s, a, i, u = t.length, o = 0, d, f;
  for (s = Yn(e._f, e._locale).match(yr) || [], f = s.length, r = 0; r < f; r++)
    a = s[r], n = (t.match(yo(a, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && _(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), o += n.length), Ee[a] ? (n ? _(e).empty = !1 : _(e).unusedTokens.push(a), _o(a, n, e)) : e._strict && !n && _(e).unusedTokens.push(a);
  _(e).charsLeftOver = u - o, t.length > 0 && _(e).unusedInput.push(t), e._a[A] <= 12 && _(e).bigHour === !0 && e._a[A] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[A] = El(
    e._locale,
    e._a[A],
    e._meridiem
  ), d = _(e).era, d !== null && (e._a[C] = e._locale.erasConvertYear(d, e._a[C])), Dr(e), vr(e);
}
function El(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function Rl(e) {
  var t, r, n, s, a, i, u = !1, o = e._f.length;
  if (o === 0) {
    _(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (s = 0; s < o; s++)
    a = 0, i = !1, t = pr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Tr(t), fr(t) && (i = !0), a += _(t).charsLeftOver, a += _(t).unusedTokens.length * 10, _(t).score = a, u ? a < n && (n = a, r = t) : (n == null || a < n || i) && (n = a, r = t, i && (u = !0));
  ye(e, r || t);
}
function xl(e) {
  if (!e._d) {
    var t = gr(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Pn(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), Dr(e);
  }
}
function Pl(e) {
  var t = new Ke(vr(es(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function es(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || he(e._l), t === null || r === void 0 && t === "" ? St({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), z(t) ? new Ke(vr(t)) : (ze(t) ? e._d = t : $(r) ? Rl(e) : r ? Tr(e) : Nl(e), fr(e) || (e._d = null), e));
}
function Nl(e) {
  var t = e._i;
  U(t) ? e._d = new Date(p.now()) : ze(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Dl(e) : $(t) ? (e._a = Pn(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Dr(e)) : Se(t) ? xl(e) : ce(t) ? e._d = new Date(t) : p.createFromInputFallback(e);
}
function ts(e, t, r, n, s) {
  var a = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (Se(e) && dr(e) || $(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = s, a._l = r, a._i = e, a._f = t, a._strict = n, Pl(a);
}
function E(e, t, r, n) {
  return ts(e, t, r, n, !1);
}
var Al = q(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = E.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : St();
  }
), Yl = q(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = E.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : St();
  }
);
function rs(e, t) {
  var r, n;
  if (t.length === 1 && $(t[0]) && (t = t[0]), !t.length)
    return E();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function Cl() {
  var e = [].slice.call(arguments, 0);
  return rs("isBefore", e);
}
function Fl() {
  var e = [].slice.call(arguments, 0);
  return rs("isAfter", e);
}
var Ll = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Le = [
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
function Il(e) {
  var t, r = !1, n, s = Le.length;
  for (t in e)
    if (v(e, t) && !(N.call(Le, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < s; ++n)
    if (e[Le[n]]) {
      if (r)
        return !1;
      parseFloat(e[Le[n]]) !== b(e[Le[n]]) && (r = !0);
    }
  return !0;
}
function Ul() {
  return this._isValid;
}
function Wl() {
  return K(NaN);
}
function Pt(e) {
  var t = gr(e), r = t.year || 0, n = t.quarter || 0, s = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, u = t.hour || 0, o = t.minute || 0, d = t.second || 0, f = t.millisecond || 0;
  this._isValid = Il(t), this._milliseconds = +f + d * 1e3 + // 1000
  o * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +s + n * 3 + r * 12, this._data = {}, this._locale = he(), this._bubble();
}
function ot(e) {
  return e instanceof Pt;
}
function sr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Bl(e, t, r) {
  var n = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < n; i++)
    (r && e[i] !== t[i] || !r && b(e[i]) !== b(t[i])) && a++;
  return a + s;
}
function ns(e, t) {
  g(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + X(~~(r / 60), 2) + t + X(~~r % 60, 2);
  });
}
ns("Z", ":");
ns("ZZ", "");
m("Z", Et);
m("ZZ", Et);
M(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Mr(Et, e);
});
var jl = /([\+\-]|\d\d)/gi;
function Mr(e, t) {
  var r = (t || "").match(e), n, s, a;
  return r === null ? null : (n = r[r.length - 1] || [], s = (n + "").match(jl) || ["-", 0, 0], a = +(s[1] * 60) + b(s[2]), a === 0 ? 0 : s[0] === "+" ? a : -a);
}
function Er(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (z(e) || ze(e) ? e.valueOf() : E(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), p.updateOffset(r, !1), r) : E(e).local();
}
function ar(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
p.updateOffset = function() {
};
function Hl(e, t, r) {
  var n = this._offset || 0, s;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Mr(Et, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (s = ar(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), n !== e && (!t || this._changeInProgress ? is(
      this,
      K(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, p.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : ar(this);
}
function ql(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Vl(e) {
  return this.utcOffset(0, e);
}
function Gl(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ar(this), "m")), this;
}
function $l() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Mr(po, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function zl(e) {
  return this.isValid() ? (e = e ? E(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Kl() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Jl() {
  if (!U(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return pr(e, this), e = es(e), e._a ? (t = e._isUTC ? te(e._a) : E(e._a), this._isDSTShifted = this.isValid() && Bl(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Zl() {
  return this.isValid() ? !this._isUTC : !1;
}
function Ql() {
  return this.isValid() ? this._isUTC : !1;
}
function ss() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Xl = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, eu = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function K(e, t) {
  var r = e, n = null, s, a, i;
  return ot(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ce(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = Xl.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: b(n[J]) * s,
    h: b(n[A]) * s,
    m: b(n[G]) * s,
    s: b(n[oe]) * s,
    ms: b(sr(n[ke] * 1e3)) * s
    // the millisecond decimal point is included in the match
  }) : (n = eu.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
    y: be(n[2], s),
    M: be(n[3], s),
    w: be(n[4], s),
    d: be(n[5], s),
    h: be(n[6], s),
    m: be(n[7], s),
    s: be(n[8], s)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = tu(
    E(r.from),
    E(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), a = new Pt(r), ot(e) && v(e, "_locale") && (a._locale = e._locale), ot(e) && v(e, "_isValid") && (a._isValid = e._isValid), a;
}
K.fn = Pt.prototype;
K.invalid = Wl;
function be(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Qr(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function tu(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Er(t, e), e.isBefore(t) ? r = Qr(e, t) : (r = Qr(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function as(e, t) {
  return function(r, n) {
    var s, a;
    return n !== null && !isNaN(+n) && (An(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = n, n = a), s = K(r, n), is(this, s, e), this;
  };
}
function is(e, t, r, n) {
  var s = t._milliseconds, a = sr(t._days), i = sr(t._months);
  e.isValid() && (n = n ?? !0, i && Hn(e, ct(e, "Month") + i * r), a && Fn(e, "Date", ct(e, "Date") + a * r), s && e._d.setTime(e._d.valueOf() + s * r), n && p.updateOffset(e, a || i));
}
var ru = as(1, "add"), nu = as(-1, "subtract");
function os(e) {
  return typeof e == "string" || e instanceof String;
}
function su(e) {
  return z(e) || ze(e) || os(e) || ce(e) || iu(e) || au(e) || e === null || e === void 0;
}
function au(e) {
  var t = Se(e) && !dr(e), r = !1, n = [
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
  ], s, a, i = n.length;
  for (s = 0; s < i; s += 1)
    a = n[s], r = r || v(e, a);
  return t && r;
}
function iu(e) {
  var t = $(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !ce(n) && os(e);
  }).length === 0), t && r;
}
function ou(e) {
  var t = Se(e) && !dr(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], s, a;
  for (s = 0; s < n.length; s += 1)
    a = n[s], r = r || v(e, a);
  return t && r;
}
function lu(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function uu(e, t) {
  arguments.length === 1 && (arguments[0] ? su(arguments[0]) ? (e = arguments[0], t = void 0) : ou(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || E(), n = Er(r, this).startOf("day"), s = p.calendarFormat(this, n) || "sameElse", a = t && (re(t[s]) ? t[s].call(this, r) : t[s]);
  return this.format(
    a || this.localeData().calendar(s, this, E(r))
  );
}
function cu() {
  return new Ke(this);
}
function hu(e, t) {
  var r = z(e) ? e : E(e);
  return this.isValid() && r.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function du(e, t) {
  var r = z(e) ? e : E(e);
  return this.isValid() && r.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function fu(e, t, r, n) {
  var s = z(e) ? e : E(e), a = z(t) ? t : E(t);
  return this.isValid() && s.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(s, r) : !this.isBefore(s, r)) && (n[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function pu(e, t) {
  var r = z(e) ? e : E(e), n;
  return this.isValid() && r.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function mu(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function yu(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function gu(e, t, r) {
  var n, s, a;
  if (!this.isValid())
    return NaN;
  if (n = Er(e, this), !n.isValid())
    return NaN;
  switch (s = (n.utcOffset() - this.utcOffset()) * 6e4, t = V(t), t) {
    case "year":
      a = lt(this, n) / 12;
      break;
    case "month":
      a = lt(this, n);
      break;
    case "quarter":
      a = lt(this, n) / 3;
      break;
    case "second":
      a = (this - n) / 1e3;
      break;
    case "minute":
      a = (this - n) / 6e4;
      break;
    case "hour":
      a = (this - n) / 36e5;
      break;
    case "day":
      a = (this - n - s) / 864e5;
      break;
    case "week":
      a = (this - n - s) / 6048e5;
      break;
    default:
      a = this - n;
  }
  return r ? a : j(a);
}
function lt(e, t) {
  if (e.date() < t.date())
    return -lt(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), s, a;
  return t - n < 0 ? (s = e.clone().add(r - 1, "months"), a = (t - n) / (n - s)) : (s = e.clone().add(r + 1, "months"), a = (t - n) / (s - n)), -(r + a) || 0;
}
p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function _u() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function wu(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? it(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : re(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", it(r, "Z")) : it(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function bu() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, s, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + n + s + a);
}
function ku(e) {
  e || (e = this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
  var t = it(this, e);
  return this.localeData().postformat(t);
}
function Su(e, t) {
  return this.isValid() && (z(e) && e.isValid() || E(e).isValid()) ? K({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Ou(e) {
  return this.from(E(), e);
}
function vu(e, t) {
  return this.isValid() && (z(e) && e.isValid() || E(e).isValid()) ? K({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Du(e) {
  return this.to(E(), e);
}
function ls(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = he(e), t != null && (this._locale = t), this);
}
var us = q(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function cs() {
  return this._locale;
}
var ft = 1e3, Re = 60 * ft, pt = 60 * Re, hs = (365 * 400 + 97) * 24 * pt;
function xe(e, t) {
  return (e % t + t) % t;
}
function ds(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - hs : new Date(e, t, r).valueOf();
}
function fs(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - hs : Date.UTC(e, t, r);
}
function Tu(e) {
  var t, r;
  if (e = V(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? fs : ds, e) {
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
      t = this._d.valueOf(), t -= xe(
        t + (this._isUTC ? 0 : this.utcOffset() * Re),
        pt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= xe(t, Re);
      break;
    case "second":
      t = this._d.valueOf(), t -= xe(t, ft);
      break;
  }
  return this._d.setTime(t), p.updateOffset(this, !0), this;
}
function Mu(e) {
  var t, r;
  if (e = V(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? fs : ds, e) {
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
      t = this._d.valueOf(), t += pt - xe(
        t + (this._isUTC ? 0 : this.utcOffset() * Re),
        pt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Re - xe(t, Re) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += ft - xe(t, ft) - 1;
      break;
  }
  return this._d.setTime(t), p.updateOffset(this, !0), this;
}
function Eu() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Ru() {
  return Math.floor(this.valueOf() / 1e3);
}
function xu() {
  return new Date(this.valueOf());
}
function Pu() {
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
function Nu() {
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
function Au() {
  return this.isValid() ? this.toISOString() : null;
}
function Yu() {
  return fr(this);
}
function Cu() {
  return ye({}, _(this));
}
function Fu() {
  return _(this).overflow;
}
function Lu() {
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
m("N", Rr);
m("NN", Rr);
m("NNN", Rr);
m("NNNN", zu);
m("NNNNN", Ku);
M(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var s = r._locale.erasParse(e, n, r._strict);
    s ? _(r).era = s : _(r).invalidEra = e;
  }
);
m("y", Ye);
m("yy", Ye);
m("yyy", Ye);
m("yyyy", Ye);
m("yo", Ju);
M(["y", "yy", "yyy", "yyyy"], C);
M(["yo"], function(e, t, r, n) {
  var s;
  r._locale._eraYearOrdinalRegex && (s = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[C] = r._locale.eraYearOrdinalParse(e, s) : t[C] = parseInt(e, 10);
});
function Iu(e, t) {
  var r, n, s, a = this._eras || he("en")._eras;
  for (r = 0, n = a.length; r < n; ++r) {
    switch (typeof a[r].since) {
      case "string":
        s = p(a[r].since).startOf("day"), a[r].since = s.valueOf();
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        s = p(a[r].until).startOf("day").valueOf(), a[r].until = s.valueOf();
        break;
    }
  }
  return a;
}
function Uu(e, t, r) {
  var n, s, a = this.eras(), i, u, o;
  for (e = e.toUpperCase(), n = 0, s = a.length; n < s; ++n)
    if (i = a[n].name.toUpperCase(), u = a[n].abbr.toUpperCase(), o = a[n].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return a[n];
          break;
        case "NNNN":
          if (i === e)
            return a[n];
          break;
        case "NNNNN":
          if (o === e)
            return a[n];
          break;
      }
    else if ([i, u, o].indexOf(e) >= 0)
      return a[n];
}
function Wu(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? p(e.since).year() : p(e.since).year() + (t - e.offset) * r;
}
function Bu() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function ju() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function Hu() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function qu() {
  var e, t, r, n, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = s[e].since <= s[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
      return (this.year() - p(s[e].since).year()) * r + s[e].offset;
  return this.year();
}
function Vu(e) {
  return v(this, "_erasNameRegex") || xr.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Gu(e) {
  return v(this, "_erasAbbrRegex") || xr.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function $u(e) {
  return v(this, "_erasNarrowRegex") || xr.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Rr(e, t) {
  return t.erasAbbrRegex(e);
}
function zu(e, t) {
  return t.erasNameRegex(e);
}
function Ku(e, t) {
  return t.erasNarrowRegex(e);
}
function Ju(e, t) {
  return t._eraYearOrdinalRegex || Ye;
}
function xr() {
  var e = [], t = [], r = [], n = [], s, a, i = this.eras();
  for (s = 0, a = i.length; s < a; ++s)
    t.push(W(i[s].name)), e.push(W(i[s].abbr)), r.push(W(i[s].narrow)), n.push(W(i[s].name)), n.push(W(i[s].abbr)), n.push(W(i[s].narrow));
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
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
function Nt(e, t) {
  g(0, [e, e.length], 0, t);
}
Nt("gggg", "weekYear");
Nt("ggggg", "weekYear");
Nt("GGGG", "isoWeekYear");
Nt("GGGGG", "isoWeekYear");
F("weekYear", "gg");
F("isoWeekYear", "GG");
L("weekYear", 1);
L("isoWeekYear", 1);
m("G", Mt);
m("g", Mt);
m("GG", R, B);
m("gg", R, B);
m("GGGG", wr, _r);
m("gggg", wr, _r);
m("GGGGG", Tt, vt);
m("ggggg", Tt, vt);
Ze(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = b(e);
  }
);
Ze(["gg", "GG"], function(e, t, r, n) {
  t[n] = p.parseTwoDigitYear(e);
});
function Zu(e) {
  return ps.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Qu(e) {
  return ps.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Xu() {
  return ue(this.year(), 1, 4);
}
function ec() {
  return ue(this.isoWeekYear(), 1, 4);
}
function tc() {
  var e = this.localeData()._week;
  return ue(this.year(), e.dow, e.doy);
}
function rc() {
  var e = this.localeData()._week;
  return ue(this.weekYear(), e.dow, e.doy);
}
function ps(e, t, r, n, s) {
  var a;
  return e == null ? He(this, n, s).year : (a = ue(e, n, s), t > a && (t = a), nc.call(this, e, t, r, n, s));
}
function nc(e, t, r, n, s) {
  var a = $n(e, t, r, n, s), i = je(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
g("Q", 0, "Qo", "quarter");
F("quarter", "Q");
L("quarter", 7);
m("Q", Ln);
M("Q", function(e, t) {
  t[ie] = (b(e) - 1) * 3;
});
function sc(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
g("D", ["DD", 2], "Do", "date");
F("date", "D");
L("date", 9);
m("D", R);
m("DD", R, B);
m("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
M(["D", "DD"], J);
M("Do", function(e, t) {
  t[J] = b(e.match(R)[0]);
});
var ms = Ae("Date", !0);
g("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
F("dayOfYear", "DDD");
L("dayOfYear", 4);
m("DDD", Dt);
m("DDDD", In);
M(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = b(e);
});
function ac(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
g("m", ["mm", 2], 0, "minute");
F("minute", "m");
L("minute", 14);
m("m", R);
m("mm", R, B);
M(["m", "mm"], G);
var ic = Ae("Minutes", !1);
g("s", ["ss", 2], 0, "second");
F("second", "s");
L("second", 15);
m("s", R);
m("ss", R, B);
M(["s", "ss"], oe);
var oc = Ae("Seconds", !1);
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
m("S", Dt, Ln);
m("SS", Dt, B);
m("SSS", Dt, In);
var ge, ys;
for (ge = "SSSS"; ge.length <= 9; ge += "S")
  m(ge, Ye);
function lc(e, t) {
  t[ke] = b(("0." + e) * 1e3);
}
for (ge = "S"; ge.length <= 9; ge += "S")
  M(ge, lc);
ys = Ae("Milliseconds", !1);
g("z", 0, 0, "zoneAbbr");
g("zz", 0, 0, "zoneName");
function uc() {
  return this._isUTC ? "UTC" : "";
}
function cc() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var h = Ke.prototype;
h.add = ru;
h.calendar = uu;
h.clone = cu;
h.diff = gu;
h.endOf = Mu;
h.format = ku;
h.from = Su;
h.fromNow = Ou;
h.to = vu;
h.toNow = Du;
h.get = ho;
h.invalidAt = Fu;
h.isAfter = hu;
h.isBefore = du;
h.isBetween = fu;
h.isSame = pu;
h.isSameOrAfter = mu;
h.isSameOrBefore = yu;
h.isValid = Yu;
h.lang = us;
h.locale = ls;
h.localeData = cs;
h.max = Yl;
h.min = Al;
h.parsingFlags = Cu;
h.set = fo;
h.startOf = Tu;
h.subtract = nu;
h.toArray = Pu;
h.toObject = Nu;
h.toDate = xu;
h.toISOString = wu;
h.inspect = bu;
typeof Symbol < "u" && Symbol.for != null && (h[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
h.toJSON = Au;
h.toString = _u;
h.unix = Ru;
h.valueOf = Eu;
h.creationData = Lu;
h.eraName = Bu;
h.eraNarrow = ju;
h.eraAbbr = Hu;
h.eraYear = qu;
h.year = Gn;
h.isLeapYear = No;
h.weekYear = Zu;
h.isoWeekYear = Qu;
h.quarter = h.quarters = sc;
h.month = qn;
h.daysInMonth = Ro;
h.week = h.weeks = Io;
h.isoWeek = h.isoWeeks = Uo;
h.weeksInYear = tc;
h.weeksInWeekYear = rc;
h.isoWeeksInYear = Xu;
h.isoWeeksInISOWeekYear = ec;
h.date = ms;
h.day = h.days = Qo;
h.weekday = Xo;
h.isoWeekday = el;
h.dayOfYear = ac;
h.hour = h.hours = ol;
h.minute = h.minutes = ic;
h.second = h.seconds = oc;
h.millisecond = h.milliseconds = ys;
h.utcOffset = Hl;
h.utc = Vl;
h.local = Gl;
h.parseZone = $l;
h.hasAlignedHourOffset = zl;
h.isDST = Kl;
h.isLocal = Zl;
h.isUtcOffset = Ql;
h.isUtc = ss;
h.isUTC = ss;
h.zoneAbbr = uc;
h.zoneName = cc;
h.dates = q(
  "dates accessor is deprecated. Use date instead.",
  ms
);
h.months = q(
  "months accessor is deprecated. Use month instead",
  qn
);
h.years = q(
  "years accessor is deprecated. Use year instead",
  Gn
);
h.zone = q(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  ql
);
h.isDSTShifted = q(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Jl
);
function hc(e) {
  return E(e * 1e3);
}
function dc() {
  return E.apply(null, arguments).parseZone();
}
function gs(e) {
  return e;
}
var D = mr.prototype;
D.calendar = Zi;
D.longDateFormat = to;
D.invalidDate = no;
D.ordinal = io;
D.preparse = gs;
D.postformat = gs;
D.relativeTime = lo;
D.pastFuture = uo;
D.set = Ki;
D.eras = Iu;
D.erasParse = Uu;
D.erasConvertYear = Wu;
D.erasAbbrRegex = Gu;
D.erasNameRegex = Vu;
D.erasNarrowRegex = $u;
D.months = Do;
D.monthsShort = To;
D.monthsParse = Eo;
D.monthsRegex = Po;
D.monthsShortRegex = xo;
D.week = Yo;
D.firstDayOfYear = Lo;
D.firstDayOfWeek = Fo;
D.weekdays = $o;
D.weekdaysMin = Ko;
D.weekdaysShort = zo;
D.weekdaysParse = Zo;
D.weekdaysRegex = tl;
D.weekdaysShortRegex = rl;
D.weekdaysMinRegex = nl;
D.isPM = al;
D.meridiem = ll;
function mt(e, t, r, n) {
  var s = he(), a = te().set(n, t);
  return s[r](a, e);
}
function _s(e, t, r) {
  if (ce(e) && (t = e, e = void 0), e = e || "", t != null)
    return mt(e, t, r, "month");
  var n, s = [];
  for (n = 0; n < 12; n++)
    s[n] = mt(e, n, r, "month");
  return s;
}
function Pr(e, t, r, n) {
  typeof e == "boolean" ? (ce(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, ce(t) && (r = t, t = void 0), t = t || "");
  var s = he(), a = e ? s._week.dow : 0, i, u = [];
  if (r != null)
    return mt(t, (r + a) % 7, n, "day");
  for (i = 0; i < 7; i++)
    u[i] = mt(t, (i + a) % 7, n, "day");
  return u;
}
function fc(e, t) {
  return _s(e, t, "months");
}
function pc(e, t) {
  return _s(e, t, "monthsShort");
}
function mc(e, t, r) {
  return Pr(e, t, r, "weekdays");
}
function yc(e, t, r) {
  return Pr(e, t, r, "weekdaysShort");
}
function gc(e, t, r) {
  return Pr(e, t, r, "weekdaysMin");
}
_e("en", {
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
p.lang = q(
  "moment.lang is deprecated. Use moment.locale instead.",
  _e
);
p.langData = q(
  "moment.langData is deprecated. Use moment.localeData instead.",
  he
);
var se = Math.abs;
function _c() {
  var e = this._data;
  return this._milliseconds = se(this._milliseconds), this._days = se(this._days), this._months = se(this._months), e.milliseconds = se(e.milliseconds), e.seconds = se(e.seconds), e.minutes = se(e.minutes), e.hours = se(e.hours), e.months = se(e.months), e.years = se(e.years), this;
}
function ws(e, t, r, n) {
  var s = K(t, r);
  return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble();
}
function wc(e, t) {
  return ws(this, e, t, 1);
}
function bc(e, t) {
  return ws(this, e, t, -1);
}
function Xr(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function kc() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, s, a, i, u, o;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Xr(ir(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, s = j(e / 1e3), n.seconds = s % 60, a = j(s / 60), n.minutes = a % 60, i = j(a / 60), n.hours = i % 24, t += j(i / 24), o = j(bs(t)), r += o, t -= Xr(ir(o)), u = j(r / 12), r %= 12, n.days = t, n.months = r, n.years = u, this;
}
function bs(e) {
  return e * 4800 / 146097;
}
function ir(e) {
  return e * 146097 / 4800;
}
function Sc(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = V(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + bs(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(ir(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Oc() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + b(this._months / 12) * 31536e6 : NaN;
}
function de(e) {
  return function() {
    return this.as(e);
  };
}
var vc = de("ms"), Dc = de("s"), Tc = de("m"), Mc = de("h"), Ec = de("d"), Rc = de("w"), xc = de("M"), Pc = de("Q"), Nc = de("y");
function Ac() {
  return K(this);
}
function Yc(e) {
  return e = V(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Oe(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Cc = Oe("milliseconds"), Fc = Oe("seconds"), Lc = Oe("minutes"), Ic = Oe("hours"), Uc = Oe("days"), Wc = Oe("months"), Bc = Oe("years");
function jc() {
  return j(this.days() / 7);
}
var ae = Math.round, Te = {
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
function Hc(e, t, r, n, s) {
  return s.relativeTime(t || 1, !!r, e, n);
}
function qc(e, t, r, n) {
  var s = K(e).abs(), a = ae(s.as("s")), i = ae(s.as("m")), u = ae(s.as("h")), o = ae(s.as("d")), d = ae(s.as("M")), f = ae(s.as("w")), w = ae(s.as("y")), k = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || i <= 1 && ["m"] || i < r.m && ["mm", i] || u <= 1 && ["h"] || u < r.h && ["hh", u] || o <= 1 && ["d"] || o < r.d && ["dd", o];
  return r.w != null && (k = k || f <= 1 && ["w"] || f < r.w && ["ww", f]), k = k || d <= 1 && ["M"] || d < r.M && ["MM", d] || w <= 1 && ["y"] || ["yy", w], k[2] = t, k[3] = +e > 0, k[4] = n, Hc.apply(null, k);
}
function Vc(e) {
  return e === void 0 ? ae : typeof e == "function" ? (ae = e, !0) : !1;
}
function Gc(e, t) {
  return Te[e] === void 0 ? !1 : t === void 0 ? Te[e] : (Te[e] = t, e === "s" && (Te.ss = t - 1), !0);
}
function $c(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = Te, s, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, Te, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), s = this.localeData(), a = qc(this, !r, n, s), r && (a = s.pastFuture(+this, a)), s.postformat(a);
}
var Vt = Math.abs;
function ve(e) {
  return (e > 0) - (e < 0) || +e;
}
function At() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Vt(this._milliseconds) / 1e3, t = Vt(this._days), r = Vt(this._months), n, s, a, i, u = this.asSeconds(), o, d, f, w;
  return u ? (n = j(e / 60), s = j(n / 60), e %= 60, n %= 60, a = j(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = u < 0 ? "-" : "", d = ve(this._months) !== ve(u) ? "-" : "", f = ve(this._days) !== ve(u) ? "-" : "", w = ve(this._milliseconds) !== ve(u) ? "-" : "", o + "P" + (a ? d + a + "Y" : "") + (r ? d + r + "M" : "") + (t ? f + t + "D" : "") + (s || n || e ? "T" : "") + (s ? w + s + "H" : "") + (n ? w + n + "M" : "") + (e ? w + i + "S" : "")) : "P0D";
}
var S = Pt.prototype;
S.isValid = Ul;
S.abs = _c;
S.add = wc;
S.subtract = bc;
S.as = Sc;
S.asMilliseconds = vc;
S.asSeconds = Dc;
S.asMinutes = Tc;
S.asHours = Mc;
S.asDays = Ec;
S.asWeeks = Rc;
S.asMonths = xc;
S.asQuarters = Pc;
S.asYears = Nc;
S.valueOf = Oc;
S._bubble = kc;
S.clone = Ac;
S.get = Yc;
S.milliseconds = Cc;
S.seconds = Fc;
S.minutes = Lc;
S.hours = Ic;
S.days = Uc;
S.weeks = jc;
S.months = Wc;
S.years = Bc;
S.humanize = $c;
S.toISOString = At;
S.toString = At;
S.toJSON = At;
S.locale = ls;
S.localeData = cs;
S.toIsoString = q(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  At
);
S.lang = us;
g("X", 0, 0, "unix");
g("x", 0, 0, "valueOf");
m("x", Mt);
m("X", mo);
M("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
M("x", function(e, t, r) {
  r._d = new Date(b(e));
});
//! moment.js
p.version = "2.29.4";
$i(E);
p.fn = h;
p.min = Cl;
p.max = Fl;
p.now = Ll;
p.utc = te;
p.unix = hc;
p.months = fc;
p.isDate = ze;
p.locale = _e;
p.invalid = St;
p.duration = K;
p.isMoment = z;
p.weekdays = mc;
p.parseZone = dc;
p.localeData = he;
p.isDuration = ot;
p.monthsShort = pc;
p.weekdaysMin = gc;
p.defineLocale = Or;
p.updateLocale = dl;
p.locales = fl;
p.weekdaysShort = yc;
p.normalizeUnits = V;
p.relativeTimeRounding = Vc;
p.relativeTimeThreshold = Gc;
p.calendarFormat = lu;
p.prototype = h;
p.HTML5_FMT = {
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
function zc(e) {
  return e.split(`
`).filter((t) => t.trim().length > 0).map((t) => JSON.parse(t));
}
function Kc(e) {
  return e.map((t) => JSON.stringify(t)).join(`
`);
}
const Jc = {
  parse: zc,
  stringify: Kc
};
class Ve {
  // 缓存文件文本
  constructor(t, r, n = void 0) {
    Qe(this, "filepath");
    // 缓存文件路径
    Qe(this, "data", []);
    // 缓存的数据
    Qe(this, "lines", []);
    this.client = t, this.directory = r, this.filename = n, this.init(this.filename);
  }
  /**
   * 构造缓存文件名
   * @param date 时间日期
   * @param format 时间日期格式化字符串
   * REF: https://momentjs.com/docs/#/parsing/string-format/
   * @param extension 文件扩展名
   * @returns 文件名
   */
  static buildCacheFileName(t = /* @__PURE__ */ new Date(), r = "YYYY-MM-DD", n = "jsonl") {
    return `${p(t).format(r)}.${n}`;
  }
  /* 初始化 */
  init(t = Ve.buildCacheFileName()) {
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
    return (await this.client.readDir({ path: t })).data.filter((n) => n.isDir === !1).map((n) => this.buildCacheFilePath(t, n.name));
  }
  /**
   * 获取所有缓存文件的名称
   * @param directory 缓存文件目录路径
   * @returns 文件路径列表
   */
  async getAllCacheFileName(t = this.directory) {
    return (await this.client.readDir({ path: t })).data.filter((n) => n.isDir === !1).map((n) => n.name);
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
  splice(t, r, ...n) {
    return this.data.splice(t, r, ...n);
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
    if ((await this.client.readDir({ path: this.directory })).data.some((n) => n.name === this.filename && n.isDir === !1)) {
      const n = await this.client.getFile({ path: t }, "text");
      return this.clear(), this.push(...Jc.parse(n)), !0;
    }
    return !1;
  }
  /**
   * 移除数据
   * @param filepath 文件路径
   * @returns 是否移除成功
   */
  async remove(t = this.filepath) {
    return (await this.client.readDir({ path: this.directory })).data.some((n) => n.name === this.filename && n.isDir === !1) ? (await this.client.removeFile({ path: t }), !0) : !1;
  }
  /**
   * 缓存持久化 (自动更新缓存文件名)
   * @param update (在需要时) 更新文件名
   * @param filepath 文件路径
   * @returns 缓存是否持久化成功
   */
  async save(t = !0, r = this.filepath) {
    try {
      const n = await this._save(r);
      return t && Ve.buildCacheFileName() !== this.filename && this.init(), n;
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
async function Zc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const I = Gi, Qc = new qi(`${self.name}-worker:${Q.WAKATIME_WORKER_FILE_NAME}`), we = new Bi(
  {
    baseURL: Vi(self.location.pathname, `plugins/${self.name}/workers/${Q.WAKATIME_WORKER_FILE_NAME}.js`)
  },
  "fetch"
), ks = /* @__PURE__ */ new Map(), We = new Ve(we, Q.OFFLINE_CACHE_PATH), tt = [], Me = {
  heartbeat: 0,
  // 心跳定时器
  cacheCheck: 0
  // 缓存检查定时器
}, T = {
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
async function Xc(e = Q.OFFLINE_CACHE_PATH) {
  return we.putFile({
    isDir: !0,
    path: e
  });
}
function eh(e = I.wakatime.interval) {
  clearInterval(Me.heartbeat), Me.heartbeat = setInterval(Ss, e * 1e3), clearInterval(Me.cacheCheck), Me.cacheCheck = setInterval(nh, Q.CACHE_CHECK_INTERVAL);
}
function th() {
  T.includeID = oh(), T.excludeID = uh(), T.include = lh(), T.exclude = ch();
}
async function rh() {
  const t = (await we.lsNotebooks()).data.notebooks;
  return t.forEach((r) => ks.set(r.id, r)), t;
}
async function Ss() {
  const e = Array.from(T.roots.values());
  T.blocks.clear(), T.roots.clear();
  const t = e.filter((s) => {
    const a = `${s.box}${s.path}`;
    return en(
      a,
      T.includeID,
      T.excludeID
    );
  }), n = (await ah(t)).filter((s) => {
    const a = s.entity;
    return en(
      a,
      T.include,
      T.exclude
    );
  });
  if (T.actions.push(...n), T.actions.length > 0) {
    const s = T.actions.slice();
    T.actions.length = 0;
    const a = [];
    for (let i = 0; i < s.length; i += Q.WAKATIME_HEARTBEATS_BULK)
      a.push(Os(s.slice(i, i + Q.WAKATIME_HEARTBEATS_BULK)));
    if (I.wakatime.heartbeats)
      for (const i of a)
        await vs(
          i,
          (u) => {
            I.wakatime.offline && We.push(u.payload);
          }
        );
    else
      I.wakatime.offline && We.push(...a.map((i) => i.payload));
    await We.save();
  }
}
async function nh() {
  const e = await We.getAllCacheFileName();
  if (tt.length = 0, tt.push(...e.map((t) => new Ve(
    we,
    Q.OFFLINE_CACHE_PATH,
    t
  ))), tt.length > 0)
    for (const t of tt)
      if (I.wakatime.heartbeats) {
        await t.load();
        const r = [];
        for (let n = 0; n < t.length; ++n) {
          const s = t.at(n);
          if (await vs(
            Os(s),
            (a) => r.push(a.payload)
          ), n === 0 && r.length > 0)
            return;
          await Zc(Q.CACHE_COMMIT_INTERVAL);
        }
        if (r.length > 0) {
          t.clear(), t.push(...r), await t.save();
          return;
        } else
          await t.remove();
      } else
        return;
}
async function sh(e, t, r) {
  var a;
  const n = I.wakatime.hide_branch_names ? e.box : (a = ks.get(e.box)) == null ? void 0 : a.name, s = I.wakatime.hide_file_names ? `${n}${e.path}` : `${n}${(await we.getHPathByPath({
    path: e.path,
    notebook: e.box
  })).data}.sy`;
  return {
    type: Rn.File,
    category: r ? I.wakatime.edit.category : I.wakatime.view.category,
    project: T.project,
    branch: n,
    entity: s,
    language: T.language,
    time: t,
    is_write: r
  };
}
async function ah(e) {
  return Promise.all(e.flatMap((t) => t.events.map((r) => sh(
    t,
    r.time,
    r.is_write
  ))));
}
function Os(e) {
  return {
    url: Array.isArray(e) ? `${T.url}.bulk` : T.url,
    method: T.method,
    headers: [
      T.headers
    ],
    timeout: I.wakatime.timeout * 1e3,
    payload: e
  };
}
async function vs(e, t) {
  try {
    const r = await we.forwardProxy(e);
    return 200 <= r.data.status && r.data.status < 300 || t(e), r;
  } catch {
    t(e);
  }
}
function en(e, t, r) {
  if (t.length > 0) {
    let n = !1;
    for (const s of t)
      if (typeof s == "string") {
        if (e.includes(s)) {
          n = !0;
          break;
        }
      } else if (s instanceof RegExp && s.test(e)) {
        n = !0;
        break;
      }
    if (!n)
      return !1;
  }
  if (r.length > 0) {
    let n = !0;
    for (const s of r)
      if (typeof s == "string") {
        if (e.includes(s)) {
          n = !1;
          break;
        }
      } else if (s instanceof RegExp && s.test(e)) {
        n = !1;
        break;
      }
    return n;
  }
  return !0;
}
function ih(e = /* @__PURE__ */ new Date()) {
  return e.getTime() / 1e3;
}
function Ds() {
  return ih();
}
function oh() {
  return Yt(I.wakatime.includeID);
}
function lh() {
  return Yt(I.wakatime.include);
}
function uh() {
  return Yt(I.wakatime.excludeID);
}
function ch() {
  return Yt(I.wakatime.exclude);
}
function Yt(e) {
  return e.filter((t) => {
    if (t = t.trim(), t !== "" && t !== "//") {
      if (t.startsWith("/") && t.endsWith("/"))
        try {
          return new RegExp(t.slice(1, -1)), !0;
        } catch (r) {
          return we.pushErrMsg({ msg: r }), !1;
        }
      return !0;
    } else
      return !1;
  }).map((t) => t.startsWith("/") && t.endsWith("/") ? new RegExp(t.slice(1, -1)) : t);
}
function Ts(e) {
  var r;
  let t = T.roots.get(e.id);
  if (t) {
    const n = {
      time: e.time,
      is_write: e.is_write
    };
    ((r = t.events.at(-1)) == null ? void 0 : r.is_write) === n.is_write && t.events.pop(), t.events.push(n);
  } else
    t = {
      id: e.id,
      box: e.box,
      path: e.path,
      events: [{
        time: e.time,
        is_write: e.is_write
      }]
    }, T.roots.set(e.id, t);
  return t;
}
async function hh() {
  await Xc(), await We.load(), await rh();
}
async function dh() {
  clearInterval(Me.heartbeat), clearInterval(Me.cacheCheck), await Ss();
}
function fh() {
  eh(), th();
}
function ph(e, t) {
  Object.assign(I, e), Object.assign(T, t);
}
function mh(e) {
  const t = Ds();
  T.blocks.set(e.id, e.id), Ts({
    ...e,
    time: t,
    is_write: !1
  });
}
async function yh(e) {
  try {
    const t = Ds();
    let r = T.blocks.get(e), n = r && T.roots.get(r);
    if (!n) {
      const s = await we.getBlockInfo({ id: e });
      r = s.data.rootID, n = {
        id: r,
        box: s.data.box,
        path: s.data.path,
        events: []
      }, T.blocks.set(e, r), T.roots.set(r, n);
    }
    Ts({
      id: n.id,
      box: n.box,
      path: n.path,
      time: t,
      is_write: !0
    });
  } catch (t) {
    if (t instanceof Qt)
      return;
    throw t;
  }
}
const gh = {
  onload: {
    this: self,
    func: hh
  },
  unload: {
    this: self,
    func: dh
  },
  restart: {
    this: self,
    func: fh
  },
  updateConfig: {
    this: self,
    func: ph
  },
  addViewEvent: {
    this: self,
    func: mh
  },
  addEditEvent: {
    this: self,
    func: yh
  }
}, _h = new BroadcastChannel(Q.WAKATIME_WORKER_BROADCAST_CHANNEL_NAME);
new Hi(
  _h,
  Qc,
  gh
);
export {
  yh as addEditEvent,
  mh as addViewEvent,
  hh as onload,
  fh as restart,
  dh as unload,
  ph as updateConfig
};
