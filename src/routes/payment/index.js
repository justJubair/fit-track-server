const express = require('express');
const payment = require('../../api/payment/payment');
const checkout = require('../../api/payment/checkout')
const router = express.Router();


// router.post('/create-payment-intent', payment);
router.post('/create-payment-intent', checkout)

module.exports = router;