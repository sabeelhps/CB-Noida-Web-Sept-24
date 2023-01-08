const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';

const CANVAS_HEIGHT = 700;
const CANVAS_WIDTH = 1000;

class Snake{
    constructor(init_len=5) {
        this.init_len = init_len;
        this.direction = 'right';
        this.cells = [];
        this.cellSize = 67;
    }

    createSnake() {
        for (let i = 0; i < this.init_len; i++){
            this.cells.push({ x: i, y: 0 });
        }
    }

    drawSnake() {
        for (let i = 0; i < this.cells.length; i++) {
            const cell = this.cells[i];
            pen.fillStyle = i === this.cells.length - 1 ? 'red' : 'yellow';
            pen.fillRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize-2, this.cellSize-2);
        }
    }

    updateSnake() {
        const headX = this.cells[this.cells.length - 1].x;
        const headY = this.cells[this.cells.length - 1].y;

        const nextX = headX + 1;
        const nextY = headY;

        // removes first cell from the cells array
        this.cells.shift();

        // add new cell after the current head
        this.cells.push({ x: nextX, y: nextY });
    }
}

const snake = new Snake();

function init() {
    snake.createSnake();
    snake.drawSnake();

    function keyPressed(event) {
        switch (event.key) {
            case 'ArrowDown':
                snake.direction = 'down';
                break;
            case 'ArrowUp':
                snake.direction = 'up';
                break;
            case 'ArrowLeft':
                snake.direction = 'left';
                break;
            default:
                snake.direction = 'right';
        }
    }

    document.addEventListener('keydown',keyPressed);
}

function draw() {
    pen.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    snake.drawSnake();
}

function update() {
    snake.updateSnake();
}

function gameLoop() {
    update();
    draw();
}

init();

const id = setInterval(gameLoop, 100);









