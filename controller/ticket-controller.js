const Ticket = require('../model/ticketResult');

exports.postTicket = (req, res) => {
    const { dayOfTicket, cityOfTicket, numOfTicket } = req.body;
    let newNumber = {
        number: numOfTicket,
    };
    let newTicket = {
        userId: req.user,
        numOfTicket: [{ number: numOfTicket }],
        dayOfTicket: dayOfTicket,
        cityOfTicket: cityOfTicket,
    };

    const newVe = new Ticket(newTicket);
    Ticket.findOne({ dayOfTicket: dayOfTicket, cityOfTicket: cityOfTicket })
        .then((result) => {
            // Kiểm tra nếu đã có vé đó thì thêm kq số vào mảng
            if (result) {
                return Ticket.updateOne(
                    { _id: result._id },
                    { $push: { numOfTicket: newNumber } }
                );
            }
            return newVe.save().then(() => console.log('Tao ve do thanh cong'));
        })
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => console.log(err));
};
