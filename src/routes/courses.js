const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:id/edit', courseController.edit);
router.get('/:id/delete', courseController.destroy);
router.patch('/:id/restore', courseController.restore);
router.put('/:id', courseController.update);
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);

// newsController.index
// router.get('/', courseController.index);

module.exports = router;
