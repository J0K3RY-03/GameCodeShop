const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./dbModel');


const gamesSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            required:true,
        },
        tags: {
            type: [String],
            required:true,
        }
    },
    {timestamps: true})

const games = mongoose.model('game', gamesSchema);

module.exports = games;