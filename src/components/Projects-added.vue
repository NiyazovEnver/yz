<template>
  <div class="projects-added">
    <ul class="projects-added__list">
      <li
        v-for="project in projects"
        :key="project.id"
        class="projects-added__project"

      >
<!--        <div class="projects-added__img">{{project.img}}</div>-->
        <img class="projects-added__img" :src="`data:image/jpeg;base64,${project.img}`"/>
        <h2 class="projects-added__title">{{project.title}}</h2>
        <p class="projects-added__description">{{project.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default{
  data(){
    return{
      projects: []
    }
  },
  mounted(){
    this.getProjects()
  },
  methods:{
    getProjects(){
      this.$http.get('http://localhost:3000/projects')
      .then(response =>{
        this.projects = response.data
      })
    }
  }
}

</script>
