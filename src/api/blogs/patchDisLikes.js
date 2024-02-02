const Blogs = require("../../models/Blogs");
const patchDisLikes = async (req, res) => {
  try {
    const { blogId,  DislikerEmail } = req.body;

    // Check if DislikerEmail already exists in the likes array
    const blog = await Blogs.findOne({ _id: blogId, disLikes: DislikerEmail });
    if (blog) {
      // If DislikerEmail already exists, return without updating
      return res.status(400).send("User already liked this blog.");
    }
    // If likerEmail doesn't exist, update the likes array
    const result = await Blogs.updateOne(
      { _id: blogId },
      { $addToSet: { disLikes: DislikerEmail } }
    );

    res.send(result);
    console.log(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = patchDisLikes;
