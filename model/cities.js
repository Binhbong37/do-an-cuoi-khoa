const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: { type: String, require: true },
    date: { type: String, required: true },
});

module.exports = mongoose.model('Cities', citySchema);
