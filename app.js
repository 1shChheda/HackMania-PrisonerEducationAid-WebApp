const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

const db = require('./Utils/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Connecting to the database...
db.mongoConnect(() => {

    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}...`);
    });

});