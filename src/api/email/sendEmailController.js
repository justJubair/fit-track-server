const sendEmail = require("../../utills/sendEmail");

const sendEmailController = async (req, res) => {
  try {
    const response = await sendEmail(req.query);
    res.send(response.message);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { sendEmailController };