const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');


router
    .get('/', paymentController.getClientPayments)
    

module.exports = router;