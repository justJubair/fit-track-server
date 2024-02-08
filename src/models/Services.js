const mongoose = require("mongoose")
const {Schema} = mongoose;

<<<<<<< HEAD
const ServiceSchema = new Schema({
    heading: String,
    subheading: String,
    thumbnail: String,
    serviceId: String,
    duration: Number,
    category: String,
    numberOfVideos: Number,
    videos: [
        {
           title: String,
           vlink: String, 
        }
    ]
})
=======
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
  
>>>>>>> f3cd0eb76efc777fb68562d3913cc8df416ab25e

const Services = mongoose.model("Services", ServiceSchema)

module.exports= Services;