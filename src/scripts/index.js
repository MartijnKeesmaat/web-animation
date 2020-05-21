import '../styles/index.sass';
import './pace.min.js';
import gsap from 'gsap';
// import barba from '@barba/core';

import { loadWalker } from './walker';

// const scriptContainer = document.querySelector('.scripts');
// import './walker.js';

// function pageTransition() {
//   var tl = gsap.timeline();
//   tl.to('ul.transition li', {
//     duration: 0.5,
//     scaleX: 1,
//     transformOrigin: 'top left',
//     stagger: 0.2,
//   });
//   tl.to('ul.transition li', {
//     duration: 0.5,
//     scaleX: 0,
//     transformOrigin: 'top left',
//     stagger: 0.1,
//     delay: 0.1,
//   });
// }
// 3;

// function contentAnimation() {
//   gsap.from('main', {
//     duration: 0.2,
//     y: 30,
//     autoAlpha: 0,
//     delay: 0.5,
//   });
// }

// function delay(n) {
//   n = n || 2000;
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// }

// barba.init({
//   sync: true,

//   to: {
//     namespace: ['home'],
//   },

//   transitions: [
//     {
//       async leave(data) {
//         const done = this.async();
//         // scriptContainer.innerHTML = '';

//         pageTransition();
//         await delay(1000);
//         done();
//       },

//       async enter({ current, next, trigger }) {
//         contentAnimation();
//         // console.log(next);

//         console.log(next.namespace);
//         if (next.namespace === 'introduction') {
//           loadWalker();
//         }

//         // setTimeout(() => {
//         //   if (next.namespace === 'home')
//         //     loadScripts([
//         //       'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js',
//         //       'src/scripts/6-main/Particle.js',
//         //       'src/scripts/6-main/ParticleSystem.js',
//         //       'src/scripts/6-main/sketch.js',
//         //     ]);
//         // }, 3000);
//         // if (next.namespace === 'introduction') loadScripts(['https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js', 'src/scripts/walker.js']);

//         // setTimeout(() => {
//         //   if (next.namespace === 'home')
//         //     loadScripts([
//         //       'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js',
//         //       'src/scripts/6-main/Particle.js',
//         //       'src/scripts/6-main/ParticleSystem.js',
//         //       'src/scripts/6-main/sketch.js',
//         //     ]);
//         //   if (next.namespace === 'introduction') loadScripts(['https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js', 'src/scripts/walker.js']);
//         // }, 5000);
//       },

//       async once({ current, next, trigger }) {
//         // if (next.namespace === 'home')
//         //   loadScripts([
//         //     'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js',
//         //     'src/scripts/6-main/Particle.js',
//         //     'src/scripts/6-main/ParticleSystem.js',
//         //     'src/scripts/6-main/sketch.js',
//         //   ]);
//         // if (next.namespace === 'introduction') loadScripts(['https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js', 'src/scripts/walker.js']);
//         // console.log(next.namespace);
//         contentAnimation();
//       },
//     },
//   ],
// });

// function loadScripts(sources) {
//   setTimeout(() => {
//     sources.forEach((src) => {
//       const script = document.createElement('script');
//       script.src = src;
//       scriptContainer.append(script);
//     });
//   }, 1000);
// }

// const introduction = barba.BaseView.extend({
//   namespace: 'introduction',
//   onEnterCompleted: () => {
//     // The Nature of Code
//     // Daniel Shiffman
//     // http://natureofcode.com
//     // import p5 from 'p5';

//     let walker;

//     function setup() {
//       const canvas = document.querySelector('#sketch__canvas-intro');
//       const cnv = createCanvas(canvas.offsetWidth, canvas.offsetHeight);
//       cnv.parent('sketch__canvas-intro');
//       walker = new Walker();
//       background('#f0f0ec');
//     }

//     function draw() {
//       for (var i = 0; i < 5; i++) {
//         walker.render();
//         walker.step();
//       }
//     }

//     function Walker() {
//       this.x = random(width);
//       this.y = random(height);
//     }

//     let count = 0;
//     Walker.prototype.render = function () {
//       strokeWeight(2);
//       stroke(`rgba(255, 55, 61, 1)`);
//       if (mouseIsPressed) strokeWeight(3);
//       point(this.x, this.y);
//     };

//     const stepX = 6;
//     const stepY = 6;

//     Walker.prototype.reset = function () {
//       this.x = random(width);
//       this.y = random(height);
//     };

//     Walker.prototype.step = function (x, y) {
//       const choice = Math.floor(random(4));

//       if (choice === 0) {
//         this.x += stepX;
//       } else if (choice === 1) {
//         this.x -= stepX;
//       } else if (choice === 2) {
//         this.y += stepY;
//       } else {
//         this.y -= stepY;
//       }

//       if (this.x > width) this.reset();
//       if (this.y > height) this.reset();
//       if (this.x < 0) this.reset();
//       if (this.y < 0) this.reset();
//     };
//   },
// });

// SingleNews.init();
