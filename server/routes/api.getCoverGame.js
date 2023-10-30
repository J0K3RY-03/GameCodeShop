const axios = require("axios");
const express = require("express");
const router = express.Router();

const gamesApiClientID = process.env.GAMES_API_CLIENT_ID;
const gamesApiToken = process.env.GAMES_API_CLIENT_SECRET_TOKEN;
const gamesApi = process.env.GAMES_API;

router.get('/getcover/:id', async (req, res) => {
    const gameIdGame = req.params.id;
    console.log(gameIdGame, 'IDDDD')
    const gameId = 167455;

    try {
        const response = await axios({
            method: 'post',
            url: gamesApi + 'covers',
            headers: {
                'Client-ID': gamesApiClientID,
                'Authorization': `Bearer ${gamesApiToken}`,
            },
            data: `fields alpha_channel,animated,checksum,game,game_localization,height,image_id,url,width; where game = ${gameIdGame};`
        });

    const games = response.data;
    res.json(games);
  } catch (error) {
    console.error(
      "There's been an error requesting information from the IGDB API: ",
      error
    );
    res.status(500).json({
      error: "There's been an error requesting the cover from the IGDB API",
    });
  }
});


module.exports = router;