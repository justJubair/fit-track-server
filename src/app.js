const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const app = express();

// Routes
const serviceRoutes = require("./routes/services/index");
const healthinfoRoutes = require("./routes/helthinfos/index");
const dietPlanRoutes = require("./routes/dietplan/index");
const BlogsRoutes = require("./routes/blogs/index");
const UserRoutes = require("./routes/users/index")
const TrainerRoutes = require('./routes/trainers/index')
const challengesRoutes = require("./routes/challenges/index");
const emailApi = require("./routes/sendEmail/index");
const acceptedChallenge = require("./routes/challenges/acceptedChallenge/index");

// usage of apply middleware
applyMiddleware(app);

// use services routes
app.use(serviceRoutes);

// use health info routes
app.use(healthinfoRoutes);

// use diet plan routes
app.use(dietPlanRoutes);

//use Blogs routs
app.use(BlogsRoutes);
app.use(challengesRoutes);

//use User routes
app.use(UserRoutes);

//use Trainer routes
app.use(TrainerRoutes);

app.use(acceptedChallenge);
app.use(emailApi);



// servers default route setup
app.get("/health", (req, res) => {
  res.send("Fit Track server is running on mongoose");
});

// Error handling route
app.all("*", (req, res, next) => {
  const error = new Error(`The requested url is invalid: [${req?.url}]`);
  error.status = 404;
  next(error);
});

// send an error message
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
