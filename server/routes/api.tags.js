const express = require('express');
const router = express.Router();
const dataTags = require('../models/tags.model')

router.get('/', async (req, res) => {
    try {
        const data = await dataTags.find();
        console.log(data)
        if (!data) {
            return res.status(404).json({ message: 'Aucune donnée trouvée' });
        }
        res.json(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
        res.status(500).json({ message: 'Erreur serveuf' });
    }
});



module.exports = router;