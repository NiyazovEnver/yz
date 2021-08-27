import { TimelineLite, Power2 } from 'gsap';
import { toggleClass, toggleActionBlocker } from './animation-helpers';

const tl = new TimelineLite();

// menuTL
tl
  .addPause()
  .to('.site-header', 0, { onStart: toggleClass, onComplete: toggleActionBlocker })  
  .staggerFromTo('.line', 0.1, { scaleX: 1 }, { scaleX: 0 }, 0.05)
  .to('.close', 0.15, { scale: 1, rotationZ: 45, x: '-50%', y: '-50%' })
  .to('.site-menu__bg', 0.25, { ease: Power2.easeInOut, scaleX: 1, transformOrigin: 'left center' }, '-=0.15')
  .staggerFromTo(
    '.site-menu__item',
    0.25,
    { xPercent: -20, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1 },
    0.15,
    '-=0',
    toggleActionBlocker
  )
  .staggerFromTo('.theme-switcher',
    0.25,
    { xPercent: -20, autoAlpha: 0},
    { xPercent: 0, autoAlpha: 1},
    0.15,
    '-=0'
  )
  .addPause()
  .staggerTo('.site-menu__item', 0.25, { autoAlpha: 0, yPercent: 80, ease: Power2.easeInOut }, 0.1)
  .staggerTo('.theme-switcher', 0.25, { autoAlpha: 0, yPercent: 80, ease: Power2.easeInOut }, 0.1)
  .to('.site-menu__bg', 0.25, { ease: Power2.easeInOut, scaleX: 0, transformOrigin: 'right center' })
  .to('.close', 0.15, {
    scale: 0,
    rotationZ: 0,
    onComplete: toggleClass
  })
  .staggerTo('.line', 0.1, { scaleX: 1 }, 0.05);

export default tl;
