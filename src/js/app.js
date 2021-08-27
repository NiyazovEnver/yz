import $ from 'jquery';

/*** MY MODULES 🧐 ***/
import './utils/';
import './lib';

// animations
import './animations';


console.log('Hello from legacy js');

try {
  const form = $('.contacts__contact-form');
  form.on('submit', () => {
    if ($('.site-header__language-item--current').text().trim() === 'ru') {
      alert('Форма Временно не работает, попробуйте позже');
    } else {
      alert('Form temporary is not available, check later');
    }
  });
} catch (error) {
  console.log(error);
}
