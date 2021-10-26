import { timeParse, timeFormat } from 'd3';

const strToArray = (str) => {
    return str.split(',').map(s => s.trim());
};

const makeSlug = (str) => {
    return str.toLowerCase().replace(/\s/g, '_');
};

export default function parseStories( { data, keys } ){

    const parseDate = timeParse('%d/%m/%Y');
    const formatMonth = timeFormat("%B %Y");

    const clean = data.map(d => ({
        ...d,
    // date: formatDate(d.date),
    path: `https://thedivtagguy/${d.url}`,
    date: parseDate(d.date),
    month: formatMonth(parseDate(d.date)),
    author: strToArray(d.author),
    slug: makeSlug(d.url),
    img: makeSlug(d.url),
    keyword: strToArray(d.keyword),
    cat: strToArray(d.cat),
    }));

    const result = clean.map(d => {
        const output = {};
        keys.forEach(key => output[key] = d[key]);
        return output;
    });
    return result;
}