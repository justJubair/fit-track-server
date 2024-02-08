const AcceptedChallenge = require("../../models/AcceptedChallenge");

const postAcceptedChallenge = async (req, res) => {
  try {
    const { challengeId, user } = req.body;

    const acceptedChallenge = {
      challengeId,
      acceptedBy: {
        name: user.name,
        email: user.email,
      },
      acceptedDate: new Date(),
    };

    const result = await AcceptedChallenge.create(acceptedChallenge);

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = postAcceptedChallenge;
