const BASE_URL = 'https://api.github.com/users';

fetch(`${BASE_URL}/sabeelhps`)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.followers);
    })
    .catch((err) => {
        console.log(err);
    });



