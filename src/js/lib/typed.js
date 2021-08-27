import Typed from 'typed.js';

export default () => {
  if (document.getElementById('typed-text')) {
    new Typed('#typed-text', {
      stringsElement: '#about-company-typed-text',
      typeSpeed: 40
    });
  }
};
