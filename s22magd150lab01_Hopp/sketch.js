function setup() {
  createCanvas(500, 400);
  background(235);
}

function draw() {
  // ground
  noStroke();
  fill(150);
  rectMode(CORNERS);
  rect(0, 350, 500, 400);

  stroke(50);
  strokeWeight(1);
  fill(240);
  rectMode(CENTER);

  // left house
  rect(100, 325, 100, 100);
  line(50, 275, 100, 242);
  line(100, 242, 150, 275);
  ellipse(100, 300, 15, 15);
  line(93, 300, 107, 300);
  line(100, 293, 100, 307);
  rect(100, 355, 20, 35);

  // center house
  rect(250, 325, 100, 100);
  line(200, 275, 250, 242);
  line(250, 242, 300, 275);
  ellipse(250, 300, 15, 15);
  line(243, 300, 257, 300);
  line(250, 293, 250, 307);
  rect(250, 355, 20, 35);

  // right house
  rect(400, 325, 100, 100);
  line(350, 275, 400, 242);
  line(400, 242, 450, 275);
  ellipse(400, 300, 15, 15);
  line(393, 300, 407, 300);
  line(400, 293, 400, 307);
  rect(400, 355, 20, 35);

  // doorknobs
  strokeWeight(3);
  point(95, 355);
  point(245, 355);
  point(395, 355);
}