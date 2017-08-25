const User = require('../model/user');
const hashPassword = require('../helpers/hashPassword');
const saltGenerate = require('../helpers/saltGenerator');

let getUser = (req, res) => {
  User.find({username: req.params.username}, (err, user)=>{
    if(err) res.send(err);
    else res.json(user);
  });
}

let createUser = (req, res) => {
  let salt = saltGenerate();
  let hash = hashPassword(salt, req.body.password);
  User.create({
    username: req.body.username,
    password: hash,
    privateKey: salt
  }, (err, result)=>{
    if(err) res.send(err)
    else res.json(result)
  })
}

let removeUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, result)=>{
    if(err) res.send(err);
    else res.send(result);
  });
}

module.exports = {
  getUser,
  createUser,
  removeUser
}
