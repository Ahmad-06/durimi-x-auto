const express = require('express');

const CREATE = express.Router();
module.exports = CREATE;

CREATE.post('/', (req, res) => {
    res.json({ success: true, data: req.body, error: null });
});
