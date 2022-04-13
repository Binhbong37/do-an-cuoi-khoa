const express = require('express');

const authController = require('../controller/auth-controller');

const router = express.Router();

router.get('/signup', authController.getSingup);

router.post('/signup', authController.postSingup);

router.get('/login', authController.getLogin);

module.exports = router;
