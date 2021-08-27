export default () => { 

  let links=document.querySelectorAll('.project-cards__item');

  //reload the new page after clicking on link in 'project-cards'
  links.forEach(elem => {
    elem.addEventListener('click',() => {
      location.reload(true);
      window.scrollTo(0, 0);
    });
  });

  let items=document.querySelectorAll('.projects__item-link');

  //reload the new page after clicking on link in 'projects__item-link'
  items.forEach(elem => {
    elem.addEventListener('click',() => {
      location.reload(true);
      window.scrollTo(0, 0);
    });
  });

  if(document.querySelector('#project__page-scroll')) {
    document.querySelector('.site-header').classList.add('site-scroll');
    document.querySelector('.site-header__wrapper').classList.add('site-scroll__wrapper');
    document.querySelector('.site-menu__nav').classList.add('site-scroll__nav');
    // document.querySelectorAll('.site-footer').style.display = 'none';  
    document.querySelector('.site-footer__info-wrapper').style.display = 'none';
  }


};
