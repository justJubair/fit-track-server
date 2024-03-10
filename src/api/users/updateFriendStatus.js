const User = require("../../models/User");

const updateFriendStatus = async (req, res) => {
  const data = req?.body;
  if (data?.userId) {
   
    const result = await User.findOneAndUpdate(
      { "friendList.targetId": data?.friendRequestId },
      { $set: { "friendList.$.requestStatus": data?.requestStatus, "friendList.$.seenStatus": true} },
      { new: true }
    );
    
    res.send(result)
  }
};

module.exports = updateFriendStatus;
