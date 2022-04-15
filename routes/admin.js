const express = require('express');

const controllerAdmin = require('../controller/admin-Controller');

const router = express.Router();

router.get('/quay-so', controllerAdmin.getQuaySo);
router.post('/quay-so/mn', controllerAdmin.postQuaySoMN);
router.post('/quay-so/mb', controllerAdmin.postQuaySoMB);
router.post('/quay-so/mt', controllerAdmin.postQuaySoMT);
router.get('/xsmn', controllerAdmin.getKetquaMN);

router.get('/user', controllerAdmin.getAllUser);

router.get('/edit/user', controllerAdmin.getEditUser);
router.get('/test', controllerAdmin.getTest);

module.exports = router;
