
function Person(name,age) {
    this.name = name;
    this.age = age;
    // this.getName = function () {
    //     console.log(this.name);
    // }
}

// Changing the prototype directly is not a good practice
Person.prototype.getName = function () {
    console.log(this.name);
}
const p1 = new Person("Kartik", 23);
const p2 = new Person("Vivek", 21);




