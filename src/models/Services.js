const mongoose = require("mongoose")
const {Schema} = mongoose;

const videoSchema = new Schema({
    title: { type: String, required: true },
    duration: { type: String, required: true },
    vlink: { type: String, required: true },
  });
  
  const ServiceSchema = new Schema({
    id: { type: Number, required: true },
    heading: { type: String, required: true },
    subheading: { type: String, required: true },
    thumbnail: { type: String, required: true },
    serviceId: { type: String, required: true },
    duration: { type: Number, required: true },
    category: { type: String, required: true },
    numberOfVideos: { type: Number, required: true },
    videos: [videoSchema],
  });
  

const Services = mongoose.model("Services", ServiceSchema)

module.exports= Services;