const express = require('express');
const getAllTrainers = require('../../api/trainers/getAllTrainers');
const postTrainer = require("../../api/trainers/postTrainer")

const router = express.Router();


// GET; all the trainers
router.get('/api/v1/trainers', getAllTrainers)


// POST; a trainer
router.post("/api/v1/trainers", postTrainer)

module.exports = router;