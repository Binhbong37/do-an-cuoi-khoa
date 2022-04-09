const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const xsmnSchema = new Schema(
    {
        TP_HCM: [
            {
                G_DB: { type: Array, require: true },
                G_1: { type: Array, require: true },
                G_2: { type: Array, require: true },
                G_3: { type: Array, require: true },
                G_4: { type: Array, require: true },
                G_5: { type: Array, require: true },
                G_6: { type: Array, require: true },
                G_7: { type: Array, require: true },
                G_8: { type: Array, require: true },
                createdAt: { type: Date, default: Date.now() },
            },
        ],
        Dong_Nai: [
            {
                G_DB: { type: Array, require: true },
                G_1: { type: Array, require: true },
                G_2: { type: Array, require: true },
                G_3: { type: Array, require: true },
                G_4: { type: Array, require: true },
                G_5: { type: Array, require: true },
                G_6: { type: Array, require: true },
                G_7: { type: Array, require: true },
                G_8: { type: Array, require: true },
                createdAt: { type: Date, default: Date.now() },
            },
        ],
        Can_Tho: [
            {
                G_DB: { type: Array, require: true },
                G_1: { type: Array, require: true },
                G_2: { type: Array, require: true },
                G_3: { type: Array, require: true },
                G_4: { type: Array, require: true },
                G_5: { type: Array, require: true },
                G_6: { type: Array, require: true },
                G_7: { type: Array, require: true },
                G_8: { type: Array, require: true },
                createdAt: { type: Date, default: Date.now() },
            },
        ],
        Ca_Mau: [
            {
                G_DB: { type: Array, require: true },
                G_1: { type: Array, require: true },
                G_2: { type: Array, require: true },
                G_3: { type: Array, require: true },
                G_4: { type: Array, require: true },
                G_5: { type: Array, require: true },
                G_6: { type: Array, require: true },
                G_7: { type: Array, require: true },
                G_8: { type: Array, require: true },
                createdAt: { type: Date, default: Date.now() },
            },
        ],
        Tien_Giang: [
            {
                G_DB: { type: Array, require: true },
                G_1: { type: Array, require: true },
                G_2: { type: Array, require: true },
                G_3: { type: Array, require: true },
                G_4: { type: Array, require: true },
                G_5: { type: Array, require: true },
                G_6: { type: Array, require: true },
                G_7: { type: Array, require: true },
                G_8: { type: Array, require: true },
                createdAt: { type: Date, default: Date.now() },
            },
        ],
        Binh_Duong: [
            {
                G_DB: { type: Array, require: true },
                G_1: { type: Array, require: true },
                G_2: { type: Array, require: true },
                G_3: { type: Array, require: true },
                G_4: { type: Array, require: true },
                G_5: { type: Array, require: true },
                G_6: { type: Array, require: true },
                G_7: { type: Array, require: true },
                G_8: { type: Array, require: true },
                createdAt: { type: Date, default: Date.now() },
            },
        ],
        Ben_Tre: [
            {
                G_DB: { type: Array, require: true },
                G_1: { type: Array, require: true },
                G_2: { type: Array, require: true },
                G_3: { type: Array, require: true },
                G_4: { type: Array, require: true },
                G_5: { type: Array, require: true },
                G_6: { type: Array, require: true },
                G_7: { type: Array, require: true },
                G_8: { type: Array, require: true },
                createdAt: { type: Date, default: Date.now() },
            },
        ],
        Long_An: [
            {
                G_DB: { type: Array, require: true },
                G_1: { type: Array, require: true },
                G_2: { type: Array, require: true },
                G_3: { type: Array, require: true },
                G_4: { type: Array, require: true },
                G_5: { type: Array, require: true },
                G_6: { type: Array, require: true },
                G_7: { type: Array, require: true },
                G_8: { type: Array, require: true },
                createdAt: { type: Date, default: Date.now() },
            },
        ],
        Dong_Thap: [
            {
                G_DB: { type: Array, require: true },
                G_1: { type: Array, require: true },
                G_2: { type: Array, require: true },
                G_3: { type: Array, require: true },
                G_4: { type: Array, require: true },
                G_5: { type: Array, require: true },
                G_6: { type: Array, require: true },
                G_7: { type: Array, require: true },
                G_8: { type: Array, require: true },
                createdAt: { type: Date, default: Date.now() },
            },
        ],
    },
    { timestamps: true }
);
module.exports = mongoose.model('xsmn', xsmnSchema);
