const Services = require("../../models/Services");

const postUsersReview = async (req, res) => {
    const feedBackData = req.body;
    try {
        // Find the service by service id
        const selectedService = await Services.findById(feedBackData.serviceId)

        // Push user review of the service in database
        selectedService.reviews.push(feedBackData);

        // Save the updated service details
        await selectedService.save();

    
        res.status(200).send('Review Posted!');
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

module.exports = postUsersReview;
