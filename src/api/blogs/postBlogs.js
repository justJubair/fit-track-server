const Blogs = require("../../models/Blogs");

const postBlog = async (req, res) => {
  const blog = req?.body;
  const result = await Blogs.create(blog);
  res.send(result);
  
};
module.exports = postBlog;
