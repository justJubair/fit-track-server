const mongoose = require("mongoose")
const {Schema} = mongoose;

const ServiceSchema = new Schema({
    title: String,
    url: String,
    thumbnail: String,
})

const Services = mongoose.model("Services", ServiceSchema)

module.exports= Services;