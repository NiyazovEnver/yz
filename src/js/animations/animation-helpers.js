const toggleActionBlocker = () => {
  document.querySelector('.action-blocker').classList.toggle('active');
};

const toggleClass = () => {
  document.querySelector('#navToggler').classList.toggle('site-menu__nav-toggler--opened');
};

export { toggleActionBlocker, toggleClass };
