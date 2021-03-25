import { AxiosRequestConfig } from "axios";

declare module "furry-wrapper" {
    export interface Options {
        agent?: string;
        token?: string;
        auth?: string;
        axiosOptions?: AxiosRequestConfig;
    }

    export interface BundleOptions {
        /* eslint-disable-next-line @typescript-eslint/ban-types */
        default?: (name: string) => Function;
    }

    export type QueryReturns = Promise<Record<string, unknown> | Error | null>;

    export type Query = Array<string> | string;

    export interface E6Options extends Options {
        noCub?: boolean;
        overideTags?: string;
    }
}