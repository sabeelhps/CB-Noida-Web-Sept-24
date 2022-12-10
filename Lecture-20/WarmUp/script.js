class Point{
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get getX() {
        return this.x;
    }

    get getY() {
        return this.y;
    }

    set setX(newX) {
        this.x = newX;
    }

    set setY(newY) {
        this.y = newY;
    }

    static calculateDist(p1, p2) {
        const dy = p2.y - p1.y;
        const dx = p2.x - p1.x;
        return Math.hypot(dy, dx);
    }

    static slope(p1, p2) {
        const dy = p2.y - p1.y;
        const dx = p2.x - p1.x;

        return dy / dx;
    }

    static centroid(p1, p2, p3) {
        const x = (p1.x + p2.x + p3.x) / 3;
        const y = (p1.y + p2.y + p3.y) / 3;

        return new Point(x, y);
    }
}



const p1 = new Point(1, 2);
const p2 = new Point(3, 4);
const p3 = new Point(5, 6);

console.log(Point.centroid(p1, p2, p3));
console.log(Point.slope(p1, p2));
