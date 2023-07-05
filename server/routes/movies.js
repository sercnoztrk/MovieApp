const express = require('express');
const router = express.Router();
const mongoClient = require("../db/client");
const connectDB = require("../db/connect");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var moviesResult;
  try {
    const db = await connectDB(mongoClient);
    const moviesCollection = await db.collection("movies");
    moviesResult = await moviesCollection.find({}).limit(50).toArray();
  } catch (error) {
    console.error(error);
    res.send(error);
  } finally {
    await mongoClient.close();
  }
  res.send(moviesResult).status(200);
});

module.exports = router;
