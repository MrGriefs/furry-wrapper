"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./Base");
async function ShibeBase(endpoint, options) {
    const base = new Base_1.default(options);
    return await base.query(`https://shibe.online/api/${endpoint}?count=1&urls=true&httpsUrls=true`, (r => r.data[0]));
}
exports.default = Base_1.default.bundle(ShibeBase, {
    shibe: 'shibes',
    cat: 'cats',
    bird: 'birds'
});
