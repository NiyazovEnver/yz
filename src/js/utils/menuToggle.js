import $ from 'jquery';
// import { onClickToggleClass } from './utils';

import menuTL from '../animations/menuTL';

const menuBtn = $('#navToggler');
menuBtn.on('click', function(evt) {
  // onClickToggleClass(evt, 'site-menu__nav-toggler--opened');

  if (!menuTL.paused()) {
    menuTL.restart(); // -> restart TimeLine
  }
  menuTL.resume();
});
