// function downloadFile(url) {
//     console.log(`starting the downloand from ${url}`);
//     return new Promise((resolve, reject) => {
//         if (!url.startsWith('http')) {
//             reject(new Error("Invalid Url"));
//         }
//         setTimeout(() => {
//             resolve(url);
//         }, 3000);
//     });
// }

// function compressFile(fileName) {
//     console.log(`starting the file compression from ${fileName}`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(fileName);
//         }, 2000);
//     });
// }

// function uploadFile(compressedPath) {
//     console.log('starting the file upload');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(compressedPath);
//         }, 3000)
//     });
// }
// const URL = 'ws://facebook/storage/profile.jpg'

// downloadFile(URL, function downloaded(url) {
//     const fileName = url.split('/').pop();
//     console.log(`File downloaded successfully ${fileName}`);
//     compressFile(fileName, function (fileName) {
//         const compressedPath = fileName.split('.')[0] + ".zip";
//         console.log(`File compressed successfully as ${compressedPath}`);
//         uploadFile(compressedPath, function () {
//             const uploadedPath = 'http://facebook.com/localsystem' + compressedPath;
//             console.log(`File uploaded successfull at ${uploadedPath}`);
//             console.log("Everything done");
//         })
//     });
// });

// console.log("Million of line of code After download function call");


// ------------------------------Good Code Using Promise-----


// Creating a promise
// const p = new Promise(function (resolve, reject) {
//     const randumNum = Math.floor(Math.random() * 10);
//     if (randumNum % 2 !== 0) {
//         const err = new Error("Not a even number");
//         reject(err);
//     }
//     resolve(randumNum);
// });



// // consuming a promise
// p.then((num) => {
//     console.log(num);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })
//     .finally(() => {
//         console.log('Yea chalega hi har case mein!');
//     })


// const GITHUB_URL = "https://api.github.com/users/sabeelhps";

// const response = fetch(GITHUB_URL);

// response
//     .then((profile) => {
//     console.log(profile);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })


// ==========Better way of writing the async tasks using a promise chain=======


// downloadFile(URL)
//     .then((url) => {
//         const fileName = url.split('/').pop();
//         console.log(`File downloaded successfully ${fileName}`);
//         return compressFile(fileName);
//     })
//     .then((fileName) => {
//         const compressedPath = fileName.split('.')[0] + ".zip";
//         console.log(`File compressed successfully as ${compressedPath}`);
//         return uploadFile(compressedPath);
//     })
//     .then((compressedPath) => {
//         const uploadedPath = 'http://facebook.com/localsystem' + compressedPath;
//         console.log(`File uploaded successfull at ${uploadedPath}`);
//         console.log("Everything done");
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });





// ====================Refactored promise chain======================


function downloadFile(url) {
    console.log(`starting the downloand from ${url}`);
    return new Promise((resolve, reject) => {
        if (!url.startsWith('http')) {
            return reject(new Error("Invalid Url"));
        }
        setTimeout(() => {
            const fileName = url.split('/').pop();
            console.log(`File downloaded successfully ${fileName}`);
            resolve(fileName);
        }, 3000);
    });
}

function compressFile(fileName) {
    console.log(`starting the file compression from ${fileName}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const compressedPath = fileName.split('.')[0] + ".zip";
            console.log(`File compressed successfully as ${compressedPath}`);
            resolve(compressedPath);
        }, 2000);
    });
}

function uploadFile(compressedPath) {
    console.log('starting the file upload');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const uploadedPath = 'http://facebook.com/localsystem' + compressedPath;
            resolve(uploadedPath);
        }, 3000)
    });
}
const URL = 'http://facebook/storage/profile.jpg';


// downloadFile(URL)
//     .then((fileName) => compressFile(fileName))
//     .then((compressedPath) => uploadFile(compressedPath))
//     .then((uploadedPath) => {
//         console.log(`File uploaded successfull at ${uploadedPath}`);
//         console.log("Everything done");
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });


async function main(URL) {
    const fileName = await downloadFile(URL);
    const compressedPath = await compressFile(fileName);
    const uploadedPath = await uploadFile(compressedPath);
    console.log(`File uploaded successfull at ${uploadedPath}`);
    console.log("Everything done");
}

main(URL);