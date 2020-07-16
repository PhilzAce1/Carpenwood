//import dom elements
const body = document.body;
let scrollWrap = document.getElementsByClassName('smooth-scrolls-wrapper')[0];
let height = scrollWrap.getBoundingClientRect().height - '100px';
let speed = 0.08;
var offset = 0;
// // body.style.height = Math.floor(height) + 'px';
function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;
  var scroll = 'translateY(-' + offset + 'px) translateZ(0)';
  scrollWrap.style.transform = scroll;
  callScroll = requestAnimationFrame(smoothScroll);
}

// smoothScroll();
const content = document.querySelectorAll('section');
let currentPos = window.pageYOffset;
const callDistort = function () {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.046;
  [...content].forEach((x) => (x.style.transform = 'skewY(' + speed + 'deg)'));
  currentPos = newPos;
  requestAnimationFrame(callDistort);
};
document.body.onload = () => {
  document.querySelector('.loader').style.display = 'none';

  animateText();
  scrollAnimation();
  // callDistort();
};
// animation :- nav

// animation :- GSAP
// animation :- GSAP - scroll
const aboutAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about_us',
      id: 'about',
      //   toggleActions: 'restart pause reverse pause',
      start: '-=400 top',
      end: '+=500',
      pinSpacing: false,
      //   markers: true,
    },
  });
  tl.from('#about_text', {
    scale: 0,
    opacity: 1,
    duration: 1,
  })
    .from('.about_us img', {
      opacity: 0,
      stagger: 0.3,
      x: 100,
      y: 100,
      duration: 1,
    })
    .fromTo(
      '.about_us aside',
      {
        duration: 1,
        text: {
          value: 'Your one stop wood works store',
          delimiter: '',
        },
        ease: 'power2',
        delay: -0.25,
      },
      {
        duration: 1,
        text: {
          value:
            ' We have been making decoration designs with our professional team since 2010. Our mission is to do our job in the best quality and in          the best way our service are listed below...',
          delimiter: '',
        },
        ease: 'power2',
        delay: -0.25,
      }
    )
    .from('.num', {
      opacity: 0,
    });
};
const ourServiceAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.our_services',
      id: 'service',
      toggleActions: 'restart none reverse none',
      start: '-=550 center',
      end: '+=500',
      pinSpacing: false,
      //   markers: true,
    },
  });
  tl.from('.our_services article div:first-of-type', {
    opacity: 0,
    x: -100,
  })
    .from('.our_services #second_img', {
      opacity: 0,
      y: 100,
    })
    .from('.our_services #third_img', {
      opacity: 0,
      x: 100,
    });
};
function ourProductAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.our_products',
      id: 'product',
      toggleActions: 'restart restart reverse restart',
      start: '-=300 center',
      end: '+=600',
      pinSpacing: false,
      // markers: true,
    },
  });
  tl.from('.our_products aside div', {
    background: 'linear-gradient(to right, black, #ec6ead)',
    duration: 1.2,
    opacity: 0,
    scale: 0.3,
    ease: 'bounce.out',
    stagger: 0.1,
  });
}
const asideAnimation = () => {
  gsap.from('.aside h1', {
    scrollTrigger: {
      trigger: '.aside',
      id: 'aside',
      toggleActions: 'restart none reverse none',
      start: '-=100 center',
      end: '+=500',
      pinSpacing: false,
      //   markers: true,
    },
    duration: 1,
    text: {
      value: 'Your number One shop for quality Furnitures...',
      delimiter: '',
    },
    ease: 'power2',
    delay: -0.25,
  });
};

const contactformAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact_us',
      id: 'contactfrom',
      toggleActions: 'restart none reverse none',
      start: 'top top',
      end: '+=500',
      pinSpacing: false,
      // markers: true,
    },
  });
  tl.from('form', {
    x: -100,
    opacity: 0,
    duration: 1,
  });
};
function scrollAnimation() {
  aboutAnimation();
  ourServiceAnimation();
  ourProductAnimation();
  asideAnimation();
  // contactformAnimation();
}

// animation :- GSAP - text
function animateText() {
  const tl = gsap.timeline();
  tl.from('.logo', {
    duration: 1,
    x: -100,
    opacity: 0,
  })
    .from('nav ul li', {
      duration: 1,
      x: 100,
      y: 200,
      opacity: 0,
      stagger: 0.1,
    })
    .from('.nav_btn', {
      duration: 0.2,
      x: 100,
      opacity: 0,
    })
    .to('#welcome_header', {
      duration: 1,
      text: {
        value: 'Welcome to Carpenwood',
        delimiter: '',
      },
      ease: 'power2',
    })
    .to('.asidelanding', {
      duration: 1,
      text: {
        value: 'Your one stop wood works store',
        delimiter: '',
      },
      ease: 'power2',
    })
    .from('.btn', {
      duration: 1,
      x: -100,
      opacity: 0,
    });
}
