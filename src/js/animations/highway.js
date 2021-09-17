// import Highway from '@dogstudio/highway';
// import { TimelineLite } from 'gsap';

// import slider from '../lib/glideSlider';
// import detailsSlider from '../lib/detailsSlider';
// import projectSlider from '../lib/projectSlider';
// import mainSlider from '../lib/mainSlider';
// import typed from '../lib/typed';
// import menuTL from '../animations/menuTL';
// import refresh from '../lib/refresh';
// import capitalizeText from '../lib/capitalizeText';
// import { capitalize } from 'lodash';

// class Default extends Highway.Transition {  
//   in({ from, to, done }) {
//     // Remove Old View
//     from.remove();

//     // console.log('in');

//     // Animation
//     new TimelineLite().to('.site-menu', 0, {}).fromTo(
//       to,
//       0.5,
//       { autoAlpha: 0 },
//       {
//         autoAlpha: 1,
//         onComplete: done
//       }
//     );
//   }

//   out({ from, done }) {
//     // Animation
//     new TimelineLite({ onStart: menuTL.resume() }).fromTo(
//       from,
//       0.5,
//       { autoAlpha: 1 },
//       {
//         autoAlpha: 0,
//         onComplete: done
//       }
//     );
//   }
// }

// // Don`t forget to export your renderer
// export default Default;

// export class Projects extends Highway.Renderer {
//   onEnter() {
//     slider();
//     capitalizeText();
//     refresh();

//   }
// }

// export class Details extends Highway.Renderer {
//   onEnter() {
//     detailsSlider();
//     projectSlider();
//     capitalizeText();
//     refresh();
//   }
// }
// export class Contacts extends Highway.Renderer {
//   onEnter() {
//     refresh();
//   }
// }

// export class Main extends Highway.Renderer {
//   onEnter() {
//     typed();
//     refresh();
//     mainSlider();
//   }
// }
