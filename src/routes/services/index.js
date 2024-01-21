const express = require("express");
const getServices = require("../../api/services/getServices");
const router = express.Router();

// GET; all the services
router.get("/api/v1/services", getServices);

module.exports = router;
