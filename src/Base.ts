import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Options {
    agent?: string;
    token?: string;
    auth?: string;
    axiosOptions?: AxiosRequestConfig;
}

interface BundleOptions {
    /* eslint-disable-next-line @typescript-eslint/ban-types */
    default?: (name: string) => Function;
}

export type QueryReturns = Promise<Record<string, unknown>|Error|null>;

export default class Base {
    options: Options;
    token: string | undefined;
    constructor(options: Options = {}) {
        this.options = options;
        this.token = options.token || options.auth;
    }

    static get defaultAgent(): string {
        return `Node ${process.version} @ ${process.platform}`
    }

    get agent(): string {
        return this.options.agent || Base.defaultAgent;
    }

    async query(url: string, cb?: ((r: AxiosResponse) => Promise<Record<string, unknown>>)): QueryReturns {
        if (!cb) cb = r => r.data;
        const ops: AxiosRequestConfig = this.options?.axiosOptions || {};
        if (!ops.headers) ops.headers = {}
        ops.headers['User-Agent'] = this.options?.agent || Base.defaultAgent
        if (this.token) ops.headers['Authorization'] = `Bearer ${this.token}`
        return await axios.get(url, ops)
            .then(cb)
            .catch(e => e)
    }
    
    /* eslint-disable @typescript-eslint/ban-types */
    static bundle(base: Function, items: Record<string, string>, options?: BundleOptions): (options?: Options) => QueryReturns {
        const bundler: Record<string, Record<string, Function>> = {};
        Object.keys(items).forEach((name) => {
            bundler[name] = { value: options?.default ? options.default(items[name]) : (async function (options?: Options): QueryReturns {
                return await base(items[name], options)
            }) }
        })
        return Object.defineProperties(Object.values(bundler)[0].value, bundler);
    }
    /* eslint-enable @typescript-eslint/ban-types */
}