const saveGame = require("../models/games.model");

const createNewGame = async (req, res) => {
  const { name, price, stock, tags } = req.body;

  const games = new saveGame({
    name,
    price,
    stock,
    tags,
  });

  games
    .save()
    .then(() => {
      res.json({ message: "Game stored." });
    })
    .catch((err) => {
      res.status(500).json({
        message: `There's been an error while trying to store the game: ${err}`,
      });
    });
};

module.exports = createNewGame;
