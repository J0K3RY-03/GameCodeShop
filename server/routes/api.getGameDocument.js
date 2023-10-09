const retreiveGame = require('../models/games.model');
const express = require("express");
const router = express.Router();
router.get('/getdocgame', async (req, res) => {
    try {
        const games = await retreiveGame.find({}).limit(9);
        console.log(res.json(games));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur lors de la récupération du nom des jeux' });
    }
});
//
// const retreiveGameDoc = async (req, res) => {
//
// }
module.exports = router;