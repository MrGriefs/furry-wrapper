import { Options, QueryReturns } from './Base';
export declare type Query = Array<string> | string;
export interface E6Options extends Options {
    noCub?: boolean;
    overideTags?: string;
}
declare const _default: (options?: Options | undefined) => QueryReturns;
export default _default;
