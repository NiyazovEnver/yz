import Glide from '@glidejs/glide';

if (document.querySelectorAll('.glide-details')) {
  new Glide('.glide-details', {
    type: 'carousel',
    startAt: 0,
    peek: {
      before: 0,
      after: 0
    },
    gap: 0,
    animationDuration: 1000,
    breakpoints: {
      2560: {
        perView: 1.4,
        gap: 100
      },
      1920: {
        gap: 100,
        perView: 1.4,
        peek: {
          before: 0,
          after: 0
        }
      },
      1400: {
        gap: 50,
        perView: 1.4,
      },
      1020: {
        gap: 0,
        perView: 1,
      }
    }
  }).mount();
}


