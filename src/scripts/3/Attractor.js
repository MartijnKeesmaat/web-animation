// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An object for a draggable attractive body in our world

const Attractor = function () {
  this.position = createVector(width / 2, height / 2);
  this.mass = 20;
  this.G = 1;
  this.dragOffset = createVector(0, 0);
  this.dragging = false;
  this.rollover = false;
};

Attractor.prototype.calculateAttraction = function (m) {
  // distance between the mover and the attractor
  const force = p5.Vector.sub(this.position, m.position);
  let distance = force.mag();
  distance = constrain(distance, 3, 10);

  force.normalize();
  const strength = (this.G * this.mass * m.mass) / (distance * distance);
  force.mult(strength);
  return force;
};

// Method to display
Attractor.prototype.display = function () {
  strokeWeight(0);
  stroke(0);

  if (this.dragging) fill(255);
  else if (this.rollover) fill(175);
  else fill(0);

  ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
};

// THESE METHODS ARE JUST FOR THE DRAGGING OF THE ATTRACTOR

// The methods below are for mouse interaction
Attractor.prototype.handlePress = function (mx, my) {
  var d = dist(mx, my, this.position.x, this.position.y);
  if (d < this.mass) {
    this.dragging = true;
    this.dragOffset.x = this.position.x - mx;
    this.dragOffset.y = this.position.y - my;
  }
};

Attractor.prototype.handleHover = function (mx, my) {
  var d = dist(mx, my, this.position.x, this.position.y);
  if (d < this.mass) {
    this.rollover = true;
  } else {
    this.rollover = false;
  }
};

Attractor.prototype.stopDragging = function () {
  this.dragging = false;
};

Attractor.prototype.handleDrag = function (mx, my) {
  if (this.dragging) {
    this.position.x = mx + this.dragOffset.x;
    this.position.y = my + this.dragOffset.y;
  }
};
