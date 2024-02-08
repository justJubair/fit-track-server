const express = require('express');
const getAllUser = require('../../api/trainer/getAllTrainers');

const router = express.Router();

router.get('/api/v1/trainers', getAllUser)

module.exports = router;