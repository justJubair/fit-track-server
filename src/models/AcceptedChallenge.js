const mongoose = require("mongoose");

const acceptedChallengeSchema = new mongoose.Schema(
  {
    challengeId: { type: String, required: true },
    acceptedBy: {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    acceptedDate: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

const AcceptedChallenge = mongoose.model(
  "AcceptedChallenge",
  acceptedChallengeSchema
);

module.exports = AcceptedChallenge;
