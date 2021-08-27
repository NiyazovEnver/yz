import $ from 'jquery';

$(function() {
  $('.site-menu__item').on('click', function() {
    $('.site-menu__item').removeClass('site-menu__item--current');
    $(this).addClass('site-menu__item--current');
  });
});
