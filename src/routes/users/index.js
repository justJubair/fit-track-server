const express = require("express");
const updateWatchHistory = require("../../api/users/updateWatchHistory");
const getUsers = require("../../api/users/getUsers");
const getSingleUser = require("../../api/users/getSingleUser");
const updateBookmark = require("../../api/users/updateBookmark");
const postDataInUserFriendList = require("../../api/users/postDataInUserFriendList");
const router = express.Router();

// updating userwatch history
router.get("/api/v1/users", getUsers);
router.patch("/api/v1/updatewatchhistory", updateWatchHistory);
router.get("/api/v1/singleuser", getSingleUser);
router.patch("/api/v1/bookMark/:id", updateBookmark);
router.post("/api/v1/postdatainuserfriendlist", postDataInUserFriendList)

module.exports = router;
