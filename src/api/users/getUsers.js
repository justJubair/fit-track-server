const User = require('../../models/User');
const getUsers = async(req, res)=>{
    const result = await User.find();
    res.send(result);
}

module.exports = getUsers;