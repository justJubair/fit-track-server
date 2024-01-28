const Blogs = require("../../models/Blogs");

const getBlogs = async (req, res) => {
  const result = await Blogs.find();
  res.send(result);
};
module.exports = getBlogs;
