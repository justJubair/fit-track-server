const express = require("express");
const getChallenges = require("../../api/challenges/getChallenges");
const router = express.Router();

router.get("/api/v1/challenges", getChallenges);

module.exports = router;