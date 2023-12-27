const path = require('node:path');
const bcrypt = require('bcryptjs');

const openDB = require(path.join(__dirname, 'openDB'));

const seedDB = async () => {
    const db = await openDB();

    try {
        const createTweetsTable = `
            CREATE TABLE IF NOT EXISTS tweets
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                type TEXT NOT NULL,
                message TEXT,
                link TEXT,
                tags TEXT,
                media TEXT,
                time TEXT,
                timestamp TIMESTAMP,
                priority INTEGER NOT NULL,
                status TEXT
            );
        `;

        await db.exec(createTweetsTable);
    } catch (err) {
        if (err) {
            await db.close();
            return console.error('There was an error when trying to create the default tweets table: ', err);
        }
    }

    try {
        const createRetweetsTable = `
            CREATE TABLE IF NOT EXISTS retweets
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                type NOT NULL,
                link TEXT,
                time TEXT,
                timestamp TIMESTAMP,
                priority INTEGER NOT NULL,
                status TEXT
            )
        `;

        await db.exec(createRetweetsTable);
    } catch (err) {
        if (err) {
            await db.close();
            return console.error('There was an error when trying to create the default retweets table: ', err);
        }
    }

    db.close();
};

module.exports = seedDB;
