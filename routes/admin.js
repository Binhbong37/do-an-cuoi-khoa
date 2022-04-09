const express = require('express');

const controllerAdmin = require('../controller/admin-Controller');

const router = express.Router();

router.get('/quay-so', controllerAdmin.getQuaySo);

module.exports = router;
