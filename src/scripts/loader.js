import gsap from 'gsap';

const $ = {
  loader: document.querySelectorAll('.loader-counter p'),
};

var tl = gsap.timeline();

tl.to($.loader[0].querySelectorAll('span'), {
  y: '-110%',
  duration: 0.3,
  delay: 1,
  stagger: 0.1,
  ease: 'power2.out',
});

tl.to(
  $.loader[1].querySelectorAll('span'),
  {
    y: '0%',
    duration: 0.3,
    stagger: 0.1,
    ease: 'power2.out',
  },
  '-=0.3'
);

tl.to($.loader[1].querySelectorAll('span'), {
  y: '-110%',
  delay: 0.4,
  duration: 0.3,
  stagger: 0.1,
  ease: 'power2.out',
});

tl.to(
  $.loader[2].querySelectorAll('span'),
  {
    y: '0%',
    duration: 0.3,
    stagger: 0.1,
    ease: 'power2.out',
  },
  '-=0.3'
);

tl.to($.loader[2].querySelectorAll('span'), {
  y: '-110%',
  delay: 0.4,
  duration: 0.3,
  stagger: 0.1,
  ease: 'power2.out',
});

tl.to(
  $.loader[3].querySelectorAll('span'),
  {
    y: '0%',
    duration: 0.3,
    stagger: 0.1,
    ease: 'power2.out',
  },
  '-=0.3'
);

tl.to($.loader[3].querySelectorAll('span'), {
  y: '-110%',
  delay: 0.4,
  duration: 0.3,
  stagger: 0.1,
  ease: 'power2.out',
});

tl.to(
  $.loader[4].querySelectorAll('span'),
  {
    y: '0%',
    duration: 0.3,
    stagger: 0.1,
    ease: 'power2.out',
  },
  '-=0.3'
);

tl.add(function () {
  window.location.href = '/index.html';
});

tl.pause();

const trigger = document.querySelector('.menu');
trigger.addEventListener('click', function () {
  console.log('aaaaaa');
  gsap.to('.loader', {
    y: 0,
    ease: 'power2.out',
    duration: 1,
  });

  setTimeout(() => {
    tl.play();
  }, 1000);
});
