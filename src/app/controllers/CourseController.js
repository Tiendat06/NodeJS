const Course = require('../models/Course');
const { mongooseToObj, multipleMongooseToObj } = require('../../util/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        // res.render('search');
        // res.send('course details - '+ req.params.slug);

        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // res.json(course);
                res.render('./courses/show', { course: mongooseToObj(course) });
            })
            .catch(next);
    }

    // [GET]
    create(req, res, next) {
        res.render('courses/create');
    }

    // course/store
    store(req, res, next) {
        // res.render('courses/store');
        // res.json(req.body)
        const formData = req.body;
        // formData.image = `` update string
        // formData.slug = 'hi'

        const course = new Course(formData);
        // console.log(course);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {
                res.send('ERROR !!!' + err);
            });

        // console.log(req.body);
        // res.render('course/create');
        // res.send('course save');
    }

    // course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((courses) =>
                res.render('courses/edit', {
                    courses: mongooseToObj(courses),
                }),
            )
            .catch(next);
    }

    // [PUT] course/:id
    update(req, res, next) {
        // res.json(req.body)
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /course/id/delete
    destroy(req, res, next) {
        // soft delete
        Course.delete({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
                    // => res.redirect('back'): turn back
            .catch(next);
    }

    // [PATCH] /course/id/restore
    restore(req, res, next){
        Course.restore({ _id: req.params.id }, req.body)
        .then(() => res.redirect('back'))
                // => res.redirect('back'): turn back
        .catch(next);
    }
}

module.exports = new CourseController();
