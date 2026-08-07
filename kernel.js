//#region ../../packages/utils/misc/sleep.ts
async function e(e) {
	return new Promise((t) => {
		setTimeout(t, e);
	});
}
//#endregion
//#region src/wakatime/heartbeats.ts
var t = /* @__PURE__ */ function(e) {
	return e.Coding = "coding", e.Building = "building", e.Indexing = "indexing", e.Debugging = "debugging", e.Browsing = "browsing", e.RunningTests = "running tests", e.WritingTests = "writing tests", e.ManualTesting = "manual testing", e.WritingDocs = "writing docs", e.Communicating = "communicating", e.CodeReviewing = "code reviewing", e.Notes = "notes", e.Researching = "researching", e.Learning = "learning", e.Designing = "designing", e.AICoding = "ai coding", e;
}({}), n = /* @__PURE__ */ function(e) {
	return e.App = "app", e.File = "file", e.Domain = "domain", e.Url = "url", e;
}({}), r = { wakatime: {
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
	record: !1,
	heartbeats: !1,
	project: "",
	language: "",
	hostname: "",
	interval: 60,
	view: { category: t.Notes },
	edit: { category: t.Notes },
	system_name: "",
	system_version: "unknown",
	system_arch: "unknown",
	useragent: ""
} }, i = {
	GLOBAL_CONFIG_NAME: "global-config",
	STATUS_PANEL_DIALOG_ID: "status-panel-dialog",
	OFFLINE_CACHE_PATH: "data/storage/petal/wakatime/.cache",
	KERNEL_CACHE_PATH: ".cache",
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
	CACHE_COMMIT_INTERVAL: 1e3,
	KERNEL_RPC_METHOD: {
		ON_LOAD: "on-load",
		CLEAR_CACHE: "clear-cache",
		UPDATE_CONFIG: "update-config",
		UPDATE_NOTEBOOKS: "update-notebooks",
		ADD_VIEW_EVENT: "add-view-event",
		ADD_EDIT_EVENT: "add-edit-event",
		WAKATIME_STATUS: "wakatime-status"
	}
};
//#endregion
//#region src/utils/jsonl.ts
function a(e) {
	return e.split("\n").filter((e) => e.trim().length > 0).map((e) => JSON.parse(e));
}
function o(e) {
	return e.map((e) => JSON.stringify(e)).join("\n");
}
var s = {
	parse: a,
	stringify: o
}, c = class e {
	backend;
	directory;
	static buildCacheFileName(e = /* @__PURE__ */ new Date(), t = "jsonl") {
		return `${e.getFullYear().toString().padStart(4, "0")}-${(e.getMonth() + 1).toString().padStart(2, "0")}-${e.getDate().toString().padStart(2, "0")}.${t}`;
	}
	filepath;
	filename;
	data = [];
	constructor(e, t, n) {
		this.backend = e, this.directory = t, this.init(n);
	}
	init(t = e.buildCacheFileName()) {
		this.filename = t, this.filepath = this.buildCacheFilePath(), this.clear();
	}
	buildCacheFilePath(e = this.directory, t = this.filename) {
		return `${e}/${t}`;
	}
	async getAllCacheFilePath(e = this.directory) {
		return (await this.backend.readDir(e)).filter((e) => e.isDir === !1).map((t) => this.buildCacheFilePath(e, t.name));
	}
	async getAllCacheFileName(e = this.directory) {
		try {
			return (await this.backend.readDir(e)).filter((e) => e.isDir === !1).map((e) => e.name);
		} catch {
			return [];
		}
	}
	clear() {
		this.length = 0;
	}
	get length() {
		return this.data.length;
	}
	set length(e) {
		this.data.length = e;
	}
	at(e) {
		return this.data.at(e);
	}
	toString() {
		return s.stringify(this.data);
	}
	toLocaleString() {
		return this.toString();
	}
	push(...e) {
		return this.data.push(...e), this.length;
	}
	pop() {
		return this.data.pop();
	}
	shift() {
		return this.data.shift();
	}
	unshift(...e) {
		return this.data.unshift(...e), this.length;
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
		if ((await this.backend.readDir(this.directory)).some((e) => e.name === this.filename && e.isDir === !1)) {
			let t = await this.backend.getFile(e);
			return this.clear(), this.push(...s.parse(t)), !0;
		}
		return !1;
	}
	async remove(e = this.filepath) {
		return (await this.backend.readDir(this.directory)).some((e) => e.name === this.filename && e.isDir === !1) ? (await this.backend.removeFile(e), !0) : !1;
	}
	async save(t = !0, n = this.filepath) {
		try {
			let r = await this._save(n);
			if (t) {
				let t = e.buildCacheFileName();
				t !== this.filename && this.init(t);
			}
			return r;
		} catch {
			return !1;
		}
	}
	async _save(e) {
		return this.data.length > 0 && (await this.backend.putFile(e, this.toString()), !0);
	}
};
new class {
	siyuan = siyuan;
	config = r;
	notebook = /* @__PURE__ */ new Map();
	cache;
	timer = {
		heartbeat: void 0,
		cacheCheck: void 0
	};
	context = {
		url: "",
		method: "POST",
		Authorization: "",
		includeID: [],
		excludeID: [],
		include: [],
		exclude: [],
		blocks: /* @__PURE__ */ new Map(),
		roots: /* @__PURE__ */ new Map()
	};
	constructor() {
		this.cache = new c(this.siyuanStorageBackend, i.KERNEL_CACHE_PATH), this.siyuan.plugin.lifecycle.onload = this.onload.bind(this), this.siyuan.plugin.lifecycle.onrunning = this.onrunning.bind(this), this.siyuan.plugin.lifecycle.onunload = this.onunload.bind(this);
	}
	async onload() {
		await this.loadConfig(), await this.cache.load(), await this.updateNotebook(), this.startTimer(), await this.siyuan.rpc.bind(i.KERNEL_RPC_METHOD.ON_LOAD, this.rpcOnload.bind(this), "Client plugin initialized."), await this.siyuan.rpc.bind(i.KERNEL_RPC_METHOD.CLEAR_CACHE, this.rpcClearCache.bind(this), "Clear the offline cache."), await this.siyuan.rpc.bind(i.KERNEL_RPC_METHOD.UPDATE_CONFIG, this.rpcUpdateConfig.bind(this), "Update config and request context."), await this.siyuan.rpc.bind(i.KERNEL_RPC_METHOD.UPDATE_NOTEBOOKS, this.rpcUpdateNotebooks.bind(this), "Update the list of notebooks."), await this.siyuan.rpc.bind(i.KERNEL_RPC_METHOD.ADD_VIEW_EVENT, this.rpcAddViewEvent.bind(this), "Record a view heartbeat (id only)."), await this.siyuan.rpc.bind(i.KERNEL_RPC_METHOD.ADD_EDIT_EVENT, this.rpcAddEditEvent.bind(this), "Record an edit heartbeat (id only)."), await this.siyuan.rpc.bind(i.KERNEL_RPC_METHOD.WAKATIME_STATUS, this.rpcStatus.bind(this), "Client plugin initialized.");
	}
	async onrunning() {}
	async onunload() {
		this.clearTimer(), await this.commit(), await this.siyuan.rpc.unbind(i.KERNEL_RPC_METHOD.ON_LOAD), await this.siyuan.rpc.unbind(i.KERNEL_RPC_METHOD.CLEAR_CACHE), await this.siyuan.rpc.unbind(i.KERNEL_RPC_METHOD.UPDATE_CONFIG), await this.siyuan.rpc.unbind(i.KERNEL_RPC_METHOD.UPDATE_NOTEBOOKS), await this.siyuan.rpc.unbind(i.KERNEL_RPC_METHOD.ADD_VIEW_EVENT), await this.siyuan.rpc.unbind(i.KERNEL_RPC_METHOD.ADD_EDIT_EVENT), await this.siyuan.rpc.unbind(i.KERNEL_RPC_METHOD.WAKATIME_STATUS);
	}
	siyuanStorageBackend = {
		putFile: async (e, t) => {
			await this.siyuan.storage.put(e, t);
		},
		getFile: async (e) => await (await this.siyuan.storage.get(e)).text(),
		readDir: async (e) => (await this.siyuan.storage.list(e)).map((e) => ({
			name: e.name,
			isDir: e.isDir
		})),
		removeFile: async (e) => {
			await this.siyuan.storage.remove(e);
		}
	};
	async kernelFetch(e, t) {
		let n = await (await this.siyuan.client.fetch(e, {
			method: "POST",
			body: t === void 0 ? "{}" : JSON.stringify(t)
		})).json();
		if (n.code !== 0) throw Error(`kernel ${e}: ${n.msg}`);
		return n.data;
	}
	async forwardProxy(e) {
		let t = await (await this.siyuan.client.fetch("/api/network/forwardProxy", {
			method: "POST",
			body: JSON.stringify({
				url: e.url,
				method: e.method,
				headers: e.headers,
				timeout: e.timeout,
				payload: e.payload,
				contentType: "application/json",
				payloadEncoding: "json",
				responseEncoding: "text"
			})
		})).json();
		if (t.code !== 0) throw Error(`forwardProxy: ${t.msg}`);
		return t.data;
	}
	clearTimer() {
		clearInterval(this.timer.heartbeat), clearInterval(this.timer.cacheCheck);
	}
	startTimer(e = this.config.wakatime.interval) {
		this.commit(), this.status(), this.checkCache(), this.timer.heartbeat = setInterval(() => {
			this.commit(), this.status();
		}, e * 1e3), this.timer.cacheCheck = setInterval(() => void this.checkCache(), i.CACHE_CHECK_INTERVAL);
	}
	async loadConfig() {
		try {
			let e = await (await this.siyuan.storage.get(i.GLOBAL_CONFIG_NAME)).json();
			this.updateConfig(e);
		} catch {}
	}
	updateConfig(e) {
		Object.assign(this.config, e), this.updateContext();
	}
	updateContext() {
		this.context.url = `${this.config?.wakatime?.api_url ?? i.WAKATIME_DEFAULT_API_URL}/${i.WAKATIME_HEARTBEATS_PATHNAME}`, this.context.Authorization = `Basic ${Buffer.from(this.config.wakatime.api_key).toString("base64")}`, this.context.includeID = this.washList(this.config.wakatime.includeID), this.context.excludeID = this.washList(this.config.wakatime.excludeID), this.context.include = this.washList(this.config.wakatime.include), this.context.exclude = this.washList(this.config.wakatime.exclude);
	}
	async updateNotebook() {
		let e = await this.kernelFetch("/api/notebook/lsNotebooks");
		return e.notebooks.forEach((e) => this.notebook.set(e.id, e)), e.notebooks;
	}
	time(e = /* @__PURE__ */ new Date()) {
		return e.getTime() / 1e3;
	}
	now() {
		return this.time();
	}
	async commit() {
		let e = Array.from(this.context.roots.values());
		this.context.blocks.clear(), this.context.roots.clear();
		let t = e.filter((e) => {
			let t = `${e.box}${e.path}`;
			return this.filter(t, this.context.includeID, this.context.excludeID);
		}), n = await this.buildHeartbeats(t);
		n.forEach((e) => {
			e.payload = e.payload.filter((e) => {
				let t = e.entity;
				return this.filter(t, this.context.include, this.context.exclude);
			});
		});
		for (let e of n) if (e.payload.length > 0) {
			let t = [];
			for (let n = 0; n < e.payload.length; n += i.WAKATIME_HEARTBEATS_BULK) t.push(this.buildHeartbeatsRequest({
				context: e.context,
				payload: e.payload.slice(n, n + i.WAKATIME_HEARTBEATS_BULK)
			}));
			if (this.config.wakatime.heartbeats) for (let n of t) await this.sendHeartbeats(n, (t) => {
				this.config.wakatime.offline && this.cache.push({
					context: e.context,
					payload: t.payload
				});
			});
			else this.config.wakatime.offline && this.cache.push(...t.map((t) => ({
				context: e.context,
				payload: t.payload
			})));
			await this.cache.save();
		}
	}
	async status() {
		let e = await this.getStatus();
		e != null && this.siyuan.rpc.broadcast(i.KERNEL_RPC_METHOD.WAKATIME_STATUS, e);
	}
	async checkCache() {
		if (this.config.wakatime.heartbeats === !1) return;
		let t = await this.cache.getAllCacheFileName();
		for (let n of t) {
			let t = new c(this.siyuanStorageBackend, i.KERNEL_CACHE_PATH, n);
			await t.load();
			let r = [];
			for (let n = 0; n < t.length; ++n) {
				let a = t.at(n);
				if (await this.sendHeartbeats(this.buildHeartbeatsRequest(a), (e) => {
					r.push({
						context: a.context,
						payload: e.payload
					});
				}), n === 0 && r.length > 0) return;
				await e(i.CACHE_COMMIT_INTERVAL);
			}
			if (r.length > 0) {
				t.clear(), t.push(...r), await t.save();
				return;
			}
			await t.remove();
		}
	}
	async buildHeartbeat(e, t) {
		let r = this.config.wakatime.hide_branch_names ? e.box : this.notebook.get(e.box)?.name, i = this.config.wakatime.hide_file_names ? `${r}${e.path}` : `${r}${await this.kernelFetch("/api/filetree/getHPathByPath", {
			path: e.path,
			notebook: e.box
		})}.sy`;
		return {
			payload: [{
				type: n.File,
				category: t.is_write ? this.config.wakatime.edit.category : this.config.wakatime.view.category,
				project: t.context.project,
				branch: r,
				entity: i,
				language: t.context.language,
				time: t.time,
				is_write: t.is_write
			}],
			context: t.context
		};
	}
	async buildHeartbeats(e) {
		let t = await Promise.all(e.flatMap((e) => e.events.map((t) => this.buildHeartbeat(e, t)))), n = /* @__PURE__ */ new Map();
		return t.forEach((e) => {
			let t = `${e.context.hostname}\0${e.context.useragent}`, r = n.get(t);
			r ?? (r = {
				payload: [],
				context: e.context
			}, n.set(t, r)), r.payload.push(...e.payload);
		}), Array.from(n.values());
	}
	buildHeartbeatsRequest(e) {
		return {
			url: Array.isArray(e.payload) ? `${this.context.url}.bulk` : this.context.url,
			method: this.context.method,
			headers: [{
				Authorization: this.context.Authorization,
				"User-Agent": e.context.useragent,
				"X-Machine-Name": e.context.hostname
			}],
			timeout: this.config.wakatime.timeout * 1e3,
			payload: e.payload
		};
	}
	async sendHeartbeats(e, t) {
		try {
			let n = await this.forwardProxy(e);
			if (n.status >= 200 && n.status < 300) return n;
			t(e);
		} catch {
			t(e);
		}
		return null;
	}
	async getStatus() {
		try {
			let e = await this.forwardProxy({
				url: `${this.config?.wakatime?.api_url ?? i.WAKATIME_DEFAULT_API_URL}/${i.WAKATIME_STATUS_BAR_PATHNAME}`,
				method: "GET",
				headers: [{ Authorization: this.context.Authorization }],
				timeout: this.config.wakatime.timeout * 1e3
			});
			if (e.status >= 200 && e.status < 300) return JSON.parse(e.body);
		} catch {}
		return null;
	}
	filter(e, t, n) {
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
	washList(e) {
		return e.filter((e) => {
			if (e = e.trim(), e !== "" && e !== "//") {
				if (e.startsWith("/") && e.endsWith("/")) try {
					return new RegExp(e.slice(1, -1)), !0;
				} catch {
					return !1;
				}
				return !0;
			}
			return !1;
		}).map((e) => e.startsWith("/") && e.endsWith("/") ? new RegExp(e.slice(1, -1)) : e);
	}
	addEvent(e) {
		let t = this.context.roots.get(e.id);
		if (t) {
			let n = {
				time: e.time,
				is_write: e.is_write,
				context: e.context
			};
			t.events.at(-1)?.is_write === n.is_write && t.events.pop(), t.events.push(n);
		} else t = {
			id: e.id,
			box: e.box,
			path: e.path,
			events: [{
				time: e.time,
				is_write: e.is_write,
				context: e.context
			}]
		}, this.context.roots.set(e.id, t);
		return t;
	}
	async getBlockInfo(e) {
		try {
			let t = this.context.blocks.get(e), n = t == null ? void 0 : this.context.roots.get(t);
			if (!n) {
				let r = await this.kernelFetch("/api/block/getBlockInfo", { id: e });
				t = r.rootID, n = {
					id: t,
					box: r.box,
					path: r.path,
					events: []
				}, this.context.blocks.set(e, t), this.context.roots.set(t, n);
			}
			return n;
		} catch {
			return null;
		}
	}
	async rpcUpdateNotebooks() {
		await this.updateNotebook();
	}
	async rpcOnload() {
		await this.status();
	}
	async rpcClearCache() {
		this.cache.clear(), await this.siyuan.storage.remove(i.KERNEL_CACHE_PATH);
	}
	async rpcUpdateConfig(e) {
		this.clearTimer(), this.updateConfig(e), this.startTimer();
	}
	async rpcAddViewEvent(e, t) {
		let n = await this.getBlockInfo(e);
		if (n != null) {
			let e = this.now();
			this.addEvent({
				id: n.id,
				box: n.box,
				path: n.path,
				time: e,
				is_write: !1,
				context: t
			});
		}
	}
	async rpcAddEditEvent(e, t) {
		let n = await this.getBlockInfo(e);
		if (n != null) {
			let e = this.now();
			this.addEvent({
				id: n.id,
				box: n.box,
				path: n.path,
				time: e,
				is_write: !0,
				context: t
			});
		}
	}
	async rpcStatus() {
		return await this.getStatus();
	}
}();
//#endregion
