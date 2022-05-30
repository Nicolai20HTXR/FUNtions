class Exponetial extends Graf {
  constructor(startX, size) {
    super(startX, size);
  }
  funktion(x) {
    return this.a * this.b ** x;
  }
  isolering() {
    this.a = ((this.point1.y / this.point2.y) ** (1 / (this.point2.x - this.point1.x))) ** (this.point2.x) * this.point2.y;
    this.b = 1 / (this.point1.y / this.point2.y) ** (1 / (this.point2.x - this.point1.x));
  }
  differentiering() {
    return this.a * this.b ** this.startX * log(this.b);
  }
}