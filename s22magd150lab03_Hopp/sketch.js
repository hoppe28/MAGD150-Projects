function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(64, 162, 247, 97);

  noStroke();
  fill(251, 245, 252, 55);

  let mx = constrain(mouseX, 0, width);
  let my = constrain(mouseY, 0, height);

  let x1 = map(mx, 0, width, 200, width);
  let y1 = map(my, 0, height, 50, 400);
  ellipse(x1, y1, 50, 50);

  let x2 = map(mx, 0, width, 0, 300);
  let y2 = map(my, 0, height, 75, 400);
  ellipse(x2, y2, 75, 75);

  let x3 = map(mx, 0, width, 100, 400);
  let y3 = map(my, 0, height, 50, 300);
  ellipse(x3, y3, 90, 90);

  print("Cursor: (" + mouseX + ", " + mouseY + ")");

  let centerX = (x1 + x2 + x3) / 3;
  let centerY = (y1 + y2 + y3) / 3;
  print("Center Point of the Bubbles: (" + round(centerX) + ", " + round(centerY) + ")");

  let xRange = max(max(x1, x2), x3) - min(min(x1, x2), x3);
  let yRange = max(max(y1, y2), y3) - min(min(y1, y2), y3);
  print("The Range of X-Values of the Bubbles is: " + round(xRange));
  print("The Range of Y-Values of the Bubbles is: " + round(yRange));

  let triangleArea = xRange * yRange * 0.5;
  print("The Area of the Triangle Formed by the Center Points is: " + round(triangleArea));
}