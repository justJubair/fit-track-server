const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: String,
  description: String,
  image: String,
  time: String,
  userName: String,
  userImageURL: String,
  likes: [ String ],
  disLikes: Array,
});

const Blogs = mongoose.model("Blogs", BlogSchema);

module.exports = Blogs;
