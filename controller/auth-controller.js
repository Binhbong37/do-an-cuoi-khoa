const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../model/user');

exports.getSignup = (req, res) => {
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Đăng ký',
        messageErr: '',
        oldInput: { name: '', email: '', password: '' },
        validationErr: [],
    });
};

exports.postSignup = (req, res) => {
    const { name, email, password, address, gender } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).render('auth/signup', {
            path: '/signup',
            pageTitle: 'Đăng ký',
            messageErr: errors.array()[0].msg,
            oldInput: { name, email, password },
            validationErr: errors.array(),
        });
    }
    bcrypt
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
        })
        .catch((err) => console.log(err));
};

exports.getLogin = (req, res) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Đăng nhập',
        messageErr: '',
        oldInput: { email: '', password: '' },
    });
};
exports.postLogin = (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).render('auth/login', {
            path: '/login',
            pageTitle: 'Đăng Nhập',
            messageErr: errors.array()[0].msg,
            oldInput: { email, password },
            validationErr: errors.array(),
        });
    }
    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                return res.status(422).render('auth/login', {
                    path: '/login',
                    pageTitle: 'Đăng Nhập',
                    messageErr: 'Không đúng email hoặc password',
                    oldInput: { email, password },
                    validationErr: [],
                });
            }
            bcrypt.compare(password, user.password).then((doMatch) => {
                if (doMatch) {
                    return res.redirect('/xsmb');
                }
                return res.status(422).render('auth/login', {
                    path: '/login',
                    pageTitle: 'Đăng Nhập',
                    messageErr: 'Không đúng password',
                    oldInput: { email, password },
                    validationErr: [],
                });
            });
        })
        .catch((err) => console.log(err));
};
