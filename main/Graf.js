class Graf {
    constructor(startX, size) {
        this.startX = startX;
        this.startY;
        this.size = size;
        this.speed = random(1, 2);

        this.point1 = createVector(0, random(0, height));
        this.point2 = createVector(width, random(0, height));

        this.isolering();
    }
    funktion(x) {
        return false;
    }
    isolering() {
        return false;
    }
    differentiering() {
        return false;
    }
    display() {
        push();
        noStroke();
        translate(this.startX, height - this.startY);
        rotate(-atan(this.differentiering()));
        rect(0 - this.size / 2, 0 - this.size / 6, this.size, this.size / 3);
        pop();
    }
    move() {
        this.startX += this.speed;
        this.startY = this.funktion(this.startX);
        this.boundaries();
    }
    boundaries() {
        if (this.startX - this.size / 3 > width) {
            this.startX = -this.size;
            this.startY = this.funktion(this.startX);
        }
    }
}


