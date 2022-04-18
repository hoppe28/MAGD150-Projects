let mic;
let capture;
let button;
let static;
let playing = false; // Variable used to determine if sound is playing

function setup() {
  createCanvas(600, 400);

  /* Starts the capture of audio */
  mic = new p5.AudioIn();
  mic.start();

  /* Starts the capture of video */
  capture = createCapture(VIDEO);
  capture.size(250, 300);
  capture.hide();

  static = new p5.Noise('pink');

  /* Creates a button that makes pink noise when pressed */
  button = createButton('Press Me!');
  button.position(width / 2 - 35, height - 30);
  button.mousePressed(playNoise);
}

function draw() {
  background(250);

  let micLevel = mic.getLevel();

  /* Creates the black frame for the mirror */
  fill(0);
  rectMode(CENTER);
  rect(width / 2, height / 2, 275, 325);

  /* Creates the reflective part of the mirror */
  imageMode(CENTER);
  image(capture, width / 2, height / 2, 250, 300);
  filter(BLUR, micLevel * 100);
}

/* Plays the static noise based on whether
the 'playing' variable is true or false */
function playNoise() {
  playing = !playing;
  if (playing) {
    static.start();
  }
  else {
    static.stop();
  }
}