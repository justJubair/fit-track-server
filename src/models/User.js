const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
    fname: {
        type: String,
      },
      lname: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
      },
      userImage: {
        type: String, // You might want to store the image URL or a reference here
      },
      watchHistory: {
        type: [{
          videoId: String,
        }],
      },
})

const User = mongoose.model('User', userSchema);

module.exports = User;