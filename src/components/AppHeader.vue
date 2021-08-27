<template>
  <header class="site-header">
        <div class="site-header__wrapper">
          <a href="/" class="site-header__logo-wrapper" aria-label="Логотип Yuzum">
            <img src="../img/logo.svg"/>
<!--            <svg class="site-header__logo-icon" width="34" height="39">
              <use xlink:href="./img/sprite.svg#icon-logo" />
            </svg>-->
          </a>
          <ul class="site-header__language-list">
            <li class="site-header__language-item site-header__language-item--current">
              <a href="#" class="site-header__language-link" aria-current="true" aria-label="Русская версия сайта">ru</a>
            </li>
            <li class="site-header__language-item">
              <a href="#" class="site-header__language-link" lang="en" aria-label="English version of site">en</a>
            </li>
          </ul>
          <div class="site-header__contacts-wrapper">
            <a href="./contacts" class="btn site-header__contacts-order">Заказать</a>
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
                  <a href="./main" class="site-menu__link">О нас</a>
                </li>
                <li class="site-menu__item">
                  <a href="./projects" class="site-menu__link">Проекты</a>
                </li>
                <li class="site-menu__item">
                  <a href="./contacts" class="site-menu__link">Контакты</a>
                </li>
                <li>
                  <button class="theme-switcher">
                    <svg class="site-header__logo-icon theme--white" width="34" height="39">
                      <use xlink:href="./img/sprite.svg#icon-lamp" />
                    </svg>
                  </button>
                </li>
              </ul>
              <div class="site-menu__bg" aria-hidden="true"></div>
            </div>
          </nav>
        </div>
      </header>
</template>

<script>
export default {
  name: 'AppHeader',


    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
    created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout")
        }
        throw err;
      });
    });
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #nav{
    display: flex;
    justify-content: space-between;
    width: 100vw;
  }
  .nav__link-home{
    width: 100px;
    height: 20px;
    color: #000;
    background: #fff;
  }
  .site-header{
    height: 100px;
  }
</style>
