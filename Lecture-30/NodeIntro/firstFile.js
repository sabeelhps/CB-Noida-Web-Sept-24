// console.log("Hello World");

const a = 100;

const b = 200;

c = a + b;

// console.log(c);

const colors = ["red", "green", "blue", "orange"];

// console.log(colors);
// console.log(colors.length);

colors.push("Black");

// console.log(colors);

const capitalizeAllColors = colors.map((color) => color.toUpperCase());

// console.log(capitalizeAllColors);

const person = {
    name: 'Kartik',
    age: 24,
    isAdult:true
}

// console.log(person);

delete person.age;

// console.log(person);

class Car{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const bmw = new Car("BMW", 100000);
console.log(bmw);