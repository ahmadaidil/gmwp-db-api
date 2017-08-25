var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  username: {type: String, unique: true},
  password: String,
  privateKey: String
});

var User = mongoose.model('User', User);

module.exports = User;
