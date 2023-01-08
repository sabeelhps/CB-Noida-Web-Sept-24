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
            pen.fillRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize - 2, this.cellSize - 2);
        }
    }

    getNextCellCoordinate() {
        const headX = this.cells[this.cells.length - 1].x;
        const headY = this.cells[this.cells.length - 1].y;

        let nextX;
        let nextY;

        switch (this.direction) {
            case 'left':
                nextX = headX - 1;
                nextY = headY;
                break;
            case 'up':
                nextX = headX;
                nextY = headY - 1;
                break;
            case 'down':
                nextX = headX;
                nextY = headY + 1;
                break;
            default:
                nextX = headX + 1;
                nextY = headY;
        }

        return { x: nextX, y: nextY };
    }

    updateSnake(collision) {
        const nextCellCoordinates = this.getNextCellCoordinate();
        // removes first cell from the cells array
        if (!collision) {
            this.cells.shift();
        }
        // add new cell after the current head
        this.cells.push(nextCellCoordinates);
    }

    getSnakeHead() {
        const headX = this.cells[this.cells.length - 1].x;
        const headY = this.cells[this.cells.length - 1].y;

        return { x: headX, y: headY };
    }
}

class Food{
    constructor() {
        this.foodSize = 67;
        this.x = 0;
        this.y = 0;
    }

    getRandomFood() {
        this.x = Math.floor(Math.random() * (CANVAS_WIDTH - this.foodSize)/this.foodSize);
        this.y = Math.floor(Math.random() * (CANVAS_HEIGHT - this.foodSize)/this.foodSize);
    }

    drawFood() {
        pen.fillStyle = 'aqua';
        pen.fillRect(this.x * this.foodSize, this.y * this.foodSize, this.foodSize, this.foodSize);
    }
}

const snake = new Snake();
const food = new Food();

function init() {
    snake.createSnake();
    snake.drawSnake();
    food.getRandomFood();

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
    food.drawFood();
    snake.drawSnake();
    const nextCellCoordinates = snake.getNextCellCoordinate();
    if (nextCellCoordinates.x * snake.cellSize - snake.cellSize >= CANVAS_WIDTH) {
        pen.font = 'bold 48px serif';
        pen.fillStyle = 'red';
        pen.fillText('Game Over', 100, 100);
        clearInterval(id);
    }
}

function update() {
    const snakeHead = snake.getSnakeHead();
    let collision = false;
    if (snakeHead.x === food.x && snakeHead.y === food.y) {
        // collision condition meets for snake and food
        collision = true;
        food.getRandomFood();
    }
    snake.updateSnake(collision);
}

function gameLoop() {
    update();
    draw();
}

init();

const id = setInterval(gameLoop, 100);









