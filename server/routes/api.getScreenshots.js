const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = process.env.GAMES_API_CLIENT_ID;
const accessToken = process.env.GAMES_API_CLIENT_SECRET_TOKEN;
const apiUrl = process.env.GAMES_API;

router.get('/getscreenshots/:id', async (req, res) => {
    const gameId = req.params.id;

    try {

        const response = await axios({
            method: 'post',
            url: apiUrl + 'screenshots',
            headers: {
                'Client-ID': apiKey,
                'Authorization': `Bearer ${accessToken}`,
            },
            data: ` 
             fields alpha_channel,animated,checksum,game,height,image_id,url,width; 
             where game = ${gameId};`,
        });

        const games = response.data;

        res.json(games);
    } catch (error) {
        console.error('Erreur lors de la requête à l\'API IGDB :', error);
        res.status(500).json({ error: 'Erreur lors de la requête à l\'API IGDB' });
    }
});


module.exports = router;