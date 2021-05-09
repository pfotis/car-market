const passport = require("../../config/passport");
const router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated");
const facebooklogin = require("../../controllers/userController")
const db = require("../../models");

router.post('/signup', function(req, res){
    var newUser = new db.User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    });
    console.log(newUser);
    db.User.createUser(newUser, function(err, user){
      if(err) throw err;
      res.send(user).end()
    });
});

router.post("/signin", passport.authenticate("local"), (req, res) => {
  const loginUser = {
    email: req.body.email,
    password: req.body.password,
  };
  res.send(loginUser);
  console.log(loginUser, " authenticated");
});

router.get("/user", isAuthenticated, (req, res) => {
  if (!req.user) {
    res.json({});
  } else {
    User.findById({ _id: req.user.id })
      .populate("images")
      .then((data) => {
        res.json(data);
      });
    console.log("res on server", req.user);
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send(null);
});

router.post('/facebooklogin', facebooklogin);

module.exports = router;