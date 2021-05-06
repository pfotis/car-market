const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (email, password, done) => {
      db.User.getUserByEmail(email, (err, user) => {
        if (err) {
          throw err;
        }
        if (!user) {
          return done(null, false, { message: "Wrong email" });
        }
        db.User.comparePassword(password, user.password, (err, isMatch) => {
          if (err) {
            throw err;
          }
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { message: "Wrong password" });
        });
      });
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.getUserById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;