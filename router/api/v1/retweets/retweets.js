const path = require('node:path');
const express = require('express');

const retweets = express.Router();
module.exports = retweets;

retweets.use('/', require(path.join(__dirname, 'routes', 'retweets.get')));
retweets.use('/create', require(path.join(__dirname, 'routes', 'retweets.create')));
retweets.use('/update', require(path.join(__dirname, 'routes', 'retweets.update')));
retweets.use('/delete', require(path.join(__dirname, 'routes', 'retweets.delete')));
