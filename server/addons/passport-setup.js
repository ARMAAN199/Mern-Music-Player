const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const LocalStrategy = require("passport-local");
const keys = require("./keys");
const User = require("../schema/userSchema");

passport.serializeUser((user, done) => {
  console.log("SERIALISING", user.id, user._id);
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  console.log("DESERIALISING", id);
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(function (username, password, done) {
    console.log("INSDE LOCAL Curr");
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "No User Found", code: 1 });
      }
      if (!(user.password == password)) {
        return done(null, false, { message: "Incorrect Password", code: 2 });
      }
      console.log(" user ", user);
      done(null, user);
    });
  })
);
