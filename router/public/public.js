const path = require('node:path');
const express = require('express');

const public = express.Router();
module.exports = public;

public.use('/', require(path.join(__dirname, 'home', 'home')));
