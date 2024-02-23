const User = require('../../models/User');
const getSingleUser = async(req, res)=>{
    const query = req.query.email;
   

    const result = await User.findOne({email: query})

    res.send(result);
}

module.exports = getSingleUser;