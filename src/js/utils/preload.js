// window.addEventListener('load', (event) => {
//   let preloaderEl = document.getElementById('preloader');
//   preloaderEl.classList.add('hidden');
//   preloaderEl.classList.remove('visible');
// });
import $ from 'jquery';
$(window).on('load', function() {
  $('#loading').delay(350).fadeOut('slow'); // и скрываем сам блок прелоудера.
});
