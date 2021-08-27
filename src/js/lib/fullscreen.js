import 'pepjs';
import screenfull from 'screenfull';
// import { disablePageScroll } from 'scroll-lock';

// disablePageScroll();

if (window.innerWidth <= 300) {
  const body = document.querySelector('body');

  const setFullScreen = (evt) => {
    evt.preventDefault();

    if (screenfull.isFullscreen) {
      body.removeEventListener('click', setFullScreen);
      body.removeEventListener('pointerdown', setFullScreen);
    }

    if (screenfull.enabled) {
      screenfull.request();
    }
  };

  body.addEventListener('click', setFullScreen);
  body.addEventListener('pointerdown', setFullScreen);
}
