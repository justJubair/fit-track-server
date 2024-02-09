const Blogs = require("../../models/Blogs");

const getBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const result = await Blogs.findById(query);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};
module.exports = getBlog;
