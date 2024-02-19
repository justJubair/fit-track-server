const User = require("../../models/User");

const postDataInUserFriendList = async (req, res) => {
    const { temail, userDetails } = req.body;
   console.log(req.body)
    try {
        // Find the user by userId
        const user = await User.findOne({ email: temail});
        console.log(user)

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Push userDetails into the friendList array
        user.friendList.push(userDetails);

        // Save the updated user document
        await user.save();
        res.status(200).send('User details updated successfully');
    } catch (err) {
        console.log(err)
        res.send(err)
    }
};

module.exports = postDataInUserFriendList;
