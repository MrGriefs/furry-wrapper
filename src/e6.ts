import Base, { Options, QueryReturns } from './Base';

export type Query = Array<string> | string;

export interface E6Options extends Options {
    noCub?: boolean;
    overideTags?: string;
}

async function E6Base(endpoint: string, query?: Query, options?: E6Options): QueryReturns {
    if (typeof query === 'undefined') query = '';
    if (Array.isArray(query)) query = query.join(' ')
    const base = new Base(options);

    let url: string;
    if (endpoint === 'e926') url = `https://e926.net/posts.json?limit=1&tags=order:random ${query}` + (options?.overideTags ? ` ${options?.overideTags}` : '')
    else url = `https://e621.net/posts.json?limit=1&tags=order:random ${query}` + (options?.noCub ? '' : ' -young') + (options?.overideTags ? ` ${options?.overideTags}` : '')

    return await base.query(url, r => r.data?.posts[0]);
}

export default Base.bundle(E6Base, {
    nsfw: 'e621',
    sfw: 'e926'
}, {
    default: (name) => {
        return async function (query: Query, options?: E6Options): QueryReturns {
            return await E6Base(name, query, options)
        }
    }
})