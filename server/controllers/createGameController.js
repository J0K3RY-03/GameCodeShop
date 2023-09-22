const saveGame = require("../models/games.model");

const createNewGame = async (req,res) => {
    const { name, price, stock, tags } = req.body;

    const games = new saveGame({
        name,
        price,
        stock,
        tags
    });

    games.save()
        .then(() => {
            res.status(200).json({ message: 'Jeu enregistré avec succès' });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Erreur lors de l\'enregistrement du jeu' });
        })
}

module.exports = (createNewGame);
