const path = require('node:path');
const express = require('express');

const tweets = express.Router();
module.exports = tweets;

tweets.use('/create', require(path.join(__dirname, 'routes', 'tweets.create')));
tweets.use('/delete', require(path.join(__dirname, 'routes', 'tweets.delete')));
