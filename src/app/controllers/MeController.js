const Course = require('../models/Course');
const { mongooseToObj, multipleMongooseToObj } = require('../../util/mongoose');

class MeController {
    // GET /me/stored/course
    storedCourses(req, res, next) {

        // Course.findDeleted({})
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => {})

        Course.find({})
            .then((courses) =>
                res.render('me/storedCourses', {
                    courses: multipleMongooseToObj(courses),
                }),
            )
            .catch(next);
        // res.render('me/storedCourses');
    }

    // GET /me/trash/courses
    trashCourses(req, res, next){
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash_course', {
                    courses: multipleMongooseToObj(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
