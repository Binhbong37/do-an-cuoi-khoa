const express = require('express');

const controllerAdmin = require('../controller/admin-Controller');

const router = express.Router();

router.get('/quay-so', controllerAdmin.getQuaySo);
router.post('/quay-so/mn', controllerAdmin.postQuaySoMN);
router.post('/quay-so/mb', controllerAdmin.postQuaySoMB);
router.post('/quay-so/mt', controllerAdmin.postQuaySoMT);
router.get('/xsmn', controllerAdmin.getKetquaMN);

router.get('/user', controllerAdmin.getAllUser);

router.get('/user/:userId/edit', controllerAdmin.getEditUser);
router.post('/edit-user', controllerAdmin.postEditUser);
router.post('/delete-many-user', controllerAdmin.deleteManyUser);
router.post('/delete-user/:userId', controllerAdmin.deleteUser);

router.get('/test', controllerAdmin.getTest);

module.exports = router;
