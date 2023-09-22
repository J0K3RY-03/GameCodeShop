const express = require('express');
const router = express.Router();
const createNewGame = require('../controllers/createGameController');

router.post('/submit/game', createNewGame);

module.exports = router;