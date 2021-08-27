<template>
 <div class="add-projects">
   <h1>Добавление проекта</h1>
  <form class="add-projects__form" action="#">
    <p class="add-projects__input-field">
      <label for="name" class="visually-hidden">Название проекта</label>
      <input
        class="add-projects__input"
        type="text" id="name"
        name="title"
        placeholder="Название проекта"
        required=""
        v-model="title">
    </p>

    <p class="add-projects__input-field">
      <label for="message" class="visually-hidden">Описание</label>
      <input
        v-model="description"
        class="add-projects__input"
        type="text"
        id="message"
        name="description"
        placeholder="Описание проекта"
        required="">
    </p>
<!--     <p class="add-projects__input-field">
      <label for="message" class="visually-hidden">Изображение</label>
      <input
      v-model="img"
      class="add-projects__input"
      type="text" id="message"
      name="description"
      placeholder="Изображение"
      required="">
    </p>-->
    <div class="add-projects__attach-file">
    <input class="visually-hidden" type="file" name="img" id="file" @change="onImageChange"/>
    <label class="add-projects__attach-file-label" for="file">Прикрепить Файл</label>
    </div>
    <div class="add-projects__attach-submit">
      <div class="add-projects__submit">
        <button
        class="btn add-projects__submit-btn"
        type="submit"
        @click="addProjects">ОТПРАВИТЬ</button>
      </div>
    </div>
  </form>
 </div>
</template>

<script>
    export default {
        name: 'addProjects',
        data(){
          return{
            title: '',
            description: '',
            img: null,
          }
        },
        methods : {
          onImageChange(e) {
            console.log('files changed!')
            console.log(e);
            this.img = e.target.files[0];
          },
            addProjects(e) {
              console.log('saving');

              const fd = new FormData();
              fd.append('title', this.title);
              fd.append('description', this.description);
              fd.append('img', this.img);

              console.log(fd);

              this.$http.post('http://localhost:3000/addProjects', fd, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
              e.preventDefault();

            }
        }
    }
</script>
