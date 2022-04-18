let image1;
let image2;
let font1;
let font2;
let textColor;
let imageInverted = false;
let lines = [];
let pdf;

/* Loads the images, fonts, and lines
before the displaying the output */
function preload() {
  image1 = loadImage('spongebob.png');
  image2 = loadImage('sword.jpeg');
  font1 = loadFont('arialbd.ttf');
  font2 = loadFont('arialbi.ttf');
  lines = loadStrings('movieLines.txt');
}

function setup() {
  createCanvas(450, 500, P2D);

  pdf = createPDF();
  pdf.beginRecord();

  textColor = color(0);
}

function draw() {
  background(255);

  tint(255, 200);

  image(image1, 0, 0, width, height);
  image(image2, 330, 220, 75, 180);

  /* Displays the title of the movie */
  fill(textColor);
  textAlign(CENTER);
  textSize(38);
  textFont(font1);
  let str1 = lines[0];
  text(str1, width / 2, height / 10);

  /* Displays the tagline of the movie */
  textAlign(CENTER);
  textSize(25);
  textFont(font2);
  let str2 = lines[1];
  let str3 = lines[2];
  text(str2, width / 2, 4 * height / 5);
  text(str3, width / 2, 9 * height / 10);
}

/* Allows the user to save the display
to a PDF file by pressing the mouse button */
function mousePressed() {
  pdf.save();
}

/* Allows the user to change the text color
and invert the poster colors when a key is pressed */
function keyPressed() {
  image1.filter(INVERT);
  imageInverted = !imageInverted;

  if (imageInverted) {
    textColor = color(224, 34, 9);
  }
  else {
    textColor = color(0);
  }
}