//#region \0rolldown/runtime.js
var e = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), t = Object.defineProperty, n = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), r = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
};
function i(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
var { toString: a } = Object.prototype, { getPrototypeOf: o } = Object, { iterator: s, toStringTag: c } = Symbol, l = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), u = (e, t) => {
	let n = e, r = [];
	for (; n != null && n !== Object.prototype;) {
		if (r.indexOf(n) !== -1) return !1;
		if (r.push(n), l(n, t)) return !0;
		n = o(n);
	}
	return !1;
}, d = (e, t) => e != null && u(e, t) ? e[t] : void 0, f = ((e) => (t) => {
	let n = a.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), p = (e) => (e = e.toLowerCase(), (t) => f(t) === e), m = (e) => (t) => typeof t === e, { isArray: h } = Array, ee = m("undefined");
function te(e) {
	return e !== null && !ee(e) && e.constructor !== null && !ee(e.constructor) && g(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var ne = p("ArrayBuffer");
function re(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && ne(e.buffer), t;
}
var ie = m("string"), g = m("function"), ae = m("number"), oe = (e) => typeof e == "object" && !!e, se = (e) => e === !0 || e === !1, ce = (e) => {
	if (!oe(e)) return !1;
	let t = o(e);
	return (t === null || t === Object.prototype || o(t) === null) && !u(e, c) && !u(e, s);
}, le = (e) => {
	if (!oe(e) || te(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, ue = p("Date"), de = p("File"), fe = (e) => !!(e && e.uri !== void 0), pe = (e) => e && e.getParts !== void 0, _ = p("Blob"), me = p("FileList"), he = (e) => oe(e) && g(e.pipe);
function ge() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var _e = ge(), ve = _e.FormData === void 0 ? void 0 : _e.FormData, ye = (e) => {
	if (!e) return !1;
	if (ve && e instanceof ve) return !0;
	let t = o(e);
	if (!t || t === Object.prototype || !g(e.append)) return !1;
	let n = f(e);
	return n === "formdata" || n === "object" && g(e.toString) && e.toString() === "[object FormData]";
}, be = p("URLSearchParams"), [xe, Se, Ce, we] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(p), Te = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ee(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), h(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (te(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function De(e, t) {
	if (te(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var Oe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ke = (e) => !ee(e) && e !== Oe;
function Ae(...e) {
	let { caseless: t, skipUndefined: n } = ke(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && De(r, i) || i, o = l(r, a) ? r[a] : void 0;
		ce(o) && ce(e) ? r[a] = Ae(o, e) : ce(e) ? r[a] = Ae({}, e) : h(e) ? r[a] = e.slice() : (!n || !ee(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || te(n) || (Ee(n, i), typeof n != "object" || h(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			He.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var je = (e, t, n, { allOwnKeys: r } = {}) => (Ee(t, (t, r) => {
	n && g(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: i(t, n),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : Object.defineProperty(e, r, {
		__proto__: null,
		value: t,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}, { allOwnKeys: r }), e), Me = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ne = (e, t, n, r) => {
	e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
		__proto__: null,
		value: e,
		writable: !0,
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e, "super", {
		__proto__: null,
		value: t.prototype
	}), n && Object.assign(e.prototype, n);
}, Pe = (e, t, n, r) => {
	let i, a, s, c = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) s = i[a], (!r || r(s, e, t)) && !c[s] && (t[s] = e[s], c[s] = !0);
		e = n !== !1 && o(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, Fe = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, Ie = (e) => {
	if (!e) return null;
	if (h(e)) return e;
	let t = e.length;
	if (!ae(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, Le = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && o(Uint8Array)), Re = (e, t) => {
	let n = (e && e[s]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, ze = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, Be = p("HTMLFormElement"), Ve = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: He } = Object.prototype, Ue = p("RegExp"), We = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	Ee(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, Ge = (e) => {
	We(e, (t, n) => {
		if (g(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (g(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, Ke = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return h(e) ? r(e) : r(String(e).split(t)), n;
}, qe = () => {}, Je = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Ye(e) {
	return !!(e && g(e.append) && e[c] === "FormData" && e[s]);
}
var Xe = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (oe(e)) {
			if (t.has(e)) return;
			if (te(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r = h(e) ? [] : {};
				return Ee(e, (e, t) => {
					let i = n(e);
					!ee(i) && (r[t] = i);
				}), t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, Ze = p("AsyncFunction"), Qe = (e) => e && (oe(e) || g(e)) && g(e.then) && g(e.catch), $e = ((e, t) => e ? setImmediate : t ? ((e, t) => (Oe.addEventListener("message", ({ source: n, data: r }) => {
	n === Oe && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), Oe.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", g(Oe.postMessage)), et = typeof queueMicrotask < "u" ? queueMicrotask.bind(Oe) : typeof process < "u" && process.nextTick || $e, tt = (e) => e != null && g(e[s]), v = {
	isArray: h,
	isArrayBuffer: ne,
	isBuffer: te,
	isFormData: ye,
	isArrayBufferView: re,
	isString: ie,
	isNumber: ae,
	isBoolean: se,
	isObject: oe,
	isPlainObject: ce,
	isEmptyObject: le,
	isReadableStream: xe,
	isRequest: Se,
	isResponse: Ce,
	isHeaders: we,
	isUndefined: ee,
	isDate: ue,
	isFile: de,
	isReactNativeBlob: fe,
	isReactNative: pe,
	isBlob: _,
	isRegExp: Ue,
	isFunction: g,
	isStream: he,
	isURLSearchParams: be,
	isTypedArray: Le,
	isFileList: me,
	forEach: Ee,
	merge: Ae,
	extend: je,
	trim: Te,
	stripBOM: Me,
	inherits: Ne,
	toFlatObject: Pe,
	kindOf: f,
	kindOfTest: p,
	endsWith: Fe,
	toArray: Ie,
	forEachEntry: Re,
	matchAll: ze,
	isHTMLForm: Be,
	hasOwnProperty: l,
	hasOwnProp: l,
	hasOwnInPrototypeChain: u,
	getSafeProp: d,
	reduceDescriptors: We,
	freezeMethods: Ge,
	toObjectSet: Ke,
	toCamelCase: Ve,
	noop: qe,
	toFiniteNumber: Je,
	findKey: De,
	global: Oe,
	isContextDefined: ke,
	isSpecCompliantForm: Ye,
	toJSONObject: Xe,
	isAsyncFn: Ze,
	isThenable: Qe,
	setImmediate: $e,
	asap: et,
	isIterable: tt,
	isSafeIterable: (e) => e != null && u(e, s) && tt(e)
}, nt = v.toObjectSet([
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
]), rt = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim(), !(!n || t[n] && nt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
	}), t;
};
function it(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
var at = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), ot = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function st(e, t) {
	return v.isArray(e) ? e.map((e) => st(e, t)) : it(String(e).replace(t, ""));
}
var ct = (e) => st(e, at), lt = (e) => st(e, ot);
function ut(e) {
	let t = Object.create(null);
	return v.forEach(e.toJSON(), (e, n) => {
		t[n] = lt(e);
	}), t;
}
var dt = Symbol("internals");
function ft(e) {
	return e && String(e).trim().toLowerCase();
}
function pt(e) {
	return e === !1 || e == null ? e : v.isArray(e) ? e.map(pt) : ct(String(e));
}
function mt(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var ht = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function gt(e, t, n, r, i) {
	if (v.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), v.isString(t)) {
		if (v.isString(r)) return t.indexOf(r) !== -1;
		if (v.isRegExp(r)) return r.test(t);
	}
}
function _t(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function vt(e, t) {
	let n = v.toCamelCase(" " + t);
	[
		"get",
		"set",
		"has"
	].forEach((r) => {
		Object.defineProperty(e, r + n, {
			__proto__: null,
			value: function(e, n, i) {
				return this[r].call(this, t, e, n, i);
			},
			configurable: !0
		});
	});
}
var y = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = ft(t);
			if (!i) return;
			let a = v.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = pt(e));
		}
		let a = (e, t) => v.forEach(e, (e, n) => i(e, n, t));
		if (v.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (v.isString(e) && (e = e.trim()) && !ht(e)) a(rt(e), t);
		else if (v.isObject(e) && v.isSafeIterable(e)) {
			let n = Object.create(null), r, i;
			for (let t of e) {
				if (!v.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				i = t[0], v.hasOwnProp(n, i) ? (r = n[i], n[i] = v.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = ft(e), e) {
			let n = v.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return mt(e);
				if (v.isFunction(t)) return t.call(this, e, n);
				if (v.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = ft(e), e) {
			let n = v.findKey(this, e);
			return !!(n && this[n] !== void 0 && (!t || gt(this, this[n], n, t)));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = ft(e), e) {
				let i = v.findKey(n, e);
				i && (!t || gt(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return v.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || gt(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return v.forEach(this, (r, i) => {
			let a = v.findKey(n, i);
			if (a) {
				t[a] = pt(r), delete t[i];
				return;
			}
			let o = e ? _t(i) : String(i).trim();
			o !== i && delete t[i], t[o] = pt(r), n[o] = !0;
		}), this;
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		let t = Object.create(null);
		return v.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && v.isArray(n) ? n.join(", ") : n);
		}), t;
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
	}
	getSetCookie() {
		return this.get("set-cookie") || [];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[dt] = this[dt] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = ft(e);
			t[r] || (vt(n, e), t[r] = !0);
		}
		return v.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
y.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), v.reduceDescriptors(y.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), v.freezeMethods(y);
var yt = "[REDACTED ****]";
function bt(e) {
	if (v.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (v.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function xt(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || v.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof y && (e = e.toJSON()), r.push(e);
		let t;
		if (v.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			v.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!v.isPlainObject(e) && bt(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? yt : i(a);
				v.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
var b = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = new e(t.message, n || t.code, r, i, a);
		return Object.defineProperty(s, "cause", {
			__proto__: null,
			value: t,
			writable: !0,
			enumerable: !1,
			configurable: !0
		}), s.name = t.name, t.status != null && s.status == null && (s.status = t.status), o && Object.assign(s, o), s;
	}
	constructor(e, t, n, r, i) {
		super(e), Object.defineProperty(this, "message", {
			__proto__: null,
			value: e,
			enumerable: !0,
			writable: !0,
			configurable: !0
		}), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status);
	}
	toJSON() {
		let e = this.config, t = e && v.hasOwnProp(e, "redact") ? e.redact : void 0, n = v.isArray(t) && t.length > 0 ? xt(e, t) : v.toJSONObject(e);
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: n,
			code: this.code,
			status: this.status
		};
	}
};
b.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", b.ERR_BAD_OPTION = "ERR_BAD_OPTION", b.ECONNABORTED = "ECONNABORTED", b.ETIMEDOUT = "ETIMEDOUT", b.ECONNREFUSED = "ECONNREFUSED", b.ERR_NETWORK = "ERR_NETWORK", b.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", b.ERR_DEPRECATED = "ERR_DEPRECATED", b.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", b.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", b.ERR_CANCELED = "ERR_CANCELED", b.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", b.ERR_INVALID_URL = "ERR_INVALID_URL", b.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
function St(e) {
	return v.isPlainObject(e) || v.isArray(e);
}
function Ct(e) {
	return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function wt(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = Ct(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function Tt(e) {
	return v.isArray(e) && !e.some(St);
}
var Et = v.toFlatObject(v, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function Dt(e, t, n) {
	if (!v.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData(), n = v.toFlatObject(n, {
		metaTokens: !0,
		dots: !1,
		indexes: !1
	}, !1, function(e, t) {
		return !v.isUndefined(t[e]);
	});
	let r = n.metaTokens, i = n.visitor || m, a = n.dots, o = n.indexes, s = n.Blob || typeof Blob < "u" && Blob, c = n.maxDepth === void 0 ? 100 : n.maxDepth, l = s && v.isSpecCompliantForm(t), u = [];
	if (!v.isFunction(i)) throw TypeError("visitor must be a function");
	function d(e) {
		if (e === null) return "";
		if (v.isDate(e)) return e.toISOString();
		if (v.isBoolean(e)) return e.toString();
		if (!l && v.isBlob(e)) throw new b("Blob is not supported. Use a Buffer instead.");
		if (v.isArrayBuffer(e) || v.isTypedArray(e)) {
			if (l && typeof s == "function") return new s([e]);
			if (typeof Buffer < "u") return Buffer.from(e);
			throw new b("Blob is not supported. Use a Buffer instead.", b.ERR_NOT_SUPPORT);
		}
		return e;
	}
	function f(e) {
		if (e > c) throw new b("Object is too deeply nested (" + e + " levels). Max depth: " + c, b.ERR_FORM_DATA_DEPTH_EXCEEDED);
	}
	function p(e, t) {
		if (c === Infinity) return JSON.stringify(e);
		let n = [];
		return JSON.stringify(e, function(e, r) {
			if (!v.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), f(t + n.length - 1), r;
		});
	}
	function m(e, n, i) {
		let s = e;
		if (v.isReactNative(t) && v.isReactNativeBlob(e)) return t.append(wt(i, n, a), d(e)), !1;
		if (e && !i && typeof e == "object") {
			if (v.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = p(e, 1);
			else if (v.isArray(e) && Tt(e) || (v.isFileList(e) || v.endsWith(n, "[]")) && (s = v.toArray(e))) return n = Ct(n), s.forEach(function(e, r) {
				!(v.isUndefined(e) || e === null) && t.append(o === !0 ? wt([n], r, a) : o === null ? n : n + "[]", d(e));
			}), !1;
		}
		return St(e) ? !0 : (t.append(wt(i, n, a), d(e)), !1);
	}
	let h = Object.assign(Et, {
		defaultVisitor: m,
		convertValue: d,
		isVisitable: St
	});
	function ee(e, n, r = 0) {
		if (!v.isUndefined(e)) {
			if (f(r), u.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			u.push(e), v.forEach(e, function(e, a) {
				(!(v.isUndefined(e) || e === null) && i.call(t, e, v.isString(a) ? a.trim() : a, n, h)) === !0 && ee(e, n ? n.concat(a) : [a], r + 1);
			}), u.pop();
		}
	}
	if (!v.isObject(e)) throw TypeError("data must be an object");
	return ee(e), t;
}
function Ot(e) {
	let t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+"
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(e) {
		return t[e];
	});
}
function kt(e, t) {
	this._pairs = [], e && Dt(e, this, t);
}
var At = kt.prototype;
At.append = function(e, t) {
	this._pairs.push([e, t]);
}, At.toString = function(e) {
	let t = e ? (t) => e.call(this, t, Ot) : Ot;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
function jt(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Mt(e, t, n) {
	if (!t) return e;
	e ||= "";
	let r = v.isFunction(n) ? { serialize: n } : n, i = v.getSafeProp(r, "encode") || jt, a = v.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : v.isURLSearchParams(t) ? t.toString() : new kt(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
var Nt = class {
	constructor() {
		this.handlers = [];
	}
	use(e, t, n) {
		return this.handlers.push({
			fulfilled: e,
			rejected: t,
			synchronous: n ? n.synchronous : !1,
			runWhen: n ? n.runWhen : null
		}), this.handlers.length - 1;
	}
	eject(e) {
		this.handlers[e] && (this.handlers[e] = null);
	}
	clear() {
		this.handlers &&= [];
	}
	forEach(e) {
		v.forEach(this.handlers, function(t) {
			t !== null && e(t);
		});
	}
}, Pt = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, Ft = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : kt,
		FormData: typeof FormData < "u" ? FormData : null,
		Blob: typeof Blob < "u" ? Blob : null
	},
	protocols: [
		"http",
		"https",
		"file",
		"blob",
		"url",
		"data"
	]
}, It = /* @__PURE__ */ r({
	hasBrowserEnv: () => Lt,
	hasStandardBrowserEnv: () => zt,
	hasStandardBrowserWebWorkerEnv: () => Bt,
	navigator: () => Rt,
	origin: () => Vt
}), Lt = typeof window < "u" && typeof document < "u", Rt = typeof navigator == "object" && navigator || void 0, zt = Lt && (!Rt || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(Rt.product) < 0), Bt = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Vt = Lt && window.location.href || "http://localhost", x = {
	...It,
	...Ft
};
function Ht(e, t) {
	return Dt(e, new x.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return x.isNode && v.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
var Ut = 100;
function Wt(e) {
	if (e > Ut) throw new b("FormData field is too deeply nested (" + e + " levels). Max depth: " + Ut, b.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Gt(e) {
	let t = [], n = /\w+|\[(\w*)]/g, r;
	for (; (r = n.exec(e)) !== null;) Wt(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function Kt(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function qt(e) {
	function t(e, n, r, i) {
		Wt(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && v.isArray(r) ? r.length : a, s ? (v.hasOwnProp(r, a) ? r[a] = v.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!v.hasOwnProp(r, a) || !v.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && v.isArray(r[a]) && (r[a] = Kt(r[a])), !o);
	}
	if (v.isFormData(e) && v.isFunction(e.entries)) {
		let n = {};
		return v.forEachEntry(e, (e, r) => {
			t(Gt(e), r, n, 0);
		}), n;
	}
	return null;
}
var Jt = (e, t) => e != null && v.hasOwnProp(e, t) ? e[t] : void 0;
function Yt(e, t, n) {
	if (v.isString(e)) try {
		return (t || JSON.parse)(e), v.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var Xt = {
	transitional: Pt,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = v.isObject(e);
		if (i && v.isHTMLForm(e) && (e = new FormData(e)), v.isFormData(e)) return r ? JSON.stringify(qt(e)) : e;
		if (v.isArrayBuffer(e) || v.isBuffer(e) || v.isStream(e) || v.isFile(e) || v.isBlob(e) || v.isReadableStream(e)) return e;
		if (v.isArrayBufferView(e)) return e.buffer;
		if (v.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = Jt(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return Ht(e, t).toString();
			if ((a = v.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = Jt(this, "env"), r = n && n.FormData;
				return Dt(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), Yt(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = Jt(this, "transitional") || Xt.transitional, n = t && t.forcedJSONParsing, r = Jt(this, "responseType"), i = r === "json";
		if (v.isResponse(e) || v.isReadableStream(e)) return e;
		if (e && v.isString(e) && (n && !r || i)) {
			let n = !(t && t.silentJSONParsing) && i;
			try {
				return JSON.parse(e, Jt(this, "parseReviver"));
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? b.from(e, b.ERR_BAD_RESPONSE, this, null, Jt(this, "response")) : e;
			}
		}
		return e;
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: x.classes.FormData,
		Blob: x.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
v.forEach([
	"delete",
	"get",
	"head",
	"post",
	"put",
	"patch",
	"query"
], (e) => {
	Xt.headers[e] = {};
});
function Zt(e, t) {
	let n = this || Xt, r = t || n, i = y.from(r.headers), a = r.data;
	return v.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
function Qt(e) {
	return !!(e && e.__CANCEL__);
}
var $t = class extends b {
	constructor(e, t, n) {
		super(e ?? "canceled", b.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
function en(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new b("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? b.ERR_BAD_REQUEST : b.ERR_BAD_RESPONSE, n.config, n.request, n));
}
function tn(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
function nn(e, t) {
	e ||= 10;
	let n = Array(e), r = Array(e), i = 0, a = 0, o;
	return t = t === void 0 ? 1e3 : t, function(s) {
		let c = Date.now(), l = r[a];
		o ||= c, n[i] = s, r[i] = c;
		let u = a, d = 0;
		for (; u !== i;) d += n[u++], u %= e;
		if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t) return;
		let f = l && c - l;
		return f ? Math.round(d * 1e3 / f) : void 0;
	};
}
function rn(e, t) {
	let n = 0, r = 1e3 / t, i, a, o = (t, r = Date.now()) => {
		n = r, i = null, a &&= (clearTimeout(a), null), e(...t);
	};
	return [(...e) => {
		let t = Date.now(), s = t - n;
		s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => {
			a = null, o(i);
		}, r - s));
	}, () => i && o(i)];
}
var an = (e, t, n = 3) => {
	let r = 0, i = nn(50, 250);
	return rn((n) => {
		if (!n || typeof n.loaded != "number") return;
		let a = n.loaded, o = n.lengthComputable ? n.total : void 0, s = o == null ? a : Math.min(a, o), c = Math.max(0, s - r), l = i(c);
		r = Math.max(r, s), e({
			loaded: s,
			total: o,
			progress: o ? s / o : void 0,
			bytes: c,
			rate: l || void 0,
			estimated: l && o ? (o - s) / l : void 0,
			event: n,
			lengthComputable: o != null,
			[t ? "download" : "upload"]: !0
		});
	}, n);
}, on = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, sn = (e) => (...t) => v.asap(() => e(...t)), cn = x.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, x.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(x.origin), x.navigator && /(msie|trident)/i.test(x.navigator.userAgent)) : () => !0, ln = x.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		v.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), v.isString(r) && s.push(`path=${r}`), v.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), v.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
	},
	read(e) {
		if (typeof document > "u") return null;
		let t = document.cookie.split(";");
		for (let n = 0; n < t.length; n++) {
			let r = t[n].replace(/^\s+/, ""), i = r.indexOf("=");
			if (i !== -1 && r.slice(0, i) === e) try {
				return decodeURIComponent(r.slice(i + 1));
			} catch {
				return r.slice(i + 1);
			}
		}
		return null;
	},
	remove(e) {
		this.write(e, "", Date.now() - 864e5, "/");
	}
} : {
	write() {},
	read() {
		return null;
	},
	remove() {}
};
function un(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function dn(e, t) {
	return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
var fn = /^https?:(?!\/\/)/i, pn = /[\t\n\r]/g;
function mn(e) {
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t);
}
function hn(e) {
	return mn(e).replace(pn, "");
}
function gn(e, t) {
	if (typeof e == "string" && fn.test(hn(e))) throw new b("Invalid URL: missing \"//\" after protocol", b.ERR_INVALID_URL, t);
}
function _n(e, t, n, r) {
	gn(t, r);
	let i = !un(t);
	return e && (i || n === !1) ? (gn(e, r), dn(e, t)) : t;
}
var vn = (e) => e instanceof y ? { ...e } : e;
function yn(e, t) {
	e ||= {}, t ||= {};
	let n = Object.create(null);
	Object.defineProperty(n, "hasOwnProperty", {
		__proto__: null,
		value: Object.prototype.hasOwnProperty,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
	function r(e, t, n, r) {
		return v.isPlainObject(e) && v.isPlainObject(t) ? v.merge.call({ caseless: r }, e, t) : v.isPlainObject(t) ? v.merge({}, t) : v.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (!v.isUndefined(t)) return r(e, t, n, i);
		if (!v.isUndefined(e)) return r(void 0, e, n, i);
	}
	function a(e, t) {
		if (!v.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (!v.isUndefined(t)) return r(void 0, t);
		if (!v.isUndefined(e)) return r(void 0, e);
	}
	function s(n) {
		let r = v.hasOwnProp(t, "transitional") ? t.transitional : void 0;
		if (!v.isUndefined(r)) if (v.isPlainObject(r)) {
			if (v.hasOwnProp(r, n)) return r[n];
		} else return;
		let i = v.hasOwnProp(e, "transitional") ? e.transitional : void 0;
		if (v.isPlainObject(i) && v.hasOwnProp(i, n)) return i[n];
	}
	function c(n, i, a) {
		if (v.hasOwnProp(t, a)) return r(n, i);
		if (v.hasOwnProp(e, a)) return r(void 0, n);
	}
	let l = {
		url: a,
		method: a,
		data: a,
		baseURL: o,
		transformRequest: o,
		transformResponse: o,
		paramsSerializer: o,
		timeout: o,
		timeoutMessage: o,
		withCredentials: o,
		withXSRFToken: o,
		adapter: o,
		responseType: o,
		xsrfCookieName: o,
		xsrfHeaderName: o,
		onUploadProgress: o,
		onDownloadProgress: o,
		decompress: o,
		maxContentLength: o,
		maxBodyLength: o,
		beforeRedirect: o,
		transport: o,
		httpAgent: o,
		httpsAgent: o,
		cancelToken: o,
		socketPath: o,
		allowedSocketPaths: o,
		responseEncoding: o,
		validateStatus: c,
		headers: (e, t, n) => i(vn(e), vn(t), n, !0)
	};
	return v.forEach(Object.keys({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = v.hasOwnProp(l, r) ? l[r] : i, o = a(v.hasOwnProp(e, r) ? e[r] : void 0, v.hasOwnProp(t, r) ? t[r] : void 0, r);
		v.isUndefined(o) && a !== c || (n[r] = o);
	}), v.hasOwnProp(t, "validateStatus") && v.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (v.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
var bn = ["content-type", "content-length"];
function xn(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t || {}).forEach(([t, n]) => {
		bn.includes(t.toLowerCase()) && e.set(t, n);
	});
}
var Sn = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function Cn(e) {
	let t = yn({}, e), n = (e) => v.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = y.from(s), t.url = Mt(_n(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = v.getSafeProp(c, "username") || "", n = v.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? Sn(n) : "")));
		} catch (t) {
			throw b.from(t, b.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (v.isFormData(r) && (x.hasStandardBrowserEnv || x.hasStandardBrowserWebWorkerEnv || v.isReactNative(r) ? s.setContentType(void 0) : v.isFunction(r.getHeaders) && xn(s, r.getHeaders(), n("formDataHeaderPolicy"))), x.hasStandardBrowserEnv && (v.isFunction(i) && (i = i(t)), i === !0 || i == null && cn(t.url))) {
		let e = a && o && ln.read(o);
		e && s.set(a, e);
	}
	return t;
}
var wn = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = Cn(e), i = r.data, a = y.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p;
		function m() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let h = new XMLHttpRequest();
		h.open(r.method.toUpperCase(), r.url, !0), h.timeout = r.timeout;
		function ee() {
			if (!h) return;
			let r = y.from("getAllResponseHeaders" in h && h.getAllResponseHeaders());
			en(function(e) {
				t(e), m();
			}, function(e) {
				n(e), m();
			}, {
				data: !o || o === "text" || o === "json" ? h.responseText : h.response,
				status: h.status,
				statusText: h.statusText,
				headers: r,
				config: e,
				request: h
			}), h = null;
		}
		"onloadend" in h ? h.onloadend = ee : h.onreadystatechange = function() {
			!h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.startsWith("file:")) || setTimeout(ee);
		}, h.onabort = function() {
			h &&= (n(new b("Request aborted", b.ECONNABORTED, e, h)), m(), null);
		}, h.onerror = function(t) {
			let r = new b(t && t.message ? t.message : "Network Error", b.ERR_NETWORK, e, h);
			r.event = t || null, n(r), m(), h = null;
		}, h.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || Pt;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new b(t, i.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED, e, h)), m(), h = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in h && v.forEach(ut(a), function(e, t) {
			h.setRequestHeader(t, e);
		}), v.isUndefined(r.withCredentials) || (h.withCredentials = !!r.withCredentials), o && o !== "json" && (h.responseType = r.responseType), c && ([d, p] = an(c, !0), h.addEventListener("progress", d)), s && h.upload && ([u, f] = an(s), h.upload.addEventListener("progress", u), h.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			h &&= (n(!t || t.type ? new $t(null, e, h) : t), h.abort(), m(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let te = tn(r.url);
		if (te && !x.protocols.includes(te)) {
			n(new b("Unsupported protocol " + te + ":", b.ERR_BAD_REQUEST, e)), m();
			return;
		}
		h.send(i || null);
	});
}, Tn = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof b ? t : new $t(t instanceof Error ? t.message : t));
		}
	}, a = t && setTimeout(() => {
		a = null, i(new b(`timeout of ${t}ms exceeded`, b.ETIMEDOUT));
	}, t), o = () => {
		e &&= (a && clearTimeout(a), a = null, e.forEach((e) => {
			e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i);
		}), null);
	};
	e.forEach((e) => e.addEventListener("abort", i, { once: !0 }));
	let { signal: s } = n;
	return s.unsubscribe = () => v.asap(o), s;
}, En = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, Dn = async function* (e, t) {
	for await (let n of On(e)) yield* En(n, t);
}, On = async function* (e) {
	if (e[Symbol.asyncIterator]) {
		yield* e;
		return;
	}
	let t = e.getReader();
	try {
		for (;;) {
			let { done: e, value: n } = await t.read();
			if (e) break;
			yield n;
		}
	} finally {
		await t.cancel();
	}
}, kn = (e, t, n, r) => {
	let i = Dn(e, t), a = 0, o, s = (e) => {
		o || (o = !0, r && r(e));
	};
	return new ReadableStream({
		async pull(e) {
			try {
				let { done: t, value: r } = await i.next();
				if (t) {
					s(), e.close();
					return;
				}
				let o = r.byteLength;
				n && n(a += o), e.enqueue(new Uint8Array(r));
			} catch (e) {
				throw s(e), e;
			}
		},
		cancel(e) {
			return s(e), i.return();
		}
	}, { highWaterMark: 2 });
}, An = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, jn = (e, t, n) => t + 2 < n && An(e.charCodeAt(t + 1)) && An(e.charCodeAt(t + 2));
function Mn(e) {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let t = e.indexOf(",");
	if (t < 0) return 0;
	let n = e.slice(5, t), r = e.slice(t + 1);
	if (/;base64/i.test(n)) {
		let e = r.length, t = r.length;
		for (let n = 0; n < t; n++) if (r.charCodeAt(n) === 37 && n + 2 < t) {
			let t = r.charCodeAt(n + 1), i = r.charCodeAt(n + 2);
			An(t) && An(i) && (e -= 2, n += 2);
		}
		let n = 0, i = t - 1, a = (e) => e >= 2 && r.charCodeAt(e - 2) === 37 && r.charCodeAt(e - 1) === 51 && (r.charCodeAt(e) === 68 || r.charCodeAt(e) === 100);
		i >= 0 && (r.charCodeAt(i) === 61 ? (n++, i--) : a(i) && (n++, i -= 3)), n === 1 && i >= 0 && (r.charCodeAt(i) === 61 || a(i)) && n++;
		let o = Math.floor(e / 4) * 3 - (n || 0);
		return o > 0 ? o : 0;
	}
	let i = 0;
	for (let e = 0, t = r.length; e < t; e++) {
		let n = r.charCodeAt(e);
		if (n === 37 && jn(r, e, t)) i += 1, e += 2;
		else if (n < 128) i += 1;
		else if (n < 2048) i += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = r.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (i += 4, e++) : i += 3;
		} else i += 3;
	}
	return i;
}
var Nn = "1.18.1", Pn = 65536, { isFunction: Fn } = v, In = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), Ln = (e) => {
	if (!v.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, Rn = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, zn = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Bn = (e) => {
	let t = v.global !== void 0 && v.global !== null ? v.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = v.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? Fn(i) : typeof fetch == "function", c = Fn(a), l = Fn(o);
	if (!s) return !1;
	let u = s && Fn(n), d = s && (typeof r == "function" ? ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && Rn(() => {
		let e = !1, t = new a(x.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && Rn(() => v.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
	s && [
		"text",
		"arrayBuffer",
		"blob",
		"formData",
		"stream"
	].forEach((e) => {
		!m[e] && (m[e] = (t, n) => {
			let r = t && t[e];
			if (r) return r.call(t);
			throw new b(`Response type '${e}' is not supported`, b.ERR_NOT_SUPPORT, n);
		});
	});
	let h = async (e) => {
		if (e == null) return 0;
		if (v.isBlob(e)) return e.size;
		if (v.isSpecCompliantForm(e)) return (await new a(x.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (v.isArrayBufferView(e) || v.isArrayBuffer(e)) return e.byteLength;
		if (v.isURLSearchParams(e) && (e += ""), v.isString(e)) return (await d(e)).byteLength;
	}, ee = async (e, t) => v.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: te, onDownloadProgress: ne, onUploadProgress: re, responseType: ie, headers: g, withCredentials: ae = "same-origin", fetchOptions: oe, maxContentLength: se, maxBodyLength: ce } = Cn(e), le = v.isNumber(se) && se > -1, ue = v.isNumber(ce) && ce > -1, de = (t) => v.hasOwnProp(e, t) ? e[t] : void 0, fe = i || fetch;
		ie = ie ? (ie + "").toLowerCase() : "text";
		let pe = Tn([l, d && d.toAbortSignal()], te), _ = null, me = pe && pe.unsubscribe && (() => {
			pe.unsubscribe();
		}), he, ge = null, _e = () => new b("Request body larger than maxBodyLength limit", b.ERR_BAD_REQUEST, e, _);
		try {
			let i, l = de("auth");
			if (l && (i = {
				username: v.getSafeProp(l, "username") || "",
				password: v.getSafeProp(l, "password") || ""
			}), zn(t)) {
				let e = new URL(t, x.origin);
				!i && (e.username || e.password) && (i = {
					username: Ln(e.username),
					password: Ln(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (g.delete("authorization"), g.set("Authorization", "Basic " + btoa(In((i.username || "") + ":" + (i.password || ""))))), le && typeof t == "string" && t.startsWith("data:") && Mn(t) > se) throw new b("maxContentLength size of " + se + " exceeded", b.ERR_BAD_RESPONSE, e, _);
			if (ue && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (he = e, e > ce)) throw _e();
			}
			let d = ue && (v.isReadableStream(s) || v.isStream(s)), te = (e, t, n) => kn(e, Pn, (e) => {
				if (ue && e > ce) throw ge = _e();
				t && t(e);
			}, n);
			if (f && n !== "get" && n !== "head" && (re || d)) {
				if (he ??= await ee(g, s), he !== 0 || d) {
					let e = new a(t, {
						method: "POST",
						body: s,
						duplex: "half"
					}), n;
					if (v.isFormData(s) && (n = e.headers.get("content-type")) && g.setContentType(n), e.body) {
						let [t, n] = re && on(he, an(sn(re))) || [];
						s = te(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = te(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new b("Stream request bodies are not supported by the current fetch implementation", b.ERR_NOT_SUPPORT, e, _);
			v.isString(ae) || (ae = ae ? "include" : "omit");
			let ve = c && "credentials" in a.prototype;
			if (v.isFormData(s)) {
				let e = g.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && g.delete("content-type");
			}
			g.set("User-Agent", "axios/" + Nn, !1);
			let ye = {
				...oe,
				signal: pe,
				method: n.toUpperCase(),
				headers: ut(g.normalize()),
				body: s,
				duplex: "half",
				credentials: ve ? ae : void 0
			};
			_ = c && new a(t, ye);
			let be = await (c ? fe(_, oe) : fe(t, ye)), xe = y.from(be.headers);
			if (le) {
				let t = v.toFiniteNumber(xe.getContentLength());
				if (t != null && t > se) throw new b("maxContentLength size of " + se + " exceeded", b.ERR_BAD_RESPONSE, e, _);
			}
			let Se = p && (ie === "stream" || ie === "response");
			if (p && be.body && (ne || le || Se && me)) {
				let t = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((e) => {
					t[e] = be[e];
				});
				let n = v.toFiniteNumber(xe.getContentLength()), [r, i] = ne && on(n, an(sn(ne), !0)) || [], a = 0;
				be = new o(kn(be.body, Pn, (t) => {
					if (le && (a = t, a > se)) throw new b("maxContentLength size of " + se + " exceeded", b.ERR_BAD_RESPONSE, e, _);
					r && r(t);
				}, () => {
					i && i(), me && me();
				}), t);
			}
			ie ||= "text";
			let Ce = await m[v.findKey(m, ie) || "text"](be, e);
			if (le && !p && !Se) {
				let t;
				if (Ce != null && (typeof Ce.byteLength == "number" ? t = Ce.byteLength : typeof Ce.size == "number" ? t = Ce.size : typeof Ce == "string" && (t = typeof r == "function" ? new r().encode(Ce).byteLength : Ce.length)), typeof t == "number" && t > se) throw new b("maxContentLength size of " + se + " exceeded", b.ERR_BAD_RESPONSE, e, _);
			}
			return !Se && me && me(), await new Promise((t, n) => {
				en(t, n, {
					data: Ce,
					headers: y.from(be.headers),
					status: be.status,
					statusText: be.statusText,
					config: e,
					request: _
				});
			});
		} catch (t) {
			if (me && me(), pe && pe.aborted && pe.reason instanceof b) {
				let n = pe.reason;
				throw n.config = e, _ && (n.request = _), t !== n && Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			if (ge) throw _ && !ge.request && (ge.request = _), ge;
			if (t instanceof b) throw _ && !t.request && (t.request = _), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new b("Network Error", b.ERR_NETWORK, e, _, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw b.from(t, t && t.code, e, _, t && t.response);
		}
	};
}, Vn = /* @__PURE__ */ new Map(), Hn = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = Vn;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : Bn(t)), l = c;
	return c;
};
Hn();
var Un = {
	http: null,
	xhr: wn,
	fetch: { get: Hn }
};
v.forEach(Un, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", {
				__proto__: null,
				value: t
			});
		} catch {}
		Object.defineProperty(e, "adapterName", {
			__proto__: null,
			value: t
		});
	}
});
var Wn = (e) => `- ${e}`, Gn = (e) => v.isFunction(e) || e === null || e === !1;
function Kn(e, t) {
	e = v.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !Gn(r) && (i = Un[(n = String(r)).toLowerCase()], i === void 0)) throw new b(`Unknown adapter '${n}'`);
		if (i && (v.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new b("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(Wn).join("\n") : " " + Wn(e[0]) : "as no adapter specified"), b.ERR_NOT_SUPPORT);
	}
	return i;
}
var qn = {
	getAdapter: Kn,
	adapters: Un
};
function Jn(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new $t(null, e);
}
function Yn(e) {
	return Jn(e), e.headers = y.from(e.headers), e.data = Zt.call(e, e.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), qn.getAdapter(e.adapter || Xt.adapter, e)(e).then(function(t) {
		Jn(e), e.response = t;
		try {
			t.data = Zt.call(e, e.transformResponse, t);
		} finally {
			delete e.response;
		}
		return t.headers = y.from(t.headers), t;
	}, function(t) {
		if (!Qt(t) && (Jn(e), t && t.response)) {
			e.response = t.response;
			try {
				t.response.data = Zt.call(e, e.transformResponse, t.response);
			} finally {
				delete e.response;
			}
			t.response.headers = y.from(t.response.headers);
		}
		return Promise.reject(t);
	});
}
var Xn = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	Xn[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var Zn = {};
Xn.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + Nn + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new b(r(i, " has been removed" + (t ? " in " + t : "")), b.ERR_DEPRECATED);
		return t && !Zn[i] && (Zn[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, Xn.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Qn(e, t, n) {
	if (typeof e != "object" || !e) throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
	let r = Object.keys(e), i = r.length;
	for (; i-- > 0;) {
		let a = r[i], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
		if (o) {
			let t = e[a], n = t === void 0 || o(t, a, e);
			if (n !== !0) throw new b("option " + a + " must be " + n, b.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new b("Unknown option " + a, b.ERR_BAD_OPTION);
	}
}
var $n = {
	assertOptions: Qn,
	validators: Xn
}, S = $n.validators, er = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new Nt(),
			response: new Nt()
		};
	}
	async request(e, t) {
		try {
			return await this._request(e, t);
		} catch (e) {
			if (e instanceof Error) {
				let t = {};
				Error.captureStackTrace ? Error.captureStackTrace(t) : t = /* @__PURE__ */ Error();
				let n = (() => {
					if (!t.stack) return "";
					let e = t.stack.indexOf("\n");
					return e === -1 ? "" : t.stack.slice(e + 1);
				})();
				try {
					if (!e.stack) e.stack = n;
					else if (n) {
						let t = n.indexOf("\n"), r = t === -1 ? -1 : n.indexOf("\n", t + 1), i = r === -1 ? "" : n.slice(r + 1);
						String(e.stack).endsWith(i) || (e.stack += "\n" + n);
					}
				} catch {}
			}
			throw e;
		}
	}
	_request(e, t) {
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = yn(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && $n.assertOptions(n, {
			silentJSONParsing: S.transitional(S.boolean),
			forcedJSONParsing: S.transitional(S.boolean),
			clarifyTimeoutError: S.transitional(S.boolean),
			legacyInterceptorReqResOrdering: S.transitional(S.boolean),
			advertiseZstdAcceptEncoding: S.transitional(S.boolean),
			validateStatusUndefinedResolves: S.transitional(S.boolean)
		}, !1), r != null && (v.isFunction(r) ? t.paramsSerializer = { serialize: r } : $n.assertOptions(r, {
			encode: S.function,
			serialize: S.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), $n.assertOptions(t, {
			baseUrl: S.spelling("baseURL"),
			withXsrfToken: S.spelling("withXSRFToken")
		}, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
		let a = i && v.merge(i.common, i[t.method]);
		i && v.forEach([
			"delete",
			"get",
			"head",
			"post",
			"put",
			"patch",
			"query",
			"common"
		], (e) => {
			delete i[e];
		}), t.headers = y.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || Pt;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [Yn.bind(this), void 0];
			for (e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t); u < d;) l = l.then(e[u++], e[u++]);
			return l;
		}
		d = o.length;
		let f = t;
		for (; u < d;) {
			let e = o[u++], t = o[u++];
			try {
				f = e(f);
			} catch (e) {
				t.call(this, e);
				break;
			}
		}
		try {
			l = Yn.call(this, f);
		} catch (e) {
			return Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = yn(this.defaults, e), Mt(_n(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
	}
};
v.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	er.prototype[e] = function(t, n) {
		return this.request(yn(n || {}, {
			method: e,
			url: t,
			data: n && v.hasOwnProp(n, "data") ? n.data : void 0
		}));
	};
}), v.forEach([
	"post",
	"put",
	"patch",
	"query"
], function(e) {
	function t(t) {
		return function(n, r, i) {
			return this.request(yn(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	er.prototype[e] = t(), e !== "query" && (er.prototype[e + "Form"] = t(!0));
});
var tr = class e {
	constructor(e) {
		if (typeof e != "function") throw TypeError("executor must be a function.");
		let t;
		this.promise = new Promise(function(e) {
			t = e;
		});
		let n = this;
		this.promise.then((e) => {
			if (!n._listeners) return;
			let t = n._listeners.length;
			for (; t-- > 0;) n._listeners[t](e);
			n._listeners = null;
		}), this.promise.then = (e) => {
			let t, r = new Promise((e) => {
				n.subscribe(e), t = e;
			}).then(e);
			return r.cancel = function() {
				n.unsubscribe(t);
			}, r;
		}, e(function(e, r, i) {
			n.reason || (n.reason = new $t(e, r, i), t(n.reason));
		});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(e) {
		if (this.reason) {
			e(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(e) : this._listeners = [e];
	}
	unsubscribe(e) {
		if (!this._listeners) return;
		let t = this._listeners.indexOf(e);
		t !== -1 && this._listeners.splice(t, 1);
	}
	toAbortSignal() {
		let e = new AbortController(), t = (t) => {
			e.abort(t);
		};
		return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
	}
	static source() {
		let t;
		return {
			token: new e(function(e) {
				t = e;
			}),
			cancel: t
		};
	}
};
function nr(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
function rr(e) {
	return v.isObject(e) && e.isAxiosError === !0;
}
var ir = {
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
	NetworkAuthenticationRequired: 511,
	WebServerIsDown: 521,
	ConnectionTimedOut: 522,
	OriginIsUnreachable: 523,
	TimeoutOccurred: 524,
	SslHandshakeFailed: 525,
	InvalidSslCertificate: 526
};
Object.entries(ir).forEach(([e, t]) => {
	ir[t] = e;
});
function ar(e) {
	let t = new er(e), n = i(er.prototype.request, t);
	return v.extend(n, er.prototype, t, { allOwnKeys: !0 }), v.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return ar(yn(e, t));
	}, n;
}
var C = ar(Xt);
C.Axios = er, C.CanceledError = $t, C.CancelToken = tr, C.isCancel = Qt, C.VERSION = Nn, C.toFormData = Dt, C.AxiosError = b, C.Cancel = C.CanceledError, C.all = function(e) {
	return Promise.all(e);
}, C.spread = nr, C.isAxiosError = rr, C.mergeConfig = yn, C.AxiosHeaders = y, C.formToJSON = (e) => qt(v.isHTMLForm(e) ? new FormData(e) : e), C.getAdapter = qn.getAdapter, C.HttpStatusCode = ir, C.default = C;
var { Axios: or, AxiosError: sr, CanceledError: cr, isCancel: lr, CancelToken: ur, VERSION: dr, all: fr, Cancel: pr, isAxiosError: mr, spread: hr, toFormData: gr, AxiosHeaders: _r, HttpStatusCode: vr, formToJSON: yr, getAdapter: br, mergeConfig: xr, create: Sr } = C, Cr = null;
typeof WebSocket < "u" ? Cr = WebSocket : typeof MozWebSocket < "u" ? Cr = MozWebSocket : typeof global < "u" ? Cr = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Cr = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Cr = self.WebSocket || self.MozWebSocket);
var wr = Cr, Tr = typeof Buffer == "function";
typeof TextDecoder == "function" && new TextDecoder("utf-8", { ignoreBOM: !0 }), typeof TextEncoder == "function" && new TextEncoder();
var Er = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="), Dr = ((e) => {
	let t = {};
	return e.forEach((e, n) => t[e] = n), t;
})(Er), Or = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, kr = String.fromCharCode.bind(String), Ar = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (e) => new Uint8Array(Array.prototype.slice.call(e, 0)), jr = (e) => e.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), Mr = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ""), Nr = typeof btoa == "function" ? (e) => btoa(e) : Tr ? (e) => Buffer.from(e, "binary").toString("base64") : (e) => {
	let t, n, r, i, a = "", o = e.length % 3;
	for (let o = 0; o < e.length;) {
		if ((n = e.charCodeAt(o++)) > 255 || (r = e.charCodeAt(o++)) > 255 || (i = e.charCodeAt(o++)) > 255) throw TypeError("invalid character found");
		t = n << 16 | r << 8 | i, a += Er[t >> 18 & 63] + Er[t >> 12 & 63] + Er[t >> 6 & 63] + Er[t & 63];
	}
	return o ? a.slice(0, o - 3) + "===".substring(o) : a;
}, Pr = Tr ? (e) => Buffer.from(e).toString("base64") : (e) => {
	let t = 4096, n = [];
	for (let r = 0, i = e.length; r < i; r += t) n.push(kr.apply(null, e.subarray(r, r + t)));
	return Nr(n.join(""));
}, Fr = (e, t = !1) => t ? jr(Pr(e)) : Pr(e), Ir = typeof atob == "function" ? (e) => atob(Mr(e)) : Tr ? (e) => Buffer.from(e, "base64").toString("binary") : (e) => {
	if (e = e.replace(/\s+/g, ""), !Or.test(e)) throw TypeError("malformed base64.");
	e += "==".slice(2 - (e.length & 3));
	let t, n, r, i = [];
	for (let a = 0; a < e.length;) t = Dr[e.charAt(a++)] << 18 | Dr[e.charAt(a++)] << 12 | (n = Dr[e.charAt(a++)]) << 6 | (r = Dr[e.charAt(a++)]), n === 64 ? i.push(kr(t >> 16 & 255)) : r === 64 ? i.push(kr(t >> 16 & 255, t >> 8 & 255)) : i.push(kr(t >> 16 & 255, t >> 8 & 255, t & 255));
	return i.join("");
}, Lr = Tr ? (e) => Ar(Buffer.from(e, "base64")) : (e) => Ar(Ir(e).split("").map((e) => e.charCodeAt(0))), Rr = (e) => Lr(zr(e)), zr = (e) => Mr(e.replace(/[-_]/g, (e) => e == "-" ? "+" : "/")), Br = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Vr = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Hr = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Ur(e, t) {
	if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
		Wr(e);
		return;
	}
	return t;
}
function Wr(e) {
	console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function Gr(e, t = {}) {
	if (typeof e != "string") return e;
	if (e[0] === "\"" && e[e.length - 1] === "\"" && e.indexOf("\\") === -1) return e.slice(1, -1);
	let n = e.trim();
	if (n.length <= 9) switch (n.toLowerCase()) {
		case "true": return !0;
		case "false": return !1;
		case "undefined": return;
		case "null": return null;
		case "nan": return NaN;
		case "infinity": return Infinity;
		case "-infinity": return -Infinity;
	}
	if (!Hr.test(e)) {
		if (t.strict) throw SyntaxError("[destr] Invalid JSON");
		return e;
	}
	try {
		if (Br.test(e) || Vr.test(e)) {
			if (t.strict) throw Error("[destr] Possible prototype pollution");
			return JSON.parse(e, Ur);
		}
		return JSON.parse(e);
	} catch (n) {
		if (t.strict) throw n;
		return e;
	}
}
String.fromCharCode;
var Kr = /#/g, qr = /&/g, Jr = /\//g, Yr = /=/g, Xr = /\+/g, Zr = /%5e/gi, Qr = /%60/gi, $r = /%7c/gi, ei = /%20/gi;
function ti(e) {
	return encodeURI("" + e).replace($r, "|");
}
function ni(e) {
	return ti(typeof e == "string" ? e : JSON.stringify(e)).replace(Xr, "%2B").replace(ei, "+").replace(Kr, "%23").replace(qr, "%26").replace(Qr, "`").replace(Zr, "^").replace(Jr, "%2F");
}
function ri(e) {
	return ni(e).replace(Yr, "%3D");
}
function ii(e = "") {
	try {
		return decodeURIComponent("" + e);
	} catch {
		return "" + e;
	}
}
function ai(e) {
	return ii(e.replace(Xr, " "));
}
function oi(e) {
	return ii(e.replace(Xr, " "));
}
function si(e = "") {
	let t = /* @__PURE__ */ Object.create(null);
	e[0] === "?" && (e = e.slice(1));
	for (let n of e.split("&")) {
		let e = n.match(/([^=]+)=?(.*)/) || [];
		if (e.length < 2) continue;
		let r = ai(e[1]);
		if (r === "__proto__" || r === "constructor") continue;
		let i = oi(e[2] || "");
		t[r] === void 0 ? t[r] = i : Array.isArray(t[r]) ? t[r].push(i) : t[r] = [t[r], i];
	}
	return t;
}
function ci(e, t) {
	return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map((t) => `${ri(e)}=${ni(t)}`).join("&") : `${ri(e)}=${ni(t)}` : ri(e);
}
function li(e) {
	return Object.keys(e).filter((t) => e[t] !== void 0).map((t) => ci(t, e[t])).filter(Boolean).join("&");
}
var ui = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, di = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, fi = /^([/\\]\s*){2,}[^/\\]/, pi = /\/$|\/\?|\/#/, mi = /^\.?\//;
function hi(e, t = {}) {
	return typeof t == "boolean" && (t = { acceptRelative: t }), t.strict ? ui.test(e) : di.test(e) || (t.acceptRelative ? fi.test(e) : !1);
}
function gi(e = "", t) {
	return t ? pi.test(e) : e.endsWith("/");
}
function _i(e = "", t) {
	if (!t) return (gi(e) ? e.slice(0, -1) : e) || "/";
	if (!gi(e, !0)) return e || "/";
	let n = e, r = "", i = e.indexOf("#");
	i !== -1 && (n = e.slice(0, i), r = e.slice(i));
	let [a, ...o] = n.split("?");
	return ((a.endsWith("/") ? a.slice(0, -1) : a) || "/") + (o.length > 0 ? `?${o.join("?")}` : "") + r;
}
function vi(e = "", t) {
	if (!t) return e.endsWith("/") ? e : e + "/";
	if (gi(e, !0)) return e || "/";
	let n = e, r = "", i = e.indexOf("#");
	if (i !== -1 && (n = e.slice(0, i), r = e.slice(i), !n)) return r;
	let [a, ...o] = n.split("?");
	return a + "/" + (o.length > 0 ? `?${o.join("?")}` : "") + r;
}
function yi(e, t) {
	if (xi(t) || hi(e)) return e;
	let n = _i(t);
	if (e.startsWith(n)) {
		let t = e[n.length];
		if (!t || t === "/" || t === "?") return e;
	}
	return Ci(n, e);
}
function bi(e, t) {
	let n = Ti(e);
	return n.search = li({
		...si(n.search),
		...t
	}), Di(n);
}
function xi(e) {
	return !e || e === "/";
}
function Si(e) {
	return e && e !== "/";
}
function Ci(e, ...t) {
	let n = e || "";
	for (let e of t.filter((e) => Si(e))) if (n) {
		let t = e.replace(mi, "");
		n = vi(n) + t;
	} else n = e;
	return n;
}
var wi = Symbol.for("ufo:protocolRelative");
function Ti(e = "", t) {
	let n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
	if (n) {
		let [, e, t = ""] = n;
		return {
			protocol: e.toLowerCase(),
			pathname: t,
			href: e + t,
			auth: "",
			host: "",
			search: "",
			hash: ""
		};
	}
	if (!hi(e, { acceptRelative: !0 })) return t ? Ti(t + e) : Ei(e);
	let [, r = "", i, a = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, o = "", s = ""] = a.match(/([^#/?]*)(.*)?/) || [];
	r === "file:" && (s = s.replace(/\/(?=[A-Za-z]:)/, ""));
	let { pathname: c, search: l, hash: u } = Ei(s);
	return {
		protocol: r.toLowerCase(),
		auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
		host: o,
		pathname: c,
		search: l,
		hash: u,
		[wi]: !r
	};
}
function Ei(e = "") {
	let [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
	return {
		pathname: t,
		search: n,
		hash: r
	};
}
function Di(e) {
	let t = e.pathname || "", n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "", r = e.hash || "", i = e.auth ? e.auth + "@" : "", a = e.host || "";
	return (e.protocol || e[wi] ? (e.protocol || "") + "//" : "") + i + a + t + n + r;
}
var Oi = class extends Error {
	constructor(e, t) {
		super(e, t), this.name = "FetchError", t?.cause && !this.cause && (this.cause = t.cause);
	}
};
function ki(e) {
	let t = e.error?.message || e.error?.toString() || "", n = e.request?.method || e.options?.method || "GET", r = e.request?.url || String(e.request) || "/", i = new Oi(`${`[${n}] ${JSON.stringify(r)}`}: ${e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"}${t ? ` ${t}` : ""}`, e.error ? { cause: e.error } : void 0);
	for (let t of [
		"request",
		"options",
		"response"
	]) Object.defineProperty(i, t, { get() {
		return e[t];
	} });
	for (let [t, n] of [
		["data", "_data"],
		["status", "status"],
		["statusCode", "status"],
		["statusText", "statusText"],
		["statusMessage", "statusText"]
	]) Object.defineProperty(i, t, { get() {
		return e.response && e.response[n];
	} });
	return i;
}
var Ai = new Set(Object.freeze([
	"PATCH",
	"POST",
	"PUT",
	"DELETE"
]));
function ji(e = "GET") {
	return Ai.has(e.toUpperCase());
}
function Mi(e) {
	if (e === void 0) return !1;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t === "object" ? Array.isArray(e) ? !0 : e.buffer || e instanceof FormData || e instanceof URLSearchParams ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function" : !1;
}
var Ni = /* @__PURE__ */ new Set([
	"image/svg",
	"application/xml",
	"application/xhtml",
	"application/html"
]), Pi = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Fi(e = "") {
	if (!e) return "json";
	let t = e.split(";").shift() || "";
	return Pi.test(t) ? "json" : t === "text/event-stream" ? "stream" : Ni.has(t) || t.startsWith("text/") ? "text" : "blob";
}
function Ii(e, t, n, r) {
	let i = Li(t?.headers ?? e?.headers, n?.headers, r), a;
	return (n?.query || n?.params || t?.params || t?.query) && (a = {
		...n?.params,
		...n?.query,
		...t?.params,
		...t?.query
	}), {
		...n,
		...t,
		query: a,
		params: a,
		headers: i
	};
}
function Li(e, t, n) {
	if (!t) return new n(e);
	let r = new n(t);
	if (e) for (let [t, i] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(t, i);
	return r;
}
async function Ri(e, t) {
	if (t) if (Array.isArray(t)) for (let n of t) await n(e);
	else await t(e);
}
var zi = /* @__PURE__ */ new Set([
	408,
	409,
	425,
	429,
	500,
	502,
	503,
	504
]), Bi = /* @__PURE__ */ new Set([
	101,
	204,
	205,
	304
]);
function Vi(e = {}) {
	let { fetch: t = globalThis.fetch, Headers: n = globalThis.Headers, AbortController: r = globalThis.AbortController } = e;
	async function i(e) {
		let t = e.error && e.error.name === "AbortError" && !e.options.timeout || !1;
		if (e.options.retry !== !1 && !t) {
			let t;
			t = typeof e.options.retry == "number" ? e.options.retry : +!ji(e.options.method);
			let n = e.response && e.response.status || 500;
			if (t > 0 && (Array.isArray(e.options.retryStatusCodes) ? e.options.retryStatusCodes.includes(n) : zi.has(n))) {
				let n = typeof e.options.retryDelay == "function" ? e.options.retryDelay(e) : e.options.retryDelay || 0;
				return n > 0 && await new Promise((e) => setTimeout(e, n)), a(e.request, {
					...e.options,
					retry: t - 1
				});
			}
		}
		let n = ki(e);
		throw Error.captureStackTrace && Error.captureStackTrace(n, a), n;
	}
	let a = async function(a, o = {}) {
		let s = {
			request: a,
			options: Ii(a, o, e.defaults, n),
			response: void 0,
			error: void 0
		};
		if (s.options.method && (s.options.method = s.options.method.toUpperCase()), s.options.onRequest && (await Ri(s, s.options.onRequest), s.options.headers instanceof n || (s.options.headers = new n(s.options.headers || {}))), typeof s.request == "string" && (s.options.baseURL && (s.request = yi(s.request, s.options.baseURL)), s.options.query && (s.request = bi(s.request, s.options.query), delete s.options.query), "query" in s.options && delete s.options.query, "params" in s.options && delete s.options.params), s.options.body && ji(s.options.method)) if (Mi(s.options.body)) {
			let e = s.options.headers.get("content-type");
			typeof s.options.body != "string" && (s.options.body = e === "application/x-www-form-urlencoded" ? new URLSearchParams(s.options.body).toString() : JSON.stringify(s.options.body)), e || s.options.headers.set("content-type", "application/json"), s.options.headers.has("accept") || s.options.headers.set("accept", "application/json");
		} else ("pipeTo" in s.options.body && typeof s.options.body.pipeTo == "function" || typeof s.options.body.pipe == "function") && ("duplex" in s.options || (s.options.duplex = "half"));
		let c;
		if (!s.options.signal && s.options.timeout) {
			let e = new r();
			c = setTimeout(() => {
				let t = /* @__PURE__ */ Error("[TimeoutError]: The operation was aborted due to timeout");
				t.name = "TimeoutError", t.code = 23, e.abort(t);
			}, s.options.timeout), s.options.signal = e.signal;
		}
		try {
			s.response = await t(s.request, s.options);
		} catch (e) {
			return s.error = e, s.options.onRequestError && await Ri(s, s.options.onRequestError), await i(s);
		} finally {
			c && clearTimeout(c);
		}
		if ((s.response.body || s.response._bodyInit) && !Bi.has(s.response.status) && s.options.method !== "HEAD") {
			let e = (s.options.parseResponse ? "json" : s.options.responseType) || Fi(s.response.headers.get("content-type") || "");
			switch (e) {
				case "json": {
					let e = await s.response.text(), t = s.options.parseResponse || Gr;
					s.response._data = t(e);
					break;
				}
				case "stream":
					s.response._data = s.response.body || s.response._bodyInit;
					break;
				default: s.response._data = await s.response[e]();
			}
		}
		return s.options.onResponse && await Ri(s, s.options.onResponse), !s.options.ignoreResponseError && s.response.status >= 400 && s.response.status < 600 ? (s.options.onResponseError && await Ri(s, s.options.onResponseError), await i(s)) : s.response;
	}, o = async function(e, t) {
		return (await a(e, t))._data;
	};
	return o.raw = a, o.native = (...e) => t(...e), o.create = (t = {}, n = {}) => Vi({
		...e,
		...n,
		defaults: {
			...e.defaults,
			...n.defaults,
			...t
		}
	}), o;
}
var Hi = (function() {
	if (typeof globalThis < "u") return globalThis;
	if (typeof self < "u") return self;
	if (typeof window < "u") return window;
	if (typeof global < "u") return global;
	throw Error("unable to locate global object");
})(), Ui = Hi.fetch ? (...e) => Hi.fetch(...e) : () => Promise.reject(/* @__PURE__ */ Error("[ofetch] global.fetch is not supported!")), Wi = Hi.Headers, Gi = Hi.AbortController, Ki = Vi({
	fetch: Ui,
	Headers: Wi,
	AbortController: Gi
}), qi = {
	SCHEMA_DIR_RELATIVE_PATH: "./../schemas/",
	SCHEMA_FILENAME_PAYLOAD: "payload.schema.json",
	SCHEMA_FILENAME_RESPONSE: "response.schema.json",
	SIYUAN_DEFAULT_BASE_URL: "http://localhost:6806/",
	REQUEST_TIMEOUT: 6e4
}, Ji = class extends Error {
	response;
	status;
	constructor(e) {
		super(e.statusText), this.response = e, this.status = e.status;
	}
}, Yi = class extends Error {
	body;
	response;
	code;
	msg;
	data;
	constructor(e, t) {
		super(e.msg), this.body = e, this.response = t, this.code = e.code, this.msg = e.msg, this.data = e.data;
	}
}, Xi = class e {
	static ws = { broadcast: { pathname: "/ws/broadcast" } };
	static api = {
		asset: { upload: {
			pathname: "/api/asset/upload",
			method: "POST"
		} },
		attr: {
			getBlockAttrs: {
				pathname: "/api/attr/getBlockAttrs",
				method: "POST"
			},
			getBookmarkLabels: {
				pathname: "/api/attr/getBookmarkLabels",
				method: "POST"
			},
			setBlockAttrs: {
				pathname: "/api/attr/setBlockAttrs",
				method: "POST"
			}
		},
		block: {
			appendBlock: {
				pathname: "/api/block/appendBlock",
				method: "POST"
			},
			deleteBlock: {
				pathname: "/api/block/deleteBlock",
				method: "POST"
			},
			foldBlock: {
				pathname: "/api/block/foldBlock",
				method: "POST"
			},
			getBlockBreadcrumb: {
				pathname: "/api/block/getBlockBreadcrumb",
				method: "POST"
			},
			getBlockDOM: {
				pathname: "/api/block/getBlockDOM",
				method: "POST"
			},
			getBlockInfo: {
				pathname: "/api/block/getBlockInfo",
				method: "POST"
			},
			getBlockKramdown: {
				pathname: "/api/block/getBlockKramdown",
				method: "POST"
			},
			getChildBlocks: {
				pathname: "/api/block/getChildBlocks",
				method: "POST"
			},
			getDocInfo: {
				pathname: "/api/block/getDocInfo",
				method: "POST"
			},
			insertBlock: {
				pathname: "/api/block/insertBlock",
				method: "POST"
			},
			moveBlock: {
				pathname: "/api/block/moveBlock",
				method: "POST"
			},
			prependBlock: {
				pathname: "/api/block/prependBlock",
				method: "POST"
			},
			transferBlockRef: {
				pathname: "/api/block/transferBlockRef",
				method: "POST"
			},
			unfoldBlock: {
				pathname: "/api/block/unfoldBlock",
				method: "POST"
			},
			updateBlock: {
				pathname: "/api/block/updateBlock",
				method: "POST"
			}
		},
		broadcast: {
			getChannelInfo: {
				pathname: "/api/broadcast/getChannelInfo",
				method: "POST"
			},
			getChannels: {
				pathname: "/api/broadcast/getChannels",
				method: "POST"
			},
			postMessage: {
				pathname: "/api/broadcast/postMessage",
				method: "POST"
			}
		},
		convert: { pandoc: {
			pathname: "/api/convert/pandoc",
			method: "POST"
		} },
		export: {
			exportHTML: {
				pathname: "/api/export/exportHTML",
				method: "POST"
			},
			exportMdContent: {
				pathname: "/api/export/exportMdContent",
				method: "POST"
			},
			exportResources: {
				pathname: "/api/export/exportResources",
				method: "POST"
			}
		},
		file: {
			getFile: {
				pathname: "/api/file/getFile",
				method: "POST"
			},
			putFile: {
				pathname: "/api/file/putFile",
				method: "POST"
			},
			readDir: {
				pathname: "/api/file/readDir",
				method: "POST"
			},
			removeFile: {
				pathname: "/api/file/removeFile",
				method: "POST"
			},
			renameFile: {
				pathname: "/api/file/renameFile",
				method: "POST"
			}
		},
		filetree: {
			createDailyNote: {
				pathname: "/api/filetree/createDailyNote",
				method: "POST"
			},
			createDocWithMd: {
				pathname: "/api/filetree/createDocWithMd",
				method: "POST"
			},
			getDoc: {
				pathname: "/api/filetree/getDoc",
				method: "POST"
			},
			getHPathByID: {
				pathname: "/api/filetree/getHPathByID",
				method: "POST"
			},
			getHPathByPath: {
				pathname: "/api/filetree/getHPathByPath",
				method: "POST"
			},
			getIDsByHPath: {
				pathname: "/api/filetree/getIDsByHPath",
				method: "POST"
			},
			listDocsByPath: {
				pathname: "/api/filetree/listDocsByPath",
				method: "POST"
			},
			moveDocs: {
				pathname: "/api/filetree/moveDocs",
				method: "POST"
			},
			removeDoc: {
				pathname: "/api/filetree/removeDoc",
				method: "POST"
			},
			renameDoc: {
				pathname: "/api/filetree/renameDoc",
				method: "POST"
			},
			searchDocs: {
				pathname: "/api/filetree/searchDocs",
				method: "POST"
			}
		},
		history: {
			getDocHistoryContent: {
				pathname: "/api/history/getDocHistoryContent",
				method: "POST"
			},
			getHistoryItems: {
				pathname: "/api/history/getHistoryItems",
				method: "POST"
			}
		},
		inbox: { getShorthand: {
			pathname: "/api/inbox/getShorthand",
			method: "POST"
		} },
		network: {
			echo: {
				pathname: "/api/network/echo",
				method: "POST"
			},
			forwardProxy: {
				pathname: "/api/network/forwardProxy",
				method: "POST"
			}
		},
		notebook: {
			closeNotebook: {
				pathname: "/api/notebook/closeNotebook",
				method: "POST"
			},
			createNotebook: {
				pathname: "/api/notebook/createNotebook",
				method: "POST"
			},
			getNotebookConf: {
				pathname: "/api/notebook/getNotebookConf",
				method: "POST"
			},
			lsNotebooks: {
				pathname: "/api/notebook/lsNotebooks",
				method: "POST"
			},
			openNotebook: {
				pathname: "/api/notebook/openNotebook",
				method: "POST"
			},
			removeNotebook: {
				pathname: "/api/notebook/removeNotebook",
				method: "POST"
			},
			renameNotebook: {
				pathname: "/api/notebook/renameNotebook",
				method: "POST"
			},
			setNotebookConf: {
				pathname: "/api/notebook/setNotebookConf",
				method: "POST"
			}
		},
		notification: {
			pushErrMsg: {
				pathname: "/api/notification/pushErrMsg",
				method: "POST"
			},
			pushMsg: {
				pathname: "/api/notification/pushMsg",
				method: "POST"
			}
		},
		outline: { getDocOutline: {
			pathname: "/api/outline/getDocOutline",
			method: "POST"
		} },
		query: { sql: {
			pathname: "/api/query/sql",
			method: "POST"
		} },
		repo: { openRepoSnapshotDoc: {
			pathname: "/api/repo/openRepoSnapshotDoc",
			method: "POST"
		} },
		search: { fullTextSearchBlock: {
			pathname: "/api/search/fullTextSearchBlock",
			method: "POST"
		} },
		snippet: {
			getSnippet: {
				pathname: "/api/snippet/getSnippet",
				method: "POST"
			},
			setSnippet: {
				pathname: "/api/snippet/setSnippet",
				method: "POST"
			}
		},
		sqlite: { flushTransaction: {
			pathname: "/api/sqlite/flushTransaction",
			method: "POST"
		} },
		storage: {
			getLocalStorage: {
				pathname: "/api/storage/getLocalStorage",
				method: "POST"
			},
			getRecentDocs: {
				pathname: "/api/storage/getRecentDocs",
				method: "POST"
			},
			setLocalStorage: {
				pathname: "/api/storage/setLocalStorage",
				method: "POST"
			},
			setLocalStorageVal: {
				pathname: "/api/storage/setLocalStorageVal",
				method: "POST"
			}
		},
		system: {
			bootProgress: {
				pathname: "/api/system/bootProgress",
				method: "POST"
			},
			currentTime: {
				pathname: "/api/system/currentTime",
				method: "POST"
			},
			exit: {
				pathname: "/api/system/exit",
				method: "POST"
			},
			getConf: {
				pathname: "/api/system/getConf",
				method: "POST"
			},
			logoutAuth: {
				pathname: "/api/system/logoutAuth",
				method: "POST"
			},
			version: {
				pathname: "/api/system/version",
				method: "POST"
			}
		},
		template: {
			render: {
				pathname: "/api/template/render",
				method: "POST"
			},
			renderSprig: {
				pathname: "/api/template/renderSprig",
				method: "POST"
			}
		}
	};
	static headers2record(e) {
		let t = {};
		return e.forEach((e, n) => {
			t[n] = e;
		}), t;
	}
	static headers2records(e) {
		let t = [];
		return e.forEach((e, n) => {
			t.push({ [n]: e });
		}), t;
	}
	static headers2entries(e) {
		let t = [];
		return Object.entries(e).forEach(([e, n]) => {
			n.forEach((n) => t.push([e, n]));
		}), t;
	}
	static entries2record(e) {
		let t = {};
		for (let [n, r] of e) t[n] = r;
		return t;
	}
	_type = "xhr";
	_baseURL = globalThis.top?.document?.baseURI ?? globalThis.parent?.document?.baseURI ?? globalThis.location?.origin ?? qi.SIYUAN_DEFAULT_BASE_URL;
	_token = null;
	_ofetch_options = {
		baseURL: this._baseURL,
		headers: this._headers
	};
	_axios_options = {
		baseURL: this._baseURL,
		timeout: qi.REQUEST_TIMEOUT,
		headers: this._headers
	};
	_fetch = Ki.create(this._ofetch_options);
	_axios = C.create(this._axios_options);
	get _authorization() {
		return `Token ${this._token}`;
	}
	get _headers() {
		return this._token === null ? {} : { Authorization: this._authorization };
	}
	constructor(e = {}, t = "xhr") {
		this._setClientType(t), this._updateOptions(e, t);
	}
	_setClientType(e) {
		this._type = e;
	}
	_updateOptions(e, t = this._type) {
		switch (this._baseURL = e.baseURL ?? this._baseURL, e.token) {
			case void 0: break;
			default: this._token = e.token, delete e.token;
		}
		switch (t) {
			case "fetch": {
				let t = e;
				switch (!0) {
					case Array.isArray(t.headers):
						t.headers.find(([e]) => e.toLowerCase() === "authorization") || t.headers.push(["Authorization", this._authorization]);
						break;
					case t.headers instanceof Headers:
						t.headers.has("Authorization") || t.headers.set("Authorization", this._authorization);
						break;
					case typeof t.headers == "object":
						"Authorization" in t.headers || (t.headers.Authorization = this._authorization);
						break;
					default: t.headers = this._headers;
				}
				this._ofetch_options = t, this._fetch = Ki.create(this._ofetch_options);
				break;
			}
			default: {
				let t = e;
				if (t.headers) switch (!0) {
					case t.headers instanceof _r:
						t.headers.has("Authorization") || t.headers.set("Authorization", this._authorization);
						break;
					case typeof t.headers == "object":
						switch (!0) {
							case "common" in t.headers || "get" in t.headers || "post" in t.headers:
								"common" in t.headers && ("Authorization" in t.headers.get || (t.headers.get.Authorization = this._authorization)), "get" in t.headers && ("Authorization" in t.headers.get || (t.headers.get.Authorization = this._authorization)), "post" in t.headers && ("Authorization" in t.headers.post || (t.headers.post.Authorization = this._authorization));
								break;
							default: "Authorization" in t.headers || (t.headers.Authorization = this._authorization);
						}
						break;
					default:
						t.headers = this._headers;
						break;
				}
				else t.headers = this._headers;
				this._axios_options = t, this._axios = C.create(this._axios_options);
				break;
			}
		}
	}
	async $fetch(t, n) {
		let r = new Request(t, n), i = await this.forwardProxy({
			url: r.url,
			method: r.method,
			headers: e.headers2records(r.headers),
			payload: Fr(new Uint8Array(await r.arrayBuffer())),
			timeout: qi.REQUEST_TIMEOUT,
			contentType: "application/json",
			payloadEncoding: "base64",
			responseEncoding: "base64"
		});
		return new Response(new Uint8Array(Rr(i.data.body)), {
			status: i.data.status,
			statusText: i.msg,
			headers: new Headers(e.headers2entries(i.data.headers))
		});
	}
	broadcast(t, n, r) {
		let i = r?.baseURL ?? this._baseURL, a = r?.token ?? this._token, o = new URLSearchParams(t);
		a && o.set("token", a);
		let s = new URL(i, globalThis.location?.href);
		return s.protocol = s.protocol.replace(/^http/, "ws"), s.pathname = s.pathname.endsWith("/") ? `${s.pathname}${e.ws.broadcast.pathname.substring(1)}` : `${s.pathname}${e.ws.broadcast.pathname}`, s.search = o.toString(), new wr(s, n);
	}
	async upload(t, n) {
		let r = new FormData();
		return t.id != null && r.append("id", t.id), t.assetsDirPath != null && r.append("assetsDirPath", t.assetsDirPath), t.skipIfDuplicated != null && r.append("skipIfDuplicated", String(t.skipIfDuplicated)), t.files.forEach((e) => r.append("file[]", e)), await this._request(e.api.asset.upload.pathname, e.api.asset.upload.method, r, n);
	}
	async getBlockAttrs(t, n) {
		return await this._request(e.api.attr.getBlockAttrs.pathname, e.api.attr.getBlockAttrs.method, t, n);
	}
	async getBookmarkLabels(t) {
		return await this._request(e.api.attr.getBookmarkLabels.pathname, e.api.attr.getBookmarkLabels.method, void 0, t);
	}
	async setBlockAttrs(t, n) {
		return await this._request(e.api.attr.setBlockAttrs.pathname, e.api.attr.setBlockAttrs.method, t, n);
	}
	async appendBlock(t, n) {
		return await this._request(e.api.block.appendBlock.pathname, e.api.block.appendBlock.method, t, n);
	}
	async deleteBlock(t, n) {
		return await this._request(e.api.block.deleteBlock.pathname, e.api.block.deleteBlock.method, t, n);
	}
	async foldBlock(t, n) {
		return await this._request(e.api.block.foldBlock.pathname, e.api.block.foldBlock.method, t, n);
	}
	async getBlockBreadcrumb(t, n) {
		return await this._request(e.api.block.getBlockBreadcrumb.pathname, e.api.block.getBlockBreadcrumb.method, t, n);
	}
	async getBlockDOM(t, n) {
		return await this._request(e.api.block.getBlockDOM.pathname, e.api.block.getBlockDOM.method, t, n);
	}
	async getBlockInfo(t, n) {
		return await this._request(e.api.block.getBlockInfo.pathname, e.api.block.getBlockInfo.method, t, n);
	}
	async getBlockKramdown(t, n) {
		return await this._request(e.api.block.getBlockKramdown.pathname, e.api.block.getBlockKramdown.method, t, n);
	}
	async getChildBlocks(t, n) {
		return await this._request(e.api.block.getChildBlocks.pathname, e.api.block.getChildBlocks.method, t, n);
	}
	async getDocInfo(t, n) {
		return await this._request(e.api.block.getDocInfo.pathname, e.api.block.getDocInfo.method, t, n);
	}
	async insertBlock(t, n) {
		return await this._request(e.api.block.insertBlock.pathname, e.api.block.insertBlock.method, t, n);
	}
	async moveBlock(t, n) {
		return await this._request(e.api.block.moveBlock.pathname, e.api.block.moveBlock.method, t, n);
	}
	async prependBlock(t, n) {
		return await this._request(e.api.block.prependBlock.pathname, e.api.block.prependBlock.method, t, n);
	}
	async transferBlockRef(t, n) {
		return await this._request(e.api.block.transferBlockRef.pathname, e.api.block.transferBlockRef.method, t, n);
	}
	async unfoldBlock(t, n) {
		return await this._request(e.api.block.unfoldBlock.pathname, e.api.block.unfoldBlock.method, t, n);
	}
	async updateBlock(t, n) {
		return await this._request(e.api.block.updateBlock.pathname, e.api.block.updateBlock.method, t, n);
	}
	async getChannelInfo(t, n) {
		return await this._request(e.api.broadcast.getChannelInfo.pathname, e.api.broadcast.getChannelInfo.method, t, n);
	}
	async getChannels(t) {
		return await this._request(e.api.broadcast.getChannels.pathname, e.api.broadcast.getChannels.method, void 0, t);
	}
	async postMessage(t, n) {
		return await this._request(e.api.broadcast.postMessage.pathname, e.api.broadcast.postMessage.method, t, n);
	}
	async pandoc(t, n) {
		return await this._request(e.api.convert.pandoc.pathname, e.api.convert.pandoc.method, t, n);
	}
	async exportHTML(t, n) {
		return await this._request(e.api.export.exportHTML.pathname, e.api.export.exportHTML.method, t, n);
	}
	async exportMdContent(t, n) {
		return await this._request(e.api.export.exportMdContent.pathname, e.api.export.exportMdContent.method, t, n);
	}
	async exportResources(t, n) {
		return await this._request(e.api.export.exportResources.pathname, e.api.export.exportResources.method, t, n);
	}
	async getFile(t, n = "text", r) {
		return await this._request(e.api.file.getFile.pathname, e.api.file.getFile.method, t, r, !1, n);
	}
	async putFile(t, n) {
		t.file !== void 0 && !(t.file instanceof File) && (t.file = new File([t.file], t.path.split("/").pop()));
		let r = new FormData();
		for (let [e, n] of Object.entries(t)) n instanceof Blob ? r.append(e, n) : r.append(e, String(n));
		return await this._request(e.api.file.putFile.pathname, e.api.file.putFile.method, r, n);
	}
	async readDir(t, n) {
		return await this._request(e.api.file.readDir.pathname, e.api.file.readDir.method, t, n);
	}
	async removeFile(t, n) {
		return await this._request(e.api.file.removeFile.pathname, e.api.file.removeFile.method, t, n);
	}
	async renameFile(t, n) {
		return await this._request(e.api.file.renameFile.pathname, e.api.file.renameFile.method, t, n);
	}
	async createDailyNote(t, n) {
		return await this._request(e.api.filetree.createDailyNote.pathname, e.api.filetree.createDailyNote.method, t, n);
	}
	async createDocWithMd(t, n) {
		return await this._request(e.api.filetree.createDocWithMd.pathname, e.api.filetree.createDocWithMd.method, t, n);
	}
	async getDoc(t, n) {
		return await this._request(e.api.filetree.getDoc.pathname, e.api.filetree.getDoc.method, t, n);
	}
	async getHPathByID(t, n) {
		return await this._request(e.api.filetree.getHPathByID.pathname, e.api.filetree.getHPathByID.method, t, n);
	}
	async getHPathByPath(t, n) {
		return await this._request(e.api.filetree.getHPathByPath.pathname, e.api.filetree.getHPathByPath.method, t, n);
	}
	async getIDsByHPath(t, n) {
		return await this._request(e.api.filetree.getIDsByHPath.pathname, e.api.filetree.getIDsByHPath.method, t, n);
	}
	async listDocsByPath(t, n) {
		return await this._request(e.api.filetree.listDocsByPath.pathname, e.api.filetree.listDocsByPath.method, t, n);
	}
	async moveDocs(t, n) {
		return await this._request(e.api.filetree.moveDocs.pathname, e.api.filetree.moveDocs.method, t, n);
	}
	async removeDoc(t, n) {
		return await this._request(e.api.filetree.removeDoc.pathname, e.api.filetree.removeDoc.method, t, n);
	}
	async renameDoc(t, n) {
		return await this._request(e.api.filetree.renameDoc.pathname, e.api.filetree.renameDoc.method, t, n);
	}
	async searchDocs(t, n) {
		return await this._request(e.api.filetree.searchDocs.pathname, e.api.filetree.searchDocs.method, t, n);
	}
	async getDocHistoryContent(t, n) {
		return await this._request(e.api.history.getDocHistoryContent.pathname, e.api.history.getDocHistoryContent.method, t, n);
	}
	async getHistoryItems(t, n) {
		return await this._request(e.api.history.getHistoryItems.pathname, e.api.history.getHistoryItems.method, t, n);
	}
	async getShorthand(t, n) {
		return await this._request(e.api.inbox.getShorthand.pathname, e.api.inbox.getShorthand.method, t, n);
	}
	async echo(t, n) {
		if (t) switch (n ??= { type: this._type }, n?.type) {
			case "fetch": {
				let r = {};
				t.headers && (r.headers = t.headers), t.query && (r.query = e.entries2record(t.query.entries())), n.options ? Object.assign(r, n.options) : n.options = r;
				break;
			}
			case "xhr": {
				let r = {};
				t.headers && (r.headers = Array.isArray(t.headers) ? e.entries2record(t.headers) : t.headers instanceof Headers ? e.headers2record(t.headers) : t.headers), t.query && (r.params = t.query), n.options ? Object.assign(r, n.options) : n.options = r;
				break;
			}
		}
		return await this._request(e.api.network.echo.pathname, t?.method ?? e.api.network.echo.method, t?.body, n);
	}
	async forwardProxy(t, n) {
		return await this._request(e.api.network.forwardProxy.pathname, e.api.network.forwardProxy.method, t, n);
	}
	async closeNotebook(t, n) {
		return await this._request(e.api.notebook.closeNotebook.pathname, e.api.notebook.closeNotebook.method, t, n);
	}
	async createNotebook(t, n) {
		return await this._request(e.api.notebook.createNotebook.pathname, e.api.notebook.createNotebook.method, t, n);
	}
	async getNotebookConf(t, n) {
		return await this._request(e.api.notebook.getNotebookConf.pathname, e.api.notebook.getNotebookConf.method, t, n);
	}
	async lsNotebooks(t) {
		return await this._request(e.api.notebook.lsNotebooks.pathname, e.api.notebook.lsNotebooks.method, void 0, t);
	}
	async openNotebook(t, n) {
		return await this._request(e.api.notebook.openNotebook.pathname, e.api.notebook.openNotebook.method, t, n);
	}
	async removeNotebook(t, n) {
		return await this._request(e.api.notebook.removeNotebook.pathname, e.api.notebook.removeNotebook.method, t, n);
	}
	async renameNotebook(t, n) {
		return await this._request(e.api.notebook.renameNotebook.pathname, e.api.notebook.renameNotebook.method, t, n);
	}
	async setNotebookConf(t, n) {
		return await this._request(e.api.notebook.setNotebookConf.pathname, e.api.notebook.setNotebookConf.method, t, n);
	}
	async pushErrMsg(t, n) {
		return await this._request(e.api.notification.pushErrMsg.pathname, e.api.notification.pushErrMsg.method, t, n);
	}
	async pushMsg(t, n) {
		return await this._request(e.api.notification.pushMsg.pathname, e.api.notification.pushMsg.method, t, n);
	}
	async getDocOutline(t, n) {
		return await this._request(e.api.outline.getDocOutline.pathname, e.api.outline.getDocOutline.method, t, n);
	}
	async sql(t, n) {
		return await this._request(e.api.query.sql.pathname, e.api.query.sql.method, t, n);
	}
	async openRepoSnapshotDoc(t, n) {
		return await this._request(e.api.repo.openRepoSnapshotDoc.pathname, e.api.repo.openRepoSnapshotDoc.method, t, n);
	}
	async fullTextSearchBlock(t, n) {
		return await this._request(e.api.search.fullTextSearchBlock.pathname, e.api.search.fullTextSearchBlock.method, t, n);
	}
	async getSnippet(t, n) {
		return await this._request(e.api.snippet.getSnippet.pathname, e.api.snippet.getSnippet.method, t, n);
	}
	async setSnippet(t, n) {
		return await this._request(e.api.snippet.setSnippet.pathname, e.api.snippet.setSnippet.method, t, n);
	}
	async flushTransaction(t) {
		return await this._request(e.api.sqlite.flushTransaction.pathname, e.api.sqlite.flushTransaction.method, t);
	}
	async getLocalStorage(t) {
		return await this._request(e.api.storage.getLocalStorage.pathname, e.api.storage.getLocalStorage.method, void 0, t);
	}
	async getRecentDocs(t) {
		return await this._request(e.api.storage.getRecentDocs.pathname, e.api.storage.getRecentDocs.method, void 0, t);
	}
	async setLocalStorage(t, n) {
		return await this._request(e.api.storage.setLocalStorage.pathname, e.api.storage.setLocalStorage.method, t, n);
	}
	async setLocalStorageVal(t, n) {
		return await this._request(e.api.storage.setLocalStorageVal.pathname, e.api.storage.setLocalStorageVal.method, t, n);
	}
	async bootProgress(t) {
		return await this._request(e.api.system.bootProgress.pathname, e.api.system.bootProgress.method, void 0, t);
	}
	async currentTime(t) {
		return await this._request(e.api.system.currentTime.pathname, e.api.system.currentTime.method, void 0, t);
	}
	async exit(t, n) {
		return await this._request(e.api.system.exit.pathname, e.api.system.exit.method, t, n);
	}
	async getConf(t) {
		return await this._request(e.api.system.getConf.pathname, e.api.system.getConf.method, void 0, t);
	}
	async logoutAuth(t) {
		return await this._request(e.api.system.logoutAuth.pathname, e.api.system.logoutAuth.method, void 0, t);
	}
	async version(t) {
		return await this._request(e.api.system.version.pathname, e.api.system.version.method, void 0, t);
	}
	async render(t, n) {
		return await this._request(e.api.template.render.pathname, e.api.template.render.method, t, n);
	}
	async renderSprig(t, n) {
		return await this._request(e.api.template.renderSprig.pathname, e.api.template.renderSprig.method, t, n);
	}
	async _request(t, n, r, i, a = !0, o = "json") {
		switch (i?.type ?? this._type) {
			case "fetch": {
				let s = i?.options;
				o = (() => {
					switch (o) {
						case "arraybuffer": return "arrayBuffer";
						case "document": return "text";
						default: return o;
					}
				})();
				let c = await this._fetch(t, {
					method: n,
					body: r,
					responseType: o,
					onResponse: (n) => {
						switch (n.response.status) {
							case vr.Ok:
								o === "blob" && (n.response._data.contentType = n.response.headers.get("content-type"));
								break;
							case vr.Accepted: t === e.api.file.getFile.pathname && this._parseFetchResponse(n.response._data);
						}
					},
					...s
				});
				return a && o === "json" && typeof c == "object" ? this._parseFetchResponse(c) : c;
			}
			default: {
				let s = i?.options;
				o = (() => {
					switch (o) {
						case "arrayBuffer": return "arraybuffer";
						default: return o;
					}
				})();
				let c = await this._axios.request({
					url: t,
					method: n,
					data: r,
					responseType: o,
					...s
				});
				switch (c.status) {
					case vr.Ok: return a && o === "json" && typeof c.data == "object" ? this._parseAxiosResponse(c) : (o === "blob" && "content-type" in c.headers && (c.data.contentType = c.headers["content-type"]), c.data);
					case vr.Accepted: return t === e.api.file.getFile.pathname ? this._parseAxiosResponse(c) : c.data;
					default: throw new Ji(c);
				}
			}
		}
	}
	_parseFetchResponse(e) {
		if (e.code === 0) return e;
		throw new Yi(e);
	}
	_parseAxiosResponse(e) {
		if (e.data.code === 0) return e.data;
		throw new Yi(e.data, e);
	}
};
(/* @__PURE__ */ n(((e, t) => {
	function n(e) {
		if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
	}
	function r(e, t) {
		for (var n = "", r = 0, i = -1, a = 0, o, s = 0; s <= e.length; ++s) {
			if (s < e.length) o = e.charCodeAt(s);
			else if (o === 47) break;
			else o = 47;
			if (o === 47) {
				if (i !== s - 1 && a !== 1) if (i !== s - 1 && a === 2) {
					if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
						if (n.length > 2) {
							var c = n.lastIndexOf("/");
							if (c !== n.length - 1) {
								c === -1 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = s, a = 0;
								continue;
							}
						} else if (n.length === 2 || n.length === 1) {
							n = "", r = 0, i = s, a = 0;
							continue;
						}
					}
					t && (n.length > 0 ? n += "/.." : n = "..", r = 2);
				} else n.length > 0 ? n += "/" + e.slice(i + 1, s) : n = e.slice(i + 1, s), r = s - i - 1;
				i = s, a = 0;
			} else o === 46 && a !== -1 ? ++a : a = -1;
		}
		return n;
	}
	function i(e, t) {
		var n = t.dir || t.root, r = t.base || (t.name || "") + (t.ext || "");
		return n ? n === t.root ? n + r : n + e + r : r;
	}
	var a = {
		resolve: function() {
			for (var e = "", t = !1, i, a = arguments.length - 1; a >= -1 && !t; a--) {
				var o;
				a >= 0 ? o = arguments[a] : (i === void 0 && (i = process.cwd()), o = i), n(o), o.length !== 0 && (e = o + "/" + e, t = o.charCodeAt(0) === 47);
			}
			return e = r(e, !t), t ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
		},
		normalize: function(e) {
			if (n(e), e.length === 0) return ".";
			var t = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
			return e = r(e, !t), e.length === 0 && !t && (e = "."), e.length > 0 && i && (e += "/"), t ? "/" + e : e;
		},
		isAbsolute: function(e) {
			return n(e), e.length > 0 && e.charCodeAt(0) === 47;
		},
		join: function() {
			if (arguments.length === 0) return ".";
			for (var e, t = 0; t < arguments.length; ++t) {
				var r = arguments[t];
				n(r), r.length > 0 && (e === void 0 ? e = r : e += "/" + r);
			}
			return e === void 0 ? "." : a.normalize(e);
		},
		relative: function(e, t) {
			if (n(e), n(t), e === t || (e = a.resolve(e), t = a.resolve(t), e === t)) return "";
			for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
			for (var i = e.length, o = i - r, s = 1; s < t.length && t.charCodeAt(s) === 47; ++s);
			for (var c = t.length - s, l = o < c ? o : c, u = -1, d = 0; d <= l; ++d) {
				if (d === l) {
					if (c > l) {
						if (t.charCodeAt(s + d) === 47) return t.slice(s + d + 1);
						if (d === 0) return t.slice(s + d);
					} else o > l && (e.charCodeAt(r + d) === 47 ? u = d : d === 0 && (u = 0));
					break;
				}
				var f = e.charCodeAt(r + d);
				if (f !== t.charCodeAt(s + d)) break;
				f === 47 && (u = d);
			}
			var p = "";
			for (d = r + u + 1; d <= i; ++d) (d === i || e.charCodeAt(d) === 47) && (p.length === 0 ? p += ".." : p += "/..");
			return p.length > 0 ? p + t.slice(s + u) : (s += u, t.charCodeAt(s) === 47 && ++s, t.slice(s));
		},
		_makeLong: function(e) {
			return e;
		},
		dirname: function(e) {
			if (n(e), e.length === 0) return ".";
			for (var t = e.charCodeAt(0), r = t === 47, i = -1, a = !0, o = e.length - 1; o >= 1; --o) if (t = e.charCodeAt(o), t === 47) {
				if (!a) {
					i = o;
					break;
				}
			} else a = !1;
			return i === -1 ? r ? "/" : "." : r && i === 1 ? "//" : e.slice(0, i);
		},
		basename: function(e, t) {
			if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
			n(e);
			var r = 0, i = -1, a = !0, o;
			if (t !== void 0 && t.length > 0 && t.length <= e.length) {
				if (t.length === e.length && t === e) return "";
				var s = t.length - 1, c = -1;
				for (o = e.length - 1; o >= 0; --o) {
					var l = e.charCodeAt(o);
					if (l === 47) {
						if (!a) {
							r = o + 1;
							break;
						}
					} else c === -1 && (a = !1, c = o + 1), s >= 0 && (l === t.charCodeAt(s) ? --s === -1 && (i = o) : (s = -1, i = c));
				}
				return r === i ? i = c : i === -1 && (i = e.length), e.slice(r, i);
			}
			for (o = e.length - 1; o >= 0; --o) if (e.charCodeAt(o) === 47) {
				if (!a) {
					r = o + 1;
					break;
				}
			} else i === -1 && (a = !1, i = o + 1);
			return i === -1 ? "" : e.slice(r, i);
		},
		extname: function(e) {
			n(e);
			for (var t = -1, r = 0, i = -1, a = !0, o = 0, s = e.length - 1; s >= 0; --s) {
				var c = e.charCodeAt(s);
				if (c === 47) {
					if (!a) {
						r = s + 1;
						break;
					}
					continue;
				}
				i === -1 && (a = !1, i = s + 1), c === 46 ? t === -1 ? t = s : o !== 1 && (o = 1) : t !== -1 && (o = -1);
			}
			return t === -1 || i === -1 || o === 0 || o === 1 && t === i - 1 && t === r + 1 ? "" : e.slice(t, i);
		},
		format: function(e) {
			if (typeof e != "object" || !e) throw TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof e);
			return i("/", e);
		},
		parse: function(e) {
			n(e);
			var t = {
				root: "",
				dir: "",
				base: "",
				ext: "",
				name: ""
			};
			if (e.length === 0) return t;
			var r = e.charCodeAt(0), i = r === 47, a;
			i ? (t.root = "/", a = 1) : a = 0;
			for (var o = -1, s = 0, c = -1, l = !0, u = e.length - 1, d = 0; u >= a; --u) {
				if (r = e.charCodeAt(u), r === 47) {
					if (!l) {
						s = u + 1;
						break;
					}
					continue;
				}
				c === -1 && (l = !1, c = u + 1), r === 46 ? o === -1 ? o = u : d !== 1 && (d = 1) : o !== -1 && (d = -1);
			}
			return o === -1 || c === -1 || d === 0 || d === 1 && o === c - 1 && o === s + 1 ? c !== -1 && (t.base = t.name = s === 0 && i ? e.slice(1, c) : e.slice(s, c)) : (s === 0 && i ? (t.name = e.slice(1, o), t.base = e.slice(1, c)) : (t.name = e.slice(s, o), t.base = e.slice(s, c)), t.ext = e.slice(o, c)), s > 0 ? t.dir = e.slice(0, s - 1) : i && (t.dir = "/"), t;
		},
		sep: "/",
		delimiter: ":",
		win32: null,
		posix: null
	};
	a.posix = a, t.exports = a;
})))(), WritableStream;
//#endregion
//#region ../../node_modules/.pnpm/ua-parser-js@2.0.10/node_modules/ua-parser-js/src/main/ua-parser.mjs
var Zi = "2.0.10", Qi = 500, $i = "user-agent", ea = "", ta = "?", w = {
	FUNCTION: "function",
	OBJECT: "object",
	STRING: "string",
	UNDEFINED: "undefined"
}, T = "browser", na = "cpu", ra = "device", ia = "engine", aa = "os", oa = "result", E = "name", D = "type", O = "vendor", k = "version", A = "architecture", sa = "major", j = "model", ca = "console", M = "mobile", N = "tablet", P = "smarttv", la = "wearable", ua = "xr", da = "embedded", fa = "fetcher", pa = "inapp", ma = "brands", ha = "formFactors", ga = "fullVersionList", _a = "platform", va = "platformVersion", ya = "bitness", ba = "sec-ch-ua", xa = ba + "-full-version-list", Sa = ba + "-arch", Ca = ba + "-" + ya, wa = ba + "-form-factors", Ta = ba + "-" + M, Ea = ba + "-" + j, Da = ba + "-" + _a, Oa = Da + "-version", ka = [
	ma,
	ga,
	M,
	j,
	_a,
	va,
	A,
	ha,
	ya
], Aa = "Amazon", ja = "Apple", Ma = "ASUS", Na = "BlackBerry", Pa = "Google", Fa = "Huawei", Ia = "Lenovo", La = "Honor", Ra = "LG", za = "Microsoft", Ba = "Motorola", Va = "Nvidia", Ha = "OnePlus", Ua = "OPPO", Wa = "Samsung", Ga = "Sharp", Ka = "Sony", qa = "Xiaomi", Ja = "Zebra", Ya = "Chrome", Xa = "Chromium", Za = "Chromecast", Qa = "Edge", $a = "Firefox", eo = "Opera", to = "Facebook", no = "Sogou", ro = "Mobile ", io = " Browser", ao = "Windows", oo = typeof window !== w.UNDEFINED && window.navigator ? window.navigator : void 0, so = oo && oo.userAgentData ? oo.userAgentData : void 0, co = function(e, t) {
	var n = {}, r = t;
	if (!fo(t)) for (var i in r = {}, t) for (var a in t[i]) r[a] = t[i][a].concat(r[a] ? r[a] : []);
	for (var o in e) n[o] = r[o] && r[o].length % 2 == 0 ? r[o].concat(e[o]) : e[o];
	return n;
}, lo = function(e) {
	for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
	return t;
}, uo = function(e, t) {
	if (typeof e === w.OBJECT && e.length > 0) {
		for (var n in e) if (ho(t) == ho(e[n])) return !0;
		return !1;
	}
	return po(e) ? ho(t) == ho(e) : !1;
}, fo = function(e, t) {
	for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? fo(e[n]) : !1);
}, po = function(e) {
	return typeof e === w.STRING;
}, mo = function(e) {
	if (e) {
		for (var t = [], n = _o(e).split(","), r = 0; r < n.length; r++) if (n[r].indexOf(";") > -1) {
			var i = bo(n[r]).split(";v=");
			t[r] = {
				brand: i[0],
				version: i[1]
			};
		} else t[r] = bo(n[r]);
		return t;
	}
}, ho = function(e) {
	return po(e) ? e.toLowerCase() : e;
}, go = function(e) {
	return po(e) ? yo(/[^\d\.]/g, e).split(".")[0] : void 0;
}, _o = function(e) {
	return po(e) ? bo(yo(/\\?\"/g, e), Qi) : void 0;
}, vo = function(e) {
	for (var t in e) if (e.hasOwnProperty(t)) {
		var n = e[t];
		typeof n == w.OBJECT && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
	}
	return this;
}, yo = function(e, t) {
	return po(t) ? t.replace(e, ea) : t;
}, bo = function(e, t) {
	return e = yo(/^\s\s*/, String(e)), typeof t === w.UNDEFINED ? e : e.substring(0, t);
}, xo = function(e, t) {
	if (!(!e || !t)) for (var n = 0, r, i, a, o, s, c; n < t.length && !s;) {
		var l = t[n], u = t[n + 1];
		for (r = i = 0; r < l.length && !s && l[r];) if (s = l[r++].exec(e), s) for (a = 0; a < u.length; a++) c = s[++i], o = u[a], typeof o === w.OBJECT && o.length > 0 ? o.length === 2 ? typeof o[1] == w.FUNCTION ? this[o[0]] = o[1].call(this, c) : this[o[0]] = o[1] : o.length >= 3 && (typeof o[1] === w.FUNCTION && !(o[1].exec && o[1].test) ? o.length > 3 ? this[o[0]] = c ? o[1].apply(this, o.slice(2)) : void 0 : this[o[0]] = c ? o[1].call(this, c, o[2]) : void 0 : o.length == 3 ? this[o[0]] = c ? c.replace(o[1], o[2]) : void 0 : o.length == 4 ? this[o[0]] = c ? o[3].call(this, c.replace(o[1], o[2])) : void 0 : o.length > 4 && (this[o[0]] = c ? o[3].apply(this, [c.replace(o[1], o[2])].concat(o.slice(4))) : void 0)) : this[o] = c || void 0;
		n += 2;
	}
}, So = function(e, t) {
	return t.test.test(e) ? t.ifTrue : t.ifFalse;
}, Co = function(e, t) {
	for (var n in t) if (typeof t[n] === w.OBJECT && t[n].length > 0) {
		for (var r = 0; r < t[n].length; r++) if (uo(t[n][r], e)) return n === ta ? void 0 : n;
	} else if (uo(t[n], e)) return n === ta ? void 0 : n;
	return t.hasOwnProperty("*") ? t["*"] : e;
}, wo = {
	ME: "4.90",
	"NT 3.51": "3.51",
	"NT 4.0": "4.0",
	2e3: ["5.0", "5.01"],
	XP: ["5.1", "5.2"],
	Vista: "6.0",
	7: "6.1",
	8: "6.2",
	"8.1": "6.3",
	10: ["6.4", "10.0"],
	NT: ""
}, To = {
	embedded: "Automotive",
	mobile: "Mobile",
	tablet: ["Tablet", "EInk"],
	smarttv: "TV",
	wearable: "Watch",
	xr: ["VR", "XR"],
	"?": ["Desktop", "Unknown"],
	"*": void 0
}, Eo = {
	Chrome: "Google Chrome",
	Edge: "Microsoft Edge",
	"Edge WebView2": "Microsoft Edge WebView2",
	"Chrome WebView": "Android WebView",
	"Chrome Headless": "HeadlessChrome",
	"Huawei Browser": "HuaweiBrowser",
	"MIUI Browser": "Miui Browser",
	"Opera Mobi": "OperaMobile",
	Yandex: "YaBrowser"
}, Do = {
	browser: [
		[/\b(?:crmo|crios)\/([\w\.]+)/i],
		[k, [E, ro + "Chrome"]],
		[/webview.+edge\/([\w\.]+)/i],
		[
			k,
			[E, Qa + " WebView"],
			[D, pa]
		],
		[/edg(?:e|ios|a)?\/([\w\.]+)/i],
		[k, [E, "Edge"]],
		[
			/(opera mini)\/([-\w\.]+)/i,
			/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
			/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
		],
		[E, k],
		[/opios[\/ ]+([\w\.]+)/i],
		[k, [E, eo + " Mini"]],
		[/\bop(?:rg)?x\/([\w\.]+)/i],
		[k, [E, eo + " GX"]],
		[/\bopr\/([\w\.]+)/i],
		[k, [E, eo]],
		[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
		[k, [E, "Baidu"]],
		[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
		[k, [E, "Maxthon"]],
		[
			/(kindle)\/([\w\.]+)/i,
			/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
			/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
			/(?:ms|\()(ie) ([\w\.]+)/i,
			/(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,
			/(brave)(?: chrome)?\/([\d\.]+)/i,
			/(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
			/(qwant)(?:ios|mobile)\/([\d\.]+)/i,
			/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
		],
		[E, k],
		[/quark(?:pc)?\/([-\w\.]+)/i],
		[k, [E, "Quark"]],
		[/\bddg\/([\w\.]+)/i],
		[k, [E, "DuckDuckGo"]],
		[/(?:\buc? ?browser|(?:juc.+)ucweb| ucpc)[\/ ]?([\w\.]+)/i],
		[k, [E, "UCBrowser"]],
		[
			/microm.+\bqbcore\/([\w\.]+)/i,
			/\bqbcore\/([\w\.]+).+microm/i,
			/micromessenger\/([\w\.]+)/i
		],
		[k, [E, "WeChat"]],
		[/konqueror\/([\w\.]+)/i],
		[k, [E, "Konqueror"]],
		[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
		[k, [E, "IE"]],
		[/ya(?:search)?browser\/([\w\.]+)/i],
		[k, [E, "Yandex"]],
		[/slbrowser\/([\w\.]+)/i],
		[k, [E, "Smart " + Ia + io]],
		[/(av(?:ast|g|ira))\/([\w\.]+)/i],
		[[
			E,
			/(.+)/,
			"$1 Secure" + io
		], k],
		[/norton\/([\w\.]+)/i],
		[k, [E, "Norton Private" + io]],
		[/\bfocus\/([\w\.]+)/i],
		[k, [E, $a + " Focus"]],
		[/ mms\/([\w\.]+)$/i],
		[k, [E, eo + " Neon"]],
		[/ opt\/([\w\.]+)$/i],
		[k, [E, eo + " Touch"]],
		[/coc_coc\w+\/([\w\.]+)/i],
		[k, [E, "Coc Coc"]],
		[/dolfin\/([\w\.]+)/i],
		[k, [E, "Dolphin"]],
		[/coast\/([\w\.]+)/i],
		[k, [E, eo + " Coast"]],
		[/miuibrowser\/([\w\.]+)/i],
		[k, [E, "MIUI" + io]],
		[/fxios\/([\w\.-]+)/i],
		[k, [E, ro + $a]],
		[/\bqihoobrowser\/?([\w\.]*)/i],
		[k, [E, "360"]],
		[/\b(qq)\/([\w\.]+)/i],
		[[
			E,
			/(.+)/,
			"$1Browser"
		], k],
		[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
		[[
			E,
			/(.+)/,
			"$1" + io
		], k],
		[/ HBPC\/([\w\.]+)/],
		[k, [E, Fa + io]],
		[/samsungbrowser\/([\w\.]+)/i],
		[k, [E, Wa + " Internet"]],
		[/metasr[\/ ]?([\d\.]+)/i],
		[k, [E, no + " Explorer"]],
		[/(sogou)mo\w+\/([\d\.]+)/i],
		[[E, no + " Mobile"], k],
		[
			/(electron)\/([\w\.]+) safari/i,
			/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
			/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
		],
		[E, k],
		[/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
		[E],
		[/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
		[k, E],
		[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
		[
			[E, to],
			k,
			[D, pa]
		],
		[
			/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
			/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
			/(daum)apps[\/ ]([\w\.]+)/i,
			/safari (line)\/([\w\.]+)/i,
			/\b(line)\/([\w\.]+)\/iab/i,
			/(alipay)client\/([\w\.]+)/i,
			/(twitter)(?:and| f.+e\/([\w\.]+))/i,
			/(bing)(?:web|sapphire)\/([\w\.]+)/i,
			/(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i
		],
		[
			E,
			k,
			[D, pa]
		],
		[/\bgsa\/([\w\.]+) .*safari\//i],
		[
			k,
			[E, "GSA"],
			[D, pa]
		],
		[/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
		[
			k,
			[E, "TikTok"],
			[D, pa]
		],
		[/\[(linkedin)app\]/i],
		[E, [D, pa]],
		[/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
		[
			[
				E,
				/(.+)/,
				"Zalo"
			],
			k,
			[D, pa]
		],
		[/(chromium)[\/ ]([-\w\.]+)/i],
		[E, k],
		[/ome-(lighthouse)$/i],
		[E, [D, fa]],
		[/headlesschrome(?:\/([\w\.]+)| )/i],
		[k, [E, Ya + " Headless"]],
		[/wv\).+chrome\/([\w\.]+).+edgw\//i],
		[
			k,
			[E, Qa + " WebView2"],
			[D, pa]
		],
		[/; wv\).+(chrome)\/([\w\.]+)/i],
		[
			[E, Ya + " WebView"],
			k,
			[D, pa]
		],
		[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
		[k, [E, "Android" + io]],
		[/chrome\/([\w\.]+) mobile/i],
		[k, [E, ro + "Chrome"]],
		[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
		[E, k],
		[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
		[k, [E, ro + "Safari"]],
		[/iphone .*mobile(?:\/\w+ | ?)safari/i],
		[[E, ro + "Safari"]],
		[/version\/([\w\.\,]+) .*(safari)/i],
		[k, E],
		[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
		[E, [k, "1"]],
		[/(webkit|khtml)\/([\w\.]+)/i],
		[E, k],
		[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
		[[E, ro + $a], k],
		[/(navigator|netscape\d?)\/([-\w\.]+)/i],
		[[E, "Netscape"], k],
		[/(wolvic|librewolf)\/([\w\.]+)/i],
		[E, k],
		[/mobile vr; rv:([\w\.]+)\).+firefox/i],
		[k, [E, $a + " Reality"]],
		[
			/ekiohf.+(flow)\/([\w\.]+)/i,
			/(swiftfox)/i,
			/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
			/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,
			/(firefox)\/([\w\.]+)/i,
			/(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,
			/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
			/\b(links) \(([\w\.]+)/i
		],
		[E, [
			k,
			/_/g,
			"."
		]],
		[/(cobalt)\/([\w\.]+)/i],
		[E, [
			k,
			/[^\d\.]+./,
			ea
		]]
	],
	cpu: [
		[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
		[[A, "amd64"]],
		[/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
		[[A, "ia32"]],
		[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
		[[A, "arm64"]],
		[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
		[[A, "armhf"]],
		[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
		[[A, "arm"]],
		[/ sun4\w[;\)]/i],
		[[A, "sparc"]],
		[
			/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
			/((ppc|powerpc)(64)?)( mac|;|\))/i,
			/(?:osf1|[freopnt]{3,4}bsd) (alpha)/i
		],
		[[
			A,
			/ower/,
			ea,
			ho
		]],
		[/mc680.0/i],
		[[A, "68k"]],
		[/winnt.+\[axp/i],
		[[A, "alpha"]]
	],
	device: [
		[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
		[
			j,
			[O, Wa],
			[D, N]
		],
		[
			/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
			/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
			/sec-(sgh\w+)/i
		],
		[
			j,
			[O, Wa],
			[D, M]
		],
		[/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
		[
			j,
			[O, ja],
			[D, M]
		],
		[/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
		[
			j,
			[O, ja],
			[D, N]
		],
		[/(macintosh);/i],
		[j, [O, ja]],
		[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
		[
			j,
			[O, Ga],
			[D, M]
		],
		[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
		[
			j,
			[O, La],
			[D, N]
		],
		[/honor([-\w ]+)[;\)]/i],
		[
			j,
			[O, La],
			[D, M]
		],
		[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
		[
			j,
			[O, Fa],
			[D, N]
		],
		[/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
		[
			j,
			[O, Fa],
			[D, M]
		],
		[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
		[
			[
				j,
				/_/g,
				" "
			],
			[O, qa],
			[D, N]
		],
		[
			/\b; (\w+) build\/hm\1/i,
			/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
			/oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
			/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
			/; ([\w ]+) miui\/v?\d/i
		],
		[
			[
				j,
				/_/g,
				" "
			],
			[O, qa],
			[D, M]
		],
		[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
		[
			j,
			[O, Ha],
			[D, M]
		],
		[/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
		[
			j,
			[O, Ua],
			[D, M]
		],
		[/\b(opd2(\d{3}a?))(?: bui|\))/i],
		[
			j,
			[
				O,
				Co,
				{
					OnePlus: [
						"203",
						"304",
						"403",
						"404",
						"413",
						"415"
					],
					"*": Ua
				}
			],
			[D, N]
		],
		[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
		[
			j,
			[O, "BLU"],
			[D, M]
		],
		[/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
		[
			j,
			[O, "Vivo"],
			[D, M]
		],
		[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
		[
			j,
			[O, "Realme"],
			[D, M]
		],
		[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
		[
			j,
			[O, Ia],
			[D, N]
		],
		[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
		[
			j,
			[O, Ia],
			[D, M]
		],
		[
			/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
			/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
			/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
		],
		[
			j,
			[O, Ba],
			[D, M]
		],
		[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
		[
			j,
			[O, Ba],
			[D, N]
		],
		[/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
		[
			j,
			[O, Ra],
			[D, N]
		],
		[
			/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
			/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
			/\blg-?([\d\w]+) bui/i
		],
		[
			j,
			[O, Ra],
			[D, M]
		],
		[/(nokia) (t[12][01])/i],
		[
			O,
			j,
			[D, N]
		],
		[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
		[
			[
				j,
				/_/g,
				" "
			],
			[D, M],
			[O, "Nokia"]
		],
		[/(pixel (c|tablet))\b/i],
		[
			j,
			[O, Pa],
			[D, N]
		],
		[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],
		[
			j,
			[O, Pa],
			[D, M]
		],
		[/(google) (pixelbook( go)?)/i],
		[O, j],
		[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
		[
			j,
			[O, Ka],
			[D, M]
		],
		[/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
		[
			[j, "Xperia Tablet"],
			[O, Ka],
			[D, N]
		],
		[
			/(alexa)webm/i,
			/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
			/(kf[a-z]+)( bui|\)).+silk\//i
		],
		[
			j,
			[O, Aa],
			[D, N]
		],
		[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
		[
			[
				j,
				/(.+)/g,
				"Fire Phone $1"
			],
			[O, Aa],
			[D, M]
		],
		[/(playbook);[-\w\),; ]+(rim)/i],
		[
			j,
			O,
			[D, N]
		],
		[/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
		[
			j,
			[O, Na],
			[D, M]
		],
		[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
		[
			j,
			[O, Ma],
			[D, N]
		],
		[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
		[
			j,
			[O, Ma],
			[D, M]
		],
		[/(nexus 9)/i],
		[
			j,
			[O, "HTC"],
			[D, N]
		],
		[
			/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
			/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
			/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
		],
		[
			O,
			[
				j,
				/_/g,
				" "
			],
			[D, M]
		],
		[/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],
		[
			j,
			[O, "TCL"],
			[D, N]
		],
		[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],
		[
			j,
			[O, "TCL"],
			[D, M]
		],
		[/(itel) ((\w+))/i],
		[
			[O, ho],
			j,
			[
				D,
				Co,
				{
					tablet: ["p10001l", "w7001"],
					"*": "mobile"
				}
			]
		],
		[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
		[
			j,
			[O, "Acer"],
			[D, N]
		],
		[/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
		[
			j,
			[O, "Meizu"],
			[D, M]
		],
		[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
		[
			j,
			[O, "Ulefone"],
			[D, M]
		],
		[/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
		[
			j,
			[O, "Energizer"],
			[D, M]
		],
		[/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
		[
			j,
			[O, "Cat"],
			[D, M]
		],
		[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
		[
			j,
			[O, "Smartfren"],
			[D, M]
		],
		[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
		[
			j,
			[O, "Nothing"],
			[D, M]
		],
		[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
		[
			j,
			[O, "Archos"],
			[D, N]
		],
		[/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
		[
			j,
			[O, "Archos"],
			[D, M]
		],
		[/blackview ([-\w ]+)( b|\))/i, /; (bv\d{4}[-\w ]*)( b|\))/i],
		[
			j,
			[O, "Blackview"],
			[D, M]
		],
		[/; (n159v)/i],
		[
			j,
			[O, "HMD"],
			[D, M]
		],
		[/((revvl[ \w\+]+|tm(?:rv|af)\w*[45]g(?:tb)?))( b|\))/i],
		[
			j,
			[
				D,
				So,
				{
					test: /ta?b/i,
					ifTrue: N,
					ifFalse: M
				}
			],
			[O, "T-Mobile"]
		],
		[/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
		[
			O,
			j,
			[D, N]
		],
		[
			/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
			/; (blu|coolpad|cubot|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([-\w\+ ]+?)(?: bui|\)|; r)/i,
			/(hp) ([\w ]+\w)/i,
			/(microsoft); (lumia[\w ]+)/i,
			/(oppo) ?([\w ]+) bui/i,
			/(hisense) ([ehv][\w ]+)\)/i,
			/droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i
		],
		[
			O,
			j,
			[D, M]
		],
		[
			/(kobo)\s(ereader|touch)/i,
			/(hp).+(touchpad(?!.+tablet)|tablet)/i,
			/(kindle)\/([\w\.]+)/i
		],
		[
			O,
			j,
			[D, N]
		],
		[/(surface duo)/i],
		[
			j,
			[O, za],
			[D, N]
		],
		[/droid [\d\.]+; (fp\du?)(?: b|\))/i],
		[
			j,
			[O, "Fairphone"],
			[D, M]
		],
		[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
		[
			j,
			[O, Va],
			[D, N]
		],
		[/(sprint) (\w+)/i],
		[
			O,
			j,
			[D, M]
		],
		[/(kin\.[onetw]{3})/i],
		[
			[
				j,
				/\./g,
				" "
			],
			[O, za],
			[D, M]
		],
		[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
		[
			j,
			[O, Ja],
			[D, N]
		],
		[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
		[
			j,
			[O, Ja],
			[D, M]
		],
		[/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
		[O, [D, P]],
		[/hbbtv.+maple;(\d+)/i],
		[
			[
				j,
				/^/,
				"SmartTV"
			],
			[O, Wa],
			[D, P]
		],
		[/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
		[
			O,
			j,
			[D, P]
		],
		[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
		[[O, Ra], [D, P]],
		[/(apple) ?tv/i],
		[
			O,
			[j, ja + " TV"],
			[D, P]
		],
		[/crkey.*devicetype\/chromecast/i],
		[
			[j, Za + " Third Generation"],
			[O, Pa],
			[D, P]
		],
		[/crkey.*devicetype\/([^/]*)/i],
		[
			[
				j,
				/^/,
				"Chromecast "
			],
			[O, Pa],
			[D, P]
		],
		[/fuchsia.*crkey/i],
		[
			[j, Za + " Nest Hub"],
			[O, Pa],
			[D, P]
		],
		[/crkey/i],
		[
			[j, Za],
			[O, Pa],
			[D, P]
		],
		[/(portaltv)/i],
		[
			j,
			[O, to],
			[D, P]
		],
		[/droid.+aft(\w+)( bui|\))/i],
		[
			j,
			[O, Aa],
			[D, P]
		],
		[/(shield \w+ tv)/i],
		[
			j,
			[O, Va],
			[D, P]
		],
		[/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
		[
			j,
			[O, Ga],
			[D, P]
		],
		[/(bravia[\w ]+)( bui|\))/i],
		[
			j,
			[O, Ka],
			[D, P]
		],
		[/(mi(tv|box)-?\w+) bui/i],
		[
			j,
			[O, qa],
			[D, P]
		],
		[/Hbbtv.*(technisat) (.*);/i],
		[
			O,
			j,
			[D, P]
		],
		[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
		[
			[
				O,
				/.+\/(\w+)/,
				"$1",
				Co,
				{ LG: "lge" }
			],
			[j, bo],
			[D, P]
		],
		[/(playstation \w+)/i],
		[
			j,
			[O, Ka],
			[D, ca]
		],
		[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
		[
			j,
			[O, za],
			[D, ca]
		],
		[
			/(ouya)/i,
			/(nintendo) (\w+)/i,
			/(retroid) (pocket ([^\)]+))/i,
			/(valve).+(steam deck)/i,
			/droid.+; ((shield|rgcube|gr0006))( bui|\))/i
		],
		[
			[
				O,
				Co,
				{
					Nvidia: "Shield",
					Anbernic: "RGCUBE",
					Logitech: "GR0006"
				}
			],
			j,
			[D, ca]
		],
		[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
		[
			j,
			[O, Wa],
			[D, la]
		],
		[/((pebble))app/i, /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
		[
			O,
			j,
			[D, la]
		],
		[/(ow(?:19|20)?we?[1-3]{1,3})/i],
		[
			j,
			[O, Ua],
			[D, la]
		],
		[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
		[
			j,
			[O, ja],
			[D, la]
		],
		[/(opwwe\d{3})/i],
		[
			j,
			[O, Ha],
			[D, la]
		],
		[/(moto 360)/i],
		[
			j,
			[O, Ba],
			[D, la]
		],
		[/(smartwatch 3)/i],
		[
			j,
			[O, Ka],
			[D, la]
		],
		[/(g watch r)/i],
		[
			j,
			[O, Ra],
			[D, la]
		],
		[/droid.+; (wt63?0{2,3})\)/i],
		[
			j,
			[O, Ja],
			[D, la]
		],
		[/droid.+; (glass) \d/i],
		[
			j,
			[O, Pa],
			[D, ua]
		],
		[/(pico) ([\w ]+) os\d/i],
		[
			O,
			j,
			[D, ua]
		],
		[/(quest( \d| pro)?s?).+vr/i],
		[
			j,
			[O, to],
			[D, ua]
		],
		[/mobile vr; rv.+firefox/i],
		[[D, ua]],
		[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
		[O, [D, da]],
		[/(aeobc)\b/i],
		[
			j,
			[O, Aa],
			[D, da]
		],
		[/(homepod).+mac os/i],
		[
			j,
			[O, ja],
			[D, da]
		],
		[/windows iot/i],
		[[D, da]],
		[/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
		[j, [D, P]],
		[/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
		[[D, P]],
		[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
		[j, [
			D,
			Co,
			{
				mobile: "Mobile",
				xr: "VR",
				"*": N
			}
		]],
		[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
		[[D, N]],
		[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
		[[D, M]],
		[/droid .+?; ([\w\. -]+)( bui|\))/i],
		[j, [O, "Generic"]]
	],
	engine: [
		[/windows.+ edge\/([\w\.]+)/i],
		[k, [E, Qa + "HTML"]],
		[/(arkweb)\/([\w\.]+)/i],
		[E, k],
		[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
		[k, [E, "Blink"]],
		[
			/(presto)\/([\w\.]+)/i,
			/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
			/ekioh(flow)\/([\w\.]+)/i,
			/(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
			/(icab)[\/ ]([23]\.[\d\.]+)/i,
			/\b(libweb)/i
		],
		[E, k],
		[/ladybird\//i],
		[[E, "LibWeb"]],
		[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
		[k, E]
	],
	os: [
		[/(windows nt) (6\.[23]); arm/i],
		[[
			E,
			/N/,
			"R"
		], [
			k,
			Co,
			wo
		]],
		[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i, /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],
		[E, k],
		[/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
		[[
			k,
			/(;|\))/g,
			"",
			Co,
			wo
		], [E, ao]],
		[/(windows ce)\/?([\d\.]*)/i],
		[E, k],
		[
			/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
			/(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
			/\btvos ?([\w\.]+)/i,
			/cfnetwork\/.+darwin/i
		],
		[[
			k,
			/_/g,
			"."
		], [E, "iOS"]],
		[/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
		[[E, "macOS"], [
			k,
			/_/g,
			"."
		]],
		[/android ([\d\.]+).*crkey/i],
		[k, [E, Za + " Android"]],
		[/fuchsia.*crkey\/([\d\.]+)/i],
		[k, [E, Za + " Fuchsia"]],
		[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
		[k, [E, Za + " SmartSpeaker"]],
		[/linux.*crkey\/([\d\.]+)/i],
		[k, [E, Za + " Linux"]],
		[/crkey\/([\d\.]+)/i],
		[k, [E, Za]],
		[/droid ([\w\.]+)\b.+(android[- ]x86)/i],
		[k, E],
		[/(ubuntu) ([\w\.]+) like android/i],
		[[
			E,
			/(.+)/,
			"$1 Touch"
		], k],
		[/(harmonyos)[\/ ]?([\d\.]*)/i, /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],
		[E, k],
		[/\(bb(10);/i],
		[k, [E, Na]],
		[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
		[k, [E, "Symbian"]],
		[/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],
		[k, [E, $a + " OS"]],
		[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
		[k, [E, "webOS"]],
		[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
		[[
			k,
			Co,
			{
				25: "120",
				24: "108",
				23: "94",
				22: "87",
				6: "79",
				5: "68",
				4: "53",
				3: "38",
				2: "538",
				1: "537",
				"*": "TV"
			}
		], [E, "webOS"]],
		[/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
		[k, [E, "watchOS"]],
		[/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
		[k, [E, "Chrome OS"]],
		[/kepler ([\w\.]+); (aft|aeo)/i],
		[k, [E, "Vega OS"]],
		[
			/(netrange)mmh/i,
			/(nettv)\/(\d+\.[\w\.]+)/i,
			/(nintendo|playstation) (\w+)/i,
			/(xbox); +xbox ([^\);]+)/i,
			/(pico) .+os([\w\.]+)/i,
			/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
			/linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
			/(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
			/([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
			/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
			/\b(aix)[; ]([1-9\.]{0,4})/i,
			/(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
			/(gnu) ?([\w\.]*)/i,
			/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
			/(haiku) ?(r\d)?/i
		],
		[E, k],
		[/(sunos) ?([\d\.]*)/i],
		[[E, "Solaris"], k],
		[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
		[E, k]
	]
}, Oo = (function() {
	var e = {
		init: {},
		isIgnore: {},
		isIgnoreRgx: {},
		toString: {}
	};
	return vo.call(e.init, [
		[T, [
			E,
			k,
			sa,
			D
		]],
		[na, [A]],
		[ra, [
			D,
			j,
			O
		]],
		[ia, [E, k]],
		[aa, [E, k]]
	]), vo.call(e.isIgnore, [
		[T, [k, sa]],
		[ia, [k]],
		[aa, [k]]
	]), vo.call(e.isIgnoreRgx, [[T, / ?browser$/i], [aa, / ?os$/i]]), vo.call(e.toString, [
		[T, [E, k]],
		[na, [A]],
		[ra, [O, j]],
		[ia, [E, k]],
		[aa, [E, k]]
	]), e;
})(), ko = function(e, t) {
	var n = Oo.init[t], r = Oo.isIgnore[t] || 0, i = Oo.isIgnoreRgx[t] || 0, a = Oo.toString[t] || 0;
	function o() {
		vo.call(this, n);
	}
	return o.prototype.getItem = function() {
		return e;
	}, o.prototype.withClientHints = function() {
		return so ? so.getHighEntropyValues(ka).then(function(t) {
			return e.setCH(new Ao(t, !1)).parseCH().get();
		}) : e.parseCH().get();
	}, o.prototype.withFeatureCheck = function() {
		return e.detectFeature().get();
	}, t != oa && (o.prototype.is = function(e) {
		var t = !1;
		for (var n in this) if (this.hasOwnProperty(n) && !uo(r, n) && ho(i ? yo(i, this[n]) : this[n]) == ho(i ? yo(i, e) : e)) {
			if (t = !0, e != w.UNDEFINED) break;
		} else if (e == w.UNDEFINED && t) {
			t = !t;
			break;
		}
		return t;
	}, o.prototype.toString = function() {
		var e = ea;
		for (var t in a) typeof this[a[t]] !== w.UNDEFINED && (e += (e ? " " : ea) + this[a[t]]);
		return e || w.UNDEFINED;
	}), o.prototype.then = function(e) {
		var t = this, n = function() {
			for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
		};
		n.prototype = {
			is: o.prototype.is,
			toString: o.prototype.toString,
			withClientHints: o.prototype.withClientHints,
			withFeatureCheck: o.prototype.withFeatureCheck
		};
		var r = new n();
		return e(r), r;
	}, new o();
};
function Ao(e, t) {
	if (e ||= {}, vo.call(this, ka), t) vo.call(this, [
		[ma, mo(e[ba])],
		[ga, mo(e[xa])],
		[M, /\?1/.test(e[Ta])],
		[j, _o(e[Ea])],
		[_a, _o(e[Da])],
		[va, _o(e[Oa])],
		[A, _o(e[Sa])],
		[ha, mo(e[wa])],
		[ya, _o(e[Ca])]
	]);
	else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== w.UNDEFINED && (this[n] = e[n]);
}
function jo(e, t, n, r) {
	return vo.call(this, [
		["itemType", e],
		["ua", t],
		["uaCH", r],
		["rgxMap", n],
		["data", ko(this, e)]
	]), this;
}
jo.prototype.get = function(e) {
	return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
}, jo.prototype.set = function(e, t) {
	return this.data[e] = t, this;
}, jo.prototype.setCH = function(e) {
	return this.uaCH = e, this;
}, jo.prototype.detectFeature = function() {
	if (oo && oo.userAgent == this.ua) switch (this.itemType) {
		case T:
			oo.brave && typeof oo.brave.isBrave == w.FUNCTION && this.set(E, "Brave");
			break;
		case ra:
			!this.get(D) && so && so[M] && this.set(D, M), this.get(j) == "Macintosh" && oo && typeof oo.standalone !== w.UNDEFINED && oo.maxTouchPoints && oo.maxTouchPoints > 2 && this.set(j, "iPad").set(D, N);
			break;
		case aa:
			!this.get(E) && so && so[_a] && this.set(E, so[_a]);
			break;
		case oa:
			var e = this.data, t = function(t) {
				return e[t].getItem().detectFeature().get();
			};
			this.set(T, t(T)).set(na, t(na)).set(ra, t(ra)).set(ia, t(ia)).set(aa, t(aa));
	}
	return this;
}, jo.prototype.parseUA = function() {
	switch (this.itemType != oa && xo.call(this.data, this.ua, this.rgxMap), this.itemType) {
		case T:
			this.set(sa, go(this.get(k)));
			break;
		case aa: if (this.get(E) == "iOS" && this.get(k) && /^1[89][^\d]/.exec(this.get(k))) {
			var e = /\) Version\/((\d+)[\d\.]*)/.exec(this.ua);
			e && parseInt(e[2], 10) >= 26 && this.set(k, e[1]);
		}
	}
	return this;
}, jo.prototype.parseCH = function() {
	var e = this.uaCH, t = this.rgxMap;
	switch (this.itemType) {
		case T:
		case ia:
			var n = e[ga] || e[ma], r;
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i].brand || n[i], o = n[i].version;
				this.itemType == T && !/not.a.brand/i.test(a) && (!r || /Chrom/.test(r) && a != Xa || r == Qa && /WebView2/.test(a)) && (a = Co(a, Eo), r = this.get(E), r && !/Chrom/.test(r) && /Chrom/.test(a) || this.set(E, a).set(k, o).set(sa, go(o)), r = a), this.itemType == ia && a == Xa && this.set(k, o);
			}
			break;
		case na:
			var s = e[A];
			s && (s && e[ya] == "64" && (s += "64"), xo.call(this.data, s + ";", t));
			break;
		case ra:
			if (e[M] && this.set(D, M), e[j] && (this.set(j, e[j]), !this.get(D) || !this.get(O))) {
				var c = {};
				xo.call(c, "droid 9; " + e[j] + ")", t), !this.get(D) && c.type && this.set(D, c.type), !this.get(O) && c.vendor && this.set(O, c.vendor);
			}
			if (e[ha]) {
				var l;
				if (typeof e[ha] != "string") for (var u = 0; !l && u < e[ha].length;) l = Co(e[ha][u++], To);
				else l = Co(e[ha], To);
				this.set(D, l);
			}
			break;
		case aa:
			var d = e[_a];
			if (d) {
				var f = e[va];
				d == ao && (f = parseInt(go(f), 10) >= 13 ? "11" : "10"), this.set(E, d).set(k, f);
			}
			this.get(E) == ao && e[j] == "Xbox" && this.set(E, "Xbox").set(k, void 0);
			break;
		case oa:
			var p = this.data, m = function(t) {
				return p[t].getItem().setCH(e).parseCH().get();
			};
			this.set(T, m(T)).set(na, m(na)).set(ra, m(ra)).set(ia, m(ia)).set(aa, m(aa));
	}
	return this;
};
function Mo(e, t, n) {
	if (typeof e === w.OBJECT ? (fo(e, !0) ? (typeof t === w.OBJECT && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === w.STRING && !fo(t, !0) && (n = t, t = void 0), n) if (typeof n.append === w.FUNCTION) {
		var r = {};
		n.forEach(function(e, t) {
			r[String(t).toLowerCase()] = e;
		}), n = r;
	} else {
		var i = {};
		for (var a in n) n.hasOwnProperty(a) && (i[String(a).toLowerCase()] = n[a]);
		n = i;
	}
	if (!(this instanceof Mo)) return new Mo(e, t, n).getResult();
	var o = typeof e === w.STRING ? e : n && n[$i] ? n[$i] : oo && oo.userAgent ? oo.userAgent : ea, s = new Ao(n, !0), c = Do, l = function(e) {
		return e == oa ? function() {
			return new jo(e, o, c, s).set("ua", o).set(T, this.getBrowser()).set(na, this.getCPU()).set(ra, this.getDevice()).set(ia, this.getEngine()).set(aa, this.getOS()).get();
		} : function() {
			return new jo(e, o, c[e], s).parseUA().get();
		};
	};
	return vo.call(this, [
		["getBrowser", l(T)],
		["getCPU", l(na)],
		["getDevice", l(ra)],
		["getEngine", l(ia)],
		["getOS", l(aa)],
		["getResult", l(oa)],
		["getUA", function() {
			return o;
		}],
		["setUA", function(e) {
			return po(e) && (o = bo(e, Qi)), this;
		}],
		["useExtension", function(e) {
			return e && (c = co(c, e)), this;
		}]
	]).setUA(o).useExtension(t), this;
}
Mo.VERSION = Zi, Mo.BROWSER = lo([
	E,
	k,
	sa,
	D
]), Mo.CPU = lo([A]), Mo.DEVICE = lo([
	j,
	O,
	D,
	ca,
	M,
	P,
	N,
	la,
	da
]), Mo.ENGINE = Mo.OS = lo([E, k]);
//#endregion
//#region ../../packages/utils/misc/user-agent.ts
var No = new Mo().getResult(), Po = class {
	label;
	collapsed;
	FLAG_FIREFOX;
	constructor(e, t = !0) {
		this.label = e, this.collapsed = t, this.FLAG_FIREFOX = No.browser.name === "Firefox" || No.engine.name === "Gecko";
	}
	stdout(e, t, ...n) {
		let r = this.FLAG_FIREFOX ? `[${this.label}] - <${e.name.toUpperCase()}>` : `[\x1B[4m${this.label}\x1B[0m] - <\x1B[1m${e.name.toUpperCase()}\x1B[0m>`;
		if (this.collapsed ? globalThis.console.groupCollapsed(r) : globalThis.console.group(r), t) for (let t of n) Array.isArray(t) ? e(...t) : e(t);
		else e(...n);
		globalThis.console.trace(), globalThis.console.groupEnd();
	}
	clear(...e) {
		this.stdout(globalThis.console.clear, !1, ...e);
	}
	countReset(...e) {
		this.stdout(globalThis.console.countReset, !1, ...e);
	}
	count(...e) {
		this.stdout(globalThis.console.count, !1, ...e);
	}
	counts(...e) {
		this.stdout(globalThis.console.count, !0, ...e);
	}
	assert(...e) {
		this.stdout(globalThis.console.assert, !1, ...e);
	}
	asserts(...e) {
		this.stdout(globalThis.console.assert, !0, ...e);
	}
	dir(...e) {
		this.stdout(globalThis.console.dir, !1, ...e);
	}
	dirs(...e) {
		this.stdout(globalThis.console.dir, !0, ...e);
	}
	dirxml(...e) {
		this.stdout(globalThis.console.dirxml, !1, ...e);
	}
	dirxmls(...e) {
		this.stdout(globalThis.console.dirxml, !0, ...e);
	}
	table(...e) {
		this.stdout(globalThis.console.table, !1, ...e);
	}
	tables(...e) {
		this.stdout(globalThis.console.table, !0, ...e);
	}
	debug(...e) {
		this.stdout(globalThis.console.debug, !1, ...e);
	}
	debugs(...e) {
		this.stdout(globalThis.console.debug, !0, ...e);
	}
	info(...e) {
		this.stdout(globalThis.console.info, !1, ...e);
	}
	infos(...e) {
		this.stdout(globalThis.console.info, !0, ...e);
	}
	log(...e) {
		this.stdout(globalThis.console.log, !1, ...e);
	}
	logs(...e) {
		this.stdout(globalThis.console.log, !0, ...e);
	}
	warn(...e) {
		this.stdout(globalThis.console.warn, !1, ...e);
	}
	warns(...e) {
		this.stdout(globalThis.console.warn, !0, ...e);
	}
	error(...e) {
		this.stdout(globalThis.console.error, !1, ...e);
	}
	errors(...e) {
		this.stdout(globalThis.console.error, !0, ...e);
	}
};
//#endregion
//#region ../../packages/utils/misc/sleep.ts
async function Fo(e) {
	return new Promise((t) => {
		setTimeout(t, e);
	});
}
//#endregion
//#region ../../packages/utils/misc/string.ts
function Io(e, t) {
	return e.endsWith(t) ? e.slice(0, -t.length) : e;
}
//#endregion
//#region ../../packages/utils/misc/iterator.ts
function* Lo(e = 0) {
	for (;;) yield e++;
}
//#endregion
//#region ../../packages/utils/siyuan/id.ts
var Ro = Lo(Math.round(Math.random() * (36 ** 8 - 1)));
function zo(e, t) {
	return `${e.getFullYear().toString().padStart(4, "0")}${(e.getMonth() + 1).toString().padStart(2, "0")}${e.getDate().toString().padStart(2, "0")}${e.getHours().toString().padStart(2, "0")}${e.getMinutes().toString().padStart(2, "0")}${e.getSeconds().toString().padStart(2, "0")}-${t.toString(36).padStart(7, "0").slice(-7)}`;
}
function Bo(e = /* @__PURE__ */ new Date(), t = Ro) {
	return zo(e, t.next().value);
}
//#endregion
//#region ../../packages/utils/worker/bridge/base.ts
var Vo = class {
	port;
	logger;
	handlers;
	uuid;
	map = /* @__PURE__ */ new Map();
	counter = Math.random();
	constructor(e, t, n, r) {
		this.port = e, this.logger = t, this.handlers = n, this.uuid = r, this.port.addEventListener("error", this.errerEventListener), this.port.addEventListener("messageerror", this.errerEventListener), this.port.addEventListener("message", this.messageEventListener);
	}
	errerEventListener = async (e) => {
		this.logger.warn(e);
	};
	messageEventListener = async (e) => {
		let t = e.data;
		switch (t.type) {
			case "call":
				try {
					if (t.uuid && t.uuid !== this.uuid) break;
					if (t.handler.name in this.handlers) {
						let e = this.handlers[t.handler.name];
						if (!e) throw Error(`Handler "${String(t.handler.name)}" not found`);
						let n = await e.func.call(e.this, ...t.handler.args), r = {
							type: "return",
							id: t.id,
							handler: {
								name: t.handler.name,
								result: n
							}
						};
						this.port.postMessage(r);
					}
				} catch (e) {
					let n = {
						type: "error",
						id: t.id,
						error: e
					};
					this.port.postMessage(n);
				}
				break;
			case "error": {
				let e = this.map.get(t.id);
				e && (this.map.delete(t.id), e.reject(t.error));
				break;
			}
			case "return": {
				let e = this.map.get(t.id);
				e && (this.map.delete(t.id), e.resolve(t.handler.result));
				break;
			}
		}
	};
	async call(e, ...t) {
		return new Promise((n, r) => {
			let i = this.counter++;
			this.map.set(i, {
				resolve: n,
				reject: r
			});
			let a = {
				type: "call",
				id: i,
				handler: {
					name: e,
					args: t
				}
			};
			this.port.postMessage(a);
		});
	}
	async singleCall(e, t, ...n) {
		return new Promise((r, i) => {
			let a = this.counter++;
			this.map.set(a, {
				resolve: r,
				reject: i
			});
			let o = {
				type: "call",
				id: a,
				uuid: t,
				handler: {
					name: e,
					args: n
				}
			};
			this.port.postMessage(o);
		});
	}
}, Ho = class extends Vo {
	constructor(e, t, n = {}, r = Bo()) {
		super(e, t, n, r), this.port.addEventListener("message", this.pingEventListener);
	}
	pingEventListener = async (e) => {
		e.data === "ping" && this.port.postMessage("pong");
	};
	close() {
		switch (!0) {
			case "close" in this.port:
				this.port.close();
				break;
			case "terminate" in this.port: this.port.terminate();
		}
	}
}, Uo = /* @__PURE__ */ function(e) {
	return e.Coding = "coding", e.Building = "building", e.Indexing = "indexing", e.Debugging = "debugging", e.Browsing = "browsing", e.RunningTests = "running tests", e.WritingTests = "writing tests", e.ManualTesting = "manual testing", e.WritingDocs = "writing docs", e.Communicating = "communicating", e.CodeReviewing = "code reviewing", e.Notes = "notes", e.Researching = "researching", e.Learning = "learning", e.Designing = "designing", e.AICoding = "ai coding", e;
}({}), Wo = /* @__PURE__ */ function(e) {
	return e.App = "app", e.File = "file", e.Domain = "domain", e.Url = "url", e;
}({}), Go = { wakatime: {
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
	view: { category: Uo.Notes },
	edit: { category: Uo.Notes },
	system_name: "",
	system_version: "unknown",
	system_arch: "unknown",
	useragent: ""
} }, Ko = {
	OFFLINE_CACHE_PATH: "temp/.wakatime/cache",
	WAKATIME_DEFAULT_API_URL: "https://wakatime.com/api/v1",
	WAKATIME_STATUS_BAR_PATHNAME: "users/current/statusbar/today",
	WAKATIME_HEARTBEATS_PATHNAME: "users/current/heartbeats",
	WAKATIME_HEARTBEATS_BULK: 25,
	WAKATIME_CLIENT_NAME: "wakatime",
	WAKATIME_CLIENT_VERSION: "v2.23.0",
	WAKATIME_EDITOR_NAME: "siyuan",
	WAKATIME_PLUGIN_NAME: "siyuan-wakatime",
	WAKATIME_DEFAULT_LANGUAGE: "SiYuan",
	WAKATIME_WORKER_FILE_NAME: "wakatime",
	WAKATIME_WORKER_BROADCAST_CHANNEL_NAME: "wakatime-worker",
	CACHE_CHECK_INTERVAL: 3e5,
	CACHE_COMMIT_INTERVAL: 1e3
}, qo;
function F() {
	return qo.apply(null, arguments);
}
function Jo(e) {
	qo = e;
}
function Yo(e) {
	return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Xo(e) {
	return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function I(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function Zo(e) {
	if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0;
	for (var t in e) if (I(e, t)) return !1;
	return !0;
}
function L(e) {
	return e === void 0;
}
function Qo(e) {
	return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function $o(e) {
	return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function es(e, t) {
	var n = [], r, i = e.length;
	for (r = 0; r < i; ++r) n.push(t(e[r], r));
	return n;
}
function ts(e, t) {
	for (var n in t) I(t, n) && (e[n] = t[n]);
	return I(t, "toString") && (e.toString = t.toString), I(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function ns(e, t, n, r) {
	return Eu(e, t, n, r, !0).utc();
}
function rs() {
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
function R(e) {
	return e._pf ??= rs(), e._pf;
}
var is = Array.prototype.some ? Array.prototype.some : function(e) {
	var t = Object(this), n = t.length >>> 0, r;
	for (r = 0; r < n; r++) if (r in t && e.call(this, t[r], r, t)) return !0;
	return !1;
};
function as(e) {
	var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
	if (r && (t = R(e), n = is.call(t.parsedDateParts, function(e) {
		return e != null;
	}), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e)) e._isValid = r;
	else return r;
	return e._isValid;
}
function os(e) {
	var t = ns(NaN);
	return e == null ? R(t).userInvalidated = !0 : ts(R(t), e), t;
}
var ss = F.momentProperties = [], cs = !1;
function ls(e, t) {
	var n, r, i, a = ss.length;
	if (L(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), L(t._i) || (e._i = t._i), L(t._f) || (e._f = t._f), L(t._l) || (e._l = t._l), L(t._strict) || (e._strict = t._strict), L(t._tzm) || (e._tzm = t._tzm), L(t._isUTC) || (e._isUTC = t._isUTC), L(t._offset) || (e._offset = t._offset), L(t._pf) || (e._pf = R(t)), L(t._locale) || (e._locale = t._locale), a > 0) for (n = 0; n < a; n++) r = ss[n], i = t[r], L(i) || (e[r] = i);
	return e;
}
function us(e) {
	ls(this, e), this._d = new Date(e._d == null ? NaN : e._d.getTime()), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), cs === !1 && (cs = !0, F.updateOffset(this), cs = !1);
}
function ds(e) {
	return e instanceof us || e != null && e._isAMomentObject != null;
}
function fs(e) {
	F.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function ps(e, t) {
	var n = !0;
	return ts(function() {
		if (F.deprecationHandler != null && F.deprecationHandler(null, e), n) {
			var r = [], i, a, o, s = arguments.length;
			for (a = 0; a < s; a++) {
				if (i = "", typeof arguments[a] == "object") {
					for (o in i += "\n[" + a + "] ", arguments[0]) I(arguments[0], o) && (i += o + ": " + arguments[0][o] + ", ");
					i = i.slice(0, -2);
				} else i = arguments[a];
				r.push(i);
			}
			fs(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (/* @__PURE__ */ Error()).stack), n = !1;
		}
		return t.apply(this, arguments);
	}, t);
}
var ms = {};
function hs(e, t) {
	F.deprecationHandler != null && F.deprecationHandler(e, t), ms[e] || (fs(t), ms[e] = !0);
}
F.suppressDeprecationWarnings = !1, F.deprecationHandler = null;
function gs(e) {
	return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function _s(e) {
	var t, n;
	for (n in e) I(e, n) && (t = e[n], gs(t) ? this[n] = t : this["_" + n] = t);
	this._config = e, this._dayOfMonthOrdinalParseLenient = RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|\\d{1,2}");
}
function vs(e, t) {
	var n = ts({}, e), r;
	for (r in t) I(t, r) && (Xo(e[r]) && Xo(t[r]) ? (n[r] = {}, ts(n[r], e[r]), ts(n[r], t[r])) : t[r] == null ? delete n[r] : n[r] = t[r]);
	for (r in e) I(e, r) && !I(t, r) && Xo(e[r]) && (n[r] = ts({}, n[r]));
	return n;
}
function ys(e) {
	e != null && this.set(e);
}
var bs = Object.keys ? Object.keys : function(e) {
	var t, n = [];
	for (t in e) I(e, t) && n.push(t);
	return n;
}, xs = {
	sameDay: "[Today at] LT",
	nextDay: "[Tomorrow at] LT",
	nextWeek: "dddd [at] LT",
	lastDay: "[Yesterday at] LT",
	lastWeek: "[Last] dddd [at] LT",
	sameElse: "L"
};
function Ss(e, t, n) {
	var r = this._calendar[e] || this._calendar.sameElse;
	return gs(r) ? r.call(t, n) : r;
}
function Cs(e, t, n) {
	var r = "" + Math.abs(e), i = t - r.length;
	return (e >= 0 ? n ? "+" : "" : "-") + (10 ** Math.max(0, i)).toString().substr(1) + r;
}
var ws = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ts = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Es = {}, Ds = {};
function z(e, t, n, r) {
	var i = r;
	typeof r == "string" && (i = function() {
		return this[r]();
	}), e && (Ds[e] = i), t && (Ds[t[0]] = function() {
		return Cs(i.apply(this, arguments), t[1], t[2]);
	}), n && (Ds[n] = function() {
		return this.localeData().ordinal(i.apply(this, arguments), e);
	});
}
function Os(e) {
	return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ks(e) {
	var t = e.match(ws), n, r;
	for (n = 0, r = t.length; n < r; n++) Ds[t[n]] ? t[n] = Ds[t[n]] : t[n] = Os(t[n]);
	return function(n) {
		var i = "", a;
		for (a = 0; a < r; a++) i += gs(t[a]) ? t[a].call(n, e) : t[a];
		return i;
	};
}
function As(e, t) {
	return e.isValid() ? (t = js(t, e.localeData()), Es[t] = Es[t] || ks(t), Es[t](e)) : e.localeData().invalidDate();
}
function js(e, t) {
	var n = 5;
	function r(e) {
		return t.longDateFormat(e) || e;
	}
	for (Ts.lastIndex = 0; n >= 0 && Ts.test(e);) e = e.replace(Ts, r), Ts.lastIndex = 0, --n;
	return e;
}
var Ms = {
	LTS: "h:mm:ss A",
	LT: "h:mm A",
	L: "MM/DD/YYYY",
	LL: "MMMM D, YYYY",
	LLL: "MMMM D, YYYY h:mm A",
	LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Ns(e) {
	var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
	return t || !n ? t : (this._longDateFormat[e] = n.match(ws).map(function(e) {
		return e === "MMMM" || e === "MM" || e === "DD" || e === "dddd" ? e.slice(1) : e;
	}).join(""), this._longDateFormat[e]);
}
var Ps = "Invalid date";
function Fs() {
	return this._invalidDate;
}
var Is = "%d", Ls = /\d{1,2}/;
function Rs(e) {
	return this._ordinal.replace("%d", e);
}
var zs = {
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
function Bs(e, t, n, r) {
	var i = this._relativeTime[n];
	return gs(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
}
function Vs(e, t) {
	var n = this._relativeTime[e > 0 ? "future" : "past"];
	return gs(n) ? n(t) : n.replace(/%s/i, t);
}
var Hs = {
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
function Us(e) {
	return typeof e == "string" ? Hs[e] || Hs[e.toLowerCase()] : void 0;
}
function Ws(e) {
	var t = {}, n, r;
	for (r in e) I(e, r) && (n = Us(r), n && (t[n] = e[r]));
	return t;
}
var Gs = {
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
function Ks(e) {
	var t = [], n;
	for (n in e) I(e, n) && t.push({
		unit: n,
		priority: Gs[n]
	});
	return t.sort(function(e, t) {
		return e.priority - t.priority;
	}), t;
}
var qs = /\d/, Js = /\d\d/, Ys = /\d{3}/, Xs = /\d{4}/, Zs = /[+-]?\d{6}/, B = /\d\d?/, Qs = /\d\d\d\d?/, $s = /\d\d\d\d\d\d?/, ec = /\d{1,3}/, tc = /\d{1,4}/, nc = /[+-]?\d{1,6}/, rc = /\d+/, ic = /[+-]?\d+/, ac = /Z|[+-]\d\d:?\d\d/gi, oc = /Z|[+-]\d\d(?::?\d\d)?/gi, sc = /[+-]?\d+(\.\d{1,3})?/, cc = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, lc = /^[1-9]\d?/, uc = /^([1-9]\d|\d)/, dc = {};
function V(e, t, n) {
	dc[e] = gs(t) ? t : function(e, r) {
		return e && n ? n : t;
	};
}
function fc(e, t) {
	return I(dc, e) ? dc[e](t._strict, t._locale) : new RegExp(pc(e));
}
function pc(e) {
	return mc(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
		return t || n || r || i;
	}));
}
function mc(e) {
	return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function hc(e) {
	return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function H(e) {
	var t = +e, n = 0;
	return t !== 0 && isFinite(t) && (n = hc(t)), n;
}
var gc = {};
function U(e, t) {
	var n, r = t, i;
	for (typeof e == "string" && (e = [e]), Qo(t) && (r = function(e, n) {
		n[t] = H(e);
	}), i = e.length, n = 0; n < i; n++) gc[e[n]] = r;
}
function _c(e, t) {
	U(e, function(e, n, r, i) {
		r._w = r._w || {}, t(e, r._w, r, i);
	});
}
function vc(e, t, n) {
	t != null && I(gc, e) && gc[e](t, n._a, n, e);
}
function yc(e) {
	return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
}
var W = 0, bc = 1, xc = 2, G = 3, Sc = 4, Cc = 5, wc = 6, Tc = 7, Ec = 8;
z("Y", 0, 0, function() {
	var e = this.year();
	return e <= 9999 ? Cs(e, 4) : "+" + e;
}), z(0, ["YY", 2], 0, function() {
	return this.year() % 100;
}), z(0, ["YYYY", 4], 0, "year"), z(0, ["YYYYY", 5], 0, "year"), z(0, [
	"YYYYYY",
	6,
	!0
], 0, "year"), V("Y", ic), V("YY", B, Js), V("YYYY", tc, Xs), V("YYYYY", nc, Zs), V("YYYYYY", nc, Zs), U(["YYYYY", "YYYYYY"], W), U("YYYY", function(e, t) {
	t[W] = e.length === 2 ? F.parseTwoDigitYear(e) : H(e);
}), U("YY", function(e, t) {
	t[W] = F.parseTwoDigitYear(e);
}), U("Y", function(e, t) {
	t[W] = parseInt(e, 10);
});
function Dc(e) {
	return yc(e) ? 366 : 365;
}
F.parseTwoDigitYear = function(e) {
	return H(e) + (H(e) > 68 ? 1900 : 2e3);
};
var Oc = Ac("FullYear", !0);
function kc() {
	return yc(this.year());
}
function Ac(e, t) {
	return function(n) {
		return n == null ? jc(this, e) : (Mc(this, e, n), F.updateOffset(this, t), this);
	};
}
function jc(e, t) {
	if (!e.isValid()) return NaN;
	var n = e._d, r = e._isUTC;
	switch (t) {
		case "Milliseconds": return r ? n.getUTCMilliseconds() : n.getMilliseconds();
		case "Seconds": return r ? n.getUTCSeconds() : n.getSeconds();
		case "Minutes": return r ? n.getUTCMinutes() : n.getMinutes();
		case "Hours": return r ? n.getUTCHours() : n.getHours();
		case "Date": return r ? n.getUTCDate() : n.getDate();
		case "Day": return r ? n.getUTCDay() : n.getDay();
		case "Month": return r ? n.getUTCMonth() : n.getMonth();
		case "FullYear": return r ? n.getUTCFullYear() : n.getFullYear();
		default: return NaN;
	}
}
function Mc(e, t, n) {
	var r, i, a, o, s;
	if (!(!e.isValid() || isNaN(n))) {
		switch (r = e._d, i = e._isUTC, t) {
			case "Milliseconds":
				i ? r.setUTCMilliseconds(n) : r.setMilliseconds(n);
				return;
			case "Seconds":
				i ? r.setUTCSeconds(n) : r.setSeconds(n);
				return;
			case "Minutes":
				i ? r.setUTCMinutes(n) : r.setMinutes(n);
				return;
			case "Hours":
				i ? r.setUTCHours(n) : r.setHours(n);
				return;
			case "Date":
				i ? r.setUTCDate(n) : r.setDate(n);
				return;
			case "FullYear": break;
			default: return;
		}
		a = n, o = e.month(), s = e.date(), s = s === 29 && o === 1 && !yc(a) ? 28 : s, i ? r.setUTCFullYear(a, o, s) : r.setFullYear(a, o, s);
	}
}
function Nc(e) {
	return e = Us(e), gs(this[e]) ? this[e]() : this;
}
function Pc(e, t) {
	if (typeof e == "object") {
		e = Ws(e);
		var n = Ks(e), r, i = n.length;
		for (r = 0; r < i; r++) this[n[r].unit](e[n[r].unit]);
	} else if (e = Us(e), gs(this[e])) return this[e](t);
	return this;
}
function Fc(e, t) {
	return (e % t + t) % t;
}
var K = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
	var t;
	for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
	return -1;
};
function Ic(e, t) {
	if (isNaN(e) || isNaN(t)) return NaN;
	var n = Fc(t, 12);
	return e += (t - n) / 12, n === 1 ? yc(e) ? 29 : 28 : 31 - n % 7 % 2;
}
z("M", ["MM", 2], "Mo", function() {
	return this.month() + 1;
}), z("MMM", 0, 0, function(e) {
	return this.localeData().monthsShort(this, e);
}), z("MMMM", 0, 0, function(e) {
	return this.localeData().months(this, e);
}), V("M", B, lc), V("MM", B, Js), V("MMM", function(e, t) {
	return t.monthsShortRegex(e);
}), V("MMMM", function(e, t) {
	return t.monthsRegex(e);
}), U(["M", "MM"], function(e, t) {
	t[bc] = H(e) - 1;
}), U(["MMM", "MMMM"], function(e, t, n, r) {
	var i = n._locale.monthsParse(e, r, n._strict);
	i == null ? R(n).invalidMonth = e : t[bc] = i;
});
var Lc = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Rc = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), zc = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Bc = cc, Vc = cc;
function Hc(e, t) {
	return e ? Yo(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || zc).test(t) ? "format" : "standalone"][e.month()] : Yo(this._months) ? this._months : this._months.standalone;
}
function Uc(e, t) {
	return e ? Yo(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[zc.test(t) ? "format" : "standalone"][e.month()] : Yo(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Wc(e, t, n) {
	var r, i, a, o = e.toLocaleLowerCase();
	if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) a = ns([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
	return n ? t === "MMM" ? (i = K.call(this._shortMonthsParse, o), i === -1 ? null : i) : (i = K.call(this._longMonthsParse, o), i === -1 ? null : i) : t === "MMM" ? (i = K.call(this._shortMonthsParse, o), i === -1 ? (i = K.call(this._longMonthsParse, o), i === -1 ? null : i) : i) : (i = K.call(this._longMonthsParse, o), i === -1 ? (i = K.call(this._shortMonthsParse, o), i === -1 ? null : i) : i);
}
function Gc(e, t, n) {
	var r, i, a;
	if (this._monthsParseExact) return Wc.call(this, e, t, n);
	for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) if (i = ns([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), !n && !this._monthsParse[r] && (a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e) || n && t === "MMM" && this._shortMonthsParse[r].test(e) || !n && this._monthsParse[r].test(e)) return r;
}
function Kc(e, t) {
	if (!e.isValid()) return e;
	if (typeof t == "string") {
		if (/^\d+$/.test(t)) t = H(t);
		else if (t = e.localeData().monthsParse(t), !Qo(t)) return e;
	}
	var n = t, r = e.date();
	return r = r < 29 ? r : Math.min(r, Ic(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function qc(e) {
	return e == null ? jc(this, "Month") : (Kc(this, e), F.updateOffset(this, !0), this);
}
function Jc() {
	return Ic(this.year(), this.month());
}
function Yc(e) {
	return this._monthsParseExact ? (I(this, "_monthsRegex") || Zc.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (I(this, "_monthsShortRegex") || (this._monthsShortRegex = Bc), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Xc(e) {
	return this._monthsParseExact ? (I(this, "_monthsRegex") || Zc.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (I(this, "_monthsRegex") || (this._monthsRegex = Vc), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Zc() {
	function e(e, t) {
		return t.length - e.length;
	}
	var t = [], n = [], r = [], i, a, o, s;
	for (i = 0; i < 12; i++) a = ns([2e3, i]), o = mc(this.monthsShort(a, "")), s = mc(this.months(a, "")), t.push(o), n.push(s), r.push(s), r.push(o);
	t.sort(e), n.sort(e), r.sort(e), this._monthsRegex = RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = RegExp("^(" + t.join("|") + ")", "i");
}
function Qc(e, t, n, r, i, a, o) {
	var s;
	return e < 100 && e >= 0 ? (s = new Date(e + 400, t, n, r, i, a, o), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, n, r, i, a, o), s;
}
function $c(e) {
	var t, n;
	return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function el(e, t, n) {
	var r = 7 + t - n;
	return -((7 + $c(e, 0, r).getUTCDay() - t) % 7) + r - 1;
}
function tl(e, t, n, r, i) {
	var a = (7 + n - r) % 7, o = el(e, r, i), s = 1 + 7 * (t - 1) + a + o, c, l;
	return s <= 0 ? (c = e - 1, l = Dc(c) + s) : s > Dc(e) ? (c = e + 1, l = s - Dc(e)) : (c = e, l = s), {
		year: c,
		dayOfYear: l
	};
}
function nl(e, t, n) {
	var r = el(e.year(), t, n), i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, a, o;
	return i < 1 ? (o = e.year() - 1, a = i + rl(o, t, n)) : i > rl(e.year(), t, n) ? (a = i - rl(e.year(), t, n), o = e.year() + 1) : (o = e.year(), a = i), {
		week: a,
		year: o
	};
}
function rl(e, t, n) {
	var r = el(e, t, n), i = el(e + 1, t, n);
	return (Dc(e) - r + i) / 7;
}
z("w", ["ww", 2], "wo", "week"), z("W", ["WW", 2], "Wo", "isoWeek"), V("w", B, lc), V("ww", B, Js), V("W", B, lc), V("WW", B, Js), _c([
	"w",
	"ww",
	"W",
	"WW"
], function(e, t, n, r) {
	t[r.substr(0, 1)] = H(e);
});
function il(e) {
	return nl(e, this._week.dow, this._week.doy).week;
}
var al = {
	dow: 0,
	doy: 6
};
function ol() {
	return this._week.dow;
}
function sl() {
	return this._week.doy;
}
function cl(e) {
	var t = this.localeData().week(this);
	return e == null ? t : this.add((e - t) * 7, "d");
}
function ll(e) {
	var t = nl(this, 1, 4).week;
	return e == null ? t : this.add((e - t) * 7, "d");
}
z("d", 0, "do", "day"), z("dd", 0, 0, function(e) {
	return this.localeData().weekdaysMin(this, e);
}), z("ddd", 0, 0, function(e) {
	return this.localeData().weekdaysShort(this, e);
}), z("dddd", 0, 0, function(e) {
	return this.localeData().weekdays(this, e);
}), z("e", 0, 0, "weekday"), z("E", 0, 0, "isoWeekday"), V("d", B), V("e", B), V("E", B), V("dd", function(e, t) {
	return t.weekdaysMinRegex(e);
}), V("ddd", function(e, t) {
	return t.weekdaysShortRegex(e);
}), V("dddd", function(e, t) {
	return t.weekdaysRegex(e);
}), _c([
	"dd",
	"ddd",
	"dddd"
], function(e, t, n, r) {
	var i = n._locale.weekdaysParse(e, r, n._strict);
	i == null ? R(n).invalidWeekday = e : t.d = i;
}), _c([
	"d",
	"e",
	"E"
], function(e, t, n, r) {
	t[r] = H(e);
});
function ul(e, t) {
	return typeof e == "string" ? isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10) : e;
}
function dl(e, t) {
	return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function fl(e, t) {
	return e.slice(t, 7).concat(e.slice(0, t));
}
var pl = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ml = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), hl = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), gl = cc, _l = cc, vl = cc;
function yl(e, t) {
	var n = Yo(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
	return e === !0 ? fl(n, this._week.dow) : e ? n[e.day()] : n;
}
function bl(e) {
	return e === !0 ? fl(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function xl(e) {
	return e === !0 ? fl(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Sl(e, t, n) {
	var r, i, a, o = e.toLocaleLowerCase();
	if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) a = ns([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
	return n ? t === "dddd" ? (i = K.call(this._weekdaysParse, o), i === -1 ? null : i) : t === "ddd" ? (i = K.call(this._shortWeekdaysParse, o), i === -1 ? null : i) : (i = K.call(this._minWeekdaysParse, o), i === -1 ? null : i) : t === "dddd" ? (i = K.call(this._weekdaysParse, o), i !== -1 || (i = K.call(this._shortWeekdaysParse, o), i !== -1) ? i : (i = K.call(this._minWeekdaysParse, o), i === -1 ? null : i)) : t === "ddd" ? (i = K.call(this._shortWeekdaysParse, o), i !== -1 || (i = K.call(this._weekdaysParse, o), i !== -1) ? i : (i = K.call(this._minWeekdaysParse, o), i === -1 ? null : i)) : (i = K.call(this._minWeekdaysParse, o), i !== -1 || (i = K.call(this._weekdaysParse, o), i !== -1) ? i : (i = K.call(this._shortWeekdaysParse, o), i === -1 ? null : i));
}
function Cl(e, t, n) {
	var r, i, a;
	if (this._weekdaysParseExact) return Sl.call(this, e, t, n);
	for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) if (i = ns([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e) || n && t === "ddd" && this._shortWeekdaysParse[r].test(e) || n && t === "dd" && this._minWeekdaysParse[r].test(e) || !n && this._weekdaysParse[r].test(e)) return r;
}
function wl(e) {
	if (!this.isValid()) return e == null ? NaN : this;
	var t = jc(this, "Day");
	return e == null ? t : (e = ul(e, this.localeData()), this.add(e - t, "d"));
}
function Tl(e) {
	if (!this.isValid()) return e == null ? NaN : this;
	var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
	return e == null ? t : this.add(e - t, "d");
}
function El(e) {
	if (!this.isValid()) return e == null ? NaN : this;
	if (e != null) {
		var t = dl(e, this.localeData());
		return this.day(this.day() % 7 ? t : t - 7);
	}
	return this.day() || 7;
}
function Dl(e) {
	return this._weekdaysParseExact ? (I(this, "_weekdaysRegex") || Al.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (I(this, "_weekdaysRegex") || (this._weekdaysRegex = gl), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Ol(e) {
	return this._weekdaysParseExact ? (I(this, "_weekdaysRegex") || Al.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (I(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = _l), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function kl(e) {
	return this._weekdaysParseExact ? (I(this, "_weekdaysRegex") || Al.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (I(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = vl), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Al() {
	function e(e, t) {
		return t.length - e.length;
	}
	var t = [], n = [], r = [], i = [], a, o, s, c, l;
	for (a = 0; a < 7; a++) o = ns([2e3, 1]).day(a), s = mc(this.weekdaysMin(o, "")), c = mc(this.weekdaysShort(o, "")), l = mc(this.weekdays(o, "")), t.push(s), n.push(c), r.push(l), i.push(s), i.push(c), i.push(l);
	t.sort(e), n.sort(e), r.sort(e), i.sort(e), this._weekdaysRegex = RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortStrictRegex = RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysMinStrictRegex = RegExp("^(" + t.join("|") + ")", "i");
}
function jl() {
	return this.hours() % 12 || 12;
}
function Ml() {
	return this.hours() || 24;
}
z("H", ["HH", 2], 0, "hour"), z("h", ["hh", 2], 0, jl), z("k", ["kk", 2], 0, Ml), z("hmm", 0, 0, function() {
	return "" + jl.apply(this) + Cs(this.minutes(), 2);
}), z("hmmss", 0, 0, function() {
	return "" + jl.apply(this) + Cs(this.minutes(), 2) + Cs(this.seconds(), 2);
}), z("Hmm", 0, 0, function() {
	return "" + this.hours() + Cs(this.minutes(), 2);
}), z("Hmmss", 0, 0, function() {
	return "" + this.hours() + Cs(this.minutes(), 2) + Cs(this.seconds(), 2);
});
function Nl(e, t) {
	z(e, 0, 0, function() {
		return this.localeData().meridiem(this.hours(), this.minutes(), t);
	});
}
Nl("a", !0), Nl("A", !1);
function Pl(e, t) {
	return t._meridiemParse;
}
V("a", Pl), V("A", Pl), V("H", B, uc), V("h", B, lc), V("k", B, lc), V("HH", B, Js), V("hh", B, Js), V("kk", B, Js), V("hmm", Qs), V("hmmss", $s), V("Hmm", Qs), V("Hmmss", $s), U(["H", "HH"], G), U(["k", "kk"], function(e, t, n) {
	var r = H(e);
	t[G] = r === 24 ? 0 : r;
}), U(["a", "A"], function(e, t, n) {
	n._isPm = n._locale.isPM(e), n._meridiem = e;
}), U(["h", "hh"], function(e, t, n) {
	t[G] = H(e), R(n).bigHour = !0;
}), U("hmm", function(e, t, n) {
	var r = e.length - 2;
	t[G] = H(e.substr(0, r)), t[Sc] = H(e.substr(r)), R(n).bigHour = !0;
}), U("hmmss", function(e, t, n) {
	var r = e.length - 4, i = e.length - 2;
	t[G] = H(e.substr(0, r)), t[Sc] = H(e.substr(r, 2)), t[Cc] = H(e.substr(i)), R(n).bigHour = !0;
}), U("Hmm", function(e, t, n) {
	var r = e.length - 2;
	t[G] = H(e.substr(0, r)), t[Sc] = H(e.substr(r));
}), U("Hmmss", function(e, t, n) {
	var r = e.length - 4, i = e.length - 2;
	t[G] = H(e.substr(0, r)), t[Sc] = H(e.substr(r, 2)), t[Cc] = H(e.substr(i));
});
function Fl(e) {
	return (e + "").toLowerCase().charAt(0) === "p";
}
var Il = /[ap]\.?m?\.?/i, Ll = Ac("Hours", !0);
function Rl(e, t, n) {
	return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var zl = {
	calendar: xs,
	longDateFormat: Ms,
	invalidDate: Ps,
	ordinal: Is,
	dayOfMonthOrdinalParse: Ls,
	relativeTime: zs,
	months: Lc,
	monthsShort: Rc,
	week: al,
	weekdays: pl,
	weekdaysMin: hl,
	weekdaysShort: ml,
	meridiemParse: Il
}, q = {}, Bl = {}, Vl;
function Hl(e, t) {
	var n, r = Math.min(e.length, t.length);
	for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
	return r;
}
function Ul(e) {
	return e && e.toLowerCase().replace("_", "-");
}
function Wl(e) {
	for (var t = 0, n, r, i, a; t < e.length;) {
		for (a = Ul(e[t]).split("-"), n = a.length, r = Ul(e[t + 1]), r = r ? r.split("-") : null; n > 0;) {
			if (i = Kl(a.slice(0, n).join("-")), i) return i;
			if (r && r.length >= n && Hl(a, r) >= n - 1) break;
			n--;
		}
		t++;
	}
	return Vl;
}
function Gl(e) {
	return !!(e && e.match("^[^/\\\\]*$"));
}
function Kl(t) {
	var n = null, r;
	if (q[t] === void 0 && typeof module < "u" && module && module.exports && Gl(t)) try {
		n = Vl._abbr, r = e, r("./locale/" + t), ql(n);
	} catch {
		q[t] = null;
	}
	return q[t];
}
function ql(e, t) {
	var n;
	return e && (n = L(t) ? Xl(e) : Jl(e, t), n ? Vl = n : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Vl._abbr;
}
function Jl(e, t) {
	if (t !== null) {
		var n, r = zl;
		if (t.abbr = e, q[e] != null) hs("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = q[e]._config;
		else if (t.parentLocale != null) if (q[t.parentLocale] != null) r = q[t.parentLocale]._config;
		else if (n = Kl(t.parentLocale), n != null) r = n._config;
		else return Bl[t.parentLocale] || (Bl[t.parentLocale] = []), Bl[t.parentLocale].push({
			name: e,
			config: t
		}), null;
		return q[e] = new ys(vs(r, t)), Bl[e] && Bl[e].forEach(function(e) {
			Jl(e.name, e.config);
		}), ql(e), q[e];
	}
	return delete q[e], null;
}
function Yl(e, t) {
	if (t != null) {
		var n, r, i = zl;
		q[e] != null && q[e].parentLocale != null ? q[e].set(vs(q[e]._config, t)) : (r = Kl(e), r != null && (i = r._config), t = vs(i, t), r ?? (t.abbr = e), n = new ys(t), n.parentLocale = q[e], q[e] = n), ql(e);
	} else q[e] != null && (q[e].parentLocale == null ? q[e] != null && delete q[e] : (q[e] = q[e].parentLocale, e === ql() && ql(e)));
	return q[e];
}
function Xl(e) {
	var t;
	if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Vl;
	if (!Yo(e)) {
		if (t = Kl(e), t) return t;
		e = [e];
	}
	return Wl(e);
}
function Zl() {
	return bs(q);
}
function Ql(e) {
	var t, n = e._a;
	return n && R(e).overflow === -2 && (t = n[bc] < 0 || n[bc] > 11 ? bc : n[xc] < 1 || n[xc] > Ic(n[W], n[bc]) ? xc : n[G] < 0 || n[G] > 24 || n[G] === 24 && (n[Sc] !== 0 || n[Cc] !== 0 || n[wc] !== 0) ? G : n[Sc] < 0 || n[Sc] > 59 ? Sc : n[Cc] < 0 || n[Cc] > 59 ? Cc : n[wc] < 0 || n[wc] > 999 ? wc : -1, R(e)._overflowDayOfYear && (t < W || t > xc) && (t = xc), R(e)._overflowWeeks && t === -1 && (t = Tc), R(e)._overflowWeekday && t === -1 && (t = Ec), R(e).overflow = t), e;
}
var $l = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, eu = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tu = /Z|[+-]\d\d(?::?\d\d)?/, nu = [
	["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
	["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
	["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
	[
		"GGGG-[W]WW",
		/\d{4}-W\d\d/,
		!1
	],
	["YYYY-DDD", /\d{4}-\d{3}/],
	[
		"YYYY-MM",
		/\d{4}-\d\d/,
		!1
	],
	["YYYYYYMMDD", /[+-]\d{10}/],
	["YYYYMMDD", /\d{8}/],
	["GGGG[W]WWE", /\d{4}W\d{3}/],
	[
		"GGGG[W]WW",
		/\d{4}W\d{2}/,
		!1
	],
	["YYYYDDD", /\d{7}/],
	[
		"YYYYMM",
		/\d{6}/,
		!1
	],
	[
		"YYYY",
		/\d{4}/,
		!1
	]
], ru = [
	["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
	["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
	["HH:mm:ss", /\d\d:\d\d:\d\d/],
	["HH:mm", /\d\d:\d\d/],
	["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
	["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
	["HHmmss", /\d\d\d\d\d\d/],
	["HHmm", /\d\d\d\d/],
	["HH", /\d\d/]
], iu = /^\/?Date\((-?\d+)/i, au = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, ou = {
	UT: 0,
	GMT: 0,
	EDT: -240,
	EST: -300,
	CDT: -300,
	CST: -360,
	MDT: -360,
	MST: -420,
	PDT: -420,
	PST: -480
};
function su(e) {
	var t, n, r = e._i, i = $l.exec(r) || eu.exec(r), a, o, s, c, l = nu.length, u = ru.length;
	if (i) {
		for (R(e).iso = !0, t = 0, n = l; t < n; t++) if (nu[t][1].exec(i[1])) {
			o = nu[t][0], a = nu[t][2] !== !1;
			break;
		}
		if (o == null) {
			e._isValid = !1;
			return;
		}
		if (i[3]) {
			for (t = 0, n = u; t < n; t++) if (ru[t][1].exec(i[3])) {
				s = (i[2] || " ") + ru[t][0];
				break;
			}
			if (s == null) {
				e._isValid = !1;
				return;
			}
		}
		if (!a && s != null) {
			e._isValid = !1;
			return;
		}
		if (i[4]) if (tu.exec(i[4])) c = "Z";
		else {
			e._isValid = !1;
			return;
		}
		e._f = o + (s || "") + (c || ""), yu(e);
	} else e._isValid = !1;
}
function cu(e, t, n, r, i, a) {
	var o = [
		lu(e),
		Rc.indexOf(t),
		parseInt(n, 10),
		parseInt(r, 10),
		parseInt(i, 10)
	];
	return a && o.push(parseInt(a, 10)), o;
}
function lu(e) {
	var t = parseInt(e, 10);
	return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function uu(e) {
	return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function du(e, t, n) {
	return e && ml.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay() ? (R(n).weekdayMismatch = !0, n._isValid = !1, !1) : !0;
}
function fu(e, t, n) {
	if (e) return ou[e];
	if (t) return 0;
	var r = parseInt(n, 10), i = r % 100;
	return (r - i) / 100 * 60 + i;
}
function pu(e) {
	var t = au.exec(uu(e._i)), n;
	if (t) {
		if (n = cu(t[4], t[3], t[2], t[5], t[6], t[7]), !du(t[1], n, e)) return;
		e._a = n, e._tzm = fu(t[8], t[9], t[10]), e._d = $c.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), R(e).rfc2822 = !0;
	} else e._isValid = !1;
}
function mu(e) {
	var t = iu.exec(e._i);
	if (t !== null) {
		e._d = /* @__PURE__ */ new Date(+t[1]);
		return;
	}
	if (su(e), e._isValid === !1) delete e._isValid;
	else return;
	if (pu(e), e._isValid === !1) delete e._isValid;
	else return;
	e._strict ? e._isValid = !1 : F.createFromInputFallback(e);
}
F.createFromInputFallback = ps("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
	e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
});
function hu(e, t, n) {
	return e ?? t ?? n;
}
function gu(e) {
	var t = new Date(F.now());
	return e._useUTC ? [
		t.getUTCFullYear(),
		t.getUTCMonth(),
		t.getUTCDate()
	] : [
		t.getFullYear(),
		t.getMonth(),
		t.getDate()
	];
}
function _u(e) {
	var t, n, r = [], i, a, o;
	if (!e._d) {
		for (i = gu(e), e._w && e._a[xc] == null && e._a[bc] == null && vu(e), e._dayOfYear != null && (o = hu(e._a[W], i[W]), (e._dayOfYear > Dc(o) || e._dayOfYear === 0) && (R(e)._overflowDayOfYear = !0), n = $c(o, 0, e._dayOfYear), e._a[bc] = n.getUTCMonth(), e._a[xc] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = r[t] = i[t];
		for (; t < 7; t++) e._a[t] = r[t] = e._a[t] == null ? +(t === 2) : e._a[t];
		e._a[G] === 24 && e._a[Sc] === 0 && e._a[Cc] === 0 && e._a[wc] === 0 && (e._nextDay = !0, e._a[G] = 0), e._d = (e._useUTC ? $c : Qc).apply(null, r), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[G] = 24), e._w && e._w.d !== void 0 && e._w.d !== a && (R(e).weekdayMismatch = !0);
	}
}
function vu(e) {
	var t = e._w, n, r, i, a, o, s, c, l;
	t.GG != null || t.W != null || t.E != null ? (a = 1, o = 4, n = hu(t.GG, e._a[W], nl(J(), 1, 4).year), r = hu(t.W, 1), i = hu(t.E, 1), (i < 1 || i > 7) && (c = !0)) : (a = e._locale._week.dow, o = e._locale._week.doy, l = nl(J(), a, o), n = hu(t.gg, e._a[W], l.year), r = hu(t.w, l.week), t.d == null ? t.e == null ? i = a : (i = t.e + a, (t.e < 0 || t.e > 6) && (c = !0)) : (i = t.d, (i < 0 || i > 6) && (c = !0))), r < 1 || r > rl(n, a, o) ? R(e)._overflowWeeks = !0 : c == null ? (s = tl(n, r, i, a, o), e._a[W] = s.year, e._dayOfYear = s.dayOfYear) : R(e)._overflowWeekday = !0;
}
F.ISO_8601 = function() {}, F.RFC_2822 = function() {};
function yu(e) {
	if (e._f === F.ISO_8601) {
		su(e);
		return;
	}
	if (e._f === F.RFC_2822) {
		pu(e);
		return;
	}
	e._a = [], R(e).empty = !0;
	var t = "" + e._i, n, r, i, a, o, s = t.length, c = 0, l, u;
	for (i = js(e._f, e._locale).match(ws) || [], u = i.length, n = 0; n < u; n++) a = i[n], r = (t.match(fc(a, e)) || [])[0], r && (o = t.substr(0, t.indexOf(r)), o.length > 0 && R(e).unusedInput.push(o), t = t.slice(t.indexOf(r) + r.length), c += r.length), Ds[a] ? (r ? R(e).empty = !1 : R(e).unusedTokens.push(a), vc(a, r, e)) : e._strict && !r && R(e).unusedTokens.push(a);
	R(e).charsLeftOver = s - c, t.length > 0 && R(e).unusedInput.push(t), e._a[G] <= 12 && R(e).bigHour === !0 && e._a[G] > 0 && (R(e).bigHour = void 0), R(e).parsedDateParts = e._a.slice(0), R(e).meridiem = e._meridiem, e._a[G] = bu(e._locale, e._a[G], e._meridiem), l = R(e).era, l !== null && (e._a[W] = e._locale.erasConvertYear(l, e._a[W])), _u(e), Ql(e);
}
function bu(e, t, n) {
	var r;
	return n == null ? t : e.meridiemHour == null ? e.isPM == null ? t : (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0), t) : e.meridiemHour(t, n);
}
function xu(e) {
	var t, n, r, i, a, o, s = !1, c = e._f.length;
	if (c === 0) {
		R(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
		return;
	}
	for (i = 0; i < c; i++) a = 0, o = !1, t = ls({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], yu(t), as(t) && (o = !0), a += R(t).charsLeftOver, a += R(t).unusedTokens.length * 10, R(t).score = a, s ? a < r && (r = a, n = t) : (r == null || a < r || o) && (r = a, n = t, o && (s = !0));
	ts(e, n || t);
}
function Su(e) {
	if (!e._d) {
		var t = Ws(e._i), n = t.day === void 0 ? t.date : t.day;
		e._a = es([
			t.year,
			t.month,
			n,
			t.hour,
			t.minute,
			t.second,
			t.millisecond
		], function(e) {
			return e && parseInt(e, 10);
		}), _u(e);
	}
}
function Cu(e) {
	var t = new us(Ql(wu(e)));
	return t._nextDay &&= (t.add(1, "d"), void 0), t;
}
function wu(e) {
	var t = e._i, n = e._f;
	return e._locale = e._locale || Xl(e._l), t === null || n === void 0 && t === "" ? os({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ds(t) ? new us(Ql(t)) : ($o(t) ? e._d = t : Yo(n) ? xu(e) : n ? yu(e) : Tu(e), as(e) || (e._d = null), e));
}
function Tu(e) {
	var t = e._i;
	L(t) ? e._d = new Date(F.now()) : $o(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? mu(e) : Yo(t) ? (e._a = es(t.slice(0), function(e) {
		return parseInt(e, 10);
	}), _u(e)) : Xo(t) ? Su(e) : Qo(t) ? e._d = new Date(t) : F.createFromInputFallback(e);
}
function Eu(e, t, n, r, i) {
	var a = {};
	return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Xo(e) && Zo(e) || Yo(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = n, a._i = e, a._f = t, a._strict = r, Cu(a);
}
function J(e, t, n, r) {
	return Eu(e, t, n, r, !1);
}
var Du = ps("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
	var e = J.apply(null, arguments);
	return this.isValid() && e.isValid() ? e < this ? this : e : os();
}), Ou = ps("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
	var e = J.apply(null, arguments);
	return this.isValid() && e.isValid() ? e > this ? this : e : os();
});
function ku(e, t) {
	var n, r;
	if (t.length === 1 && Yo(t[0]) && (t = t[0]), !t.length) return J();
	for (n = t[0], r = 1; r < t.length; ++r) (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
	return n;
}
function Au() {
	return ku("isBefore", [].slice.call(arguments, 0));
}
function ju() {
	return ku("isAfter", [].slice.call(arguments, 0));
}
var Mu = function() {
	return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Nu = [
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
function Pu(e) {
	var t, n = !1, r, i = Nu.length;
	for (t in e) if (I(e, t) && !(K.call(Nu, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return !1;
	for (r = 0; r < i; ++r) if (e[Nu[r]]) {
		if (n) return !1;
		parseFloat(e[Nu[r]]) !== H(e[Nu[r]]) && (n = !0);
	}
	return !0;
}
function Fu() {
	return this._isValid;
}
function Iu() {
	return ad(NaN);
}
function Lu(e) {
	var t = Ws(e), n = t.year || 0, r = t.quarter || 0, i = t.month || 0, a = t.week || t.isoWeek || 0, o = t.day || 0, s = t.hour || 0, c = t.minute || 0, l = t.second || 0, u = t.millisecond || 0;
	this._isValid = Pu(t), this._milliseconds = +u + l * 1e3 + c * 6e4 + s * 1e3 * 60 * 60, this._days = +o + a * 7, this._months = +i + r * 3 + n * 12, this._data = {}, this._locale = Xl(), this._bubble();
}
function Ru(e) {
	return e instanceof Lu;
}
function zu(e) {
	return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Bu(e, t, n) {
	var r = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), a = 0, o;
	for (o = 0; o < r; o++) (n && e[o] !== t[o] || !n && H(e[o]) !== H(t[o])) && a++;
	return a + i;
}
function Vu(e, t) {
	z(e, 0, 0, function() {
		var e = this.utcOffset(), n = "+";
		return e < 0 && (e = -e, n = "-"), n + Cs(~~(e / 60), 2) + t + Cs(~~e % 60, 2);
	});
}
Vu("Z", ":"), Vu("ZZ", ""), V("Z", oc), V("ZZ", oc), U(["Z", "ZZ"], function(e, t, n) {
	n._useUTC = !0, n._tzm = Uu(oc, e);
});
var Hu = /([\+\-]|\d\d)/gi;
function Uu(e, t) {
	var n = (t || "").match(e), r, i, a;
	return n === null ? null : (r = n[n.length - 1] || [], i = (r + "").match(Hu) || [
		"-",
		0,
		0
	], a = +(i[1] * 60) + H(i[2]), a === 0 ? 0 : i[0] === "+" ? a : -a);
}
function Wu(e, t) {
	var n, r;
	return t._isUTC ? (n = t.clone(), r = (ds(e) || $o(e) ? e.valueOf() : J(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), F.updateOffset(n, !1), n) : J(e).local();
}
function Gu(e) {
	return -Math.round(e._d.getTimezoneOffset());
}
F.updateOffset = function() {};
function Ku(e, t, n) {
	var r = this._offset || 0, i;
	if (!this.isValid()) return e == null ? NaN : this;
	if (e != null) {
		if (typeof e == "string") {
			if (e = Uu(oc, e), e === null) return this;
		} else Math.abs(e) < 16 && !n && (e *= 60);
		return !this._isUTC && t && (i = Gu(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? ud(this, ad(e - r, "m"), 1, !1) : this._changeInProgress ||= (this._changeInProgress = !0, F.updateOffset(this, !0), null)), this;
	}
	return this._isUTC ? r : Gu(this);
}
function qu(e, t) {
	return e == null ? -this.utcOffset() : (typeof e != "string" && (e = -e), this.utcOffset(e, t), this);
}
function Ju(e) {
	return this.utcOffset(0, e);
}
function Yu(e) {
	return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Gu(this), "m")), this;
}
function Xu() {
	if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
	else if (typeof this._i == "string") {
		var e = Uu(ac, this._i);
		e == null ? this.utcOffset(0, !0) : this.utcOffset(e);
	}
	return this;
}
function Zu(e) {
	return this.isValid() ? (e = e ? J(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) : !1;
}
function Qu() {
	return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function $u() {
	if (!L(this._isDSTShifted)) return this._isDSTShifted;
	var e = {}, t;
	return ls(e, this), e = wu(e), e._a ? (t = e._isUTC ? ns(e._a) : J(e._a), this._isDSTShifted = this.isValid() && Bu(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function ed() {
	return this.isValid() ? !this._isUTC : !1;
}
function td() {
	return this.isValid() ? this._isUTC : !1;
}
function nd() {
	return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var rd = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, id = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ad(e, t) {
	var n = e, r = null, i, a, o;
	return Ru(e) ? n = {
		ms: e._milliseconds,
		d: e._days,
		M: e._months
	} : Qo(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = rd.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = {
		y: 0,
		d: H(r[xc]) * i,
		h: H(r[G]) * i,
		m: H(r[Sc]) * i,
		s: H(r[Cc]) * i,
		ms: H(zu(r[wc] * 1e3)) * i
	}) : (r = id.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = {
		y: od(r[2], i),
		M: od(r[3], i),
		w: od(r[4], i),
		d: od(r[5], i),
		h: od(r[6], i),
		m: od(r[7], i),
		s: od(r[8], i)
	}) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (o = cd(J(n.from), J(n.to)), n = {}, n.ms = o.milliseconds, n.M = o.months), a = new Lu(n), Ru(e) && I(e, "_locale") && (a._locale = e._locale), Ru(e) && I(e, "_isValid") && (a._isValid = e._isValid), a;
}
ad.fn = Lu.prototype, ad.invalid = Iu;
function od(e, t) {
	var n = e && parseFloat(e.replace(",", "."));
	return (isNaN(n) ? 0 : n) * t;
}
function sd(e, t) {
	var n = {};
	return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = t - +e.clone().add(n.months, "M"), n;
}
function cd(e, t) {
	var n;
	return e.isValid() && t.isValid() ? (t = Wu(t, e), e.isBefore(t) ? n = sd(e, t) : (n = sd(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
		milliseconds: 0,
		months: 0
	};
}
function ld(e, t) {
	return function(n, r) {
		var i, a;
		return r !== null && !isNaN(+r) && (hs(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = r, r = a), i = ad(n, r), ud(this, i, e), this;
	};
}
function ud(e, t, n, r) {
	var i = t._milliseconds, a = zu(t._days), o = zu(t._months);
	e.isValid() && (r ??= !0, o && Kc(e, jc(e, "Month") + o * n), a && Mc(e, "Date", jc(e, "Date") + a * n), i && e._d.setTime(e._d.valueOf() + i * n), r && F.updateOffset(e, a || o));
}
var dd = ld(1, "add"), fd = ld(-1, "subtract");
function pd(e) {
	return typeof e == "string" || e instanceof String;
}
function md(e) {
	return ds(e) || $o(e) || pd(e) || Qo(e) || gd(e) || hd(e) || e == null;
}
function hd(e) {
	var t = Xo(e) && !Zo(e), n = !1, r = [
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
	], i, a, o = r.length;
	for (i = 0; i < o; i += 1) a = r[i], n ||= I(e, a);
	return t && n;
}
function gd(e) {
	var t = Yo(e), n = !1;
	return t && (n = e.filter(function(t) {
		return !Qo(t) && pd(e);
	}).length === 0), t && n;
}
function _d(e) {
	var t = Xo(e) && !Zo(e), n = !1, r = [
		"sameDay",
		"nextDay",
		"lastDay",
		"nextWeek",
		"lastWeek",
		"sameElse"
	], i, a;
	for (i = 0; i < r.length; i += 1) a = r[i], n ||= I(e, a);
	return t && n;
}
function vd(e, t) {
	var n = e.diff(t, "days", !0);
	return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function yd(e, t) {
	arguments.length === 1 && (arguments[0] ? md(arguments[0]) ? (e = arguments[0], t = void 0) : _d(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
	var n = e || J(), r = Wu(n, this).startOf("day"), i = F.calendarFormat(this, r) || "sameElse", a = t && (gs(t[i]) ? t[i].call(this, n) : t[i]);
	return this.format(a || this.localeData().calendar(i, this, J(n)));
}
function bd() {
	return new us(this);
}
function xd(e, t) {
	var n = ds(e) ? e : J(e);
	return this.isValid() && n.isValid() ? (t = Us(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Sd(e, t) {
	var n = ds(e) ? e : J(e);
	return this.isValid() && n.isValid() ? (t = Us(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function Cd(e, t, n, r) {
	var i = ds(e) ? e : J(e), a = ds(t) ? t : J(t);
	return this.isValid() && i.isValid() && a.isValid() ? (r ||= "()", (r[0] === "(" ? this.isAfter(i, n) : !this.isBefore(i, n)) && (r[1] === ")" ? this.isBefore(a, n) : !this.isAfter(a, n))) : !1;
}
function wd(e, t) {
	var n = ds(e) ? e : J(e), r;
	return this.isValid() && n.isValid() ? (t = Us(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function Td(e, t) {
	return this.isSame(e, t) || this.isAfter(e, t);
}
function Ed(e, t) {
	return this.isSame(e, t) || this.isBefore(e, t);
}
function Dd(e, t, n) {
	var r, i, a;
	if (!this.isValid() || (r = Wu(e, this), !r.isValid())) return NaN;
	switch (i = (r.utcOffset() - this.utcOffset()) * 6e4, t = Us(t), t) {
		case "year":
			a = Od(this, r) / 12;
			break;
		case "month":
			a = Od(this, r);
			break;
		case "quarter":
			a = Od(this, r) / 3;
			break;
		case "second":
			a = (this - r) / 1e3;
			break;
		case "minute":
			a = (this - r) / 6e4;
			break;
		case "hour":
			a = (this - r) / 36e5;
			break;
		case "day":
			a = (this - r - i) / 864e5;
			break;
		case "week":
			a = (this - r - i) / 6048e5;
			break;
		default: a = this - r;
	}
	return n ? a : hc(a);
}
function Od(e, t) {
	if (e.date() < t.date()) return -Od(t, e);
	var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), i, a;
	return t - r < 0 ? (i = e.clone().add(n - 1, "months"), a = (t - r) / (r - i)) : (i = e.clone().add(n + 1, "months"), a = (t - r) / (i - r)), -(n + a) || 0;
}
F.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", F.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function kd() {
	return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Ad(e) {
	if (!this.isValid()) return null;
	var t = e !== !0, n = t ? this.clone().utc() : this;
	return n.year() < 0 || n.year() > 9999 ? As(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : gs(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", As(n, "Z")) : As(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}
function jd() {
	if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
	var e = "moment", t = "", n, r, i, a;
	return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + "(\"]", r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", a = t + "[\")]", this.format(n + r + i + a);
}
function Md(e) {
	e ||= this.isUtc() ? F.defaultFormatUtc : F.defaultFormat;
	var t = As(this, e);
	return this.localeData().postformat(t);
}
function Nd(e, t) {
	return this.isValid() && (ds(e) && e.isValid() || J(e).isValid()) ? ad({
		to: this,
		from: e
	}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Pd(e) {
	return this.from(J(), e);
}
function Fd(e, t) {
	return this.isValid() && (ds(e) && e.isValid() || J(e).isValid()) ? ad({
		from: this,
		to: e
	}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Id(e) {
	return this.to(J(), e);
}
function Ld(e) {
	var t;
	return e === void 0 ? this._locale._abbr : (t = Xl(e), t != null && (this._locale = t), this);
}
var Rd = ps("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
	return e === void 0 ? this.localeData() : this.locale(e);
});
function zd() {
	return this._locale;
}
var Bd = 1e3, Vd = 60 * Bd, Hd = 60 * Vd, Ud = 3506328 * Hd;
function Wd(e, t) {
	return (e % t + t) % t;
}
function Gd(e, t, n) {
	return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Ud : new Date(e, t, n).valueOf();
}
function Kd(e, t, n) {
	return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Ud : Date.UTC(e, t, n);
}
function qd(e) {
	var t, n;
	if (e = Us(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
	switch (n = this._isUTC ? Kd : Gd, e) {
		case "year":
			t = n(this.year(), 0, 1);
			break;
		case "quarter":
			t = n(this.year(), this.month() - this.month() % 3, 1);
			break;
		case "month":
			t = n(this.year(), this.month(), 1);
			break;
		case "week":
			t = n(this.year(), this.month(), this.date() - this.weekday());
			break;
		case "isoWeek":
			t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
			break;
		case "day":
		case "date":
			t = n(this.year(), this.month(), this.date());
			break;
		case "hour":
			t = this._d.valueOf(), t -= Wd(t + (this._isUTC ? 0 : this.utcOffset() * Vd), Hd);
			break;
		case "minute":
			t = this._d.valueOf(), t -= Wd(t, Vd);
			break;
		case "second": t = this._d.valueOf(), t -= Wd(t, Bd);
	}
	return this._d.setTime(t), F.updateOffset(this, !0), this;
}
function Jd(e) {
	var t, n;
	if (e = Us(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
	switch (n = this._isUTC ? Kd : Gd, e) {
		case "year":
			t = n(this.year() + 1, 0, 1) - 1;
			break;
		case "quarter":
			t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
			break;
		case "month":
			t = n(this.year(), this.month() + 1, 1) - 1;
			break;
		case "week":
			t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
			break;
		case "isoWeek":
			t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
			break;
		case "day":
		case "date":
			t = n(this.year(), this.month(), this.date() + 1) - 1;
			break;
		case "hour":
			t = this._d.valueOf(), t += Hd - Wd(t + (this._isUTC ? 0 : this.utcOffset() * Vd), Hd) - 1;
			break;
		case "minute":
			t = this._d.valueOf(), t += Vd - Wd(t, Vd) - 1;
			break;
		case "second": t = this._d.valueOf(), t += Bd - Wd(t, Bd) - 1;
	}
	return this._d.setTime(t), F.updateOffset(this, !0), this;
}
function Yd() {
	return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Xd() {
	return Math.floor(this.valueOf() / 1e3);
}
function Zd() {
	return new Date(this.valueOf());
}
function Qd() {
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
function $d() {
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
function ef() {
	return this.isValid() ? this.toISOString() : null;
}
function tf() {
	return as(this);
}
function nf() {
	return ts({}, R(this));
}
function rf() {
	return R(this).overflow;
}
function af() {
	return {
		input: this._i,
		format: this._f,
		locale: this._locale,
		isUTC: this._isUTC,
		strict: this._strict
	};
}
z("N", 0, 0, "eraAbbr"), z("NN", 0, 0, "eraAbbr"), z("NNN", 0, 0, "eraAbbr"), z("NNNN", 0, 0, "eraName"), z("NNNNN", 0, 0, "eraNarrow"), z("y", ["y", 1], "yo", "eraYear"), z("y", ["yy", 2], 0, "eraYear"), z("y", ["yyy", 3], 0, "eraYear"), z("y", ["yyyy", 4], 0, "eraYear"), V("N", gf), V("NN", gf), V("NNN", gf), V("NNNN", _f), V("NNNNN", vf), U([
	"N",
	"NN",
	"NNN",
	"NNNN",
	"NNNNN"
], function(e, t, n, r) {
	var i = n._locale.erasParse(e, r, n._strict);
	i ? R(n).era = i : R(n).invalidEra = e;
}), V("y", rc), V("yy", rc), V("yyy", rc), V("yyyy", rc), V("yo", yf), U([
	"y",
	"yy",
	"yyy",
	"yyyy"
], W), U(["yo"], function(e, t, n, r) {
	var i;
	n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)), t[W] = n._locale.eraYearOrdinalParse ? n._locale.eraYearOrdinalParse(e, i) : parseInt(e, 10);
});
function of(e, t) {
	var n, r, i, a = this._eras || Xl("en")._eras;
	for (n = 0, r = a.length; n < r; ++n) switch (typeof a[n].since == "string" && (i = F(a[n].since).startOf("day"), a[n].since = i.valueOf()), typeof a[n].until) {
		case "undefined":
			a[n].until = Infinity;
			break;
		case "string": i = F(a[n].until).startOf("day").valueOf(), a[n].until = i.valueOf();
	}
	return a;
}
function sf(e, t, n) {
	var r, i, a = this.eras(), o, s, c;
	for (e = e.toUpperCase(), r = 0, i = a.length; r < i; ++r) if (o = a[r].name.toUpperCase(), s = a[r].abbr.toUpperCase(), c = a[r].narrow.toUpperCase(), n) switch (t) {
		case "N":
		case "NN":
		case "NNN":
			if (s === e) return a[r];
			break;
		case "NNNN":
			if (o === e) return a[r];
			break;
		case "NNNNN": if (c === e) return a[r];
	}
	else if ([
		o,
		s,
		c
	].indexOf(e) >= 0) return a[r];
}
function cf(e, t) {
	var n = e.since <= e.until ? 1 : -1;
	return t === void 0 ? F(e.since).year() : F(e.since).year() + (t - e.offset) * n;
}
function lf() {
	var e, t, n, r = this.localeData().eras();
	for (e = 0, t = r.length; e < t; ++e) if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since) return r[e].name;
	return "";
}
function uf() {
	var e, t, n, r = this.localeData().eras();
	for (e = 0, t = r.length; e < t; ++e) if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since) return r[e].narrow;
	return "";
}
function df() {
	var e, t, n, r = this.localeData().eras();
	for (e = 0, t = r.length; e < t; ++e) if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since) return r[e].abbr;
	return "";
}
function ff() {
	var e, t, n, r, i = this.localeData().eras();
	for (e = 0, t = i.length; e < t; ++e) if (n = i[e].since <= i[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), i[e].since <= r && r <= i[e].until || i[e].until <= r && r <= i[e].since) return (this.year() - F(i[e].since).year()) * n + i[e].offset;
	return this.year();
}
function pf(e) {
	return I(this, "_erasNameRegex") || bf.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function mf(e) {
	return I(this, "_erasAbbrRegex") || bf.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function hf(e) {
	return I(this, "_erasNarrowRegex") || bf.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function gf(e, t) {
	return t.erasAbbrRegex(e);
}
function _f(e, t) {
	return t.erasNameRegex(e);
}
function vf(e, t) {
	return t.erasNarrowRegex(e);
}
function yf(e, t) {
	return t._eraYearOrdinalRegex || rc;
}
function bf() {
	var e = [], t = [], n = [], r = [], i, a, o, s, c, l = this.eras();
	for (i = 0, a = l.length; i < a; ++i) o = mc(l[i].name), s = mc(l[i].abbr), c = mc(l[i].narrow), t.push(o), e.push(s), n.push(c), r.push(o), r.push(s), r.push(c);
	this._erasRegex = RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = RegExp("^(" + n.join("|") + ")", "i");
}
z(0, ["gg", 2], 0, function() {
	return this.weekYear() % 100;
}), z(0, ["GG", 2], 0, function() {
	return this.isoWeekYear() % 100;
});
function xf(e, t) {
	z(0, [e, e.length], 0, t);
}
xf("gggg", "weekYear"), xf("ggggg", "weekYear"), xf("GGGG", "isoWeekYear"), xf("GGGGG", "isoWeekYear"), V("G", ic), V("g", ic), V("GG", B, Js), V("gg", B, Js), V("GGGG", tc, Xs), V("gggg", tc, Xs), V("GGGGG", nc, Zs), V("ggggg", nc, Zs), _c([
	"gggg",
	"ggggg",
	"GGGG",
	"GGGGG"
], function(e, t, n, r) {
	t[r.substr(0, 2)] = H(e);
}), _c(["gg", "GG"], function(e, t, n, r) {
	t[r] = F.parseTwoDigitYear(e);
});
function Sf(e) {
	return Of.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy);
}
function Cf(e) {
	return Of.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function wf() {
	return rl(this.year(), 1, 4);
}
function Tf() {
	return rl(this.isoWeekYear(), 1, 4);
}
function Ef() {
	var e = this.localeData()._week;
	return rl(this.year(), e.dow, e.doy);
}
function Df() {
	var e = this.localeData()._week;
	return rl(this.weekYear(), e.dow, e.doy);
}
function Of(e, t, n, r, i) {
	var a;
	return e == null ? nl(this, r, i).year : (a = rl(e, r, i), t > a && (t = a), kf.call(this, e, t, n, r, i));
}
function kf(e, t, n, r, i) {
	var a = tl(e, t, n, r, i), o = $c(a.year, 0, a.dayOfYear);
	return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
}
z("Q", 0, "Qo", "quarter"), V("Q", qs), U("Q", function(e, t) {
	t[bc] = (H(e) - 1) * 3;
});
function Af(e) {
	return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
z("D", ["DD", 2], "Do", "date"), V("D", B, lc), V("DD", B, Js), V("Do", function(e, t) {
	return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
}), U(["D", "DD"], xc), U("Do", function(e, t) {
	t[xc] = H(e.match(B)[0]);
});
var jf = Ac("Date", !0);
z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), V("DDD", ec), V("DDDD", Ys), U(["DDD", "DDDD"], function(e, t, n) {
	n._dayOfYear = H(e);
});
function Mf(e) {
	var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
	return e == null ? t : this.add(e - t, "d");
}
z("m", ["mm", 2], 0, "minute"), V("m", B, uc), V("mm", B, Js), U(["m", "mm"], Sc);
var Nf = Ac("Minutes", !1);
z("s", ["ss", 2], 0, "second"), V("s", B, uc), V("ss", B, Js), U(["s", "ss"], Cc);
var Pf = Ac("Seconds", !1);
z("S", 0, 0, function() {
	return ~~(this.millisecond() / 100);
}), z(0, ["SS", 2], 0, function() {
	return ~~(this.millisecond() / 10);
}), z(0, ["SSS", 3], 0, "millisecond"), z(0, ["SSSS", 4], 0, function() {
	return this.millisecond() * 10;
}), z(0, ["SSSSS", 5], 0, function() {
	return this.millisecond() * 100;
}), z(0, ["SSSSSS", 6], 0, function() {
	return this.millisecond() * 1e3;
}), z(0, ["SSSSSSS", 7], 0, function() {
	return this.millisecond() * 1e4;
}), z(0, ["SSSSSSSS", 8], 0, function() {
	return this.millisecond() * 1e5;
}), z(0, ["SSSSSSSSS", 9], 0, function() {
	return this.millisecond() * 1e6;
}), V("S", ec, qs), V("SS", ec, Js), V("SSS", ec, Ys);
var Ff, If;
for (Ff = "SSSS"; Ff.length <= 9; Ff += "S") V(Ff, rc);
function Lf(e, t) {
	t[wc] = H(("0." + e) * 1e3);
}
for (Ff = "S"; Ff.length <= 9; Ff += "S") U(Ff, Lf);
If = Ac("Milliseconds", !1), z("z", 0, 0, "zoneAbbr"), z("zz", 0, 0, "zoneName");
function Rf() {
	return this._isUTC ? "UTC" : "";
}
function zf() {
	return this._isUTC ? "Coordinated Universal Time" : "";
}
var Y = us.prototype;
Y.add = dd, Y.calendar = yd, Y.clone = bd, Y.diff = Dd, Y.endOf = Jd, Y.format = Md, Y.from = Nd, Y.fromNow = Pd, Y.to = Fd, Y.toNow = Id, Y.get = Nc, Y.invalidAt = rf, Y.isAfter = xd, Y.isBefore = Sd, Y.isBetween = Cd, Y.isSame = wd, Y.isSameOrAfter = Td, Y.isSameOrBefore = Ed, Y.isValid = tf, Y.lang = Rd, Y.locale = Ld, Y.localeData = zd, Y.max = Ou, Y.min = Du, Y.parsingFlags = nf, Y.set = Pc, Y.startOf = qd, Y.subtract = fd, Y.toArray = Qd, Y.toObject = $d, Y.toDate = Zd, Y.toISOString = Ad, Y.inspect = jd, typeof Symbol < "u" && Symbol.for != null && (Y[Symbol.for("nodejs.util.inspect.custom")] = function() {
	return "Moment<" + this.format() + ">";
}), Y.toJSON = ef, Y.toString = kd, Y.unix = Xd, Y.valueOf = Yd, Y.creationData = af, Y.eraName = lf, Y.eraNarrow = uf, Y.eraAbbr = df, Y.eraYear = ff, Y.year = Oc, Y.isLeapYear = kc, Y.weekYear = Sf, Y.isoWeekYear = Cf, Y.quarter = Y.quarters = Af, Y.month = qc, Y.daysInMonth = Jc, Y.week = Y.weeks = cl, Y.isoWeek = Y.isoWeeks = ll, Y.weeksInYear = Ef, Y.weeksInWeekYear = Df, Y.isoWeeksInYear = wf, Y.isoWeeksInISOWeekYear = Tf, Y.date = jf, Y.day = Y.days = wl, Y.weekday = Tl, Y.isoWeekday = El, Y.dayOfYear = Mf, Y.hour = Y.hours = Ll, Y.minute = Y.minutes = Nf, Y.second = Y.seconds = Pf, Y.millisecond = Y.milliseconds = If, Y.utcOffset = Ku, Y.utc = Ju, Y.local = Yu, Y.parseZone = Xu, Y.hasAlignedHourOffset = Zu, Y.isDST = Qu, Y.isLocal = ed, Y.isUtcOffset = td, Y.isUtc = nd, Y.isUTC = nd, Y.zoneAbbr = Rf, Y.zoneName = zf, Y.dates = ps("dates accessor is deprecated. Use date instead.", jf), Y.months = ps("months accessor is deprecated. Use month instead", qc), Y.years = ps("years accessor is deprecated. Use year instead", Oc), Y.zone = ps("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", qu), Y.isDSTShifted = ps("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", $u);
function Bf(e) {
	return J(e * 1e3);
}
function Vf() {
	return J.apply(null, arguments).parseZone();
}
function Hf(e) {
	return e;
}
var X = ys.prototype;
X.calendar = Ss, X.longDateFormat = Ns, X.invalidDate = Fs, X.ordinal = Rs, X.preparse = Hf, X.postformat = Hf, X.relativeTime = Bs, X.pastFuture = Vs, X.set = _s, X.eras = of, X.erasParse = sf, X.erasConvertYear = cf, X.erasAbbrRegex = mf, X.erasNameRegex = pf, X.erasNarrowRegex = hf, X.months = Hc, X.monthsShort = Uc, X.monthsParse = Gc, X.monthsRegex = Xc, X.monthsShortRegex = Yc, X.week = il, X.firstDayOfYear = sl, X.firstDayOfWeek = ol, X.weekdays = yl, X.weekdaysMin = xl, X.weekdaysShort = bl, X.weekdaysParse = Cl, X.weekdaysRegex = Dl, X.weekdaysShortRegex = Ol, X.weekdaysMinRegex = kl, X.isPM = Fl, X.meridiem = Rl;
function Uf(e, t, n, r) {
	var i = Xl(), a = ns().set(r, t);
	return i[n](a, e);
}
function Wf(e, t, n) {
	if (Qo(e) && (t = e, e = void 0), e ||= "", t != null) return Uf(e, t, n, "month");
	var r, i = [];
	for (r = 0; r < 12; r++) i[r] = Uf(e, r, n, "month");
	return i;
}
function Gf(e, t, n, r) {
	typeof e == "boolean" ? (Qo(t) && (n = t, t = void 0), t ||= "") : (t = e, n = t, e = !1, Qo(t) && (n = t, t = void 0), t ||= "");
	var i = Xl(), a = e ? i._week.dow : 0, o, s = [];
	if (n != null) return Uf(t, (n + a) % 7, r, "day");
	for (o = 0; o < 7; o++) s[o] = Uf(t, (o + a) % 7, r, "day");
	return s;
}
function Kf(e, t) {
	return Wf(e, t, "months");
}
function qf(e, t) {
	return Wf(e, t, "monthsShort");
}
function Jf(e, t, n) {
	return Gf(e, t, n, "weekdays");
}
function Yf(e, t, n) {
	return Gf(e, t, n, "weekdaysShort");
}
function Xf(e, t, n) {
	return Gf(e, t, n, "weekdaysMin");
}
ql("en", {
	eras: [{
		since: "0001-01-01",
		until: Infinity,
		offset: 1,
		name: "Anno Domini",
		narrow: "AD",
		abbr: "AD"
	}, {
		since: "0000-12-31",
		until: -Infinity,
		offset: 1,
		name: "Before Christ",
		narrow: "BC",
		abbr: "BC"
	}],
	dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
	ordinal: function(e) {
		var t = e % 10;
		return e + (H(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th");
	}
}), F.lang = ps("moment.lang is deprecated. Use moment.locale instead.", ql), F.langData = ps("moment.langData is deprecated. Use moment.localeData instead.", Xl);
var Zf = Math.abs;
function Qf() {
	var e = this._data;
	return this._milliseconds = Zf(this._milliseconds), this._days = Zf(this._days), this._months = Zf(this._months), e.milliseconds = Zf(e.milliseconds), e.seconds = Zf(e.seconds), e.minutes = Zf(e.minutes), e.hours = Zf(e.hours), e.months = Zf(e.months), e.years = Zf(e.years), this;
}
function $f(e, t, n, r) {
	var i = ad(t, n);
	return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble();
}
function ep(e, t) {
	return $f(this, e, t, 1);
}
function tp(e, t) {
	return $f(this, e, t, -1);
}
function np(e) {
	return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function rp() {
	var e = this._milliseconds, t = this._days, n = this._months, r = this._data, i, a, o, s, c;
	return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += np(ap(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, i = hc(e / 1e3), r.seconds = i % 60, a = hc(i / 60), r.minutes = a % 60, o = hc(a / 60), r.hours = o % 24, t += hc(o / 24), c = hc(ip(t)), n += c, t -= np(ap(c)), s = hc(n / 12), n %= 12, r.days = t, r.months = n, r.years = s, this;
}
function ip(e) {
	return e * 4800 / 146097;
}
function ap(e) {
	return e * 146097 / 4800;
}
function op(e) {
	if (!this.isValid()) return NaN;
	var t, n, r = this._milliseconds;
	if (e = Us(e), e === "month" || e === "quarter" || e === "year") switch (t = this._days + r / 864e5, n = this._months + ip(t), e) {
		case "month": return n;
		case "quarter": return n / 3;
		case "year": return n / 12;
	}
	else switch (t = this._days + Math.round(ap(this._months)), e) {
		case "week": return t / 7 + r / 6048e5;
		case "day": return t + r / 864e5;
		case "hour": return t * 24 + r / 36e5;
		case "minute": return t * 1440 + r / 6e4;
		case "second": return t * 86400 + r / 1e3;
		case "millisecond": return Math.floor(t * 864e5) + r;
		default: throw Error("Unknown unit " + e);
	}
}
function sp(e) {
	return function() {
		return this.as(e);
	};
}
var cp = sp("ms"), lp = sp("s"), up = sp("m"), dp = sp("h"), fp = sp("d"), pp = sp("w"), mp = sp("M"), hp = sp("Q"), gp = sp("y"), _p = cp;
function vp() {
	return ad(this);
}
function yp(e) {
	return e = Us(e), this.isValid() ? this[e + "s"]() : NaN;
}
function bp(e) {
	return function() {
		return this.isValid() ? this._data[e] : NaN;
	};
}
var xp = bp("milliseconds"), Sp = bp("seconds"), Cp = bp("minutes"), wp = bp("hours"), Tp = bp("days"), Ep = bp("months"), Dp = bp("years");
function Op() {
	return hc(this.days() / 7);
}
var kp = Math.round, Ap = {
	ss: 44,
	s: 45,
	m: 45,
	h: 22,
	d: 26,
	w: null,
	M: 11
};
function jp(e, t, n, r, i) {
	return i.relativeTime(t || 1, !!n, e, r);
}
function Mp(e, t, n, r) {
	var i = ad(e).abs(), a = kp(i.as("s")), o = kp(i.as("m")), s = kp(i.as("h")), c = kp(i.as("d")), l = kp(i.as("M")), u = kp(i.as("w")), d = kp(i.as("y")), f = a <= n.ss && ["s", a] || a < n.s && ["ss", a] || o <= 1 && ["m"] || o < n.m && ["mm", o] || s <= 1 && ["h"] || s < n.h && ["hh", s] || c <= 1 && ["d"] || c < n.d && ["dd", c];
	return n.w != null && (f = f || u <= 1 && ["w"] || u < n.w && ["ww", u]), f = f || l <= 1 && ["M"] || l < n.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d], f[2] = t, f[3] = +e > 0, f[4] = r, jp.apply(null, f);
}
function Np(e) {
	return e === void 0 ? kp : typeof e == "function" && (kp = e, !0);
}
function Pp(e, t) {
	return Ap[e] === void 0 ? !1 : t === void 0 ? Ap[e] : (Ap[e] = t, e === "s" && (Ap.ss = t - 1), !0);
}
function Fp(e, t) {
	if (!this.isValid()) return this.localeData().invalidDate();
	var n = !1, r = Ap, i, a;
	return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Ap, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), i = this.localeData(), a = Mp(this, !n, r, i), n && (a = i.pastFuture(+this, a)), i.postformat(a);
}
var Ip = Math.abs;
function Lp(e) {
	return (e > 0) - (e < 0) || +e;
}
function Rp() {
	if (!this.isValid()) return this.localeData().invalidDate();
	var e = Ip(this._milliseconds) / 1e3, t = Ip(this._days), n = Ip(this._months), r, i, a, o, s = this.asSeconds(), c, l, u, d;
	return s ? (r = hc(e / 60), i = hc(r / 60), e %= 60, r %= 60, a = hc(n / 12), n %= 12, o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = s < 0 ? "-" : "", l = Lp(this._months) === Lp(s) ? "" : "-", u = Lp(this._days) === Lp(s) ? "" : "-", d = Lp(this._milliseconds) === Lp(s) ? "" : "-", c + "P" + (a ? l + a + "Y" : "") + (n ? l + n + "M" : "") + (t ? u + t + "D" : "") + (i || r || e ? "T" : "") + (i ? d + i + "H" : "") + (r ? d + r + "M" : "") + (e ? d + o + "S" : "")) : "P0D";
}
var Z = Lu.prototype;
Z.isValid = Fu, Z.abs = Qf, Z.add = ep, Z.subtract = tp, Z.as = op, Z.asMilliseconds = cp, Z.asSeconds = lp, Z.asMinutes = up, Z.asHours = dp, Z.asDays = fp, Z.asWeeks = pp, Z.asMonths = mp, Z.asQuarters = hp, Z.asYears = gp, Z.valueOf = _p, Z._bubble = rp, Z.clone = vp, Z.get = yp, Z.milliseconds = xp, Z.seconds = Sp, Z.minutes = Cp, Z.hours = wp, Z.days = Tp, Z.weeks = Op, Z.months = Ep, Z.years = Dp, Z.humanize = Fp, Z.toISOString = Rp, Z.toString = Rp, Z.toJSON = Rp, Z.locale = Ld, Z.localeData = zd, Z.toIsoString = ps("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Rp), Z.lang = Rd, z("X", 0, 0, "unix"), z("x", 0, 0, "valueOf"), V("x", ic), V("X", sc), U("X", function(e, t, n) {
	n._d = /* @__PURE__ */ new Date(parseFloat(e) * 1e3);
}), U("x", function(e, t, n) {
	n._d = new Date(H(e));
}), F.version = "2.30.1", Jo(J), F.fn = Y, F.min = Au, F.max = ju, F.now = Mu, F.utc = ns, F.unix = Bf, F.months = Kf, F.isDate = $o, F.locale = ql, F.invalid = os, F.duration = ad, F.isMoment = ds, F.weekdays = Jf, F.parseZone = Vf, F.localeData = Xl, F.isDuration = Ru, F.monthsShort = qf, F.weekdaysMin = Xf, F.defineLocale = Jl, F.updateLocale = Yl, F.locales = Zl, F.weekdaysShort = Yf, F.normalizeUnits = Us, F.relativeTimeRounding = Np, F.relativeTimeThreshold = Pp, F.calendarFormat = vd, F.prototype = Y, F.HTML5_FMT = {
	DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
	DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
	DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
	DATE: "YYYY-MM-DD",
	TIME: "HH:mm",
	TIME_SECONDS: "HH:mm:ss",
	TIME_MS: "HH:mm:ss.SSS",
	WEEK: "GGGG-[W]WW",
	MONTH: "YYYY-MM"
};
//#endregion
//#region ../../packages/utils/date/moment.ts
var zp = F;
//#endregion
//#region src/utils/jsonl.ts
function Bp(e) {
	return e.split("\n").filter((e) => e.trim().length > 0).map((e) => JSON.parse(e));
}
function Vp(e) {
	return e.map((e) => JSON.stringify(e)).join("\n");
}
var Hp = {
	parse: Bp,
	stringify: Vp
}, Up = class e {
	client;
	directory;
	static buildCacheFileName(e = /* @__PURE__ */ new Date(), t = "YYYY-MM-DD", n = "jsonl") {
		return `${zp(e).format(t)}.${n}`;
	}
	filepath;
	filename;
	data = [];
	lines = [];
	constructor(e, t, n) {
		this.client = e, this.directory = t, this.init(n);
	}
	init(t = e.buildCacheFileName()) {
		this.filename = t, this.filepath = this.buildCacheFilePath(), this.clear();
	}
	buildCacheFilePath(e = this.directory, t = this.filename) {
		return `${e}/${t}`;
	}
	async getAllCacheFilePath(e = this.directory) {
		return (await this.client.readDir({ path: e })).data.filter((e) => e.isDir === !1).map((t) => this.buildCacheFilePath(e, t.name));
	}
	async getAllCacheFileName(e = this.directory) {
		return (await this.client.readDir({ path: e })).data.filter((e) => e.isDir === !1).map((e) => e.name);
	}
	clear() {
		this.length = 0;
	}
	get length() {
		return this.data.length;
	}
	set length(e) {
		this.data.length = e, this.lines.length = e;
	}
	at(e) {
		return this.data.at(e);
	}
	toString() {
		return this.lines.join("\n");
	}
	toLocaleString() {
		return this.toString();
	}
	push(...e) {
		return this.data.push(...e), this.lines.push(...e.map((e) => JSON.stringify(e))), this.length;
	}
	pop() {
		return this.lines.pop(), this.data.pop();
	}
	shift() {
		return this.lines.shift(), this.data.shift();
	}
	unshift(...e) {
		return this.data.unshift(...e), this.lines.unshift(...e.map((e) => JSON.stringify(e))), this.length;
	}
	slice(e, t) {
		return this.data.slice(e, t);
	}
	splice(e, t, ...n) {
		return this.data.splice(e, t, ...n);
	}
	forEach(e, t) {
		this.data.forEach(e, t);
	}
	map(e, t) {
		return this.data.map(e, t);
	}
	[Symbol.iterator]() {
		return this.data[Symbol.iterator]();
	}
	get [Symbol.toStringTag]() {
		return "Cache";
	}
	[Symbol.toPrimitive](e) {
		switch (e) {
			case "number": return this.length;
			case "string": return this.toString();
			default: return this.data;
		}
	}
	async load(e = this.filepath) {
		if ((await this.client.readDir({ path: this.directory })).data.some((e) => e.name === this.filename && e.isDir === !1)) {
			let t = await this.client.getFile({ path: e }, "text");
			return this.clear(), this.push(...Hp.parse(t)), !0;
		}
		return !1;
	}
	async remove(e = this.filepath) {
		return (await this.client.readDir({ path: this.directory })).data.some((e) => e.name === this.filename && e.isDir === !1) ? (await this.client.removeFile({ path: e }), !0) : !1;
	}
	async save(t = !0, n = this.filepath) {
		try {
			let r = await this._save(n);
			return t && e.buildCacheFileName() !== this.filename && this.init(), r;
		} catch {
			return !1;
		}
	}
	async _save(e, t = "\n") {
		return this.data.length > 0 && (await this.client.putFile({
			path: e,
			file: this.lines.join(t)
		}), !0);
	}
}, Q = Go, Wp = new Po(`${self.name}-worker:${Ko.WAKATIME_WORKER_FILE_NAME}`), Gp = new Xi({ baseURL: Io(self.location.pathname, `plugins/${self.name}/workers/${Ko.WAKATIME_WORKER_FILE_NAME}.js`) }, "fetch"), Kp = /* @__PURE__ */ new Map(), qp = new Up(Gp, Ko.OFFLINE_CACHE_PATH), Jp = [], Yp = {
	heartbeat: 0,
	cacheCheck: 0
}, $ = {
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
	actions: []
};
async function Xp(e = Ko.OFFLINE_CACHE_PATH) {
	return Gp.putFile({
		isDir: !0,
		path: e
	});
}
function Zp(e = Q.wakatime.interval) {
	self.clearInterval(Yp.heartbeat), Yp.heartbeat = self.setInterval(em, e * 1e3), self.clearInterval(Yp.cacheCheck), Yp.cacheCheck = self.setInterval(tm, Ko.CACHE_CHECK_INTERVAL);
}
function Qp() {
	$.includeID = lm(), $.excludeID = dm(), $.include = um(), $.exclude = fm();
}
async function $p() {
	let e = (await Gp.lsNotebooks()).data.notebooks;
	return e.forEach((e) => Kp.set(e.id, e)), e;
}
async function em() {
	let e = Array.from($.roots.values());
	$.blocks.clear(), $.roots.clear();
	let t = (await rm(e.filter((e) => om(`${e.box}${e.path}`, $.includeID, $.excludeID)))).filter((e) => {
		let t = e.entity;
		return om(t, $.include, $.exclude);
	});
	if ($.actions.push(...t), $.actions.length > 0) {
		let e = $.actions.slice();
		$.actions.length = 0;
		let t = [];
		for (let n = 0; n < e.length; n += Ko.WAKATIME_HEARTBEATS_BULK) t.push(im(e.slice(n, n + Ko.WAKATIME_HEARTBEATS_BULK)));
		if (Q.wakatime.heartbeats) for (let e of t) await am(e, (e) => {
			Q.wakatime.offline && qp.push(e.payload);
		});
		else Q.wakatime.offline && qp.push(...t.map((e) => e.payload));
		await qp.save();
	}
}
async function tm() {
	let e = await qp.getAllCacheFileName();
	if (Jp.length = 0, Jp.push(...e.map((e) => new Up(Gp, Ko.OFFLINE_CACHE_PATH, e))), Jp.length > 0) for (let e of Jp) if (Q.wakatime.heartbeats) {
		await e.load();
		let t = [];
		for (let n = 0; n < e.length; ++n) {
			if (await am(im(e.at(n)), (e) => t.push(e.payload)), n === 0 && t.length > 0) return;
			await Fo(Ko.CACHE_COMMIT_INTERVAL);
		}
		if (t.length > 0) {
			e.clear(), e.push(...t), await e.save();
			return;
		}
		await e.remove();
	} else return;
}
async function nm(e, t, n) {
	let r = Q.wakatime.hide_branch_names ? e.box : Kp.get(e.box)?.name, i = Q.wakatime.hide_file_names ? `${r}${e.path}` : `${r}${(await Gp.getHPathByPath({
		path: e.path,
		notebook: e.box
	})).data}.sy`;
	return {
		type: Wo.File,
		category: n ? Q.wakatime.edit.category : Q.wakatime.view.category,
		project: $.project,
		branch: r,
		entity: i,
		language: $.language,
		time: t,
		is_write: n
	};
}
async function rm(e) {
	return Promise.all(e.flatMap((e) => e.events.map((t) => nm(e, t.time, t.is_write))));
}
function im(e) {
	return {
		url: Array.isArray(e) ? `${$.url}.bulk` : $.url,
		method: $.method,
		headers: [$.headers],
		timeout: Q.wakatime.timeout * 1e3,
		payload: e
	};
}
async function am(e, t) {
	try {
		let n = await Gp.forwardProxy(e);
		if (n.data.status >= 200 && n.data.status < 300) return n;
		t(e);
	} catch {
		t(e);
	}
	return null;
}
function om(e, t, n) {
	if (t.length > 0) {
		let n = !1;
		for (let r of t) if (typeof r == "string") {
			if (e.includes(r)) {
				n = !0;
				break;
			}
		} else if (r instanceof RegExp && r.test(e)) {
			n = !0;
			break;
		}
		if (!n) return !1;
	}
	if (n.length > 0) {
		let t = !0;
		for (let r of n) if (typeof r == "string") {
			if (e.includes(r)) {
				t = !1;
				break;
			}
		} else if (r instanceof RegExp && r.test(e)) {
			t = !1;
			break;
		}
		return t;
	}
	return !0;
}
function sm(e = /* @__PURE__ */ new Date()) {
	return e.getTime() / 1e3;
}
function cm() {
	return sm();
}
function lm() {
	return pm(Q.wakatime.includeID);
}
function um() {
	return pm(Q.wakatime.include);
}
function dm() {
	return pm(Q.wakatime.excludeID);
}
function fm() {
	return pm(Q.wakatime.exclude);
}
function pm(e) {
	return e.filter((e) => {
		if (e = e.trim(), e !== "" && e !== "//") {
			if (e.startsWith("/") && e.endsWith("/")) try {
				return new RegExp(e.slice(1, -1)), !0;
			} catch (e) {
				return Gp.pushErrMsg({ msg: e }), !1;
			}
			return !0;
		}
		return !1;
	}).map((e) => e.startsWith("/") && e.endsWith("/") ? new RegExp(e.slice(1, -1)) : e);
}
function mm(e) {
	let t = $.roots.get(e.id);
	if (t) {
		let n = {
			time: e.time,
			is_write: e.is_write
		};
		t.events.at(-1)?.is_write === n.is_write && t.events.pop(), t.events.push(n);
	} else t = {
		id: e.id,
		box: e.box,
		path: e.path,
		events: [{
			time: e.time,
			is_write: e.is_write
		}]
	}, $.roots.set(e.id, t);
	return t;
}
async function hm() {
	await Xp(), await qp.load(), await $p();
}
async function gm() {
	clearInterval(Yp.heartbeat), clearInterval(Yp.cacheCheck), await em();
}
function _m() {
	Zp(), Qp();
}
function vm(e, t) {
	Object.assign(Q, e), Object.assign($, t);
}
function ym(e) {
	let t = cm();
	$.blocks.set(e.id, e.id), mm({
		...e,
		time: t,
		is_write: !1
	});
}
async function bm(e) {
	try {
		let t = cm(), n = $.blocks.get(e), r = n && $.roots.get(n);
		if (!r) {
			let t = await Gp.getBlockInfo({ id: e });
			n = t.data.rootID, r = {
				id: n,
				box: t.data.box,
				path: t.data.path,
				events: []
			}, $.blocks.set(e, n), $.roots.set(n, r);
		}
		mm({
			id: r.id,
			box: r.box,
			path: r.path,
			time: t,
			is_write: !0
		});
	} catch (e) {
		if (!(e instanceof Yi)) throw e;
	}
}
var xm = {
	onload: {
		this: self,
		func: hm
	},
	unload: {
		this: self,
		func: gm
	},
	restart: {
		this: self,
		func: _m
	},
	updateConfig: {
		this: self,
		func: vm
	},
	addViewEvent: {
		this: self,
		func: ym
	},
	addEditEvent: {
		this: self,
		func: bm
	}
};
new Ho(new BroadcastChannel(Ko.WAKATIME_WORKER_BROADCAST_CHANNEL_NAME), Wp, xm);
//#endregion
export { bm as addEditEvent, ym as addViewEvent, hm as onload, _m as restart, gm as unload, vm as updateConfig };
