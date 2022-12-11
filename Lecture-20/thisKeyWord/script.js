// ---------------Impilicit Binding------------

// function fun() {
//     console.log(this);
// }

// fun();
// window.fun();

// const person = {
//     name: 'Kartik',
//     age: 23,
//     isAdult: true,
//     sayHello: function () {
//         console.log(this);
//         console.log(`Hello from ${this.name}`);
//     }
// }

// person.sayHello();

// const greet = person.sayHello;

// greet();

// ----------------------------------Explicit Binding------------

function person(name, age) {
    console.log(name);
    console.log(age);
    console.log(this);
}

const obj = {
    l: 10,
    m:true
}

// person("Kartik",24);

// Using bind method
const f = person.bind(obj);

// ..
// ..
// ...

// f("Vivek", 23);


// Using Call method

// person.call(obj, "Garvit", 24);


// apply - HomeWOrk



const person1 = {
    name: 'Kartik',
    age: 23,
    isAdult: true,
    sayHello: function () {
        console.log(this);
        console.log(`Hello from ${this.name}`);
    }
}

const greet = person1.sayHello.bind(person1);

// greet();


// --------------------------------------

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }

// function Laptop(name,price,memory, processor) {
//     Product.call(this, name, price);
//     this.memory = memory;
//     this.processor = processor;
// }

// const cheese = new Food('Pizza', 5);

// const macbook = new Laptop('Macbook Air', 200, 8, "M1");




// ----------------------this keyword with arrow function -------------


// Use this keyword wisely in arrow function
const car = {
    name: 'BMW',
    price: 200,
    startCar: () => {
        console.log(this);
        console.log(`Starting the car ${this.name}`);
    }
}

car.startCar();




