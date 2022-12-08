
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age;
    }

    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

const p1 = new Person("Vivek", 25);




class Car{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Getter and Setter Methods
    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }

    set setPrice(newPrice) {
        if (newPrice < 0) {
            this.price = 0;
        } else {
            this.price = newPrice;
        }
    }

    startCar() {
        console.log('starting the car ......');   
    }
}

const c1 = new Car("BMW", 100);



class RacingCar extends Car{
    constructor(name, price, topSpeed, color) {
        super(name, price);
        this.topSpeed = topSpeed;
        this.color = color;
    }

    get getColor() {
        return this.color;
    }

    get getName() {
        return "Racing Car : " + super.getName;
    }
}


const r1 = new RacingCar("Audi", 350, 200, "Black");


// -----------------Static Methods - They belogs to Class


class Point{
    
    static name = "MyName";

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static getDistance(p1, p2) {
        console.log(this.name);
        return Math.hypot((p1.y - p2.y), (p1.x - p2.x));
    }
}

const point1 = new Point(2, 3);
const point2 = new Point(4, 5);













