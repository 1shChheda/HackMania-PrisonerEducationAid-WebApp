exports.getAllCourses = (req, res, next) => {
    return res.status(200).json({
        course: [{
            title: "Bamboo Craft",
            description: "Useful skill",
            language: "English",
            domain: "Handicrafts"
        }]
    })
};