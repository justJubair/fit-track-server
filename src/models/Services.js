const mongoose = require("mongoose")
const {Schema} = mongoose;

const videoSchema = new Schema({
    title: { type: String,},
    duration: { type: String,},
    vlink: { type: String,},
  });
  
  const ServiceSchema = new Schema({
    id: { type: Number },
    heading: { type: String },
    subheading: { type: String },
    thumbnail: { type: String },
    serviceId: { type: String },
    duration: { type: Number },
    category: { type: String },
    numberOfVideos: { type: Number },
    videos: [videoSchema],
    reviews: [
      {
        serviceId: String,
        email: String,
        userImage: String,
        rating: Number,
        comment: String,
        date: { type: Date, default: Date.now },
    }
    ]
  });
  

const Services = mongoose.model("Services", ServiceSchema)

module.exports= Services;