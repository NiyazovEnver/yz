import $ from 'jquery';

const onClickToggleClass = (evt, className) => {
  evt.preventDefault();

  $(evt.currentTarget).toggleClass(className);
};

export { onClickToggleClass };
