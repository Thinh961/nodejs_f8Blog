const Course = require('../models/CourseModel')
const { multiDataToObject } = require('../../util/mongoose')
class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multiDataToObject(courses)
                })
            )
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => 
            res.render('me/trash-courses', {
                courses: multiDataToObject(courses)
            }))
            .catch(next);
    }

}

module.exports = new MeController;