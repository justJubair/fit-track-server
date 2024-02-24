const user = require("../../models/User");

const updateFriendStatus = async(req,res)=>{
    const data = req?.body;
    console.log(data)
}

module.exports= updateFriendStatus