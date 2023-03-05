const Blog = require('../models/blog');

const findAllBlogs = () => {
    console.log('Getting all the blogs from the blogs collection');
    return Blog.find({});
}

const creatBlog = (title, description) => {
    return Blog.create({title, description});
}

const findBlogById = (id) => {
    console.log('Getting one blog'+id);
    return Blog.findById(id)
}

module.exports = {
    findAllBlogs,
    creatBlog,
    findBlogById
}
