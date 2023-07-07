const path = require("path");
const mongoClient = require("./client");
const fs = require('fs');

function readJSONFile() {
    const data = fs.readFileSync(path.join(__dirname, "..", "movies.json"), 'utf8');
    const dataLines = data.split("\n");
    var parsedLine;
    for (let i = 0; i < dataLines.length; i++) {
        parsedLine = JSON.parse(dataLines[i]);
        delete parsedLine['_id'];
        parsedLine.reviews = [];    // Append reviews field.
        dataLines[i] = parsedLine;
    }
    return dataLines;
}

const insertMovies = async () => {
    const connect = await mongoClient.connect();
    const db = connect.db("countlyDB");
    var insertResult;
    try {
        const moviesCollection = db.collection("movies");
        const documentCount = await moviesCollection.estimatedDocumentCount();
        if (documentCount < 1) {
            const docs = readJSONFile();
            insertResult = await moviesCollection.insertMany(docs);
            console.log("Movie collection created and " + insertResult.insertedCount + " documents were inserted.");
        }
    } catch (error) {
        console.error(error);
    } finally {
        await mongoClient.close();
    }
}

insertMovies();