const axios = require('axios');
const express = require('express');
const router = express.Router();

const apiKey = process.env.GAMES_API_CLIENT_ID;
const accessToken = process.env.GAMES_API_CLIENT_SECRET_TOKEN;
const apiUrl = process.env.GAMES_API;

router.get('/getcover/:id', async (req, res) => {
    const gameIdGame = req.params.id;
    console.log(gameIdGame, 'IDDDD')
    const gameId = 167455;

    try {
        const response = await axios({
            method: 'post',
            url: apiUrl + 'covers',
            headers: {
                'Client-ID': apiKey,
                'Authorization': `Bearer ${accessToken}`,
            },
            data: `fields alpha_channel,animated,checksum,game,game_localization,height,image_id,url,width; where game = ${gameIdGame};`
        });

        const games = response.data;
        res.json(games);
    } catch (error) {
        console.error('Erreur lors de la requête à l\'API IGDB :', error);
        res.status(500).json({ error: 'Erreur lors de la requête à l\'API IGDB COVER' });
    }
});


module.exports = router;