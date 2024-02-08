const express = require('express');
const getAllTrainers = require('../../api/trainers/getAllTrainers');

const router = express.Router();

router.get('/api/v1/trainers', getAllTrainers)

module.exports = router;