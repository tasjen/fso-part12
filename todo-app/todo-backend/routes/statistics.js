const express = require('express');
const redis = require('../redis');
const router = express.Router();

/* GET statistics listing. */
router.get('/', async (_, res) => {
  const added_todos = Number(await redis.getAsync('added_todos')) ?? 0;
  res.json({ added_todos });
});

module.exports = router;
