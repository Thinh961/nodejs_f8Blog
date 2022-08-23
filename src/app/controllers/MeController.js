const Course = require('../models/CourseModel')
const { oneItemToObject } = require('../../util/mongoose')
class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        res.render('search')
    }

}

module.exports = new MeController;