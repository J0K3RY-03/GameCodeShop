const router = require('express').Router();
const tags = require('./api.tags');
const gamesRouter = require("./api.games");
const getGames = require('./api.getGames');
const getCoverGames = require('./api.getCoverGame')
const getGameDocumentToDb = require('./api.getGameDocument')

router.use('/tags', tags);
router.use("/", gamesRouter);
router.use('/', getGames);
router.use('/', getCoverGames);
router.use('/', getGameDocumentToDb);

module.exports = router;