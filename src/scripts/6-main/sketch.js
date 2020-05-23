let system;

// const isDarkMode = document.body.classList.contains('dark-mode');

function setup() {
  const canvas = document.querySelector('#sketch__canvas-cover');
  const cnv = createCanvas(canvas.offsetWidth, canvas.offsetHeight);
  cnv.parent('sketch__canvas-cover');
  system = new ParticleSystem(0, 0);
}

function draw() {
  background('rgba(0,0,0,0)');
  clear();
  system.run();
}

document.addEventListener('DOMContentLoaded', init, false);
function init() {
  function reset() {
    system.reset();
  }
  var button = document.querySelector('.sketch__refresh');
  button.addEventListener('click', reset, true);
}
