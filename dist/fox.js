"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./Base");
async function Fox(options) {
    const base = new Base_1.default(options);
    return await base.query('https://randomfox.ca/floof');
}
exports.default = Fox;
