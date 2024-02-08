
const express = require("express");
const postAcceptedChallenge = require("../../../api/challenges/postAcceptedChallenge");

const router = express.Router();

router.post("/api/v1/acceptedChallenges", postAcceptedChallenge);

module.exports = router;