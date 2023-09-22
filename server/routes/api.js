const router = require('express').Router();
const tags = require('./api.tags');
const gamesRouter = require("./api.games");

router.use('/tags', tags);
router.use("/", gamesRouter);

module.exports = router;