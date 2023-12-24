const path = require('node:path');
const express = require('express');

const v1 = express.Router();
module.exports = v1;

v1.use('/misc', require(path.join(__dirname, 'misc', 'misc')));
