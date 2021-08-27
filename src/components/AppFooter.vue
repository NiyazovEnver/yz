<template>
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
                <svg class="contacts__social-ico site-footer__soc-icon" width="15" height="15">
                  <use xlink:href="./img/sprite.svg#icon-facebook" />
                </svg>
              </a>
            </li>
            <li class="contacts__social-item site-footer__soc-item">
              <a class="contacts__social-link site-footer__soc-link" href="#" aria-label="Twitter Yuzum">
                <svg class="contacts__social-ico site-footer__soc-icon" width="15" height="15">
                  <use xlink:href="./img/sprite.svg#icon-twitter" />
                </svg>
              </a>
            </li>
            <li class="contacts__social-item site-footer__soc-item">
              <a class="contacts__social-link site-footer__soc-link" href="#" aria-label="Instagram Yuzum">
                <svg class="contacts__social-ico site-footer__soc-icon" width="15" height="15">
                  <use xlink:href="./img/sprite.svg#icon-instagram" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  
}
</script>
