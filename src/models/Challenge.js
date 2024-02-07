const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  challengeName: { type: String, required: true },
  rules: [{ type: String, required: true }],
  description: { type: String, required: true },
  lastDateForSubmissions: { type: Date, required: true },
  postedOn: { type: Date, required: true },
  postedBy: {
    name: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true },
  },
  imageLink: { type: String, required: true },
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;
