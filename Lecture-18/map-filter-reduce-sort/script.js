
// ----------------------------map--------------------

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function square(num) {
    return num ** 2;
}

const numsSquare = nums.map(square);

// console.log(nums);
// console.log(numsSquare);

const numsSquareRoot = nums.map(num => Math.sqrt(num));

// console.log(numsSquareRoot);


// const numsCubeRoot = nums.map(function (num, idx, arr) {
//     console.log(num);
//     console.log(idx);
//     console.log(arr);

//     return Math.cbrt(num);
// });

// console.log(numsCubeRoot);


const foodNames = ["Dal Makhni", "Kadhai Paneer", "Aloo Jira", "Biryani"];


const foods = foodNames.map((foodName) => {
    return { name: foodName, price: 0, isAvailable: false }
});

// console.log(foods);
// console.table(foods);


// ------------------------------filter --------------------------

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}


const evenNums = nums.filter(isEven);

// console.log(nums);
// console.log(evenNums);




const dishes = [
    "Chicken Kadhai",
    "Chicken Biryani",
    "Dal Makhni",
    "Garlic Bread",
    "Onion Rings",
    "Paneer Masala",
    "Egg Curry",
    "Egg Bhurji",
    "Paneer Bhurji",
    "Onion Pizza",
    "Chhole Bhature",
    "Chicken Momos",
    "Badnam Chai",
    "Garlic Noodles"
];


function isVeg(food) {
    if (food.toLowerCase().includes('chicken') || food.toLowerCase().includes('egg')) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(food) {
    if (food.toLowerCase().includes('onion') || food.toLowerCase().includes('garlic')) {
        return false;
    }
    return true;
}


// console.log(dishes);
const vegMenu = dishes.filter(isVeg);
// console.log(vegMenu);

const jainMenu = dishes.filter(isVeg).filter(isOnionGarlicFree);
// console.log(jainMenu);



// ------------------------------------reduce--------------------


const cart = [
    {
        name: 'Iphone',
        price: 100,
        qty: 3
    },
    {
        name: 'Macbook',
        price: 200,
        qty: 2
    },
    {
        name: 'Apple Watch',
        price: 500,
        qty: 1
    },
];


function add(acc, curr) {
    return acc + curr;
}

const sumOfNums = nums.reduce((sum, curr) => sum + curr, 0);
// const sumOfNums = nums.reduce(add, 0);
// console.log(sumOfNums);

const totalAmount = cart.reduce((amount, item) => amount + item.price * item.qty, 0);
// console.log(totalAmount);




// ----------------------------------------sort-----------


const numList = [1, 2, 10, 11, 20, 30, 6, 7, 8, 9];

console.log(numList);

numList.sort((a,b)=> a-b);

console.log(numList);


// --------------------------------some------------


const isPresent = numList.some((num) => num === 21);

console.log(isPresent);


// -----------------------------------find----------------


const macbook = cart.find((item) => item.name.toLowerCase() === 'apple watch');


if (macbook) {
    console.log(macbook);
} else {
    console.log('Nahi mila');
}





























