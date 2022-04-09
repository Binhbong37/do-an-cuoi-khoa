const express = require('express');

const controllerXSMN = require('../controller/xsmn-Controller');

const router = express.Router();

// [GET] xsmn/hcm
// Public
router.get('/hcm', controllerXSMN.getXSMN_HCM);

// [POST] xsmn/hcm
// Private
router.post('/hcm', controllerXSMN.postXsmn_HCM);

router.get('/dn', controllerXSMN.getXSMN_DN);

router.post('/dn', controllerXSMN.postXsmn_DN);

router.get('/ct', controllerXSMN.getXSMN_CT);

router.post('/ct', controllerXSMN.postXsmn_CT);

module.exports = router;
