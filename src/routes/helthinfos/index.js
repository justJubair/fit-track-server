// healthInfoRoutes.js
const express = require("express");
const postHealthInfo = require("../../api/helthinfo/postHealthInfo");

const router = express.Router();

// POST new health information
router.post("/api/v1/healthinfo", postHealthInfo);

module.exports = router;
