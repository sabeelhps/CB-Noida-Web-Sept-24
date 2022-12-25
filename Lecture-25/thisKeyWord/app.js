const h1 = document.querySelector('h1');
const allBtns = document.querySelectorAll('.btn');
const para = document.querySelector('p');

// ----------------------Bad way of attaching events---------

// allBtns[0].addEventListener('click',function () {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     const rgbColor = `rgb(${r}, ${g}, ${b})`;
//     allBtns[0].style.backgroundColor = rgbColor;
// })

// allBtns[1].addEventListener('click',function () {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     const rgbColor = `rgb(${r}, ${g}, ${b})`;
//     allBtns[1].style.backgroundColor = rgbColor;
// })


// allBtns[2].addEventListener('click',function () {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     const rgbColor = `rgb(${r}, ${g}, ${b})`;
//     allBtns[2].style.backgroundColor = rgbColor;
// })


// h1.addEventListener('click', function () {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     const rgbColor = `rgb(${r}, ${g}, ${b})`;
//     h1.style.backgroundColor = rgbColor;
// });

// ----------------Good Way of attaching events----------

// function colorize() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// }

// h1.addEventListener('click', colorize);

// for (let btn of allBtns) {
//     btn.addEventListener('click', colorize);
// }

// para.addEventListener('click', colorize);





