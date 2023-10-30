const router = require('express').Router();
const tags = require('./api.tags');
const gamesRouter = require("./api.games");
const getGames = require('./api.getGames');
const getCoverGames = require('./api.getCoverGame')
const getGameDocumentToDb = require('./api.getGameDocument')
const getSingleGame = require('./api.getSingleGame')
const getScreenshots = require('./api.getScreenshots')
const getVideoOfGame = require('./api.getVideoOfGame')

router.use('/tags', tags);
router.use("/", gamesRouter);
router.use('/', getGames);
router.use('/', getCoverGames);
router.use('/', getGameDocumentToDb);
router.use('/', getSingleGame);
router.use('/', getScreenshots);
router.use('/', getVideoOfGame);

module.exports = router;