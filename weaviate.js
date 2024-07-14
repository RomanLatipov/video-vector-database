import { generateUuid5 } from 'weaviate-client';
import weaviate from 'weaviate-client'
import fs from 'fs';

const client = await weaviate.connectToLocal();
const myCollection = client.collections.get('Video');

const vid = fs.readFileSync('./wind_noise.mp4');
const b64 = Buffer.from(vid).toString('base64');

const dataObj = {
    video: b64,
    text: "wind_noise",
    type: 'video'
}
const uuid = generateUuid5(JSON.stringify(dataObj));

await myCollection.data.insert({
    properties: dataObj,
    id: uuid
})

// fs.writeFileSync(`./result.mp4`, b64, 'base64');
// console.log(b64);