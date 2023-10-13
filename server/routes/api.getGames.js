const express = require('express');
const router = express.Router();
const axios = require('axios');

const gamesApiClientID = process.env.GAMES_API_CLIENT_ID;
const gamesApiToken = process.env.GAMES_API_CLIENT_SECRET_TOKEN;
const gamesApi = process.env.GAMES_API;

router.get('/getgame/:name', async (req, res) => {
    const gameName = req.params.name;

  try {
    const response = await axios({
      method: "post",
      url: gamesApi + "games",
      headers: {
        "Client-ID": gamesApiClientID,
        Authorization: `Bearer ${gamesApiToken}`,
      },
      data: `search "${gameName}"; 
             fields name,release_dates,summary,cover,category; 
             where category = 0 & name = "${gameName}";`,
        });

    const games = response.data;
    res.json(games);
  } catch (error) {
    console.error(
      "There's been an error requesting information from the IGDB API :",
      error
    );
    res
      .status(500)
      .json({
        error: "There's been an error requesting information from the IGDB API",
      });
  }
});


module.exports = router;