class ParticleSystem {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
    this.grid = [];

    this.size = 2.5;
    this.spacing = 15;
    this.lengthX = width / (this.size + this.spacing);
    this.lengthY = height / (this.size + this.spacing);

    this.createGrid();

    this.grid.forEach((particleRow) => {
      particleRow.forEach((particle) => {
        const x = particle.pos.x * (this.size + this.spacing) + this.size / 2;
        const y = particle.pos.y * (this.size + this.spacing) + this.size / 2;
        const position = createVector(x, y);

        this.particles.push(new Particle(this.size, position.x, position.y));
      });
    });
  }

  createGrid() {
    this.grid = Array.from(
      {
        length: this.lengthX,
      },
      (_, colIndex) =>
        Array.from(
          {
            length: this.lengthY,
          },
          (_, rowIndex) => ({
            pos: {
              x: colIndex + 0.5,
              y: rowIndex + 0.5,
            },
          })
        )
    );
  }

  reset() {
    this.particles.forEach((particle) => {
      particle.pos = createVector(width / 2, height / 2);
    });
  }

  run() {
    document.body.classList.remove('is-loading');
    for (let particle of this.particles) {
      particle.behaviors();
      particle.update();
      particle.show();
    }
  }
}
