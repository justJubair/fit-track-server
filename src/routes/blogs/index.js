const express = require("express");
const postBlogs = require("../../api/blogs/postBlogs");
const getBlogs = require("../../api/blogs/getBlogs");
const router = express.Router();

//post Blogs to DB
router.post("/api/v1/blogs", postBlogs);
router.get("/api/v1/all-blogs", getBlogs);

module.exports = router;
