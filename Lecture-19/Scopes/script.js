// 'use strict'

// Warm up question
function moveCapitalsLetters(str) {
    const letters = str.split("");

    const capitalLetters = letters.filter((char) => char.toUpperCase() === char);
    const smalleLetters = letters.filter((char) => char.toLowerCase() === char);

    return capitalLetters.concat(smalleLetters).join("");
}

// console.log(moveCapitalsLetters('haPpY'));
// console.log(moveCapitalsLetters('sCrEAm'));




// -------------------------------Scopes-----------------------------



// Global scope
var fullname = "Sarah";


// Global Scope
// function getName() {

//     let lastName = 'ABC';

//     function fun() {
//         console.log('Inside fun')
//         console.log(lastName);

//         function f() {
//             let firstName = "XYZ";
//             console.log(lastName);
//             console.log(firstName);
//         }

//         f();

//         console.log(lastName);
//     }

//     fun();
// }

// getName();


// var a = 100; //Its has either global scope or functional scope


// function fun() {
//     var a = 200;
//     console.log(a);
// }

// console.log(a);
// fun();

// var c = 300;

// if (true) {
//     var c = 500; // new varable wont be created right over
//     console.log(c);
// }

// console.log(c);




// --------------------------scope for let and const-----



{
    // this is a block in js
}



// let a = 900;

// {
//     let a = 800;
//     console.log(a);
// }

// console.log(a);


// -------------------------------scope-------------------

let name = "Sarah";

function getName() {
    let name = "Another Name";
    console.log(name);
    f();
}


function f() {
    console.log(name);
}


getName();


// var a = 100;

// function fun() {
    
//     var b = 200;
//     console.log("Inside fun");
//     function innerFun() {
//         var c = 300;
//         console.log(c);
//         console.log(b);
//     }

//     innerFun();
// }

// fun();

// console.log(a);
