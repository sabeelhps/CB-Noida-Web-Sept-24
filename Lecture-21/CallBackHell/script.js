function downloadFile(url, downloaded) {
    console.log(`starting the downloand from ${url}`);
    setTimeout(() => {
        downloaded(url);
    },3000);
}

function compressFile(fileName, compressed) {
    console.log(`starting the file compression from ${fileName}`);
    setTimeout(() => {
        compressed(fileName);
    }, 2000);
}

function uploadFile(compressedPath, uploaded) {
    console.log('starting the file upload');
    setTimeout(() => {
        uploaded(compressedPath);
    },3000)
}

const URL = 'http://facebook/storage/profile.jpg'

downloadFile(URL, function downloaded(url) {
    const fileName = url.split('/').pop();
    console.log(`File downloaded successfully ${fileName}`);
    compressFile(fileName, function (fileName) {
        const compressedPath = fileName.split('.')[0] + ".zip";
        console.log(`File compressed successfully as ${compressedPath}`);
        uploadFile(compressedPath, function () {
            const uploadedPath = 'http://facebook.com/localsystem' + compressedPath;
            console.log(`File uploaded successfull at ${uploadedPath}`);
            console.log("Everything done");
        })
    });
});

console.log("Million of line of code After download function call");