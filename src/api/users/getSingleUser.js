const User = require('../../models/User');
const getSingleUser = async(req, res)=>{
    const query = req.query.email;
    // console.log(query);

    const result = await User.findOne({email: query})

    res.send(result);
}

module.exports = getSingleUser;