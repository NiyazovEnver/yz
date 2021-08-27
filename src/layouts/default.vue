<template>
    
<div>
<header class="site-header">
  <div class="site-header__wrapper">
    
    
    <ul class="site-header__language-list">
      <li class="site-header__language-item site-header__language-item--current">
        <a href="#" class="site-header__language-link" aria-current="true" aria-label="Русская версия сайта">ru</a>
      </li>
      <li class="site-header__language-item">
        <a href="#" class="site-header__language-link" lang="en" aria-label="English version of site">en</a>
      </li>
    </ul>
   
    <div class="site-header__contacts-wrapper">
       <div id="nav">
      <router-link class="nav__link-home" to="/">Home</router-link> 
      <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/register">Create account</router-link>
      <router-link v-if="isLoggedIn" to="/add">Add project</router-link>
      <a v-if="isLoggedIn" @click="logout">Logout</a>
    </div>
    
      <!-- <a href="./contacts.html" class="btn site-header__contacts-order">Заказать</a> -->
    </div>

    <nav class="site-menu__nav">
      <button id="navToggler" class="site-menu__nav-toggler" aria-label="Кнопка меню">
        <div class="shape">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="close"></div>
      </button>

      <div class="site-menu__wrapper">
        <ul class="site-menu__list">
          <li class="site-menu__item site-menu__item--current">
            <a href="./main.html" class="site-menu__link">О нас</a>
          </li>
          <li class="site-menu__item">
            <a href="./projects.html" class="site-menu__link">Проекты</a>
          </li>
          <li class="site-menu__item">
            <a href="./contacts.html" class="site-menu__link">Контакты</a>
          </li>
          <li>
            <button class="theme-switcher">
              <!-- <svg class="site-header__logo-icon theme--white" width="34" height="39">
                <use xlink:href="./img/sprite.svg#icon-lamp" />
              </svg> -->
            </button>
          </li>
        </ul>
        
        <div class="site-menu__bg" aria-hidden="true"></div>
      </div>
    </nav>
  </div>
</header>

<section>
    <slot />
</section>

<footer class="site-footer">
        <div class="site-footer__info-wrapper">
            <div class="site-footer__company-info-wrapper">
            <p class="site-footer__copyrights">© 2021 YUZUM</p>
            
            <a href="mailto:help&#64;yuzum&#46;ru" class="site-footer__feedback">help&#64;yuzum&#46;ru</a>
            
            <address class="site-footer__address">г. Симферополь, ул. Маяковского 14а</address>
            </div>

            <ul class="contacts__social site-footer__soc-list">
            <li class="contacts__social-item site-footer__soc-item">
                <a class="contacts__social-link site-footer__soc-link" href="#" aria-label="Facebook Yuzum">
                <!-- <svg class="contacts__social-ico site-footer__soc-icon" width="15" height="15">
                    <use xlink:href="./img/sprite.svg#icon-facebook" />
                </svg> -->
                </a>
            </li>
            <li class="contacts__social-item site-footer__soc-item">
                <a class="contacts__social-link site-footer__soc-link" href="#" aria-label="Twitter Yuzum">
                <!-- <svg class="contacts__social-ico site-footer__soc-icon" width="15" height="15">
                    <use xlink:href="./img/sprite.svg#icon-twitter" />
                </svg> -->
                </a>
            </li>
            <li class="contacts__social-item site-footer__soc-item">
                <a class="contacts__social-link site-footer__soc-link" href="#" aria-label="Instagram Yuzum">
                <!-- <svg class="contacts__social-ico site-footer__soc-icon" width="15" height="15">
                    <use xlink:href="./img/sprite.svg#icon-instagram" />
                </svg> -->
                </a>
            </li>
            </ul>
        </div>
    </footer>
</div>

</template>