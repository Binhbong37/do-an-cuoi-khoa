const City = require('../model/cities');
const Result = require('../model/result');

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
    res.render('test', {
        path: '',
        pageTitle: 'TEST',
        arr: arr,
    });
};
exports.getQuaySo = (req, res) => {
    res.render('admin/quaySo', {
        path: '/admin/quay-so',
        pageTitle: 'Quay Số',
    });
};

// POST admin/quay-sodk
exports.postQuaySo = (req, res) => {
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

                    return new Result(newkq).save();
                })
                .then(() => {
                    res.redirect('/admin/ket-qua');
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};

// GET admin/quay-sodk

exports.getKetqua = (req, res) => {
    Result.find()
        .populate('cityId')
        .then((allRes) => {
            const dayRes = allRes.map((day) => {
                return day.cityId.date;
            });
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
