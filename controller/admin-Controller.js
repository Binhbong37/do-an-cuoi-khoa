const City = require('../model/cities');
const Result = require('../model/result');
const Tiket = require('../model/ticketResult');

let randomNum = Math.floor(Math.random() * 90000) + 100000; // 6 số
let randomNum1 = Math.floor(Math.random() * 90000) + 10000; // 5 số
let randomNum2 = Math.floor(Math.random() * 90000) + 1000; // 4 số
let randomNum3 = Math.floor(Math.random() * 90000) + 100; // 3 số
let randomNum4 = Math.floor(Math.random() * 90000) + 10; // 2 số

const G_DB = randomNum;
const G_1 = [randomNum1];
const G_2 = [randomNum1 + 5];
const G_3 = [randomNum1 + 3, randomNum1 + 9];
const G_4 = [
    randomNum1 + 7,
    randomNum1 + 14,
    randomNum1 + 2,
    randomNum1 + 6,
    randomNum1 + 9,
];
const G_5 = [randomNum2];
const G_6 = [randomNum2 + 6, randomNum2 + 12, randomNum2 + 11];
const G_7 = [randomNum3];
const G_8 = [randomNum4];
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

exports.getAllUser = (req, res) => {
    res.render('admin/user', {
        path: '/admin/user',
        pageTitle: 'List User',
        user: [
            { id: 1, name: 'Hoan Van Binh' },
            { id: 2, name: 'Hoan Van Binh' },
            { id: 3, name: 'Hoan Van Binh 2' },
        ],
    });
};

exports.getEditUser = (req, res) => {
    res.render('admin/edit-user', {
        path: '',
        pageTitle: 'Chỉnh sửa',
    });
};

const arr = [
    { day: 13, city: [59, 60, 49, 12, 17, 84] },
    { day: 14, city: [47, 64, 66, 69, 99, 63] },
    { day: 15, city: [59, 64, 12, 98, 16] },
];
exports.getTest = (req, res) => {
    Promise.all([Tiket.find(), Result.find()])
        .then(([ticket, result]) => {
            res.render('test', {
                path: '',
                pageTitle: 'TEST',
                arr: arr,
            });
        })
        .catch((err) => console.log(err));
};
exports.getQuaySo = (req, res) => {
    res.render('admin/quaySo', {
        path: '/admin/quay-so',
        pageTitle: 'Quay Số',
    });
};

// POST admin/quay-so/mn
exports.postQuaySoMN = (req, res) => {
    const { city, date } = req.body;
    const newCity = {
        name: city,
        date,
    };
    const cityDb = new City(newCity);
    City.findOne({ name: city, date: date })
        .then((city) => {
            if (city) {
                console.log('K hop le');
                return res.redirect('/admin/quay-so');
            }
            cityDb
                .save()
                .then((result) => {
                    return result;
                })
                .then((re2) => {
                    newkq.cityId = re2._id;
                    newkq.role = 'mn';

                    return new Result(newkq).save();
                })
                .then(() => {
                    console.log('CREATE MN');
                    res.redirect('/admin/xsmn');
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};
// POST admin/quay-so/mb
exports.postQuaySoMB = (req, res) => {
    const { city, date } = req.body;
    const newCity = {
        name: city,
        date,
    };
    const cityDb = new City(newCity);
    City.findOne({ name: city, date: date })
        .then((city) => {
            if (city) {
                console.log('K hop le');
                return res.redirect('/admin/quay-so');
            }
            cityDb
                .save()
                .then((result) => {
                    return result;
                })
                .then((re2) => {
                    newkq.cityId = re2._id;
                    newkq.role = 'mb';

                    return new Result(newkq).save();
                })
                .then(() => {
                    console.log('CREATE MB');
                    res.redirect('/admin/xsmn');
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};
// POST admin/quay-so/mt
exports.postQuaySoMT = (req, res) => {
    const { city, date } = req.body;
    const newCity = {
        name: city,
        date,
    };
    const cityDb = new City(newCity);
    City.findOne({ name: city, date: date })
        .then((city) => {
            if (city) {
                console.log('K hop le');
                return res.redirect('/admin/quay-so');
            }
            cityDb
                .save()
                .then((result) => {
                    return result;
                })
                .then((re2) => {
                    newkq.cityId = re2._id;
                    newkq.role = 'mt';

                    return new Result(newkq).save();
                })
                .then(() => {
                    console.log('CREATE MT');
                    res.redirect('/admin/xsmn');
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};

// GET admin/quay-so/mn

exports.getKetquaMN = (req, res) => {
    Result.find({ role: 'mn' })
        .populate('cityId')
        .then((allRes) => {
            const dayRes = allRes.map((day) => {
                return day.cityId.date;
            });
            // Lọc phần từ trùng nhau trong 1 mảng, push qua bảng mới
            let newArr = [];
            for (let i = 0; i < dayRes.length; i++) {
                if (newArr.indexOf(dayRes[i]) === -1) {
                    newArr.push(dayRes[i]);
                }
            }
            res.render('xsmn/xsmn', {
                path: '/xsmn',
                pageTitle: 'Xổ số Miền Nam',
                allRes,
                day: newArr,
            });
        })
        .catch((err) => console.log(err));
};
