const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use("local",
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

passport.use("facebook",
  new LocalStrategy(
    {
      usernameField: "id",
    },
    (id, password, done) => {
      console.log("inside facebook authenticate", id);
      User.findOne({ facebookId: id }).then((user) => {
        if (err) {
          throw err;
        }
        if (!user) {
          return done(null, false, { message: "Not registered via facebook" });
        }
        return done(null, user);
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