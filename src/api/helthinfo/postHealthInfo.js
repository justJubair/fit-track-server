const HealthInfo = require("../../models/HealthInfos"); // Corrected import statement

const postHealthInfo = async (req, res) => {
  try {
    const { email, fitnessLevel, height, username, weight, age } = req.body;

    // Validate required fields
    if (!email || !fitnessLevel || !height || !username || !weight || !age) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newHealthInfo = new HealthInfo({
      email,
      fitnessLevel,
      height,
      username,
      weight,
      age,
    });

    const savedHealthInfo = await newHealthInfo.save();
    res.json(savedHealthInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postHealthInfo;
