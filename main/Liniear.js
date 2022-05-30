class Liniear extends Graf {
    constructor(startX, size) {
        super(startX, size);
    }
    funktion(x) {
        return this.a * x + this.b;
    }
    isolering() {
        this.a = (this.point2.y - this.point1.y) / (this.point2.x - this.point1.x);
        this.b = (this.point2.x * this.point1.y - this.point1.x * this.point2.y) / (this.point2.x - this.point1.x);
    }
    differentiering() {
        return this.a;
    }
}