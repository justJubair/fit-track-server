const mongoose = require("mongoose")
require("dotenv").config();

const uri = process.env.dbURI

const connectDB = async()=>{
    console.log("Connecting to database..")
    await mongoose.connect(uri, {dbName: "fitTrackDB"})
    console.log("Connected to database")
}

module.exports= connectDB