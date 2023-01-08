// Visulisation : https://web.archive.org/web/20180324022838/http://demo.nimius.net/debounce_throttle/

const searchInp = document.getElementById('searchInp');

let count = 0;

function fetchAllMatchedProduct() {
    console.log('api call', count++);
}

// --------------------------------------debouncing----------------

// function createDebounce(func, delay) {
//     let timer;
//     return function () {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             func();
//         }, delay);
//     }
// }

// const debounce = createDebounce(fetchAllMatchedProduct, 200);
// searchInp.addEventListener('keypress', debounce);

// ----------------------------------------------------------------------

// ----------------------------Throttling------------------------

function createThrottle(func, delay) {
    let start = 0;
    return function () {
        const current = new Date().getTime();
        if (current - start > delay) {
            func();
            start = current;
        }
    }
}

const throttleFunc = createThrottle(fetchAllMatchedProduct, 500);

searchInp.addEventListener('keydown', throttleFunc);



