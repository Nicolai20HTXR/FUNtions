class Player {
    constructor() {
        this.y = height / 2;
    }

    playerF() {
        circle(width - 20, this.y, 20);
    }

    keyPressed() {
        if (keyIsDown(DOWN_ARROW)) {
            this.y = this.y + 2;
        } else if (keyIsDown(UP_ARROW)) {
            this.y = this.y - 2;
        }
    }
}