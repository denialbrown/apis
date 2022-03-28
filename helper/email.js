var nodemailer = require('nodemailer');
require("dotenv").config()


module.exports = {
    sendOtpInMail: async function (UserEmail,userdetail) {
        var transporter = nodemailer.createTransport({
            address: 'smtp.gmail.com',
            port:  process.env.EMAIL_PORT,
            domain: 'gmail.com',
            service: 'gmail',
            auth: {
                user: process.env.COMPNY_EMAIL_ID ,
                pass: process.env.EMAIL_PASS,
            }
        });

        var mailOptions = {
            from:  process.env.COMPNY_EMAIL_ID,
            to: UserEmail,
            subject: 'your OTP',
            text: 'your Otp is : ' + userdetail,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

