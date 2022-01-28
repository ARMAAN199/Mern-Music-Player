const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "armaanj82@gmail.com",
    pass: "Ab1234@@@",
  },
});

function mail(mailto, usrnm) {
  var mailOptions = {
    from: "armaanj82@gmail.com",
    to: mailto,
    subject: "Welcome to <THE MUSIC PLAYER>",
    html:
      "<body style='background-color: black; text-align: center; color: white; font-family: Arial, Helvetica, sans-serif; height:100vh'> <h1>Welcome To The Music Player</h1> <h3>" +
      usrnm +
      "</h3> <p>Listen * Share * Like</p> </body>",
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info);
    }
  });
}
