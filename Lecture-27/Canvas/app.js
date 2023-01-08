const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';

let init_x = 100;
let init_y = 100;

const W = 1000;
const H = 600;

// initialize the game
function init() {
    
}

// Draw
function draw() {
    pen.clearRect(0, 0, W, H);
    pen.fillRect(init_x, init_y, 50, 50);
}

// update
function update() {
    init_x = init_x + 1*50;
}

// gameLoop
function gameLoop() {
    update();
    draw();
}

init();
const id = setInterval(gameLoop, 50);


