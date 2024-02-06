const Blogs = require("../../models/Blogs");
const patchComment = async (req, res) => {
  try {
    const { blogId, comment } = req.body;
   

    const result = await Blogs.updateOne(
      { _id: blogId.id },
      { $addToSet: { blogComments: comment } }
    );

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = patchComment;
