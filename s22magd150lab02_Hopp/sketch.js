function setup() {
  createCanvas(600, 450);
  background(0);
}

function draw() {
  noStroke();
  colorMode(RGB);
  fill(235, 114, 97, 92);
  circle(95, 265, 120, 120);
  fill(255, 210, 201, 180);
  arc(95, 265, 150, 30, 0, PI);

  fill('#B765EB');
  circle(225, 200, 70, 70);

  colorMode(HSB);
  fill(5, 90, 98, 40);
  circle(325, 150, 40, 40);

  fill(43, 50, 98, 20);
  circle(425, 100, 20, 20);

  fill(202, 56, 100, 10);
  circle(525, 50, 10, 10);

  push();
  stroke(70);
  strokeWeight(10);
  noFill();
  bezier(55, 150, 125, 70, 225, 40, 340, 35);
  pop();

  fill(57, 73, 100, 50);
  triangle(35, 160, 50, 140, 65, 160);
  triangle(35, 148, 50, 167, 65, 148);

}