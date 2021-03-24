import Base, { Options, QueryReturns } from './Base';

async function Fox(options?: Options): QueryReturns {
    const base = new Base(options);

    return await base.query('https://randomfox.ca/floof');
}

export default Fox