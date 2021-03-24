"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Base {
    constructor(options = {}) {
        this.options = options;
        this.token = options.token || options.auth;
    }
    static get defaultAgent() {
        return `Node ${process.version} @ ${process.platform}`;
    }
    get agent() {
        return this.options.agent || Base.defaultAgent;
    }
    async query(url, cb) {
        if (!cb)
            cb = r => r.data;
        const ops = this.options?.axiosOptions || {};
        if (!ops.headers)
            ops.headers = {};
        ops.headers['User-Agent'] = this.options?.agent || Base.defaultAgent;
        if (this.token)
            ops.headers['Authorization'] = `Bearer ${this.token}`;
        return await axios_1.default.get(url, ops)
            .then(cb)
            .catch(e => e);
    }
    /* eslint-disable @typescript-eslint/ban-types */
    static bundle(base, items, options) {
        const bundler = {};
        Object.keys(items).forEach((name) => {
            bundler[name] = { value: options?.default ? options.default(items[name]) : (async function (options) {
                    return await base(items[name], options);
                }) };
        });
        return Object.defineProperties(Object.values(bundler)[0].value, bundler);
    }
}
exports.default = Base;
