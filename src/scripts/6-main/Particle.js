class Particle {
  constructor(r, x, y) {
    this.pos = createVector(width / 2, height / 2);
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = r;
    this.maxspeed = 5;
    this.maxforce = 1;
  }

  behaviors() {
    var arrive = this.arrive(this.target);
    var mouse = createVector(mouseX || width / 2, mouseY || height / 2);
    var flee = this.flee(mouse);
    var seek = this.seek(mouse);

    arrive.mult(1);
    flee.mult(5);
    seek.mult(10);

    this.applyForce(arrive);
    // this.applyForce(flee);
    if (mouseIsPressed) this.applyForce(seek);
    else this.applyForce(flee);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  show() {
    stroke('#FF373D');
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }

  arrive(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 60) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }

  flee(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 80) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }

  seek(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 400) {
      desired.setMag(this.maxspeed);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
}
