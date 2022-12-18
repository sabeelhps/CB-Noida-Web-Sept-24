// async keyword

async function add(a, b) {
    if (a + b === 9) {
        throw new Error("9 is not a lucky number");
    }
    return a + b;
}

// console.log(add(2,3));

// add(6, 7)
//     .then((val) => {
//         console.log('Inside then')
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });



// add(4, 5)
// .then((val) => {
//     console.log('Inside then')
//     console.log(val);
// })
// .catch((err) => {
//     console.log(err.message);
// });




async function main(GITHUB_URL) {
    // console.log('starting the main function');
    // console.log('starting to fetch the github profile');
    // fetch(GITHUB_URL)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     })

    // ======================================================================
    // More compact way of writing the above code
    try {
        console.log('starting the main function');
        console.log('starting to fetch the github profile');
        const res = await fetch(GITHUB_URL);
        console.log('starting to read the body of response');
        const data = await res.json();
        console.log('Data parsed completly');
        console.log(data);
    }
    catch (err) {
        console.log(err.message);
    }
}



main('https://api.gihub.com/users/facebook');


console.log('After the main function call');
console.log('After the main function call');
console.log('After the main function call');
console.log('After the main function call');



// Resolve should only pass a single argument
const makePromise = () => new Promise((resolve, reject) => resolve({ a:1, b:2}));

makePromise().then((val) => {
    console.log(val.a);
    console.log(val.b);
});

