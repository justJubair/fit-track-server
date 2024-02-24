const User = require("../../models/User");

const updateFriendStatus = async (req, res) => {
  const data = req?.body;
  if (data?.userId) {
    const user = await User.findById(data?.userId).exec();
    const friendRequest = user?.friendList?.find(
      (friend) => friend?.targetId === data?.friendRequestId
    );
    const result = await User.findOneAndUpdate(
      { "friendList.targetId": data?.friendRequestId },
      { $set: { "friendList.$.requestStatus": data?.requestStatus, "friendList.$.seenStatus": true} },
      { new: true }
    );
    console.log(result)
  }
};

module.exports = updateFriendStatus;
