const express = require("express");
const getDietPlan = require("../../api/dietplan/getDietPlan");

const router = express.Router();

router.get("/api/v1/dietplan/:email", getDietPlan);

module.exports = router;
