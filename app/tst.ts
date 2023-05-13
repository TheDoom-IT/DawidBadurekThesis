import * as fs from 'fs';

const file = fs.readFileSync('./src/static/exemplary-data.json');
const data = JSON.parse(file.toString());

const TRACKS_NUMBER = 10;
const POINTS_NUMBER = 100;

function getRandom(size: number, range = 100): number[] {
    const result = new Array(size);
    for (let x = 0; x < result.length; x++) {
        result[x] = Math.random() * range * (Math.random() > 0.5 ? 1 : -1);
    }
    return result;
}

data['mCalo'] = [];
data['mTracks'] = data['mTracks'].slice(0, 1);

const track = data['mTracks'][0];
const toAdd = [];
for (let x = 0; x < TRACKS_NUMBER; x++) {
    toAdd.push({
        ...track,
        time: getRandom(1, 1000)[0],
        count: POINTS_NUMBER,
        mPolyX: getRandom(POINTS_NUMBER),
        mPolyY: getRandom(POINTS_NUMBER),
        mPolyZ: getRandom(POINTS_NUMBER),
    });
}
data['mTracks'] = toAdd;

fs.writeFileSync('output.json', JSON.stringify(data));
