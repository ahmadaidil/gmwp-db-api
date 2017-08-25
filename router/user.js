var express = require('express');
var router = express.Router();
const userController = require('../controller/user');

router.get('/:username', userController.getUser);
router.post('/', userController.createUser);
router.get('/delete/:id', userController.removeUser);

module.exports = router;
