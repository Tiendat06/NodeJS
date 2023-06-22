const Course = require('../models/Course');
const { multipleMongooseToObj } = require('../../util/mongoose');

class SiteController {
    // GET /home
    home(req, res, next) {
        // res.json({
        //     name: 'test'
        // })

        // callback: old, not support
        // Course.find((err, courses) =>{
        //     if(!err){
        //         res.json(courses);
        //     }
        //     else{
        //         res.status(400).json({ error: 'ERROR'});
        //     }
        // })

        // promises
        Course.find({})
            .then((result) => {
                // res.json(result);
                // result = result.map(result => result.toObject());
                res.render('home', {
                    result: multipleMongooseToObj(result),
                });
            })
            .catch((err) => {
                next(err);
                // res.status(400).json({ error: err});
            });

        // async, await
        // try {
        //     const result = await Course.find({});
        //     // Xử lý kết quả
        //     res.json(result);
        // } catch (err) {
        //     // Xử lý lỗi
        //     res.status(400).json({ error: err});
        // }
    }

    // GET /search
    search(req, res) {
        res.render('search');
    }

    // GET
}

module.exports = new SiteController();
