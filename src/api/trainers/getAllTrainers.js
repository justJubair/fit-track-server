const Trainers = require('../../models/Trainers');
const getAllTrainers = async (req, res) => {
    const result = await Trainers.find();
    res.send(result);
}
module.exports = getAllTrainers;