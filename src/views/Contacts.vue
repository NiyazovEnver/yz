<template>
        <div class="contacts" data-router-view="contacts">
          <div class="contacts__wrapper">
            <div class="contacts-container">
              <!-- company info -->
              <div class="contacts__company-info">
               
                <h1>Контакты</h1>
                <h2>
                  <a class="contacts__title-link" href="mailto:help&#64;yuzum&#46;ru">help&#64;yuzum&#46;ru</a>
                </h2>
                <p class="contacts__address">г.Симферополь, ул.Маяковского 14а</p>
              </div>
              <!-- end company info -->
              <!-- send form -->
              <form class="contacts__contact-form" action="#">
                <legend class="visually-hidden">Форма отправки заявки</legend>
                <p class="contacts__input-field">
                  <label for="name" class="visually-hidden">Ваше имя</label>
                  <input class="contacts__input" type="text" id="name" name="name" placeholder="ИМЯ" required>
                </p>
                <p class="contacts__input-field">
                  <label for="email" class="visually-hidden">Ваш email</label>
                  <input class="contacts__input" type="email" id="email" name="email" placeholder="EMAIL" required>
                </p>
                <p class="contacts__input-field">
                  <label for="message" class="visually-hidden">Введите сообщение</label>
                  <input class="contacts__input" type="text" id="message" name="message" placeholder="СООБЩЕНИЕ" required>
                </p>
                <div class="contacts__attach-submit">
  
                  <div class="contacts__submit">
                    <button class="btn contacts__submit-btn" type="submit">ОТПРАВИТЬ</button>
                  </div>
                </div>
              </form>
              <!-- end send form -->
            </div>
          </div>
          <div class="contacts-map"></div>
          </div>
    
      
</template>


<script>

export default {
 name: 'contacts'   
}
</script>
