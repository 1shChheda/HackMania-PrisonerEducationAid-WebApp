const express = require('express');

const authCtrl = require('../Controllers/authCtrl');

const router = express.Router();

router.post('/register', authCtrl.register); // this is just to register prisoners into the database

router.post('/login', authCtrl.login);

module.exports = router;