class SinCos extends Graf {
    constructor(startX, size) {
        super(startX, size);
    }
    funktion(x) {
        return this.a * sin(this.b * x - this.b * width) + this.d;
    }
    isolering() {
        this.a = random(10, 40);
        this.b = random(0.01, 0.1);
        this.d = this.point2.y;
    }
    differentiering() {
        return this.a * this.b * cos(this.b * this.startX - this.b * width);
    }
}