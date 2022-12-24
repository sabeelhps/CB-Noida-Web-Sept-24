const dropDown = document.querySelector('#drop-down');

function toggleDropdown() {
    dropDown.classList.toggle('hide');
}

setInterval(toggleDropdown, 1000);

// Think : How we can stop the toggling behavious after 10s (Hard Stop), without blocking the thread






