// Spread Operator

const arr1 = [1, 2, 4];
const arr2 = [90, 80, 70];

const arr = [...arr1, 8, 9, 10, ...arr2];

// console.log(arr);


const car = {
    name: 'BMW',
    price:100
}

const racingCar = {
    ...car,
    topSpeed: 200,
    color:'black'
}

// console.log(racingCar);


const nums = [9, 8, 1, 2, 3, 4, 100];

// console.log(Math.max(...nums));
// console.log(Math.min(...nums));


// -------------------------------Rest Parameter----------------------


function add(a, b, ...nums) {
    return a + b + nums.reduce((sum, num) => sum + num, 0);
}

console.log(add(2, 3, 4, 5, 6, 7, 8, 9, 10));


// -----------------------------------Destructring----------


const colors = ['blue', 'orange', 'purple', 'lightgreen', 'brown'];

// const [firstColor, secondColor] = colors;

// const firstColor = colors[0];
// const secondColor = colors[1];

const person = {
    lastName: 'Doe',
    firstName: 'John',
    age: 23
};


const { firstName:myFirstName='Anonymous', lastName } = person;

console.log(myFirstName);

// const firstName = person.firstName;
// const lastName = person.lastName;









