const radius = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const areas = radius.map((r) => Math.PI * r * r);
// console.log(areas);


// const area = r => Math.PI * r * r;
// const diameter = r => 2 * r;

// Array.prototype.mapArr = function (logic) {
//     const output = [];
//     for (let r of this) {
//         output.push(logic(r));
//     }
//     return output;
// }

// console.log(radius.mapArr(area));
// console.log(radius.mapArr(diameter));
// console.log(radius.mapArr((r) => 2 * Math.PI * r));


// -----------------------------filter-----------

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ["Mango", "Orange", "Guava", "Litchi", "Apple", "Banana","Pine Apple"];

const isEven = num => {
    if (num % 2 === 0) {
        return true;
    } 
    return false;
}

Array.prototype.myFilter = function(logic) {
    const output = [];
    for (let num of this) {
        if (logic(num)) {
            output.push(num);
        }
    }
    return output;
}
console.log(nums.myFilter(isEven));
console.log(nums.filter(isEven));


console.log(fruits.myFilter(fruit => fruit.length >= 6));



// Write Polyfill for 
    // 1.find
    // 2.some
    // 3.flat


const arr = [1, 2, 3, 4, , 5, 6, 7, 8];

console.log(arr.find((num) => num === 4));

function is4Present(num) {
    return num === 4;
}

function myFind(arr, logic) {
    let res;
    for (let num of arr) {
        if (logic(num)) {
            res = num;
            return res;
        }
    }
    return res;
}

console.log(myFind(arr, is4Present));










