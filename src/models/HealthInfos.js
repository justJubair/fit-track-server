const mongoose = require("mongoose");
const { Schema } = mongoose;

const HealthInfoSchema = new Schema({
  email: String,
  fitnessLevel: String,
  height: Number,
  username: String,
  weight: Number,
  age: Number,
}, { versionKey: false }); // Disable versioning

const HealthInfo = mongoose.model("HealthInfo", HealthInfoSchema);

module.exports = HealthInfo;

