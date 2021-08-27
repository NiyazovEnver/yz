import { TimelineLite } from 'gsap';
import { toggleActionBlocker } from './animation-helpers';

const mainTL = new TimelineLite({ delay: 2 });

// mainTL
mainTL.staggerFromTo('.site-menu__nav-toggler .line', 0.5, { scaleX: 0 }, { scaleX: 1 }, 0.1, 0, toggleActionBlocker);
