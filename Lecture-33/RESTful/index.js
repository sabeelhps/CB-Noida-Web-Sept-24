const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send("Home Route");
});

let blogs = [
    {
        id: uuid(),
        title: "My First Blog",
        imageUrl: "https://images.unsplash.com/photo-1674240568812-d7481f3699a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        blogText: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        id: uuid(),
        title: "My First Blog",
        imageUrl: "https://images.unsplash.com/photo-1673894019491-4c569a62fdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        blogText: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        id: uuid(),
        title: "My First Blog",
        imageUrl: "https://images.unsplash.com/photo-1673964513277-360fcf5fb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        blogText: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
];

// Get all the blogs
app.get('/blogs', (req, res) => {
    // res.status(200).json(blogs);
    res.render('index', { blogs });
});

app.get('/blogs/new', (req, res) => {
    res.render('new');
});

// create blog
app.post('/blogs', (req, res) => {
    const { title, imageUrl, blogText } = req.body;
    blogs.push({ id: uuid(), title, imageUrl, blogText });
    res.redirect('/blogs');
});

// show a blog

app.get('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params;
    const blog = blogs.find((blog) => blog.id === blogId);
    
    // If blog doesnt exists
    if (!blog) return res.status(404).send('Bad Request');
    return res.render('show', { blog });
});

app.get('/blogs/:blogId/edit', (req, res) => {
    const { blogId } = req.params;

    const blog = blogs.find((blog) => blog.id === blogId);
    // If blog doesnt exists
    if (!blog) return res.status(404).send('Bad Request');

    res.render('edit', { blog });
});

app.patch('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params;
    const { title, blogText, imageUrl } = req.body;
    const blog = blogs.find((blog) => blog.id === blogId);
    // If blog doesnt exists
    if (!blog) return res.status(404).send('Bad Request');
    blog.title = title;
    blog.imageUrl = imageUrl;
    blog.blogText = blogText;
    res.redirect(`/blogs/${blogId}`);
});

app.delete('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params;
    const blog = blogs.find((blog) => blog.id === blogId);
    // If blog doesnt exists
    if (!blog) return res.status(404).send('Bad Request');
    const newBlogsList = blogs.filter((blog) => blog.id !== blogId);
    blogs = newBlogsList;
    res.redirect('/blogs');
})

app.listen(3000,()=>{
  console.log('server started at port 3000');
});

// https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/
