<template>
        <section class="about-company main-content projects" data-router-view="projects">
          <h1>Проекты</h1>
          <div class="slider-projects__wrapper">
            <div class="glide slider-projects projects-slider">
              <div class="glide__arrows" data-glide-el="controls"><button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;"><svg class="glide__arrow-icon" width="34" height="39">
                    <use xlink:href="./img/sprite.svg#icon-bck"></use>
                  </svg></button><button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"><svg class="glide__arrow-icon" width="34" height="39">
                    <use xlink:href="./img/sprite.svg#icon-nxt"></use>
                  </svg></button></div>
              <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                  <li class="glide__slide">
                    <div class="slider-projects__description-wrapper"><span class="slider-projects__tag">Торговая площадка</span>
                      <h3>TT-Turk</h3>
                      <p class="slider-projects__description">Виртуальная торговая площадка, предоставляющая возможность покупать товары производителей из Турции. Товары на площадке продаются в розницу и оптом.</p>
                    </div>
                    <div class="slider-projects__img-wrapper">
                      <div class="slider-projects__text-wrapper">
                        <h2>TT-Turk</h2><a class="projects__item-link" href="./details">Посмотреть</a>
                      </div><img class="slider-projects__img" src="../img/projects/tturk.jpg" alt="" />
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div class="slider-projects__description-wrapper"><span class="slider-projects__tag">Предоставление услуг</span>
                      <h3>gild</h3>
                      <p class="slider-projects__description">Надежный инструмент по подбору исполнителей</p>
                    </div>
                    <div class="slider-projects__img-wrapper">
                      <div class="slider-projects__text-wrapper">
                        <h2>gild</h2><a class="projects__item-link" href="./proj-gild">Посмотреть</a>
                      </div><img class="slider-projects__img" src="../img/projects/gild.jpg" alt="" />
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div class="slider-projects__description-wrapper"><span class="slider-projects__tag">Обучающее приложение</span>
                      <h3>Doza</h3>
                      <p class="slider-projects__description">Обучающее приложение для фармацевтов, провизоров, студентов медицинских и фармацевтический учебных заведений.</p>
                    </div>
                    <div class="slider-projects__img-wrapper">
                      <div class="slider-projects__text-wrapper">
                        <h2>Doza</h2><a class="projects__item-link" href="./proj-doza">Посмотреть</a>
                      </div><img class="slider-projects__img" src="../img/projects/doza.jpg" alt="" />
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div class="slider-projects__description-wrapper"><span class="slider-projects__tag">Интернет-магазин</span>
                      <h3>Sportcity</h3>
                      <p class="slider-projects__description">Большая сеть спортивных магазинов, представленная в 18 городах Украины и не только.</p>
                    </div>
                    <div class="slider-projects__img-wrapper">
                      <div class="slider-projects__text-wrapper">
                        <h2>Sportcity</h2><a class="projects__item-link" href="./proj-sc">Посмотреть</a>
                      </div><img class="slider-projects__img" src="../img/projects/sc.jpg" alt="" />
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div class="slider-projects__description-wrapper"><span class="slider-projects__tag">Веб-сайт Музея</span>
                      <h3>Devlet Saray Museum</h3>
                      <p class="slider-projects__description">Девлет Сарай историко-культурный музей</p>
                    </div>
                    <div class="slider-projects__img-wrapper">
                      <div class="slider-projects__text-wrapper">
                        <h2>DS Museum</h2><a class="projects__item-link" href="./proj-devlet">Посмотреть</a>
                      </div><img class="slider-projects__img" src="../img/projects/ds-museum.jpg" alt="" />
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div class="slider-projects__description-wrapper"><span class="slider-projects__tag">Онлайн-библиотека</span>
                      <h3>Devlet Saray Library</h3>
                      <p class="slider-projects__description">Девлет Сарай онлайн-библиотека</p>
                    </div>
                    <div class="slider-projects__img-wrapper">
                      <div class="slider-projects__text-wrapper">
                        <h2>DS Library</h2><a class="projects__item-link" href="./proj-library">Посмотреть</a>
                      </div><img class="slider-projects__img" src="../img/projects/ds-lib.jpg" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="glide__bullets" data-glide-el="controls[nav]"><button class="glide__bullet" data-glide-dir="=0"><span class="projects__item-number">01</span>tt-turk</button><button class="glide__bullet" data-glide-dir="=1"><span class="projects__item-number">02</span>gild</button><button class="glide__bullet" data-glide-dir="=2"><span class="projects__item-number">03</span>doza</button><button class="glide__bullet" data-glide-dir="=3"><span class="projects__item-number">04</span>sportcity</button><button class="glide__bullet" data-glide-dir="=4"><span class="projects__item-number">05</span>DS Museum</button><button class="glide__bullet" data-glide-dir="=5"><span class="projects__item-number">06</span>DS Library </button></div>
            </div>
          </div>
        </section>
</template>

<script>
export default {
    name: 'Proj'
}
</script>
