const Course = require('../models/CourseModel')
const { multiDataToObject } = require('../../util/mongoose')
class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({ deletedAt: null })
        .then((courses) => 
        res.render('me/stored-courses', {
            courses: multiDataToObject(courses)
        }))
        .catch(next);
        
    }

}

module.exports = new MeController;