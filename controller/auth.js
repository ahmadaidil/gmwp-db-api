const User = require('../model/user');
const hash = require('../helpers/hashPassword');
var jwt = require('jsonwebtoken');
require('dotenv').config()

var signin = (req, res)=>{
  User.findOne({username: req.body.username}, (err, user)=>{
    if(err) res.send('username doesn\'t exist', err);
    else
      var passwordHash = hash(user.privateKey, req.body.password);
      if(passwordHash == user.password){
        var token = jwt.sign({ username: user.username }, process.env.PRIVATE_KEY);
        res.json({
          token: token
        });
      }
      else{
        res.send('wrong password');
      }
  });
}

module.exports = {
  signin
}
