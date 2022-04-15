const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resultSchema = new Schema({
    G_DB: { type: Array, require: true },
    G_1: { type: Array, require: true },
    G_2: { type: Array, require: true },
    G_3: { type: Array, require: true },
    G_4: { type: Array, require: true },
    G_5: { type: Array, require: true },
    G_6: { type: Array, require: true },
    G_7: { type: Array, require: true },
    G_8: { type: Array, require: true },
    cityId: { type: Schema.Types.ObjectId, ref: 'Cities', required: true },
    role: { type: String },
});

module.exports = mongoose.model('Result', resultSchema);
