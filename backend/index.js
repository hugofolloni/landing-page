var nodemailer = require('nodemailer');

const fetch = require("node-fetch");

const api = 'http://localhost:8080/sendTo'

require("dotenv").config();

fetch(api)
.then((res) => {
  return res.json()
})
.then((data) => {
  console.log(data)
  data.map((data) => {

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hugofollonidev@gmail.com',
        pass: process.env.PASSWORD
      }
    });

    var mailOptions = {
      from: 'hugofollonidev@gmail.com',
      to: data.email,
      subject: 'My portfolio website is working now!',
      text: 'Essa é somente uma mensagem de testes, no futuro isso funcionará de verdade!'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent to ' + data.email + ':' + info.response);
      }
    });
  });
})


