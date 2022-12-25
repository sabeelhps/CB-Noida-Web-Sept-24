const btn = document.querySelector('#btn');
const inp = document.querySelector('#inp');
const form = document.querySelector('form');
const para = document.querySelector('p');

btn.addEventListener('dblclick', function () {
    console.log('Button Clicked');
});


// --------------mouse events-----------------
btn.addEventListener('mouseenter', function () {
    btn.style.backgroundColor = 'aqua';
});

btn.addEventListener('mouseleave', function () {
    btn.style.backgroundColor = null;
});

// -------------Keyboard Events----------

inp.addEventListener('keydown', function (event) {
    console.log('key pressed!');
    // console.log(event);
    if (event.which === 13) {
        console.log('You pressed enter key!');
    }
});


// ----------------------form events--------


form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('form submitted');
    console.log(form.elements[1].value);
    console.log(form.elements[2].value);
});


// ----------------------Copy ----------

para.addEventListener('copy', function () {
    alert('Stop Copying now 😠😠😠😠😠😠😠😠😠');
    console.log('copy callback')
})


