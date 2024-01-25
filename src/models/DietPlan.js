// dietPlanModel.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const DietPlanSchema = new Schema({
  category: String,
  diet_plan: {
    calories: Number,
    protein_grams: Number,
    carbs_grams: Number,
    fat_grams: Number,
    meal_plan: [{
      meal: String,
      foods: [{
        food: String,
        quantity: String,
        unit: String,
      }],
    }],
  },
}, { collection: 'dietPlans' });

const DietPlan = mongoose.model("DietPlan", DietPlanSchema);

module.exports = DietPlan;
