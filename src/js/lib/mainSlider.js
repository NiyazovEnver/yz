import Glide from '@glidejs/glide';

  setTimeout(function() {
    let animate = document.querySelectorAll('.main-page__animate');
    animate.forEach(elem => {
      elem.style.opacity = '1';
    });
  }, 3000);

  if (document.querySelector('.main__slider')) {
    console.log('one');
      
    new Glide('.main__slider', {
      animationDuration: 1000,
      autoplay: 4000,
      type:'carousel',
      breakpoints: {
        2560:{
          perView: 2.4,
          gap:50 
        },
        1920: {
          gap: 50,
          perView: 2.1 ,
          peek:{
            before:0,
            after:0
          }
        },
        1700: {
          gap: 30,
          perView:2
        },
        1500: {
          gap: 30,
          perView:1.5
        },
        1400: {
          perView: 1.7,
          gap:20
        },
        1024: {
          perView: 1,
          gap:20
        }
      }
    }).mount();
  }

