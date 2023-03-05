const blogService = require('../service/blogService');

const findAllBlogs = async (req, res) => {
    console.log('Request recived for find all the blogs')
    const blogs = await blogService.findAllBlogs();
    res.json(blogs);
}

const creatBlog = async(req, res) => {
    await blogService.createBlog();
    res.json({ message: "success" });
}

const findBlogById = async (req, res) => {
    console.log('Request recived for finding one blog ' + req.params.id);
    const { id } = req.params;
    const blog = await blogService.findBlogById(id);
    res.json(blog);
}

module.exports = {
    findAllBlogs,
    creatBlog,
    findBlogById
}
