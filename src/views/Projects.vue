<template>
  <section class="about-company main-content projects">

    <h1>Проекты</h1>
    <div class="slider-projects__wrapper">
      <div class="glide slider-projects projects-slider">
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;">
            <svg class="glide-details__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240"
                 height="240">
              <path
                d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/>
            </svg>
          </button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;">
            <svg class="glide-details__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240"
                 height="240">
              <path
                d="M183.189 111.816L74.892 3.555c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.297-108.261c4.68-4.691 4.68-12.511-.012-17.19z"/>
            </svg>
          </button>
        </div>
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">

            <!-- <li class="glide__slide">
            Prettier
             <div class="slider-projects__description-wrapper"><span class="slider-projects__tag">Торговая площадка</span>
               <h3>TT-Turk</h3>
               <p class="slider-projects__description">Виртуальная торговая площадка, предоставляющая возможность покупать товары производителей из Турции. Товары на площадке продаются в розницу и оптом.</p>
             </div>
             <div class="slider-projects__img-wrapper">
               <div class="slider-projects__text-wrapper">
                 <h2>TT-Turk</h2><a class="projects__item-link" href="./details">Посмотреть</a>
               </div><img class="slider-projects__img" src="../img/projects/tturk.jpg" alt="" />
             </div>
           </li> -->
            <li v-for="project in projects"
                :key="project.id"
                class="glide__slide">
              <div class="slider-projects__description-wrapper"><span
                class="slider-projects__tag">Торговая площадка</span>
                <h3>{{ project.title }}</h3>
                <p class="slider-projects__description">{{ project.description }}</p>
              </div>
              <div class="slider-projects__img-wrapper">
                <div class="slider-projects__text-wrapper">
                  <h2>{{ project.title }}</h2><a class="projects__item-link" href="./details">Посмотреть</a>
                </div>
                <img v-for="img in project.img.split(',')" class="slider-projects__img" :src="`data:image/jpeg;base64,${img}`" alt=""/>
              </div>
            </li>
            <!-- <li class="glide__slide">
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
            </li>  -->

          </ul>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0">
            <span class="projects__item-number">01</span>
            tt-turk
          </button>
          <button class="glide__bullet" data-glide-dir="=1">
            <span class="projects__item-number">02</span>
            Yuzum
          </button>
          <button class="glide__bullet" data-glide-dir="=2">
            <span class="projects__item-number">03</span>
            gild
          </button>
          <button class="glide__bullet" data-glide-dir="=3">
            <span class="projects__item-number">04</span>
            doza
          </button>
          <button class="glide__bullet" data-glide-dir="=4">
            <span class="projects__item-number">05</span>
            sportcity
          </button>
          <button class="glide__bullet" data-glide-dir="=5">
            <span class="projects__item-number">06</span>
            DS Museum
          </button>
          <button class="glide__bullet" data-glide-dir="=6">
            <span class="projects__item-number">07</span>
            DS Library
          </button>

        </div>
      </div>
    </div>
  </section>
</template>

<script>

import {initGlide} from "../js/lib/glideSlider";

export default {
  name: 'projects',
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    // this.projects = [{id: 1, title: 'asdf', description: 'test1'}, {id: 2, title: 'title2', description: 'test2'}, {id: 3, title: 'title3', description: 'test3'}];
    // setTimeout(() => initGlide(), 100);
    // initGlide();
    this.getProjects()
    // let recaptchaScript = document.createElement('script')
    // recaptchaScript.setAttribute('src', '../js/lib/projectSlider.js')
    // document.head.appendChild(recaptchaScript)
  },
  methods: {

    getProjects() {
      // setTimeout(() => {
      //   this.projects = [{id: 1, title: 'asdf', description: 'test1'}, {id: 2, title: 'title2', description: 'test2'}, {id: 3, title: 'title3', description: 'test3'}];
      // }, 500);
      this.$http.get('http://localhost:3000/projects')
        .then(response => {
          this.projects = response.data;
          this.projects[0].img.split(','); // upload/1.png,upload/2.png,3.png
          setTimeout(() => initGlide(), 100);
        })
    }
  }
}

</script>
