const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const { Server } = require("socket.io");
const io = new Server(server);

const users = new Map();


app.use('/', express.static(path.join(__dirname,'public')));

io.on('connection', (socket) => {
    console.log(`Connection Establised by client with client id ${socket.id}`);  
    socket.on('send-msg', (data) => {
        io.emit('ack-msg', { msg: data.msg, id:socket.id, username:users.get(socket.id) });
    });
    socket.on('disconnect', () => {
        console.log(`Client with id ${socket.id} got disconnected`);
    });
    socket.on('login', (data) => {
        const { username } = data;
        users.set(socket.id, username);
        socket.emit('ack-login');
    });
});

const port = process.env.PORT || 3000;

server.listen(port,()=>{
  console.log(`server started at port ${port}`);
});



// https://strawberry-pie-61966.herokuapp.com/