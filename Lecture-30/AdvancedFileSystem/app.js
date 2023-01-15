const fs = require('fs');
const path = require('path');

const F1 = path.join(__dirname,'Data','file1.txt');
const F2 = path.join(__dirname, 'Data', 'file2.txt');
const F3 = path.join(__dirname, 'Data', 'output.txt');

try {
    const data1 = fs.readFileSync(F1, { encoding: 'utf-8', flag: 'r' }).split('\n');
    const data2 = fs.readFileSync(F2, { encoding: 'utf-8', flag: 'r' }).split('\n');
    
    // merge two arrays
    const res = data1.concat(data2);

    // sort the array
    res.sort((a, b) => a - b);

    // join the array with \n
    const data = res.join('\n');
    // write back to the output file

    fs.writeFileSync(F3, data, { encoding: 'utf-8', flag: 'w' });
    console.log('file written successfully');
}
catch (err) {
    console.log(err);
}






