<template>
    
        <section class="about-company main-content" data-router-view="main">
          <h1>О нас</h1>
          <div class="about-company__animated-text-wrapper">
            <div id="about-company-typed-text">
              <span class="about-company__text-wrapper">
                <strong class="about-company__text">
                  <span class="f-letter">М</span>ы разрабатываем веб-сайты, интернет-магазины, мобильные приложения и IT-решения для бизнеса, услуги интернет маркетинга, SMM, SEO.
                </strong>
              </span>
            </div>
            <span id="typed-text"></span><a class="main-page__btn btn projects__item-link main-page__animate" href="proj">все Проекты<svg class="icon icon-next main-page__btn-svg">
                <use xlink:href="./img/sprite.svg#icon-next"></use>
              </svg></a>
          </div>
          <div class="main-slider main-page__animate">
            <div class="project-cards__inner main__slider-inner">
              <div class="glide main__slider">
                <div class="glide__track project-cards__track" data-glide-el="track">
                  <ul class="glide__slides">
                    <li class="glide__slide"><a class="project-cards__item" href="./proj-gild"><img class="project-cards__item-img" src="../img/project-cards/card1.jpg" alt="" />
                        <div class="project-cards__content">
                          <div class="project-cards__logo"><img src="../img/project-cards/gild.svg" /></div><span class="project-cards__description t-crop">Инструмент по подбору исполнителей</span><span class="project-cards__link">посмотреть </span>
                        </div>
                      </a></li>
                    <li class="glide__slide"><a class="project-cards__item" href="./details"><img class="project-cards__item-img" src="../img/project-cards/card2.jpg" alt="" />
                        <div class="project-cards__content">
                          <div class="project-cards__logo"><img src="../img/project-cards/tturk.svg" /></div><span class="project-cards__description t-crop">Торговая площадка, с товарами из Турции</span><span class="project-cards__link">посмотреть </span>
                        </div>
                      </a></li>
                    <li class="glide__slide"><a class="project-cards__item" href="./proj-devlet"><img class="project-cards__item-img" src="../img/project-cards/card3.jpg" alt="" />
                        <div class="project-cards__content">
                          <div class="project-cards__logo"><img src="../img/project-cards/devlet.svg" /></div><span class="project-cards__description t-crop">Веб-сайт Девлет Сарай Музея</span><span class="project-cards__link">посмотреть </span>
                        </div>
                      </a></li>
                    <li class="glide__slide"><a class="project-cards__item" href="./proj-doza"><img class="project-cards__item-img" src="../img/project-cards/card4.jpg" alt="" />
                        <div class="project-cards__content">
                          <div class="project-cards__logo"><img src="../img/project-cards/doza.svg" /></div><span class="project-cards__description t-crop">Обучающее приложение для фармацевтов</span><span class="project-cards__link">посмотреть </span>
                        </div>
                      </a></li>
                    <li class="glide__slide"><a class="project-cards__item" href="./proj-sc"><img class="project-cards__item-img" src="../img/project-cards/card5.jpg" alt="" />
                        <div class="project-cards__content">
                          <div class="project-cards__logo"><img src="../img/project-cards/sportcity.svg" /></div><span class="project-cards__description t-crop">Интернет-магазин Sportcity</span><span class="project-cards__link">посмотреть </span>
                        </div>
                      </a></li>
                    <li class="glide__slide"><a class="project-cards__item" href="./proj-library"><img class="project-cards__item-img" src="../img/project-cards/card6.jpg" alt="" />
                        <div class="project-cards__content">
                          <div class="project-cards__logo"><img src="../img/project-cards/library.svg" /></div><span class="project-cards__description t-crop">Девлет Сарай онлайн-библиотека </span><span class="project-cards__link">посмотреть </span>
                        </div>
                      </a></li>
                  </ul>
                </div>
                <div class="project-cards__text-inner main-page__text-inner">
                  <h2 class="project-cards__text-item main-page__text-item">Последние проекты </h2>
                  <div class="glide-details__arrows" data-glide-el="controls">
                    <button class="glide-details__arrow glide-details__arrow--prev" data-glide-dir="<">
                      
                      <svg class="glide-details__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
                          <path d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/>
                      </svg>
                    </button>
                    <button class="glide-details__arrow glide-details__arrow--next" data-glide-dir=">">
                      
                      <svg class="glide-details__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240" >
                        <path d="M183.189 111.816L74.892 3.555c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.297-108.261c4.68-4.691 4.68-12.511-.012-17.19z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
</template>


<script>
export default {
    name: 'Main'
}
</script>
