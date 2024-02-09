const express = require("express");
const getServices = require("../../api/services/getServices");
const getSingleService = require("../../api/services/getSingleService")
const router = express.Router();

// GET; all the services
router.get("/api/v1/services", getServices);

// GET; a single service
router.get("/api/v1/service/:id", getSingleService)

module.exports = router;
