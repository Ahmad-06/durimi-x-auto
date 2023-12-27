const path = require('node:path');
const express = require('express');

const retweets = express.Router();
module.exports = retweets;

retweets.use('/create', require(path.join(__dirname, 'routes', 'retweets.create')));
retweets.use('/delete', require(path.join(__dirname, 'routes', 'retweets.delete')));
