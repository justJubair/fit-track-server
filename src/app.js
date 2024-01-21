const express = require("express")
const applyMiddleware = require('./middlewares/applyMiddleware')
const app = express();


// usage of apply middleware
applyMiddleware(app)


// servers default route setup
app.get("/health", (req,res)=> {
    res.send("Fit Track server is running on mongoose")
})

// Error handling route
app.all("*", (req,res,next)=>{
    const error = new Error(`The requested url is invalid: [${req?.url}]`)
    error.status=404
    next(error)
})

// send an error message
app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({
        message:err.message
    })
})

module.exports=app