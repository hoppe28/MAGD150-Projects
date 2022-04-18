class Flower {
  
  constructor(x, y) {
    var xPos, yPos;
    var stemLength, petalSize;
    var petalColor;
    let v1;

    this.xPos = x;
    this.yPos = y;
    this.stemLength = random(50, 100); // Generates a random stem length
    this.petalSize = random(20, 40);  // Generates a random petal size
    this.petalColor = color(random(255), random(255), random(255)); // Generates a random petal color
  }

  display() {
    /* Draws the stem of the flower */
    fill(86, 254, 43);
    rectMode(CORNERS);
    rect(this.xPos, this.yPos, this.xPos + 4, this.yPos - this.stemLength);

    /* Draws the four petals of the flower */
    fill(this.petalColor);
    ellipseMode(CORNERS);
    ellipse(this.xPos + 4, this.yPos - this.stemLength, this.xPos - this.petalSize, this.yPos - this.stemLength + this.petalSize / 2);
    ellipse(this.xPos, this.yPos - this.stemLength, this.xPos + this.petalSize, this.yPos - this.stemLength + this.petalSize / 2);
    push();
    translate(0, this.petalSize / 4);
    ellipse(this.xPos + 2 - this.petalSize / 4, this.yPos - this.stemLength, this.xPos + 2 + this.petalSize / 4, this.yPos - this.stemLength - this.petalSize);
    ellipse(this.xPos + 2 - this.petalSize / 4, this.yPos - this.stemLength, this.xPos + 2 + this.petalSize / 4, this.yPos - this.stemLength + this.petalSize);
    pop();
  }
}