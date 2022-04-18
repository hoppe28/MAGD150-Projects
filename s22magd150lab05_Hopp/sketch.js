var circleX = 250;
var circleY = 320;
var rectX = 350;
var rectY = 320;
var circleDiameter = 45;
var rectWidth = 50;
var rectHeight = 35;
var circleOver = false;
var rectOver = false;
var screenPower = false;
var screenColor;
var rx = 200;
var ry = 130;
var rxspeed = 1;
var ryspeed = 1;
var playAnimation = false;

function setup() {
  createCanvas(600, 450);
  screenColor = color(0);
}

function draw() {
  update(mouseX, mouseY);
  background(240);

  rectMode(CENTER);
  fill(192, 192, 192);
  rect(width / 2, height / 2, 250, 250, 10);

  rectMode(CORNERS);
  fill(screenColor);
  rect(200, 130, 400, 295);

  if (circleOver) {
    fill(145);
  }
  else {
    fill(125);
  }
  ellipse(circleX, circleY, circleDiameter, circleDiameter);

  if (rectOver) {
    fill(145);
  }
  else {
    fill(125);
  }
  rectMode(CENTER);
  rect(rectX, rectY, rectWidth, rectHeight);

  fill(0);
  textAlign(CENTER);
  text("Power", 250, 323);
  text("Play", 350, 323);

  if (playAnimation && screenPower) {
    rect(rx + 10, ry + 10, 20, 20);
    rx += rxspeed;
    ry += ryspeed;

    if (rx <= 200 || rx + 20 >= 400) {
      rxspeed *= -1;
    }

    if (ry <= 130 || ry + 20 >= 295) {
      ryspeed *= -1;
    }
  }
}

function update() {
  if (overCircle(circleX, circleY, circleDiameter)) {
    circleOver = true;
    rectOver = false;
  }
  else if (overRect(rectX, rectY, rectWidth, rectHeight)) {
    rectOver = true;
    circleOver = false;
  }
  else {
    circleOver = false;
    rectOver = false;
  }
}

function mousePressed() {
  if (circleOver) {
    screenPower = !screenPower;
    if (screenPower) {
      screenColor = color(255);
    }
    else {
      screenColor = color(0);
    }
  }
  if (rectOver) {
    if (screenPower) {
      playAnimation = !playAnimation;
    }
  }
}

function overCircle(x, y, diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter / 2) {
    return true;
  }
  return false;
}

function overRect(x, y, width, height) {
  if (mouseX >= x - width / 2 && mouseX <= x + width / 2 &&
      mouseY >= y - height / 2 && mouseY <= y + height / 2) {
    return true;
  }
  return false;
}

function playAnimation() {
  rect(rx + 10, ry + 10, 20, 20);
  rx += rxspeed;
  ry += ryspeed;

  if (rx <= 0 || rx + 20 >= 600) {
    rxspeed *= -1;
  }

  if (ry <= 0 || ry + 20 >= 450) {
    ryspeed *= -1;
  }
}