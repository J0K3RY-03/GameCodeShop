const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = "puhhutxn965fly2yj9k5fhinuljumu";
const accessToken = "7n0l4nc38d39uq636essk3qtijrzcg";
const apiUrl = "https://api.igdb.com/v4/";

router.get("/getgame/:name", async (req, res) => {
  const gameName = req.params.name;

  try {
    const response = await axios({
      method: "post",
      url: apiUrl + "games",
      headers: {
        "Client-ID": apiKey,
        Authorization: `Bearer ${accessToken}`,
      },
      data: `search "${gameName}"; 
             fields name,release_dates,summary,cover,category; 
             where category = 0 & name = "${gameName}";`,
    });

    const games = response.data;
    res.json(games);
  } catch (error) {
    console.error("Erreur lors de la requête à l'API IGDB :", error);
    res.status(500).json({ error: "Erreur lors de la requête à l'API IGDB" });
  }
});

module.exports = router;
