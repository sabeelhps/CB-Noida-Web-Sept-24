
// const a = 10;
// const b = 20;

// const res = a + b;

// console.log(res);

// // ...5000 lines 

// const c = 30;
// const d = 40;

// const res1 = c + d;
// console.log(res1);

// // ...5000 line of code


// const e = 50;
// const f = 60;

// const res2 = e + f;
// console.log(res2);


// function definition
function addNum(x, y) {
    const res = x + y;
    console.log(res);
}


// addNum(3, 4); //function call
// // ....5000 line 
// addNum(100, 200);

// addNum(5, 6);

// addNum(2.3, 4.5);

// addNum(true, 50);

// addNum(true, false);

// addNum(true, "hello");

// addNum(40, []);


// Normal Function declaration using a function keyword
// function multiply(a, b, c) {
//     return a * b * c;
// }


// const res = multiply(2, 3, 4);

// // console.log(res);


// // Function expression
// const squareRoot = function (num) {
//     return Math.sqrt(num);
// }

// console.log(squareRoot);
// console.log(squareRoot(9));

function simpleInterest(p,r,t) {
    const si = (p * r * t) / 100;
    return si;
}

// console.log(simpleInterest(1, 2, 3));

function compoundInterest(p,r,t) {
    const ci = p * (1 + (r / 100)) ** t;
    return ci;
}

// console.log(compoundInterest(10, 100, 2));

function factorial(num) {
    if (num === 0 || num===1) {
        return 1;
    }

    let fact = 1;
    for (let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}

// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(100));

function nCr(n, r) {
    const ans = factorial(n) / (factorial(r) * factorial(n - r));
    return ans;
}

// console.log(nCr(3, 2));


// Arrow functions - syntactical sugar

const add = (a, b)=> {
    return a + b;
}

// console.log(add(3, 4));

// arrow function implicit return
const cubeRoot = num => Math.cbrt(num);

// console.log(cubeRoot(27));
// console.log(cubeRoot(729));




const cart = [
    {   
        id:1,
        name: 'Iphone',
        price: 100,
        qty:2
    },
    {   
        id:2,
        name: 'Apple Watch',
        price: 200,
        qty:3
    },
    {   
        id:3,
        name: 'Macbook',
        price: 50,
        qty:4
    }
]

function totalAmount(cart) {
    let totalPrice = 0;
    for (const item of cart) {
        totalPrice = totalPrice + item.price * item.qty;
    }
    return totalPrice;
}

// console.log(totalAmount(cart));


function addItem(cart,item) {
    cart.push(item);
}


// addItem(cart, { id: 3465, name: 'Nike Shoes', price: 40, qty: 5 });

// console.log(totalAmount(cart));
// console.log(cart);

function removeItem(cart, deleteId) {
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        if (item.id === deleteId) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log('Item with given id not found');
        return;
    }

    cart.splice(index, 1);
}

// console.log(cart);
removeItem(cart, 2);
// console.log(cart);


// ===========================default parameters



const addNumbers = (x, y) => {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    return "Invalid Input";
}


// function multipyNums(a, b=20, c) { // not correct way of writing default params, they should come at the last of the parameter list
//     return a * b * c;
// }

// console.log(multipyNums(1, 2, 3));















