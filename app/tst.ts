import * as fs from 'fs';

const file = fs.readFileSync('./track-100.json');
const data = JSON.parse(file.toString());

function getRandom(size: number): number[] {
    const result = new Array(size);
    for (let x = 0; x < result.length; x++) {
        result[x] = Math.random() * 100 * (Math.random() > 0.5 ? 1 : -1);
    }
    return result;
}

// data['mCalo'] = [];
// data['mTracks'] = data['mTracks'].slice(0, 100);
// //@ts-ignore
// data['mTracks'].forEach((track, index) => {
//     data['mTracks'][index] = {
//         ...track,
//         count: 100,
//         mPolyX: getRandom(100),
//         mPolyY: getRandom(100),
//         mPolyZ: getRandom(100),
//     };
// });

const toAdd = [];
for (let x = 0; x < 9; x++) {
    toAdd.push(...JSON.parse(JSON.stringify(data['mTracks'])));
}
data['mTracks'].push(...toAdd);

fs.writeFileSync('output.json', JSON.stringify(data));
