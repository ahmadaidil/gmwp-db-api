var express = require('express');
var router = express.Router();
const wishController = require('../controller/wishlist');
var jwt = require('jsonwebtoken');

router.use((req, res, next) => {
  jwt.verify(req.headers.token, process.env.PRIVATE_KEY, (err, decoded)=>{
    if(decoded == undefined){
      res.send('wrong token');
    }else{
      next();
    }
  });
})

router.get('/:username', wishController.getWish);
router.post('/', wishController.createWish);
router.get('/delete/:username/:movieId', wishController.removeWish);

module.exports = router;
