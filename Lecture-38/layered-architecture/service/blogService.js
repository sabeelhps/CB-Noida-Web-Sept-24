const blogRepo = require('../repository/blogRepo');

const findAllBlogs = () => {
    console.log('finding all the blogs');
    const blogs = blogRepo.findAllBlogs();
    return blogs;
}

const createBlog = (title, description) => {
    return blogRepo.creatBlog(title, description);
}

const findBlogById = async (id) => {
    console.log('finding one blog ' + id);
    const blog = await blogRepo.findBlogById(id);
    if (!blog) {
        throw new Error(`Blog with this id not found!`);
    }
    return blog;
}

module.exports = {
    findAllBlogs,
    createBlog,
    findBlogById
}