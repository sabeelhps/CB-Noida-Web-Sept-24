// const buttons = document.querySelectorAll('button');
const section = document.querySelector('section');

// for (let btn of buttons) {
//     btn.addEventListener('click', function () {
//         console.log(btn.innerText);
//     });
// }


// event delegation

section.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        console.log(event.target);
    }
});




// ======================
const grandParent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandParent.addEventListener('click', function (event) {
    // console.log(event.target);
    console.log('grandparent');
});

parent.addEventListener('click', function (event) {
    // console.log(event.target);
    console.log('parent');
});

child.addEventListener('click', function (event) {
    event.stopPropagation();
    // console.log(event.target);
    console.log('child');
});