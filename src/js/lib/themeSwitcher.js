import $ from 'jquery';

/* eslint-disable */
//your code here
const onClickToggleClass = (evt, className) => {
  evt.preventDefault();
  $('html').toggleClass('theme--white');
  const $this = $(evt.currentTarget);

  $this.toggleClass(className);
};

const themeSwitcher = $('.theme--white');
const themeColor = $('.theme--dark');

themeSwitcher.on('click', function (evt) {
  onClickToggleClass(evt, 'theme--active');
  themeColor.toggleClass('theme--active');
});

//retrieve current state
$('html').toggleClass(localStorage.toggled);

$('.theme-switcher').on('click', function () {
  if (localStorage.toggled !== 'theme--white') {
    $('.theme-switcher').toggleClass('theme--white', true);
    localStorage.toggled = 'theme--white';
  } else {
    $('.theme-switcher').toggleClass('theme--white', false);
    localStorage.toggled = '';
  }
});
/* eslint-enable */

