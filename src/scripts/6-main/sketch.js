let system;

function setup() {
  const canvas = document.querySelector('#sketch__canvas');
  const cnv = createCanvas(canvas.offsetWidth, canvas.offsetHeight);
  cnv.parent('sketch__canvas');
  system = new ParticleSystem(0, 0);
}

function draw() {
  background('#f0f0ec');
  system.run();
}
