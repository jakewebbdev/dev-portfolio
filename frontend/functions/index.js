const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submit = functions.https.onRequest((req, res) => {
  try {
    cors(req, res, () => {
      if (req.method !== "POST") {
        return;
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `Someone from my website sent me a message: ${req.body.email}.`,
        text: req.body.message,
        html: `<p>${req.body.message}`,
      };

      mailTransport.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
        }
      });

      res.status(200).send({ isEmailSend: true });
    });
  } catch (error) {
    res.status(500).send({ error: "error" });
  }
});
