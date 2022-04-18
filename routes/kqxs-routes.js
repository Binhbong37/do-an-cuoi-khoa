const express = require('express');

const controllerKQXS = require('../controller/kqxs-Controller');

const router = express.Router();

// [GET] /ket-qua-xo-so/mien-bac
router.get('/mien-bac', controllerKQXS.getXSMB);
// [GET] /ket-qua-xo-so/mien-nam
router.get('/mien-nam', controllerKQXS.getXSMN);
// [GET] /ket-qua-xo-so/mien-trung
router.get('/mien-trung', controllerKQXS.getXSMT);

module.exports = router;
