<template>
    <section data-router-view="details" id="project__page-scroll">
          <div class="product-details">
            <div class="product-details__wrapper">
              <div class="product-details__bg">
                <div class="product-details__inner">
                  <div class="product-details__main-content">
                    <div class="product-details__text-inner--sm">
                      <h3 class="product-details__title product-details__title--sm"> Веб-сайт Музея</h3>
                      <p class="product-details__text product-details__text--mt">Девлет Сарай историко-культурный музей</p>
                    </div>
                  </div>
                </div>
                <div class="capitalize">
                  <div class="capitalize__item"> devlet Saray Museum </div>
                </div>
                <div class="cards__inner">
                  <div class="cards">
                    <div class="cards__item">
                      <picture><img src="../img/cards/devlet1.jpg" srcset="../img/cards/devlet1@2x.jpg 2x" alt="" /></picture>
                    </div>
                    <div class="cards__item">
                      <picture><img src="../img/cards/devlet2.jpg" srcset="../img/cards/devlet2@2x.jpg 2x" alt="" /></picture>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-details__inner">
                <div class="product-details__main-content">
                  <div class="product-details__text-inner">
                    <h3 class="product-details__title">О проекте<span class="product-details__title--red"> Devlet Saray Museum</span></h3>
                    <p> Музей – посвященный истории Крымских татар.
                    </p>
                    <p> Веб-сайт содержит исторические, культурные сведения. Искусство и деятелей искусств, их биографию и работы в жанрах (Рисунок, Фотография, Текстиль, Керамика, Вышивка, Деревообработка).
                    </p>
                    <div class="product-details__links">
                      <a href="http://devletsaray.org/" target="_blank" class="product-details__link product-details__link--red"><svg class="icon icon-web product-details__icon">
                          <use xlink:href="img/sprite.svg#icon-web"></use>
                        </svg>Перейти на сайт</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="glide-details__inner">
              <div class="glide-details__wrapper">
                <div class="glide glide-details" id="devlet__details-slider">
                  <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides glide-details__slides">
                      <li class="glide__slide glide-details__slide">
                        <picture><img src="../img/product-details/devlet1.jpg" srcset="../img/product-details/devlet1@2x.jpg 2x" alt="" /></picture>
                      </li>
                      <li class="glide__slide glide-details__slide">
                        <picture><img src="../img/product-details/devlet2.jpg" srcset="../img/product-details/devlet2@2x.jpg 2x" alt="" /></picture>
                      </li>
                      <li class="glide__slide glide-details__slide">
                        <picture><img src="../img/product-details/devlet3.jpg" srcset="../img/product-details/devlet3@2x.jpg 2x" alt="" /></picture>
                      </li>
                    </ul>
                  </div>
                  <div class="glide-details__items">
                    <div class="glide-details__bullets" data-glide-el="controls[nav]"><button class="glide-details__bullet" data-glide-dir="=0"></button><button class="glide-details__bullet" data-glide-dir="=1"></button><button class="glide-details__bullet" data-glide-dir="=2"></button></div>
                    <div class="glide-details__arrows" data-glide-el="controls"><button class="glide-details__arrow glide-details__arrow--prev" data-glide-dir="&lt;"><svg class="glide-details__icon">
                          <use xlink:href="../img/sprite.svg#icon-bck"></use>
                        </svg></button><button class="glide-details__arrow glide-details__arrow--next" data-glide-dir="&gt;"><svg class="glide-details__icon">
                          <use xlink:href="../img/sprite.svg#icon-nxt"></use>
                        </svg></button></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-cards__inner">
              <div class="glide project-cards__slider">
                <div class="project-cards__text-inner">
                  <h2 class="project-cards__text-item">Наши проекты </h2>
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
                    <li class="glide__slide"><a class="project-cards__item" href="./proj-library."><img class="project-cards__item-img" src="../img/project-cards/card6.jpg" alt="" />
                        <div class="project-cards__content">
                          <div class="project-cards__logo"><img src="../img/project-cards/library.svg" /></div><span class="project-cards__description t-crop">Девлет Сарай онлайн-библиотека </span><span class="project-cards__link">посмотреть </span>
                        </div>
                      </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
</template>

<script>
    export default{
        name: 'proj-devlet'
    }
</script>