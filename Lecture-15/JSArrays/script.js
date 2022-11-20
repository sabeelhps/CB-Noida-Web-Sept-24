
const colors = ["Blue", "Green", "Orange", "White", "Aqua", "Purple"];

// console.log(colors);


//--------------push()- Add elements to the end of the array
colors.push("Black", "Sky Blue", "Magenta");

// console.log(colors);

// ------------pop()-Removes single element from the end of the array and also returns the popped element
const lastColor = colors.pop();

// console.log(lastColor);

// ----------------unshift(): Add elements to start of the array

colors.unshift('Violet', 'Pale Violet Red', 'Pearl White');


// ---------shift(): Removes the first element and also resturns it
colors.shift()