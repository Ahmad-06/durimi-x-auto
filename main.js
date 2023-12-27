require('dotenv').config();

const njk = require('nunjucks');
const path = require('node:path');
const express = require('express');
const bodyParser = require('body-parser');

const seedDB = require(path.join(__dirname, 'data', 'seedDB'));
seedDB();

const app = express();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 5000;

njk.configure(path.join(__dirname, 'views'), {
    express: app,
    autoescape: true,
});
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({ limit: '512mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '512mb' }));

app.use(require(path.join(__dirname, 'router', 'router')));

app.listen(PORT, () => {
    console.log(`X-Auto is running at: https://${HOST}:${PORT}`);
});
