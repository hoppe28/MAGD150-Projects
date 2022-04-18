var posX, posY;

var xVelocity = 3.0;
var yVelocity = 0.0;
var gravity = 1.5;

var onGround = false;
var jumpSize = -13;

var angle = 0;

var scalar;

function setup() {
  createCanvas(500, 300);
  posX = width / 4;
  posY = height - 50;
  scalar = random(0.5, 1.0); // Generates a random scalar value for the windmill
}

function draw() {
  background(77, 214, 43);

  /* Colors the ground brown */
  push();
  noStroke();
  fill(173, 85, 14);
  rect(0, height - 50, width, 50);
  pop();

  push();
  translate(width / 2, height - 75); // Moves the windmill to the horizontal center and onto the ground
  scale(scalar); // Changes the size of the windmill based on the random scalar value generated every time the program is reloaded
  drawWindmill(scalar);
  pop();

  update();
  drawPerson();
  movePerson();
}

/* This function draws a windmill with constantly rotating blades */
function drawWindmill() {
  push();
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 0, 10, 100);
  pop();

  push();
  translate(0, -50);
  rotate(angle);
  strokeWeight(2);
  rectMode(CORNERS);
  rect(5, -5, 55, 5);
  rect(5, 5, -5, 55);
  rect(-5, 5, -55, -5);
  rect(-5, -5, 5, -55);
  rect(-5, -5, 5, 5);
  pop();

  angle += 0.03;
}

/* This function updates the person's vertical
velocity, position, and whether they are on the ground or not */
function update() {
  yVelocity += gravity;

  posY += yVelocity;

  if (posY >= height - 50) {
    posY = height - 50;
    onGround = true;
  }
  else {
    onGround = false;
  }
}

/* This function draws a basic person */
function drawPerson() {
  strokeWeight(3);
  line(posX, posY, posX - 16, posY - 20);
  line(posX, posY, posX + 16, posY - 20);
  line(posX, posY, posX - 15, posY + 30);
  line(posX, posY, posX + 15, posY + 30);
  ellipse(posX, posY, 20, 40);
  ellipse(posX, posY - 27, 20, 20);
  point(posX - 5, posY - 30);
  point(posX + 5, posY - 30);
  line(posX - 4, posY - 25, posX + 4, posY - 25);
}

/* This function moves the person
based on which arrow key is pressed */
function movePerson() {
  if (keyIsDown(LEFT_ARROW)) {
    posX -= xVelocity;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    posX += xVelocity;
  }
  if (keyIsPressed && keyCode == UP_ARROW && onGround) {
    jump();
  }
}

/* This function is used to make the person jump */
function jump() {
  yVelocity = jumpSize;
}