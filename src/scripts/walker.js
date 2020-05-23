// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// import p5 from 'p5';

const isDarkMode = document.body.classList.contains('dark-mode');
const refresh = document.querySelector('.sketch__refresh');

let walker;
// console.log(refresh);

document.addEventListener('DOMContentLoaded', init, false);
function init() {
  function message() {
    walker.reset();
  }
  var button = document.querySelector('.sketch__refresh');
  button.addEventListener('click', message, true);
}

function setup() {
  const canvas = document.querySelector('.sketch__canvas');
  const cnv = createCanvas(canvas.offsetWidth, canvas.offsetHeight);
  cnv.parent('sketch__canvas-cover');
  walker = new Walker();
  background('rgba(0,0,0,0)');

  document.body.classList.remove('is-loading');

  document.addEventListener('DOMContentLoaded', init, false);
  function init() {
    function message() {
      alert('Hello!');
    }
    var button = document.querySelector('.sketch__refresh');
    button.addEventListener('click', message, true);
  }
}

function draw() {
  for (var i = 0; i < 5; i++) {
    walker.render();
    walker.step();
  }
}

function Walker() {
  this.x = random(width);
  this.y = random(height);
}

let count = 0;
Walker.prototype.render = function () {
  strokeWeight(2);
  stroke(`rgba(255, 55, 61, 1)`);
  if (mouseIsPressed) strokeWeight(3);
  point(this.x, this.y);
};

const stepX = 6;
const stepY = 6;

Walker.prototype.resetPos = function () {
  this.x = random(width);
  this.y = random(height);
};

Walker.prototype.reset = function () {
  clear();
};

Walker.prototype.step = function (x, y) {
  const choice = Math.floor(random(4));

  if (choice === 0) {
    this.x += stepX;
  } else if (choice === 1) {
    this.x -= stepX;
  } else if (choice === 2) {
    this.y += stepY;
  } else {
    this.y -= stepY;
  }

  if (this.x > width) this.resetPos();
  if (this.y > height) this.resetPos();
  if (this.x < 0) this.resetPos();
  if (this.y < 0) this.resetPos();
};
