const Course = require('../models/CourseModel')
const { multiDataToObject } = require('../../util/mongoose')
class SiteController {

    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: multiDataToObject(courses)
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;