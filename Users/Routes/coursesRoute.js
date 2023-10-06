const express = require('express');

const courseCtrl = require('../Controllers/coursesCtrl');

const router = express.Router();

router.get('/courses', courseCtrl.getAllCourses);

module.exports = router;