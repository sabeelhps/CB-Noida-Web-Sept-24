const rectangles = [
    { l: 2, b: 3 },
    { l: 3, b: 4 },
    { l: 12, b: 7 },
    { l: 7, b: 9 },
    { l: 1, b: 2 },
    { l: 5, b: 7 },
    { l: 8, b: 9 }
];


function calculateArea(rectangles) {
    const output = [];
    for (let rect of rectangles) {
        output.push(rect.l * rect.b);
    }
    return output;
}

function calculatePerimeter(rectangles) {
    const output = [];
    for (let rect of rectangles) {
        output.push(2 * (rect.l + rect.b));
    }
    return output;
}

function calculateDiagonal(rectangles) {
    const output = [];
    for (let rect of rectangles) {
        output.push(Math.hypot(rect.l, rect.b));
    }
    return output;
}


// Higher order function

// 1.---------------------------------

// function fun(f) {
//     f(); 
//     console.log('Inside fun');
// }


// function innerFun() {
//     console.log('Inside inner fun');
// }

// fun(innerFun);


// 2.-------------------------------------

// function fun() {
//     var a = 200;
    
//     function innerFun() {
//         console.log(a);
//         console.log('Inner fun');
//     }

//     return innerFun;
// }

// const f = fun();
// f();


// Good way writing the code 

const area = (l, b) => l * b;
const perimeter = (l, b) => 2 * (l + b);
const diagonal = (l, b) => Math.hypot(l, b);


function calculate(rectangles,logic) {
    const output = [];
    for (let rect of rectangles) {
        output.push(logic(rect.l, rect.b));
    }
    return output;
}


console.log(calculate(rectangles, area));
console.log(calculate(rectangles, perimeter));
console.log(calculate(rectangles, diagonal));






// function greaterThan(m) {
//     return function (n) {
//         return m < n;
//     }
// }

// const greaterThan10 = greaterThan(10);

// const greaterThan15 = greaterThan(15);







