const express = require('express');

const authCtrl = require('../Controllers/authCtrl');

const router = express.Router();

router.post('/register', authCtrl.postSignup); // this is just to register prisoners into the database

module.exports = router;