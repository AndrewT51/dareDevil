var mongoose = require('mongoose');
var crypto = require('crypto');

var User = new mongoose.Schema({
  username: {type: String, unique:true, required: true},
  email: {type: String, unique:true, required: true},
  passwordHash: String,
  passwordSalt: String,
  fullname: {type: String, required: true}
});

User.methods.setPassword = function(password){
  this.passwordSalt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password,this.salt,1000,64).toString('hex');
};

User.methods.validatePassword = function(password){
  var hashToCheck = crypto.pbkdf2Sync(password,this.passwordSalt,1000,64).toString('hex');
  return this.hashToCheck === passwordHash;
};

module.exports = mongoose.model('User',User);

