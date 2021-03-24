import { Options, QueryReturns } from './Base';
/**
 * There's simply too many sheri endpoints to optimally use them all.
 * Check out {@link https://sheri.bot/api/urls} for endpoint names.
 * @param endpoint - The endpoint to use - i.e. `cat`, `yeen`, etc
 * @param options - Library options
 * @returns {Promise<QueryReturns>} - Returns the associated information with that endpoint
 */
export default function Sheri(endpoint: string, options?: Options): QueryReturns;
