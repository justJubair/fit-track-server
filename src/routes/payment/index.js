const express = require('express');
const checkout = require('../../api/payment/checkout')
const router = express.Router();


router.post('/create-payment-intent', checkout)

module.exports = router;