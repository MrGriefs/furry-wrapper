"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./Base");
/**
 * There's simply too many sheri endpoints to optimally use them all.
 * Check out {@link https://sheri.bot/api/urls} for endpoint names.
 * @param endpoint - The endpoint to use - i.e. `cat`, `yeen`, etc
 * @param options - Library options
 * @returns {Promise<QueryReturns>} - Returns the associated information with that endpoint
 */
async function Sheri(endpoint, options) {
    const base = new Base_1.default(options);
    return await base.query(`https://sheri.bot/api/${endpoint}?format=json`);
}
exports.default = Sheri;
