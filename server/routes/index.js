const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {
  res.status(200).send("OK");
});

module.exports = router;
