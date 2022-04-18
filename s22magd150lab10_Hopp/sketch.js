var X, Y, Z;
var cameraVelocity = 5.0;
var companies;
var font;
var companyName;

function preload() {
  companies = loadTable("Companies.csv");
  font = loadFont('arialbd.ttf');
}

function setup() {
  createCanvas(500, 500, WEBGL);

  X = 0;
  Y = 0;
  Z = 3000;

  var rows = companies.getRows();
  var randomIndex = floor(random(1, rows.length));
  companyName = rows[randomIndex].getString(0);
}

function draw() {
  background(250);

  lights();

  directionalLight(250, 250, 250, mouseX - 250, mouseY - 250, Z - 2000);

  camera(X, Y, Z, mouseX - 250, mouseY - 250, 0, 0, 1, 0);

  push();
  translate(-1000, -300, 0);
  rotateY(PI/4);
  specularMaterial(60);
  box(300, 1900, 300);
  pop();

  push();
  translate(0, -300, -500);
  rotateY(PI/4);
  specularMaterial(50);
  box(300, 2000, 300);
  pop();

  push();
  translate(1000, -300, 0);
  rotateY(PI/4);
  specularMaterial(70);
  box(300, 1950, 300);
  pop();

  push();
  translate(0, -1300, 0);
  ambientMaterial(255);
  plane(500, 300);

  textFont(font);
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(0);
  text(companyName, 0, 0);
  pop();

  moveCamera();
}

function moveCamera() {
  if (keyIsDown(UP_ARROW)) {
    if (Z >= 0) {
      Z -= cameraVelocity;
    }
    else {
      Z += cameraVelocity;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (Z >= 0) {
      Z += cameraVelocity;
    }
    else {
      Z -= cameraVelocity;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    X -= cameraVelocity;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    X += cameraVelocity;
  }
}