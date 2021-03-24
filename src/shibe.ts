import Base, { Options, QueryReturns } from './Base';

async function ShibeBase(endpoint: string, options?: Options): QueryReturns {
    const base = new Base(options);

    return await base.query(`https://shibe.online/api/${endpoint}?count=1&urls=true&httpsUrls=true`, (r => r.data[0]));
}

export default Base.bundle(ShibeBase, {
    shibe: 'shibes',
    cat: 'cats',
    bird: 'birds'
})