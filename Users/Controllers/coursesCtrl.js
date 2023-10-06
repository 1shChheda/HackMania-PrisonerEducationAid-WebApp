const Models = require('../../Utils/allModels');

exports.getAllCourses = (req, res, next) => {
    Models.Courses.fetchAll()
        .then(courses => {
            console.log(courses);
            return res.status(200).json(courses);
        })
        .catch(error => {
            return res.status(500).json({ error: 'Internal server error', error });
        });
};