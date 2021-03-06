const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
var MongoStore = require('connect-mongo');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(
  { secret: "keyboard cat", 
    resave: true, 
    saveUninitialized: true, 
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/carmarket",
    })
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/carmarket",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
