class ParticleSystem {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  addParticle(x, y) {
    this.particles.push(new Particle(this.origin.x, this.origin.y));
  }

  run() {
    for (let particle of this.particles) {
      particle.run();
    }

    this.particles = this.particles.filter((particle) => !particle.isDead());
  }
}
