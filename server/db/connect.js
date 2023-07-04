const { MongoClient } = require('mongodb');
// const movies = require('../movies.json');

const connString = process.env.URI || "";
const client = new MongoClient(connString);

module.exports = async () => {
    var db;
    try {
        const connection = await client.connect();
        db = connection.db("countlyDB");
        return { db, client};
    } catch (error) {
        console.error(error);
    }
};