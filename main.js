require('dotenv').config();

const express = require('express');

const app = express();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(PORT, () => {
    console.log(`X-Auto is running at: https://${HOST}:${PORT}`);
});
