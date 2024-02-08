const Trainer = require('../../models/Trainer');
const getAllTrainers = async (req, res) => {
    const result = await Trainer.find();
    res.send(result);
}
module.exports = getAllTrainers;