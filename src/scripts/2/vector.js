function Mover() {
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(random(-10, 10), random(-10, 10));
  this.acceleration = createVector(random(1), random(1));
}

Mover.prototype.update = function () {
  this.mousePos = createVector(mouseX, mouseY);
  this.mousePos.sub(this.position);
  this.mousePos.setMag(0.8);

  this.acceleration = this.mousePos;
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.velocity.limit(10);
};

Mover.prototype.draw = function () {
  stroke('#FF373D');
  strokeWeight(2);
  ellipse(this.position.x, this.position.y, 2, 2);
};

Mover.prototype.checkEdges = function () {
  if (this.position.x < 0) this.position.x = width;
  if (this.position.y < 0) this.position.y = height;
  if (this.position.x > width) this.position.x = 0;
  if (this.position.y > height) this.position.y = 0;
};

let movers = [];

function setup() {
  const canvas = document.querySelector('.sketch__canvas');
  const cnv = createCanvas(canvas.offsetWidth, canvas.offsetHeight);
  cnv.parent('sketch__canvas-cover');

  for (let i = 0; i < 200; i++) {
    movers.push(new Mover());
  }
  document.body.classList.remove('is-loading');
}

function draw() {
  background('rgba(0,0,0,0)');
  clear();

  movers.forEach((mover) => {
    mover.update();
    mover.draw();
    mover.checkEdges();
  });
}
