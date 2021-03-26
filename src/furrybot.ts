import Base, { Options, APIResponse } from './Base';

async function FBBase(endpoint: string, options?: Options): APIResponse {
    const base = new Base(options);

    return await base.query(`https://yiff.rest/v2/${endpoint}?limit=1`, (r => r.data?.images[0]));
}

class Container {
    static valid: Record<string, boolean> = {
        'animals/birb': true,
        'animals/blep': true,
        'animals/cheeta': true,
        'animals/fox': true,
        'animals/lynx': true,
        'animals/wolf': true,
        'furry/boop': true,
        'furry/cuddle': true,
        'furry/flop': true,
        'furry/fursuit': true,
        'furry/hold': true,
        'furry/howl': true,
        'furry/hug': true,
        'furry/kiss': true,
        'furry/lick': true,
        'furry/propose': true,
        'furry/bulge': true,
        'furry/yiff/gay': true,
        'furry/yiff/straight': true,
        'furry/yiff/lesbian': true,
        'furry/yiff/gynomorph': true
    } as const;
}

// I'm too lazy to do these automatically

async function FB(options?: Options): APIResponse {
    const props = Object.keys(Container.valid).slice(0, 16)
    return await FBBase(props[Math.floor(props.length * Math.random())], options)
}

async function FBAnimals(options?: Options): APIResponse {
    const props = Object.keys(Container.valid).slice(0, 16)
    return await FBBase(props[Math.floor(props.length * Math.random())], options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random bird image
 */
async function FBAnimalsBirb(options?: Options): APIResponse {
    return await FBBase('animals/birb', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random blep image
 */
async function FBAnimalsBlep(options?: Options): APIResponse {
    return await FBBase('animals/blep', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random cheeta image
 */
async function FBAnimalsCheeta(options?: Options): APIResponse {
    return await FBBase('animals/cheeta', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random fox image
 */
async function FBAnimalsFox(options?: Options): APIResponse {
    return await FBBase('animals/fox', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random lynx image
 */
async function FBAnimalsLynx(options?: Options): APIResponse {
    return await FBBase('animals/lynx', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random wolf image
 */
async function FBAnimalsWolf(options?: Options): APIResponse {
    return await FBBase('animals/wolf', options)
}

async function FBFurry(options?: Options): APIResponse {
    const props = Object.keys(Container.valid).slice(6, 16)
    return await FBBase(props[Math.floor(props.length * Math.random())], options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random furry boop image
 */
async function FBFurryBoop(options?: Options): APIResponse {
    return await FBBase('furry/boop', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random cuddle image
 */
async function FBFurryCuddle(options?: Options): APIResponse {
    return await FBBase('furry/cuddle', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random furry flop image
 */
async function FBFurryFlop(options?: Options): APIResponse {
    return await FBBase('furry/flop', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random fursuit image
 */
async function FBFurryFursuit(options?: Options): APIResponse {
    return await FBBase('furry/fursuit', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random furry hold image
 */
async function FBFurryHold(options?: Options): APIResponse {
    return await FBBase('furry/hold', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random furry howl image
 */
async function FBFurryHowl(options?: Options): APIResponse {
    return await FBBase('furry/howl', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random furry hug image
 */
async function FBFurryHug(options?: Options): APIResponse {
    return await FBBase('furry/hug', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random furry kiss image
 */
async function FBFurryKiss(options?: Options): APIResponse {
    return await FBBase('furry/kiss', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random furry lick image
 */
async function FBFurryLick(options?: Options): APIResponse {
    return await FBBase('furry/lick', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random furry propose image
 */
async function FBFurryPropose(options?: Options): APIResponse {
    return await FBBase('furry/propose', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random furry bulge image (NSFW)
 */
async function FBFurryBulge(options?: Options): APIResponse {
    return await FBBase('furry/bulge', options)
}

async function FBFurryYiff(options?: Options): APIResponse {
    const props = Object.keys(Container.valid).slice(3)
    return await FBBase(props[Math.floor(props.length * Math.random())], options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random yiff gay image
 */
async function FBFurryYiffGay(options?: Options): APIResponse {
    return await FBBase('furry/yiff/gay', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random yiff straight image
 */
async function FBFurryYiffStraight(options?: Options): APIResponse {
    return await FBBase('furry/yiff/straight', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random yiff lesbian image
 */
async function FBFurryYiffLesbian(options?: Options): APIResponse {
    return await FBBase('furry/yiff/lesbian', options)
}

/**
 * 
 * @param options - Library options
 * @returns - A random yiff gynomorph image
 */
async function FBFurryYiffGynomorph(options?: Options): APIResponse {
    return await FBBase('furry/yiff/gynomorph', options)
}

// Bundle them all to one function

// Animals
Object.defineProperties(FBAnimals, {
    bird: { value: FBAnimalsBirb },
    blep: { value: FBAnimalsBlep },
    cheeta: { value: FBAnimalsCheeta },
    fox: { value: FBAnimalsFox },
    lynx: { value: FBAnimalsLynx },
    wolf: { value: FBAnimalsWolf }
})
// Yiff
Object.defineProperties(FBFurryYiff, {
    gay: { value: FBFurryYiffGay },
    straight: { value: FBFurryYiffStraight },
    lesbian: { value: FBFurryYiffLesbian },
    gynomorph: { value: FBFurryYiffGynomorph }
})
// Furry
Object.defineProperties(FBFurry, {
    yiff: {value: FBFurryYiff },
    boop: { value: FBFurryBoop },
    cuddle: { value: FBFurryCuddle },
    flop: { value: FBFurryFlop },
    fursuit: { value: FBFurryFursuit },
    hold: { value: FBFurryHold },
    howl: { value: FBFurryHowl },
    hug: { value: FBFurryHug },
    kiss: { value: FBFurryKiss },
    lick: { value: FBFurryLick },
    propose: { value: FBFurryPropose },
    bulge: { value: FBFurryBulge }
})
// Bundle the main function
Object.defineProperties(FB, {
    animals: { value: FBAnimals },
    furry: { value: FBFurry },
    yiff: {value: FBFurryYiff }
})

interface FBAnimals {
    /**
     * 
     * @param options - Library options
     * @returns - A random animal image
     */
    (options?: Options): APIResponse;
    bird: typeof FBAnimalsBirb;
    blep: typeof FBAnimalsBlep;
    cheeta: typeof FBAnimalsCheeta;
    fox: typeof FBAnimalsFox;
    lynx: typeof FBAnimalsLynx;
    wolf: typeof FBAnimalsWolf;
}

interface FBFurry {
    /**
     * 
     * @param options - Library options
     * @returns - A random (sfw) furry image
     */
    (options?: Options): APIResponse;
    yiff: FBYiff;
    boop: typeof FBFurryBoop;
    cuddle: typeof FBFurryCuddle;
    flop: typeof FBFurryFlop;
    fursuit: typeof FBFurryFursuit;
    hold: typeof FBFurryHold;
    howl: typeof FBFurryHowl;
    hug: typeof FBFurryHug;
    kiss: typeof FBFurryKiss;
    lick: typeof FBFurryLick;
    propose: typeof FBFurryPropose;
    bulge: typeof FBFurryBulge;
}

interface FBYiff {
    /**
     * 
     * @param options - Library options
     * @returns - A random yiff image
     */
    (options?: Options): APIResponse;
    gay: typeof FBFurryYiffGay;
    straight: typeof FBFurryYiffStraight;
    lesbian: typeof FBFurryYiffLesbian;
    gynomorph: typeof FBFurryYiffGynomorph;
}

export declare interface FB {
    /**
     * 
     * @param options - Library options
     * @returns - A random (sfw) image
     */
    (options?: Options): APIResponse;
    animals: FBAnimals;
    furry: FBFurry;
    yiff: FBYiff;
}

export default <FB>FB