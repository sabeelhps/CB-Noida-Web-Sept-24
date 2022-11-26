const obj = {
    a: 1,
    b: true,
    c: "Hello",
    d: { m: 100, n: false },
    e:[99,88]
}

const res = [];

for (let prop in obj) {
    res.push([prop, obj[prop]]);
}

// console.log(res);


const sentence = "Hello World";
let ans = "";

// Sol 1:
// for (let char of sentence) {
//     if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//         ans = ans + char.toUpperCase();
//     } else {
//         ans = ans + char.toLowerCase();
//     }
// }

// console.log(ans);

// Sol 2:

let ans2 = "";
for (let char of sentence) {
    if (char.toUpperCase() === char) {
        ans2 += char.toLowerCase();
    } else {
        ans2 += char.toUpperCase();
    }
}

console.log(ans2);






