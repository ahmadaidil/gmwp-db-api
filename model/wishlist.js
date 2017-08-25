var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Wishlist = new Schema({
  username: String,
  movieId: String
});

var Wishlist = mongoose.model('Wishlist', Wishlist);

module.exports = Wishlist;
