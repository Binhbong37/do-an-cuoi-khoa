const XsmnModel = require('../model/xsmn');

let randomNum = Math.floor(Math.random() * 10000);

const G_DB = randomNum;
const G_1 = [randomNum + 1, 3333, 5555, 6789];
const G_2 = [randomNum + 2, 3333, 5555, 6789];
const G_3 = [randomNum + 3, 3333, 5555, 6789];
const G_4 = [randomNum + 4, 3333, 5555, 6789];
const G_5 = [randomNum + 5, 3333, 5555, 6789];
const G_6 = [randomNum + 6, 3333, 5555, 6789];
const G_7 = [randomNum + 7];
const G_8 = [randomNum + 8];
const newkq = {
    G_DB,
    G_1,
    G_2,
    G_3,
    G_4,
    G_5,
    G_6,
    G_7,
    G_8,
};
// Tạo ngày hiện tại để so sánh với db
const month = new Date().getMonth();
const day = new Date().getDate();
let startDay = new Date(2022, month, day, 00, 01, 00, 0);
let endDay = new Date(2022, month, day, 23, 59, 00, 0);

exports.getXSMN_HCM = (req, res) => {
    res.json({
        tphcm: 'ket qua so xo',
    });
};

// HCM
// [POST] xsmn/hcm

exports.postXsmn_HCM = (req, res) => {
    XsmnModel.findOne({ createdAt: { $gte: startDay, $lte: endDay } })
        .then((result) => {
            if (result) {
                // Update neu da co roi
                return XsmnModel.updateOne(
                    { _id: result._id },
                    {
                        $set: {
                            TP_HCM: newkq,
                        },
                    }
                ).then(() => {
                    console.log('Update success');
                    res.redirect('/xsmn/hcm');
                });
            }
            const newXs = new XsmnModel({});
            newXs.TP_HCM.push(newkq);
            return newXs.save().then(() => {
                console.log('Tao thanh cong');
                res.redirect('/xsmn/hcm');
            });
        })
        .catch((err) => console.log(err));
};

// Đồng Nai
exports.getXSMN_DN = (req, res) => {
    res.json({
        Dong_Nai: 'ket qua so xo',
    });
};

exports.postXsmn_DN = (req, res) => {
    XsmnModel.findOne({ createdAt: { $gte: startDay, $lte: endDay } })
        .then((result) => {
            if (result) {
                // Update neu da co roi
                return XsmnModel.updateOne(
                    { _id: result._id },
                    {
                        $set: {
                            Dong_Nai: newkq,
                        },
                    }
                ).then(() => {
                    console.log('Update success');
                    res.redirect('/xsmn/dn');
                });
            }
            const newXs = new XsmnModel({});
            newXs.Dong_Nai.push(newkq);
            return newXs.save().then(() => {
                console.log('Tao thanh cong');
                res.redirect('/xsmn/dn');
            });
        })
        .catch((err) => console.log(err));
};

// Cần Thơ

exports.getXSMN_CT = (req, res) => {
    res.json({
        Can_Tho: 'ket qua so xo',
    });
};

exports.postXsmn_CT = (req, res) => {
    XsmnModel.findOne({ createdAt: { $gte: startDay, $lte: endDay } })
        .then((result) => {
            if (result) {
                // Update neu da co roi
                return XsmnModel.updateOne(
                    { _id: result._id },
                    {
                        $set: {
                            Can_Tho: newkq,
                        },
                    }
                ).then(() => {
                    console.log('Update success');
                    res.redirect('/xsmn/ct');
                });
            }
            const newXs = new XsmnModel({});
            newXs.Can_Tho.push(newkq);
            return newXs.save().then(() => {
                console.log('Tao thanh cong');
                res.redirect('/xsmn/ct');
            });
        })
        .catch((err) => console.log(err));
};
