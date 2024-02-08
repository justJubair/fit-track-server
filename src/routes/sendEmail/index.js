
const express = require('express');
const router = express.Router();
const { sendEmailController } = require('../../api/email/sendEmailController');

router.get("/api/v1/:email", sendEmailController);

module.exports = router;
