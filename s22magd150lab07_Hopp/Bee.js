class Bee {
  
  constructor(y, maxX, s) {
    var xPos, yPos, maxXPos;
    var speed;

    this.xPos = 30;
    this.yPos = y;
    this.maxXPos = maxX;
    this.speed = s;
  }

  /* Function used to draw a Bee object */
  display() {
    /* Draws the body of the bee */
    fill(245, 236, 84);
    ellipseMode(CENTER);
    ellipse(this.xPos, this.yPos, 30, 15);

    /* Draws the center stripe on the bee */
    rectMode(CENTER);
    push();
    fill(0);
    rect(this.xPos, this.yPos, 5, 14);
    pop();

    /* If-else statement determines if
       the bee is moving left or right */
    if (this.speed > 0) {
      /* Draws the back stripe on the bee */
      push();
      fill(0);
      quad(this.xPos - 7, this.yPos - 6, this.xPos - 12, this.yPos - 3, this.xPos - 12, this.yPos + 3, this.xPos - 7, this.yPos + 6);
      pop();

      /* Draws the head of the bee */
      ellipse(this.xPos + 10, this.yPos - 2, 15, 15);

      /* Draws the eye of the bee */
      push();
      strokeWeight(3);
      point(this.xPos + 12, this.yPos - 3);
      pop();

      /* Draws the mouth of the bee */
      push();
      noFill();
      arc(this.xPos + 17, this.yPos - 2, 7, 7, HALF_PI, 3 * QUARTER_PI);
      pop();

      /* Draws the antennae of the bee */
      push();
      noFill();
      arc(this.xPos + 17, this.yPos, 20, 20, 5 * QUARTER_PI, 3 * HALF_PI);
      arc(this.xPos + 17, this.yPos, 15, 15, 5 * QUARTER_PI, 3 * HALF_PI);
      pop();

      /* Draws the stinger of the bee */
      push();
      fill(0);
      triangle(this.xPos - 15, this.yPos - 3, this.xPos - 23, this.yPos, this.xPos - 15, this.yPos + 3);
      pop();

      /* Draws the wings of the bee */
      push();
      fill(227, 252, 254);
      ellipse(this.xPos - 6, this.yPos - 15, 10, 20);
      ellipse(this.xPos, this.yPos - 15, 10, 20);
      pop();
    }
    else {
      /* Draws the back stripe on the bee */
      push();
      fill(0);
      quad(this.xPos + 7, this.yPos - 6, this.xPos + 12, this.yPos - 3, this.xPos + 12, this.yPos + 3, this.xPos + 7, this.yPos + 6);
      pop();

      /* Draws the head of the bee */
      ellipse(this.xPos - 10, this.yPos - 2, 15, 15);

      /* Draws the eye of the bee */
      push();
      strokeWeight(3);
      point(this.xPos - 12, this.yPos - 3);
      pop();

      /* Draws the mouth of the bee */
      push();
      noFill();
      arc(this.xPos - 17, this.yPos - 2, 7, 7, QUARTER_PI, HALF_PI);
      pop();

      /* Draws the antennae of the bee */
      push();
      noFill();
      arc(this.xPos - 17, this.yPos, 20, 20, 3 * HALF_PI, 7 * QUARTER_PI);
      arc(this.xPos - 17, this.yPos, 15, 15, 3 * HALF_PI, 7 * QUARTER_PI);
      pop();

      /* Draws the stinger of the bee */
      push();
      fill(0);
      triangle(this.xPos + 15, this.yPos - 3, this.xPos + 23, this.yPos, this.xPos + 15, this.yPos + 3);
      pop();

      /* Draws the wings of the bee */
      push();
      fill(227, 252, 254);
      ellipse(this.xPos + 6, this.yPos - 15, 10, 20);
      ellipse(this.xPos, this.yPos - 15, 10, 20);
      pop();
    }
  }

  /* Function used to move a Bee object */
  move() {
    this.xPos += this.speed;
    
    /* Switches direction of the bee */
    if (this.xPos < 0 || this.xPos > this.maxXPos) {
      this.speed *= -1;
    }
  }
}