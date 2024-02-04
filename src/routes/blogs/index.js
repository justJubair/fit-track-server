const express = require("express");
const postBlogs = require("../../api/blogs/postBlogs");
const getBlogs = require("../../api/blogs/getBlogs");
const patchLikes = require("../../api/blogs/patchLikes");
const patchDisLikes = require("../../api/blogs/patchDisLikes");
const getBlog = require("../../api/blogs/getBlog");
const router = express.Router();

//post Blogs to DB
router.post("/api/v1/blogs", postBlogs);
router.get("/api/v1/all-blogs", getBlogs);
router.patch("/api/v1/like", patchLikes);
router.patch("/api/v1/Dislike", patchDisLikes);
router.get("/api/v1/blog/:id", getBlog);

module.exports = router;
