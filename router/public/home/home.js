const express = require('express');

const home = express.Router();
module.exports = home;

home.get('/', (req, res) => {
    res.send('Hello, X-Auto!');
});
