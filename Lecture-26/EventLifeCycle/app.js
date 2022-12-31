const grandParent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandParent.addEventListener('click', function (event) {
    event.stopPropagation(); // to stop the events in some phase
    console.log('grandparent');
},false);

parent.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('parent');
},false);

child.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('child');
}, false);
