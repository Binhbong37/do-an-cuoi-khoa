const express = require('express');

const controllerAdmin = require('../controller/admin-Controller');

const router = express.Router();

router.get('/quay-so', controllerAdmin.getQuaySo);

router.get('/user', controllerAdmin.getAllUser);

router.get('/edit/user', controllerAdmin.getEditUser);

module.exports = router;
