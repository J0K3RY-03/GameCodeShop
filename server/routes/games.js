const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const saveGame = require('../models/games.model');

router.post('/api/submit', (req, res) => {
    const { name, price, stock } = req.body;

    const games = new saveGame({
        name,
        price,
        stock
    });

    games.save()
        .then(() => {
            res.status(200).json({ message: 'Jeu enregistré avec succès' });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Erreur lors de l\'enregistrement du jeu' });
        })
});

module.exports = router;