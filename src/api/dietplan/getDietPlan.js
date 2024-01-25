// getDietPlan.js
const express = require("express");
const HealthInfo = require("../../models/HealthInfos"); // Adjust the import
const DietPlan = require("../../models/DietPlan"); // Adjust the import

const router = express.Router();

// GET diet plan based on user's email
router.get("/api/v1/dietplan/:email", async (req, res) => {
  const userEmail = req.params.email;

  try {
    const user = await HealthInfo.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const age = user.age;

    if (isNaN(age) || age < 18) {
      return res.status(400).json({ error: "Invalid age" });
    }

    let selectedDietPlan;

    if (age <= 30) {
      selectedDietPlan = await DietPlan.findOne({
        category: "Young Adults (18-30)",
      });
    } else if (age <= 50) {
      selectedDietPlan = await DietPlan.findOne({ category: "Adults (31-50)" });
    } else {
      selectedDietPlan = await DietPlan.findOne({ category: "Seniors (51+)" });
    }

    if (!selectedDietPlan) {
      return res.status(404).json({ error: "Diet plan not found" });
    }

    res.json(selectedDietPlan.diet_plan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
