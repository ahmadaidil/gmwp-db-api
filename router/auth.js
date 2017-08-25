var express = require('express');
var router = express.Router();
const authController = require('../controller/auth');

router.post('/', authController.signin);

module.exports = router;
