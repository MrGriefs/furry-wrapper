import Base, { Options, APIResponse } from './Base';

export type Query = Array<string> | string;

export interface E6Options extends Options {
    noCub?: boolean;
    overrideTags?: string;
}

async function E6Base(endpoint: string, query?: Query, options?: E6Options): APIResponse {
    if (typeof query === 'undefined') query = '';
    if (Array.isArray(query)) query = query.join(' ')
    const base = new Base(options);

    let url: string;
    if (endpoint === 'e926') url = `https://e926.net/posts.json?limit=1&tags=order:random ${query}` + (options?.overrideTags ? ` ${options?.overrideTags}` : '')
    else url = `https://e621.net/posts.json?limit=1&tags=order:random ${query}` + (options?.noCub ? '' : ' -young') + (options?.overrideTags ? ` ${options?.overrideTags}` : '')

    return await base.query(url, r => r.data?.posts[0]);
}

/**
* Uses the E621 API to retrieve data of a random post {@link https://e621.net}
* @param options - Library options
* @returns - The response from the API
*/
declare function E621(options?: Options): APIResponse;

/**
* Uses the E926 API to retrieve data of a random post {@link https://e926.net}
* @param options - Library options
* @returns - The response from the API
*/
declare function E926(options?: Options): APIResponse;

export declare interface E6 {
    /**
* Uses the E621 API to retrieve data of a random post {@link https://e621.net}
* @param options - Library options
* @returns - The response from the API
*/
    (options?: Options): APIResponse;
    nsfw: typeof E621;
    sfw: typeof E926;
}

export default <E6>Base.bundle(E6Base, {
    nsfw: 'e621',
    sfw: 'e926'
}, {
    default: (name) => {
        return async function (query: Query, options?: E6Options): APIResponse {
            return await E6Base(name, query, options)
        }
    }
})