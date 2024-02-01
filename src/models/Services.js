const mongoose = require("mongoose")
const {Schema} = mongoose;

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

const Services = mongoose.model("Services", ServiceSchema)

module.exports= Services;