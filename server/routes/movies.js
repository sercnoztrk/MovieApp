const express = require('express');
const router = express.Router();
const mongoClient = require("../db/client");
const connectDB = require("../db/connect");

router.get('/', async function(req, res, next) {
  var moviesResult;
  try {
    const db = await connectDB(mongoClient);
    const moviesCollection = await db.collection("movies");
    // moviesResult = await moviesCollection.find({}).limit(100).toArray();
    moviesResult = await moviesCollection.aggregate([{ $sample: { size: 50 } }]).toArray();     // Randomly pick 50 movies from DB
  } catch (error) {
    console.error(error);
    res.send(error);
  } finally {
    await mongoClient.close();
  }
  res.send(moviesResult).status(200);
});

router.get('/:id', async function(req, res, next) {
  // Used React Router v6 for testing purposes
});

module.exports = router;
