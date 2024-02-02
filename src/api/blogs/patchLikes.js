const Blogs = require("../../models/Blogs");
const patchLikes = async (req, res) => {
  try {
    const { blogId, likerEmail } = req.body;

    // Check if likerEmail already exists in the likes array
    const blog = await Blogs.findOne({ _id: blogId, likes: likerEmail });
    if (blog) {
      // If likerEmail already exists, return without updating
      return res.status(200).send("User already liked this blog.");
    }
    // If likerEmail doesn't exist, update the likes array
    const result = await Blogs.updateOne(
      { _id: blogId },
      { $addToSet: { likes: likerEmail } }
    );

    res.send(result);

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = patchLikes;
