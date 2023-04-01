const socket = io();
const sendBtn = document.getElementById('send-btn');
const inpMsg = document.getElementById('inp-msg');
const chatList = document.getElementById('chat-list');
const chatSection = document.getElementById('chat-section');
const loginSection = document.getElementById('login-section');
const loginBtn = document.getElementById('login-btn');
const usernameInp = document.getElementById('username');

chatSection.classList.add('hide');

sendBtn.addEventListener('click', () => {
    const msg = inpMsg.value;
    socket.emit('send-msg', { msg });
    inpMsg.value = "";
});

socket.on('ack-msg', (data) => {
    const { msg, id, username } = data;
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'rounded-pill', 'mb-2');
    li.innerHTML = `<strong>${username}</strong>  : ${msg}`;
    chatList.append(li);
});

loginBtn.addEventListener('click', () => {
    const username = usernameInp.value;
    socket.emit('login', { username });
});

socket.on('ack-login', () => {
    loginSection.classList.add('hide');
    chatSection.classList.remove('hide');
});



