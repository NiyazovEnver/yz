import Glide from '@glidejs/glide';

export default () => {
  if (document.querySelector('.projects-slider')) {
    new Glide('.projects-slider', {
      type: 'slider',
      startAt: 0,
      peek: {
        before: 0,
        after: 0
      },
      gap: 0,
      animationDuration: 1000,
      breakpoints: {
        2560: {
          gap: 50
        },
        1920: {
          gap: 10
        },
        1366: {
          gap: 10 
        },
        1024: {},
        768: {},
        414: {},
        320: {}
      }
    }).mount();
  }
};


