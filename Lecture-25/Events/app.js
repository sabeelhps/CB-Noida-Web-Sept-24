const div = document.querySelector('div');

// div.onclick = function () {
//     div.style.backgroundColor = 'purple';    
// }

// div.ondblclick = function () {
//     div.style.backgroundColor = 'aqua';    
// }

function scream() {
    console.log('scream.......');
}

function shout() {
    console.log('shout......');
}

// div.onclick = scream;
// div.onclick = shout;


div.addEventListener('click', scream);
div.addEventListener('click', shout);


