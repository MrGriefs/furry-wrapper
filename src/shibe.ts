import Base, { Options, APIResponse } from './Base';

async function ShibeBase(endpoint: string, options?: Options): APIResponse {
    const base = new Base(options);

    return await base.query(`https://shibe.online/api/${endpoint}?count=1&urls=true&httpsUrls=true`, (r => r.data[0]));
}

/**
* Uses the Shibe API to retrieve an image of a shibe {@link https://shibe.online}
* @param options - Library options
* @returns - The response from the API
*/
declare function shibe(options?: Options): APIResponse;
/**
* Uses the Shibe API to retrieve an image of a cat {@link https://shibe.online}
* @param options - Library options
* @returns - The response from the API
*/
declare function cat(options?: Options): APIResponse;
/**
* Uses the Shibe API to retrieve an image of a bird {@link https://shibe.online}
* @param options - Library options
* @returns - The response from the API
*/
declare function bird(options?: Options): APIResponse;

export declare interface Shibes {
    /**
    * Uses the Shibe API to retrieve an image of a shibe {@link https://shibe.online}
    * @param options - Library options
    * @returns - The response from the API
    */
    (options?: Options): APIResponse;
    shibe: typeof shibe;
    cat: typeof cat;
    bird: typeof bird;
}

export default <Shibes>Base.bundle(ShibeBase, {
    shibe: 'shibes',
    cat: 'cats',
    bird: 'birds'
})