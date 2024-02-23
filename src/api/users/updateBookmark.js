const User = require("../../models/User");
const updateBookmark = async (req, res) => {
  const id = req.params.id;
  const Email = req.query.email;


  const result = await User.updateOne(
    { email: Email },
    { $addToSet: { saved_blogs: id } }
  );

  res.send(result);
};

module.exports = updateBookmark;
