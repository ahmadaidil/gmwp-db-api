const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const user = require('./router/user');
const auth = require('./router/auth');
const wishlist = require('./router/wishlist');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect('mongodb://localhost:27017/gmwp');

app.use('/user', user);
app.use('/auth', auth);
app.use('/wishlist', wishlist);

app.listen(3000)
