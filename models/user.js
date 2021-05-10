const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  facebookId: {
    type: String
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.createUser = function(newUser, cb){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(cb);
    });
  });
}

module.exports.getUserByEmail = function(email, cb){
  var query = {email: email};
  User.findOne(query, cb);
}

module.exports.getUserById = function(id, cb){
  User.findById(id, cb);
}

module.exports.comparePassword = function(candidatePassword, hash, cb){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) throw err;
    cb(null, isMatch);
  });
}



