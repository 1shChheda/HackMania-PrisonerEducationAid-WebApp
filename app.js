const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());

const db = require('./Utils/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

// user routes
const userRoutes = require('./Utils/allUserRoutes');
userRoutes.allUserRoutes(app);

// admin routes
const adminRoutes = require('./Utils/allAdminRoutes');
adminRoutes.allAdminRoutes(app);

// Connecting to the database...
db.mongoConnect(() => {

    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}...`);
    });

});