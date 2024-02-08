const Challenge = require("../../models/Challenge");

const getChallenges=  async (req, res) => {
  try {
    const challenges = await Challenge.find();
    if (!challenges || challenges.length === 0) {
      return res.status(404).json({ error: "No challenges found" });
    }

    res.json(challenges);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getChallenges
