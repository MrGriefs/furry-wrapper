import { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface Options {
    agent?: string;
    token?: string;
    auth?: string;
    axiosOptions?: AxiosRequestConfig;
}
interface BundleOptions {
    default?: (name: string) => Function;
}
export declare type QueryReturns = Promise<Record<string, unknown> | Error | null>;
export declare type Parameters = (endpoint: string, options?: Options) => QueryReturns;
export declare type BaseFunc = {
    (endpoint: string, options?: Options): QueryReturns;
};
export default class Base {
    options: Options;
    token: string | undefined;
    constructor(options?: Options);
    static get defaultAgent(): string;
    get agent(): string;
    query(url: string, cb?: ((r: AxiosResponse) => Promise<Record<string, unknown>>)): QueryReturns;
    static bundle(base: Function, items: Record<string, string>, options?: BundleOptions): (options?: Options) => QueryReturns;
}
export {};
