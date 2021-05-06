const passport = require("../../../config/passport");
const router = require("express").Router();
const isAuthenticated = require("../../../config/isAuthenticated");

router.post('/signup', function(req, res){
    var password = req.body.password;
    var newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    });
    User.createUser(newUser, function(err, user){
      if(err) throw err;
      res.send(user).end()
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
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

module.exports = router;