const express = require('express');

const controllerTicket = require('../controller/ticket-controller');

const router = express.Router();

// [POST] /ticket
// Private
router.post('/ticket', controllerTicket.postTicket);

module.exports = router;
