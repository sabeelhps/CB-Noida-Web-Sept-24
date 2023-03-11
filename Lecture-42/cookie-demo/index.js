const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('weneedabettersecret'));

app.get('/', (req, res) => {
    res.cookie('username', 'Kartik', {signed:true});
    res.send('Home Route');
});

app.get('/user', (req, res) => {
    res.cookie('mode', 'dark');
    res.cookie('cart', JSON.stringify([{ id: 1, name: 'Iphone' }, { id: 2, name: 'Ipad' }]));
    res.send('SENT YOU A COOKIE!');
});

app.get('/cart', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send('Cart Route');
});

app.get('/greet', (req, res) => {
    const { username = 'Anonymous' } = req.signedCookies;
    res.send(`Hello from ${username}`);
});

app.get('/signedcookie', (req, res) => {
    res.cookie('fruit', 'apple', { signed: true, httpOnly:true });
    res.send('SENT YOU A SIGNED COOKIE!');
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});