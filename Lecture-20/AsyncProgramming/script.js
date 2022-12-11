

function sayHello() {
    console.log("Hello World!");
}

function delay(n) {
    for (let i = 1; i <= n; i++){
        const start = new Date().getTime();
        while (new Date().getTime() < start + 1000) { }
    }
    sayHello();
}
   

// console.time('My Timer');

// console.log("START");

// delay(10);

// console.log("END");

// console.timeEnd('My Timer');



// ---------------------------------------------------------------





// console.log("START");

// setTimeout(function callback() {
//     console.log('Inside callback');
// }, 0);

// console.log("END");


// -------------------------------------------------


// console.log("START");

// const id = setTimeout(function callback() {
//     console.log('Inside callback');
// }, 10000);


// setTimeout(function () {
//     clearTimeout(id);
//     console.log('Clearing the prev timer');
// }, 1000);

// console.log("END");

// console.log("START");

// const id = setInterval(() => {
//     console.log('Inside set interval');
// }, 1000);


// console.log("END");

// setTimeout(() => {
//     console.log('stoping the interval');
//     clearInterval(id);
// }, 5000);



for (var i = 0; i < 5; i++){
    function fun() {
        var k = i;
        setTimeout(function cb() {
            console.log(k);
        }, 1000);
    }
    fun();

    // (function () {
    //     let k = i;
    //     setTimeout(function cb() {
    //         console.log(k);
    //     }, 1000);
    // })()
}

for (let i = 0; i < 5; i++){
    setTimeout(function cb() {
        console.log(i);
    }, 1000);
}

