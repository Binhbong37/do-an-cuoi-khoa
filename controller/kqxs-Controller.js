const Result = require('../model/result');

exports.getXSMB = (req, res) => {
    res.render('xsmb/index', {
        path: '/xsmb',
        pageTitle: 'Kết quả XSMB',
    });
};

exports.getXSMN = (req, res) => {
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
exports.getXSMT = (req, res) => {
    Result.find({ role: 'mt' })
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
            res.render('xsmt/index', {
                path: '/xsmt',
                pageTitle: 'Xổ số Miền Trung',
                allRes,
                day: newArr,
            });
        })
        .catch((err) => console.log(err));
};
