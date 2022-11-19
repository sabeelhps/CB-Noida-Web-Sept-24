
// You are going to a club 

// if your age is less than 18, you cannot enter
// if your ege is between 18 and 21 , than you can enter but cannot drink
// else you can enter and drink

// if (exprsession) {
//     // code
// }

// const age = 19;

// if (age < 18) {
//     console.log('You cannot enter');
// }
// else if (age >= 18 && age <= 21) {
//     console.log('You can enter but cannot drink');
// }
// else if (age === 50) {
//     console.log("Half century");
// }
// else if (age === 100) {
//     console.log("Diamond Jublee");
// }
// else{
//     console.log('You can enter and drink');
// }



// Switch case

// parseInt() and parseFloat()

// const month = parseInt(prompt("Enter any month")); 

// switch (expression) {
//     case 'value':
//         // code 
//     case 'another value':
//         // code
//     case 'some other value':
//         // code
// }

// switch (month) {
//     case 1:
//         console.log('January');
//     case 2:
//         console.log('Februry');
//         break;
//     case 3:
//         console.log('March');
//     case 4:
//         console.log('April');
//     case 5:
//         console.log('May');
//         break;
//     default:
//         console.log('Invalid Month!');
// }


// const johnAge = 23;
// const mikeAge= 20;
// const simonAge = 30;

// const youngest = Math.min(johnAge, mikeAge, simonAge);

// switch (youngest) {
//     case johnAge:
//         console.log('John is youngest');
//         break;
//     case mikeAge:
//         console.log('Mike is youngest');
//         break;
//     case simonAge:
//         console.log('Simon is youngest');
//         break;
// }

// if (johnAge < mikeAge && johnAge < simonAge) {
//     console.log(`John is youngest ${johnAge}`);
// }
// else if (mikeAge < johnAge && mikeAge < simonAge) {
//     console.log(`Mike is youngest ${mikeAge}`);
// }
// else {
//     console.log(`Simon is youngest ${simonAge}`);
// }


const inputFood = prompt("Enter Food Name");

const food = inputFood.toLowerCase();

// if (food.indexOf('chicken') !== -1 || food.indexOf('egg') !== -1) {
//     console.log(`${inputFood} : Belongs to Non-Veg Menu`);
// }
// else if (food.indexOf('onion') !== -1 || food.indexOf('garlic') !== -1) {
//     console.log(`${inputFood}: Belogs to Veg Menu`);
// }
// else {
//     console.log(`${inputFood}: Belogs to Jain Menu`);
// }

if (food.includes('chicken') || food.includes('egg')) {
    console.log(`${inputFood} : Belongs to Non-Veg Menu`);
}
else if (food.includes('onion') || food.includes('garlic')) {
    console.log(`${inputFood}: Belogs to Veg Menu`);
}
else {
    console.log(`${inputFood}: Belogs to Jain Menu`);
}



