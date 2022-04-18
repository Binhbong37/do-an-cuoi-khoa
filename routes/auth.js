const express = require('express');
const { check, body } = require('express-validator');

const authController = require('../controller/auth-controller');
const User = require('../model/user');

const router = express.Router();

router.get('/signup', authController.getSignup);

router.post(
    '/signup',
    [
        check('email')
            .isEmail()
            .withMessage('Nhập email hợp lệ')
            .custom((value, { req }) => {
                return User.findOne({ email: value }).then((userDoc) => {
                    if (userDoc) {
                        return Promise.reject(
                            'Email đã tồn tại, chọn một email khác'
                        );
                    }
                });
            })
            .normalizeEmail(),
        body('name', 'Tên lớn hơn 4 ký tự').isLength({ min: 4 }).trim(),
        body('password', 'Mật khẩu chỉ chứa số và chữ ít nhất 5 ký tự')
            .isLength({ min: 5 })
            .isAlphanumeric()
            .trim(),
        body('password1').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Xác nhận passwork sai, vui lòng nhập lại');
            }
            return true;
        }),
    ],
    authController.postSignup
);

router.get('/login', authController.getLogin);

router.post(
    '/login',
    [
        check('email')
            .isEmail()
            .withMessage('Vui lòng điền đúng Email')
            .normalizeEmail(),
        body('password', 'Pass lơn hơn 5 ký tự')
            .isLength({ min: 5 })
            .isAlphanumeric()
            .trim(),
    ],
    authController.postLogin
);

module.exports = router;
