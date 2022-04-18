let flowers = [];
let bee1;

function setup() {
  createCanvas(500, 225);

  /* Creates an array of Flower objects */
  for (let i = 40; i < width - 40; i += 50) {
    flowers.push(new Flower(i, height));
  }

  bee1 = new Bee(height / 4, width, 2);
}

function draw() {
  background(71, 231, 245);

  /* Traverses the flowers array and displays
  each flower in it */
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].display();
  }

  bee1.move();
  bee1.display();
}