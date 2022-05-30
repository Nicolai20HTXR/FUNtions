function setup() {
  createCanvas(400, 400);
  grafer = [];
  for (i = 0; i < 2; i++) {
    grafer.push(new Liniear(0, 25));
    grafer.push(new Exponetial(0, 25));
    grafer.push(new SinCos(0, 25));
  }
  p = new Player();
}

function draw() {
  background(100);
  stroke(0);
  for (i = 0; i < grafer.length; i++) {
    grafer[i].display();
    grafer[i].move();
  }
  p.playerF();
  p.keyPressed();
}