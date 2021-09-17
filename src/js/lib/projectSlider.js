import Glide from '@glidejs/glide';
  if (document.querySelectorAll('.project-cards__slider')) {
    // console.log('sec slider is working now');


    new Glide('.project-cards__slider', {
      type: 'carousel',
      startAt: 0,
      animationDuration: 1000,
      breakpoints:{
        2560:{
          perView:5,
          gap:50
        },
        1920:{
          perView:4.5,
          gap:50
        },
        1800:{
          perView:4,
          gap:50
        },
        1600:{
          perView:3.4,
          gap:35  
        },
        1400:{
          perView:3.15,
          gap:30
        },
        1200:{
          perView:2.3,
          gap:30
        },
        1025:{
          perView:2.8,
          gap:25
        },
        950:{
          perView:2.4,
          gap:15
        },
        800:{
          perView:2.2,
          gap:15
        },
        768:{
          perView:2,
          gap:15
        },
        600:{
          perView:1.8,
          gap:10
        },
        599:{
          perView:1.7 ,
          gap:15
        },
        450:{
          perView:1.4,
          gap:20
        },
        375:{
          perView:1.16,
          gap:15
        },
        374:{
          perView:1.09,
          gap:15
        }
        
      }
    }).mount();
  

  // if (document.querySelector('#project-card__devlet')) {

  //   new Glide('#project-card__devlet', {
  //     type: 'carousel',
  //     startAt: 0,
  //     animationDuration: 1000,
  //     breakpoints:{
  //       2560:{
  //         perView:5,
  //         gap:50
  //       },
  //       1920:{
  //         perView:4.5,
  //         gap:50
  //       },
  //       1800:{
  //         perView:4,
  //         gap:50
  //       },
  //       1600:{
  //         perView:3.4,
  //         gap:35  
  //       },
  //       1400:{
  //         perView:3.15,
  //         gap:30
  //       },
  //       1200:{
  //         perView:2.3,
  //         gap:30
  //       },
  //       1025:{
  //         perView:2.8,
  //         gap:25
  //       },
  //       950:{
  //         perView:2.4,
  //         gap:15
  //       },
  //       800:{
  //         perView:2.2,
  //         gap:15
  //       },
  //       768:{
  //         perView:2,
  //         gap:15
  //       },
  //       600:{
  //         perView:1.8,
  //         gap:10
  //       },
  //       599:{
  //         perView:1.7 ,
  //         gap:15
  //       },
  //       450:{
  //         perView:1.4,
  //         gap:20
  //       },
  //       375:{
  //         perView:1.16,
  //         gap:15
  //       },
  //       374:{
  //         perView:1.09,
  //         gap:15
  //       }
        
  //     }
  //   }).mount();
  // }

  // if (document.querySelector('#project-card__doza')) {
  //   new Glide('#project-card__doza', {
  //     type: 'carousel',
  //     startAt: 0,
  //     animationDuration: 1000,
  //     breakpoints:{
  //       2560:{
  //         perView:5,
  //         gap:50
  //       },
  //       1920:{
  //         perView:4.5,
  //         gap:50
  //       },
  //       1800:{
  //         perView:4,
  //         gap:50
  //       },
  //       1600:{
  //         perView:3.4,
  //         gap:35  
  //       },
  //       1400:{
  //         perView:3.15,
  //         gap:30
  //       },
  //       1200:{
  //         perView:2.3,
  //         gap:30
  //       },
  //       1025:{
  //         perView:2.8,
  //         gap:25
  //       },
  //       950:{
  //         perView:2.4,
  //         gap:15
  //       },
  //       800:{
  //         perView:2.2,
  //         gap:15
  //       },
  //       768:{
  //         perView:2,
  //         gap:15
  //       },
  //       600:{
  //         perView:1.8,
  //         gap:10
  //       },
  //       599:{
  //         perView:1.7 ,
  //         gap:15
  //       },
  //       450:{
  //         perView:1.4,
  //         gap:20
  //       },
  //       375:{
  //         perView:1.16,
  //         gap:15
  //       },
  //       374:{
  //         perView:1.09,
  //         gap:15
  //       }
        
  //     }
  //   }).mount();
  // }


  // if (document.querySelector('#project-card__library')) {
  //   new Glide('#project-card__library', {
  //     type: 'carousel',
  //     startAt: 0,
  //     animationDuration: 1000,
  //     breakpoints:{
  //       2560:{
  //         perView:5,
  //         gap:50
  //       },
  //       1920:{
  //         perView:4.5,
  //         gap:50
  //       },
  //       1800:{
  //         perView:4,
  //         gap:50
  //       },
  //       1600:{
  //         perView:3.4,
  //         gap:35  
  //       },
  //       1400:{
  //         perView:3.15,
  //         gap:30
  //       },
  //       1200:{
  //         perView:2.3,
  //         gap:30
  //       },
  //       1025:{
  //         perView:2.8,
  //         gap:25
  //       },
  //       950:{
  //         perView:2.4,
  //         gap:15
  //       },
  //       800:{
  //         perView:2.2,
  //         gap:15
  //       },
  //       768:{
  //         perView:2,
  //         gap:15
  //       },
  //       600:{
  //         perView:1.8,
  //         gap:10
  //       },
  //       599:{
  //         perView:1.7 ,
  //         gap:15
  //       },
  //       450:{
  //         perView:1.4,
  //         gap:20
  //       },
  //       375:{
  //         perView:1.16,
  //         gap:15
  //       },
  //       374:{
  //         perView:1.09,
  //         gap:15
  //       }
        
  //     }
  //   }).mount();
  // }

  // if (document.querySelector('#project-card__sc')) {
  //   new Glide('#project-card__sc', {
  //     type: 'carousel',
  //     startAt: 0,
  //     animationDuration: 1000,
  //     breakpoints:{
  //       2560:{
  //         perView:5,
  //         gap:50
  //       },
  //       1920:{
  //         perView:4.5,
  //         gap:50
  //       },
  //       1800:{
  //         perView:4,
  //         gap:50
  //       },
  //       1600:{
  //         perView:3.4,
  //         gap:35  
  //       },
  //       1400:{
  //         perView:3.15,
  //         gap:30
  //       },
  //       1200:{
  //         perView:2.3,
  //         gap:30
  //       },
  //       1025:{
  //         perView:2.8,
  //         gap:25
  //       },
  //       950:{
  //         perView:2.4,
  //         gap:15
  //       },
  //       800:{
  //         perView:2.2,
  //         gap:15
  //       },
  //       768:{
  //         perView:2,
  //         gap:15
  //       },
  //       600:{
  //         perView:1.8,
  //         gap:10
  //       },
  //       599:{
  //         perView:1.7 ,
  //         gap:15
  //       },
  //       450:{
  //         perView:1.4,
  //         gap:20
  //       },
  //       375:{
  //         perView:1.16,
  //         gap:15
  //       },
  //       374:{
  //         perView:1.09,
  //         gap:15
  //       }
        
  //     }
  //   }).mount();
  // }

  // if (document.querySelector('#project-card__gild')) {
  //   new Glide('#project-card__gild', {
  //     type: 'carousel',
  //     startAt: 0,
  //     animationDuration: 1000,
  //     breakpoints:{
  //       2560:{
  //         perView:5,
  //         gap:50
  //       },
  //       1920:{
  //         perView:4.5,
  //         gap:50
  //       },
  //       1800:{
  //         perView:4,
  //         gap:50
  //       },
  //       1600:{
  //         perView:3.4,
  //         gap:35  
  //       },
  //   if (document.querySelector('#project-card__devlet')) {

  //   new Glide('#project-card__devlet', {
  //     type: 'carousel',
  //     startAt: 0,
  //     animationDuration: 1000,
  //     breakpoints:{
  //       2560:{
  //         perView:5,
  //         gap:50
  //       },
  //       1920:{
  //         perView:4.5,
  //         gap:50
  //       },
  //       1800:{
  //         perView:4,
  //         gap:50
  //       },
  //       1600:{
  //         perView:3.4,
  //         gap:35  
  //       },
  //       1400:{
  //         perView:3.15,
  //         gap:30
  //       },
  //       1200:{
  //         perView:2.3,
  //         gap:30
  //       },
  //       1025:{
  //         perView:2.8,
  //         gap:25
  //       },
  //       950:{
  //         perView:2.4,
  //         gap:15
  //       },
  //       800:{
  //         perView:2.2,
  //         gap:15
  //       },
  //       768:{
  //         perView:2,
  //         gap:15
  //       },
  //       600:{
  //         perView:1.8,
  //         gap:10
  //       },
  //       599:{
  //         perView:1.7 ,
  //         gap:15
  //       },
  //       450:{
  //         perView:1.4,
  //         gap:20
  //       },
  //       375:{
  //         perView:1.16,
  //         gap:15
  //       },
  //       374:{
  //         perView:1.09,
  //         gap:15
  //       }
        
  //     }
  //   }).mount();
  // }

  // if (document.querySelector('#project-card__doza')) {
  //   new Glide('#project-card__doza', {
  //     type: 'carousel',
  //     startAt: 0,
  //     animationDuration: 1000,
  //     breakpoints:{
  //       2560:{
  //         perView:5,
  //         gap:50
  //       },
  //       1920:{
  //         perView:4.5,
  //         gap:50
  //       },
  //       1800:{
  //         perView:4,
  //         gap:50
  //       },
  //       1600:{
  //         perView:3.4,
  //         gap:35  
  //       },
  //       1400:{
  //         perView:3.15,
  //         gap:30
  //       },
  //       1200:{
  //         perView:2.3,
  //         gap:30
  //       },
  //       1025:{
  //         perView:2.8,
  //         gap:25
  //       },
  //       950:{
  //         perView:2.4,
  //         gap:15
  //       },
  //       800:{
  //         perView:2.2,
  //         gap:15
  //       },
  //       768:{
  //         perView:2,
  //         gap:15
  //       },
  //       600:{
  //         perView:1.8,
  //         gap:10
  //       },
  //       599:{
  //         perView:1.7 ,
  //         gap:15
  //       },
  //       450:{
  //         perView:1.4,
  //         gap:20
  //       },
  //       375:{
  //         perView:1.16,
  //         gap:15
  //       },
  //       374:{
  //         perView:1.09,
  //         gap:15
  //       }
        
  //     }
  //   }).mount();
  // }


  // if (document.querySelector('#project-card__library')) {
  //   new Glide('#project-card__library', {
  //     type: 'carousel',
  //     startAt: 0,
  //     animationDuration: 1000,
  //     breakpoints:{
  //       2560:{
  //         perView:5,
  //         gap:50
  //       },
  //       1920:{
  //         perView:4.5,
  //         gap:50
  //       },
  //       1800:{
  //         perView:4,
  //         gap:50
  //       },
  //       1600:{
  //         perView:3.4,
  //         gap:35  
  //       },
  //       1400:{
  //         perView:3.15,
  //         gap:30
  //       },
  //       1200:{
  //         perView:2.3,
  //         gap:30
  //       },
  //       1025:{
  //         perView:2.8,
  //         gap:25
  //       },
  //       950:{
  //         perView:2.4,
  //         gap:15
  //       },
  //       800:{
  //         perView:2.2,
  //         gap:15
  //       },
  //       768:{
  //         perView:2,
  //         gap:15
  //       },
  //       600:{
  //         perView:1.8,
  //         gap:10
  //       },
  //       599:{
  //         perView:1.7 ,
  //         gap:15
  //       },
  //       450:{
  //         perView:1.4,
  //         gap:20
  //       },
  //       375:{
  //         perView:1.16,
  //         gap:15
  //       },
  //       374:{
  //         perView:1.09,
  //         gap:15
  //       }
        
  //     }
  //   }).mount();
  // }

  // if (document.querySelector('#project-card__sc')) {
  //   new Glide('#project-card__sc', {
  //     type: 'carousel',
  //     startAt: 0,
  //     animationDuration: 1000,
  //     breakpoints:{
  //       2560:{
  //         perView:5,
  //         gap:50
  //       },
  //       1920:{
  //         perView:4.5,
  //         gap:50
  //       },
  //       1800:{
  //         perView:4,
  //         gap:50
  //       },
  //       1600:{
  //         perView:3.4,
  //         gap:35  
  //       },
  //       1400:{
  //         perView:3.15,
  //         gap:30
  //       },
  //       1200:{
  //         perView:2.3,
  //         gap:30
  //       },
  //       1025:{
  //         perView:2.8,
  //         gap:25
  //       },
  //       950:{
  //         perView:2.4,
  //         gap:15
  //       },
  //       800:{
  //         perView:2.2,
  //         gap:15
  //       },
  //       768:{
  //         perView:2,
  //         gap:15
  //       },
  //       600:{
  //         perView:1.8,
  //         gap:10
  //       },
  //       599:{
  //         perView:1.7 ,
  //         gap:15
  //       },
  //       450:{
  //         perView:1.4,
  //         gap:20
  //       },
  //       375:{
  //         perView:1.16,
  //         gap:15
  //       },
  //       374:{
  //         perView:1.09,
  //         gap:15
  //       }
        
  //     }
  //   }).mount();
  // }

  // if (document.querySelector('#project-card__gild')) {
  //   new Glide('#project-card__gild', {
  //     type: 'carousel',
  //     startAt: 0,
  //     animationDuration: 1000,
  //     breakpoints:{
  //       2560:{
  //         perView:5,
  //         gap:50
  //       },
  //       1920:{
  //         perView:4.5,
  //         gap:50
  //       },
  //       1800:{
  //         perView:4,
  //         gap:50
  //       },
  //       1600:{
  //         perView:3.4,
  //         gap:35  
  //       },
  //       1400:{
  //         perView:3.15,
  //         gap:30
  //       },
  //       1200:{
  //         perView:2.3,
  //         gap:30
  //       },
  //       1025:{
  //         perView:2.8,
  //         gap:25
  //       },
  //       950:{
  //         perView:2.4,
  //         gap:15
  //       },
  //       800:{
  //         perView:2.2,
  //         gap:15
  //       },
  //       768:{
  //         perView:2,
  //         gap:15
  //       },
  //       600:{
  //         perView:1.8,
  //         gap:10
  //       },
  //       599:{
  //         perView:1.7 ,
  //         gap:15
  //       },
  //       450:{
  //         perView:1.4,
  //         gap:20
  //       },
  //       375:{
  //         perView:1.16,
  //         gap:15
  //       },
  //       374:{
  //         perView:1.09,
  //         gap:15
  //       }
        
  //     }
  //   }).mount();
  // }    1400:{
  //         perView:3.15,
  //         gap:30
  //       },
  //       1200:{
  //         perView:2.3,
  //         gap:30
  //       },
  //       1025:{
  //         perView:2.8,
  //         gap:25
  //       },
  //       950:{
  //         perView:2.4,
  //         gap:15
  //       },
  //       800:{
  //         perView:2.2,
  //         gap:15
  //       },
  //       768:{
  //         perView:2,
  //         gap:15
  //       },
  //       600:{
  //         perView:1.8,
  //         gap:10
  //       },
  //       599:{
  //         perView:1.7 ,
  //         gap:15
  //       },
  //       450:{
  //         perView:1.4,
  //         gap:20
  //       },
  //       375:{
  //         perView:1.16,
  //         gap:15
  //       },
  //       374:{
  //         perView:1.09,
  //         gap:15
  //       }
        
  //     }
  //   }).mount();
  // }
};
