let ps;

function setup() {
  const canvas = document.querySelector('.sketch__canvas');
  const cnv = createCanvas(canvas.offsetWidth, canvas.offsetHeight);
  cnv.parent('sketch__canvas-cover');

  ps = new ParticleSystem(createVector(width / 2, 50));

  document.body.classList.remove('is-loading');
}

function draw() {
  background('rgba(0,0,0,0)');
  clear();

  ps.origin.set(width / 2, height / 2, 0);
  ps.addParticle();
  ps.run();
}
