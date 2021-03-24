"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./Base");
async function E6Base(endpoint, query, options) {
    if (typeof query === 'undefined')
        query = '';
    if (Array.isArray(query))
        query = query.join(' ');
    const base = new Base_1.default(options);
    let url;
    if (endpoint === 'e926')
        url = `https://e926.net/posts.json?limit=1&tags=order:random ${query}` + (options?.overideTags ? ` ${options?.overideTags}` : '');
    else
        url = `https://e621.net/posts.json?limit=1&tags=order:random ${query}` + (options?.noCub ? '' : ' -young') + (options?.overideTags ? ` ${options?.overideTags}` : '');
    return await base.query(url);
}
exports.default = Base_1.default.bundle(E6Base, {
    nsfw: 'e621',
    sfw: 'e926'
}, {
    default: (name) => {
        return async function (query, options) {
            return await E6Base(name, query, options);
        };
    }
});
