const express = require('express');

const courseCtrl = require('../Controllers/courses');

const router = express.Router();

router.get('/courses', courseCtrl.getAllCourses);

module.exports = router;