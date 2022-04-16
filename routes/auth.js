const express = require('express');

const authController = require('../controller/auth-controller');

const router = express.Router();

router.get('/signup', authController.getSignup);

router.post('/signup', authController.postSignup);

router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);

module.exports = router;
