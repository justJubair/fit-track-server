const User = require("../../models/User");

const postDataInUserFriendList = async (req, res) => {
    const { temail, userDetails } = req.body;

    try {
        // Find the user by userId
        const user = await User.findOne({ email: temail })

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Assuming 'userDetails' contains an 'email' field to check uniqueness
        // Adjust this condition based on the structure of  'userDetails' and 'friendList't
        const alreadyInFriendList = user.friendList.some(friend => friend.userEmail == userDetails.userEmail);

        if (alreadyInFriendList) {
            return res.status(409).send('User already in friend list'); // HTTP 409 Conflict
        }

        // Push userDetails into the friendList array
        user.friendList.push(userDetails);

        // Save the updated user document
        await user.save();
        res.status(200).send('Request Sent');
    } catch (err) {
        console.log(err)
        res.send(err)
    }
};

module.exports = postDataInUserFriendList;
