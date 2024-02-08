const mongoose = require("mongoose");
const { Schema } = mongoose;

const TrainerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
          },
          age: {
            type: Number,
            required: true
          },
          gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: true
          },
          specialization: {
            type: String,
            required: true
          },
          experience_years: {
            type: Number,
            required: true
          },
          email: {
            type: String,
            required: true,
            unique: true
          },
          phone: {
            type: String,
            required: true
          },
          location: {
            type: String,
            required: true
          },
          bio: {
            type: String,
            required: true
          },
          profile_image: {
            type: String,
            required: true
          }
    }
    );

const Trainers = mongoose.model("Trainer", TrainerSchema);

module.exports = Trainers;
