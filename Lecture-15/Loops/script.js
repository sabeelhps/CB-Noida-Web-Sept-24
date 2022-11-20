// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);


// for (initialisation; condition check ; updation expression) {
    
// }


// let num;

// for (num = 1; num <= 10; num = num + 1){
//     if (num === 6) {
//         // break;
//         continue;
//     }
//     console.log(num);
// }


// while loops

// while (conditon) {
    
// }

// while ([]) {
//     console.log('Inside while loop');
// }

// let i = 100;

// while (i < 200) {
//     console.log(i);
//     i = i - 20;
// }


// const movies = [
//     { name: 'Sholay', director: 'Ramesh Sippy' },
//     { name: 'PK', director: 'Raj Kumar Hirani' },
//     { name:'Bahubali',director:'SS Rajamouli'}
// ];

// console.table(movies);

// for (let i = 0; i < movies.length; i++){
//     console.log(`Name : ${movies[i].name}, Director : ${movies[i].director}`);
// }


// const fruits = ['Apple', 'Orange', 'Grapes'];

// for (let fruit of fruits) {
//     console.log(fruit);
// }


// const car = {
//     name: 'Audi',
//     price: 326787438,
//     isDiskBrake: true,
//     color:'Black'
// }

// for (let prop in car) {
//     console.log(prop,car[prop]);   
// }



const sentance = "This fox jumps over a white lazy dog";
// array of all words
const words = sentance.split(" ");
let res = [];
for (let word of words) {
    const reverersedWord = word.split("").reverse().join("");
    res.push(reverersedWord);
}
const reveresedSentence = res.join(" ");

console.log(reveresedSentence);