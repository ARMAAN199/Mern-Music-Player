var express = require("express");
var router = express.Router();
const User = require("../schema/userSchema");
const date = require("date-and-time");
const random = require("random");
const { mail, otpmail } = require("../addons/mail");
const passport = require("passport");
var flash = require("connect-flash");
const passportsetup = require("../addons/passport-setup");

router.post("/register", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.pass,
    email: req.body.email,
  });
  try {
    User.findOne({ username: req.body.username }).then((currentUser) => {
      if (currentUser) {
        res.send({
          message: "Username Already Exists! Login Instead",
          code: 2,
        });
        //res.redirect('http://localhost:3000?errcode=2')
      } else {
        User.findOne({ email: req.body.email }).then((currentUser) => {
          if (currentUser) {
            res.send({
              message: "Email Already Exists! Login Instead",
              code: 1,
            });
            //res.redirect('http://localhost:3000?errcode=1')
          } else {
            const a1 = user.save().then((newUser) => {});
            mail(req.body.email, req.body.username);
            res.send({ message: "New User Created! Login Now", code: 3 });
            //res.redirect('http://localhost:3000?errcode=3')
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//route control unit

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
  }),
  function (req, res) {
    res.redirect("http://localhost:3000/home");
  }
);
