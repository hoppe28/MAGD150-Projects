let topping = 1;
let numToppings = 0;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(235, 211, 181);

  fill(0);
  textSize(25);
  for (let i = 100; i < 500; i+=100) {
    text("Pizza", i, 50);
  }

  fill(206, 140, 50);
  ellipse(width / 2, height / 2, 250, 250);
  fill(235, 210, 68);
  ellipse(width / 2, height / 2, 230, 230);

  let mx = constrain(mouseX, 200, 400);
  let my = constrain(mouseY, 150, 350);

  if (topping == 1) {
    fill(219, 97, 92);
    ellipse(mx, my, 30, 30);
  }
  else if (topping == 2) {
    fill(145, 99, 54);
    ellipse(mx, my, 13, 13);
  }
  else if (topping == 3) {
    fill(44, 193, 36);
    rect(mx, my, 20, 5);
  }
}

function mouseClicked() {
  if (numToppings < 20) {
    let mx = constrain(mouseX, 200, 400);
    let my = constrain(mouseY, 150, 350);

    if (topping == 1) {
      fill(219, 97, 92);
      ellipse(mx, my, 30, 30);
    }
    else if (topping == 2) {
      fill(145, 99, 54);
      ellipse(mx, my, 13, 13);
    }
    else if (topping == 3) {
      fill(44, 193, 36);
      rect(mx, my, 20, 5);
    }
    numToppings++;
  }
  else {
    fill(0);
    textAlign(CENTER);
    textSize(25);
    text("Too Many Toppings!", width / 2, 450);
  }
  noLoop();
}

function keyPressed() {
  if (topping < 3) {
    topping++;
  }
  else {
    topping = 1;
  }
}