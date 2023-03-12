const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');


mongoose.connect('mongodb://localhost:27017/auth-demo')
    .then(() => console.log('connection open!'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    name:'session_id',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        // secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user_id) {
        return next();
    }
    return res.redirect('/login');
}

app.get('/register', (req, res) => {
    res.render('signup');
});

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password || !username.length || !password.length || password.length < 4) {
            return res.send('Invalid Password Format Please Try New Password!');
        } 
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).send(`User with this username already exists!`);
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({ username, passwordHash: hash });
        return res.send('Registered the user successfully!');
    }
    catch (err) {
        return res.send('Cannot register the user at the moment!');
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.send('Invalid Credentials!');
    }

    const user = await User.findOne({ username });

    if (!user) {
        return res.send('Incorrect username or password!');
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
        return res.send('Incorrect username or password!');
    }

    req.session.user_id = user._id;

    res.redirect('/secret');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.get('/secret',isAuthenticated, (req, res) => {
    res.render('secret');
});

app.get('/welcome', isAuthenticated, (req, res) => {
    res.send('Welcome to this route!');
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});