import { timeParse, timeFormat } from 'd3';
import filterStoryProps from './filterStoryProps';


const strToArray = (str) => {
    return str.split(',').map(s => s.trim());
};

const makeSlug = (str) => {
    return str.toLowerCase().replace(/\s/g, '_');
};

const imgName = (str) => {
    return str.toLowerCase().replace(/[-,/]/g, '_');
}

const keys = ["url","date","heading","desc","cat","author","keyword","published", "img", "path", "slug", "month", "date"]

// Take in a story and key and return a cleaned version of the story
// with the key and value removed
const parseStories = (story, key) => {
 const result = story.map(d => {
    const output = {};
    key.forEach(keys => output[keys] = d[keys]);
    return output;
});
    const storiesData = result.map(d => {
        const output = {};
        output.heading = d.heading;
        output.slug = makeSlug(d.heading);
        output.author = strToArray(d.author);
        output.date = timeParse('%Y-%m-%d')(d.date);
        output.description = d.desc;
        output.keyword = strToArray(d.keyword);
        output.published = d.published;
        output.category = strToArray(d.cat);
        output.url = d.url;
        return output;
    }
    );
    return storiesData;
};

export default parseStories;