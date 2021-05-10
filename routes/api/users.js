const passport = require("../../config/passport");
const router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated");
const facebooklogin = require("../../controllers/usersController")
const db = require("../../models");

router.post('/signup', function(req, res){
    var newUser = new db.User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      facebookId: req.body.facebookId
    });
    console.log(newUser);
    db.User.createUser(newUser, function(err, user){
      if(err) throw err;
      res.send(user).end()
    });
});

const createUserWithFbResponse = (req, res) => {
  db.User.create(req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
};
 
router.post("/facebook-login", (req, res) => {
  db.User.findOne({ facebookId: req.body.facebookId })
    .then((user) => {
      if (!user) {
        createUserWithFbResponse(req.body)
      } else {
        console.log("login");
      }
    })
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

module.exports = router;