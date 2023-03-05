const express = require('express');
const blogController = require('../controllers/blogController');
const catchAsync = require('../utils/catchAsync');

const router = express.Router();

router.get('/', catchAsync(blogController.findAllBlogs));
router.post('/', catchAsync(blogController.creatBlog));
router.get('/:id', catchAsync(blogController.findBlogById));

module.exports = router;