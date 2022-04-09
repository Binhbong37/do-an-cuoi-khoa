const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', require: true },
        numOfTicket: [
            {
                number: { type: String, requried: true },
            },
        ],
        dayOfTicket: { type: String, require: true },
        cityOfTicket: { type: String, require: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Ticket', ticketSchema);
