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
                <use xlink:href="/img/sprite.svg#icon-next"></use>
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
                      <svg class="glide-details__icon">
                        <use xlink:href="./img/sprite.svg#icon-bck" />
                      </svg>
                    </button>
                    <button class="glide-details__arrow glide-details__arrow--next" data-glide-dir=">">
                      <svg class="glide-details__icon">
                        <use xlink:href="./img/sprite.svg#icon-nxt" />
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
