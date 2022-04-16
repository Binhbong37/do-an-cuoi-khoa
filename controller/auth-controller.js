const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const User = require('../model/user');

exports.getSignup = (req, res) => {
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Đăng ký',
    });
};

exports.postSignup = (req, res) => {
    const { name, email, password, address, gender } = req.body;
    User.findOne({ email: email })
        .then((user) => {
            if (user) {
                return res.redirect('/signup');
            }
            return bcrypt
                .hash(password, 12)
                .then((hashedPass) => {
                    const avatar = gravatar.url(email, {
                        s: '200',
                        r: 'pg',
                        d: 'mm',
                    });
                    const user = new User({
                        email,
                        password: hashedPass,
                        name,
                        address,
                        avatar,
                        gender,
                    });
                    return user.save();
                })
                .then(() => {
                    res.redirect('/login');
                });
        })
        .catch((err) => console.log(err));
};

exports.getLogin = (req, res) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Đăng nhập',
    });
};
exports.postLogin = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                console.log('K co User');
                return res.redirect('/login');
            }
            bcrypt.compare(password, user.password).then((doMatch) => {
                if (doMatch) {
                    return res.redirect('/xsmb');
                }
                console.log('Pass not match');
                return res.redirect('/login');
            });
        })
        .catch((err) => console.log(err));
};
