const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'file1.txt');

console.log("START");

// fs.readFile('abc.txt', { encoding: 'utf-8', flag: 'r' }, (err, data) => {
//     if (err) throw new Error("Cannot read the file now");
//     console.log(data);
// });

const data = `
    We are writing this data using
    fs module
`

// fs.writeFile('def.txt', data, { encoding: 'utf-8', flag: 'w' }, (err) => {
//     if (err) throw err;
//     console.log('file written successfully');
// });

const data1 = "This is some new text this is some new data\n";

fs.appendFileSync(filePath, data1, { encoding: 'utf-8', flag: 'a' });

console.log("appended the data successfully");

console.log("END");