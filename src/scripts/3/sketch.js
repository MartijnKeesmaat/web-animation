// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

//create an array
var movers = [];

var attractor;

function setup() {
  const canvas = document.querySelector('.sketch__canvas');
  const cnv = createCanvas(canvas.offsetWidth, canvas.offsetHeight);
  cnv.parent('sketch__canvas-cover');

  for (var i = 0; i < 70; i++) {
    movers[i] = new Mover(random(0.1, 1), random(width), random(height));
  }
  attractor = new Attractor();
  document.body.classList.remove('is-loading');
}

function draw() {
  background('rgba(0,0,0,0)');
  clear();

  attractor.display();

  for (var i = 0; i < movers.length; i++) {
    var force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}
