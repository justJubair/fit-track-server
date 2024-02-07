const User = require('../../models/User')

const updateWatchHistory = async (req, res) => {
    try {
        const newvideo = req.body;

        const newVideoId = newvideo.vidId;

        const findUser = await User.findOne({ email: newvideo.userEmail });
        
        //checking if user in db
        if(!findUser){
            return res.status(404).send("User not found")
        }

        //checking if the video id already in user's watch history
        const isVideoAlreadyWatched = findUser.watchHistory.some(vId => vId.videoId === newVideoId)

        if (isVideoAlreadyWatched) {
            return res.status(400).send('Video is already exist in watch history')
        }

        findUser.watchHistory.push({ videoId: newVideoId })

        await findUser.save();

        res.status(200).send("Video added to watch history successfully");

    } catch (err) {
        console.error('Error on updating watch history', err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports = updateWatchHistory;