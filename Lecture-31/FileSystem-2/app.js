const fs = require('fs');
const path = require('path');

const F1 = path.join(__dirname, 'data', 'inp1.txt');
const F2 = path.join(__dirname, 'data', 'inp2.txt');
const F3 = path.join(__dirname, 'data', 'output.txt');

console.log('START');

fs.readFile(F1, { encoding: 'utf-8', flag: 'r' }, (err, data1) => {
    if (err) throw new Error('cannot read file 1');
    console.log('file1 read successfully');
    
    const arr1 = data1.split('\n');
    
    fs.readFile(F2, { encoding: 'utf-8', flag: 'r' }, (err, data2) => {
        if (err) throw new Error('cannot read file 2');
        
        console.log('file2 read successfully');

        const arr2 = data2.split('\n');
        const arr3 = arr1.concat(arr2);
        arr3.sort((a, b) => a - b);
        const result = arr3.join('\n');
        
        fs.writeFile(F3, result, (err) => {
            if (err) throw new Error('cannot write in the output.txt');
            console.log('written successfully');
        });
    });
});

console.log('END');

console.log('after end!')
console.log('after end!')
console.log('after end!')
console.log('after end!')
console.log('after end!')
console.log('after end!')
console.log('after end!')
console.log('after end!')


// ------------------------------------------------------------

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: 'utf-8', flag: 'r' }, (err, data) => {
            if (err) reject(new Error(`cannot read the file from ${path}`));
            resolve(data);
        }); 
    });
}



