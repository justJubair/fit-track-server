const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceSchema = new Schema({
  email: String,
  fitnessLevel: String,
  height: Number,
  username: String,
  weight: Number,
});

const Services = mongoose.model("HealthInfos", HealthInfoSchema);

module.exports = HealthInfos;
