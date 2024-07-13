// import weaviate from 'weaviate-client';
import weaviate from 'weaviate-ts-client';

// const client = await weaviate.connectToLocal();
const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

const schemaConfig = {
    "class": "Video",
    "vectorizer": "multi2vec-bind",
    "moduleConfig": {
        "multi2vec-bind": {
        "textFields": ["text"],
        "imageFields": ["image"],
        "audioFields": ["audio"],
        "videoFields": ["video"],
        }
    },
    "properties": [
        {
        "dataType": ["text"],
        "name": "text"
        },
        {
        "dataType": ["blob"],
        "name": "image"
        },
        {
        "dataType": ["blob"],
        "name": "audio"
        },
        {
        "dataType": ["blob"],
        "name": "video"
        }
    ]
}

await client.schema.classCreator().withClass(schemaConfig).do();