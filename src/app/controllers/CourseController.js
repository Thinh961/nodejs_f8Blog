const Course = require('../models/CourseModel')
const { oneItemToObject } = require('../../util/mongoose')
class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', {
                    course: oneItemToObject(course)
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController;