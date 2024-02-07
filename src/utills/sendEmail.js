const nodemailer = require("nodemailer");
require("dotenv").config();
const emailS = process.env.siteemail;
const passS = process.env.emailpass;
console.log(emailS)

function sendEmail({ email, subject, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailS,
        pass: passS,
      },
    });

    const mail_configs = {
      from: emailS,
      to: email,
      subject: subject,
      html: `
      <p>${message}</p>
      <p>Best Regards</p>
      `,
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occurred` });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

module.exports = sendEmail;
