const express = require('express');
const router = express.Router();
const axios = require('axios');
const dataOfGame = require('../models/games.model')

const apiKey = process.env.GAMES_API_CLIENT_ID;
const accessToken = process.env.GAMES_API_CLIENT_SECRET_TOKEN;
const apiUrl = process.env.GAMES_API;

router.get('/getsinglegame/:name', async (req, res) => {
    const gameName = req.params.name;
    const idGameDb = req.query.idGameDb;
    const idGameIgdb = req.query.idGameIgdb;

    try {

        const response = await axios({
            method: 'post',
            url: apiUrl + 'games',
            headers: {
                'Client-ID': apiKey,
                'Authorization': `Bearer ${accessToken}`,
            },
            data: `search "${gameName}"; 
             fields name,release_dates,summary,cover,category,tags,screenshots,videos; 
             where category = 0 & name = "${gameName}";`,
        });

        const games = response.data;

        const allDataOfGame = await dataOfGame.findOne({name: gameName});

         if (!allDataOfGame || !games) {
             return res.status(404).json({ message: 'Aucune donnée trouvée' });
         }

        res.json({ name: gameName, idOfDb: idGameDb, idOfIgdb: idGameIgdb, dataOfGame: allDataOfGame, allDataOfGameByAPI: games});
    } catch (error) {
        console.error('Erreur lors de la requête à l\'API IGDB :', error);
        res.status(500).json({ error: 'Erreur lors de la requête à l\'API IGDB' });
    }
});


module.exports = router;