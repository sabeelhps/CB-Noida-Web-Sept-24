// Creating a promise

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 10);
        if (randomNum % 2 === 0) {
            resolve(randomNum);
        } else {
            reject(new Error("Cannot be divided by 2"));
        }
    },3000);
});



// consuming a promise

p
    .then((num) => {
        console.log(num);
        console.log('Promise resolved');
    })
    .catch((err) => {
        // console.log(err);
        console.log(err.message);
        console.log('promise rejected');
    });

