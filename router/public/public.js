const express = require('express');

const public = express.Router();
module.exports = public;

public.get('/', (req, res) => {
    res.send('Hello, Public Router!');
});
