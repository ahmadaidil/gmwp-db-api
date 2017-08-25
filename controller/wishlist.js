const Wish = require('../model/wishlist');

let getWish = (req, res) => {
  Wish.find({username: req.params.username}, (err, wish)=>{
    if(err) res.send(err);
    else res.json(wish);
  });
}

let createWish = (req, res) => {
  Wish.create({
    username: req.body.username,
    movieId: req.body.movieId,
  }, (err, result)=>{
    if(err) res.send(err)
    else res.json(result)
  })
}

let removeWish = (req, res) => {
  Wish.remove({ username: req.params.username, movieId: req.params.movieId }, function (err, result) {
  if (err) return handleError(err);
  else res.send(result);
  });
  // Wish.findByIdAndRemove(req.params.movieId, (err, result)=>{
  //   if(err) res.send(err);
  //   else res.send(result);
  // });
}

module.exports = {
  getWish,
  createWish,
  removeWish
}
