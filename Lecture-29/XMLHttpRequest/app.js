const req = new XMLHttpRequest();

const BASE_URL = 'https://api.github.com/users'

req.onload = function () {
    const response = JSON.parse(this.responseText);
    console.log(response.followers);
}

req.onerror = function () {
    console.log(this);
}

req.open('GET', `${BASE_URL}/sabeelhps`);
req.send();