import Base, { Options, APIResponse } from './Base';

/**
 * There's simply too many sheri endpoints to optimally use them all.  
 * Check out {@link https://sheri.bot/api/urls} for endpoint names.
 * @param endpoint - The endpoint to use - i.e. `cat`, `yeen`, etc
 * @param options - Library options
 * @returns - Returns the associated information with that endpoint
 */
export default async function Sheri(endpoint: string, options?: Options): APIResponse {
    const base = new Base(options);

    return await base.query(`https://sheri.bot/api/${endpoint}?format=json`);
}