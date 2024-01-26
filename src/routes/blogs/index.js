const express = require("express");
const postBlogs = require("../../api/blogs/postBlogs");
const router = express.Router();

//post Blogs to DB
router.post("/api/v1/blogs", postBlogs);

module.exports = router;
