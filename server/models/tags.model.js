const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
    tags: {
        type: String,
        required: true,
    },
},
    {timestamps: true}
)

const tags = mongoose.model('tag', tagsSchema);

module.exports = tags;

