const express = require('express');

const controllerAdmin = require('../controller/admin-Controller');

const router = express.Router();

router.get('/quay-so', controllerAdmin.getQuaySo);
router.post('/quay-so', controllerAdmin.postQuaySo);
router.get('/xsmn', controllerAdmin.getKetqua);

router.get('/user', controllerAdmin.getAllUser);

router.get('/edit/user', controllerAdmin.getEditUser);
router.get('/test', controllerAdmin.getTest);

module.exports = router;
