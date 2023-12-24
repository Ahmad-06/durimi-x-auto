require('dotenv').config();

const path = require('node:path');
const express = require('express');

const app = express();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 5000;

app.use(require(path.join(__dirname, 'router', 'router')));

app.listen(PORT, () => {
    console.log(`X-Auto is running at: https://${HOST}:${PORT}`);
});
