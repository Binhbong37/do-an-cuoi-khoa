const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, require: true },
    name: { type: String, require: true },
    password: { type: String, require: true },
    address: { type: String, require: true },
    role: { type: String, default: 'user' },
    gender: { type: Number, require: true },
    avatar: { type: String, require: true },
});

module.exports = mongoose.model('User', userSchema);
