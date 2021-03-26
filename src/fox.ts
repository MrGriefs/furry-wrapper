import Base, { Options, APIResponse } from './Base';

/**
 * Uses the RandomFox API to retrieve an image of a fox {@link https://randomfox.ca}
 * @param options - Library options
 * @returns - A random fox image
 */
async function Fox(options?: Options): APIResponse {
    const base = new Base(options);

    return await base.query('https://randomfox.ca/floof');
}

export default Fox