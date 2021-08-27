import $ from 'jquery'
export default () => {

  $('.capitalize__item').html(function(i, html)
  {
    return html.replace(/^[^a-zA-Z]*([a-zA-Z])/g, '<span class="capitalize__item--red">$1</span>');
  });
};
