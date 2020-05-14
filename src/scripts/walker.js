// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// import p5 from 'p5';
let walker;

function setup() {
  const canvas = document.querySelector('#sketch__canvas');
  const cnv = createCanvas(canvas.offsetWidth, canvas.offsetHeight);
  cnv.parent('sketch__canvas');
  walker = new Walker();
  background('#f0f0ec');
}

function draw() {
  for (var i = 0; i < 5; i++) {
    walker.render();
    walker.step();
  }
}

function Walker() {
  this.x = width / 2;
  this.y = height / 2;
}

let count = 0;
Walker.prototype.render = function () {
  strokeWeight(2);
  stroke('#FF373D');
  if (mouseIsPressed) stroke('purple');
  point(this.x, this.y);
};

const stepX = 5;
const stepY = 5;

Walker.prototype.step = function (x, y) {
  const choice = Math.floor(random(4));

  if (choice == 0) {
    this.x += stepX;
  } else if (choice == 1) {
    this.x -= stepX;
  } else if (choice == 2) {
    this.y += stepY;
  } else {
    this.y -= stepY;
  }

  if (this.x > width) resetSketch();
  if (this.y > height) resetSketch();
  if (this.x < 0) resetSketch();
  if (this.y < 0) resetSketch();
};

function resetSketch() {
  background('#f0f0ec');
  walker = new Walker();
}
