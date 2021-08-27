<template>
  <div id="app">
    <div id="loading"></div>
    <div class="site-container">
      <app-header></app-header>
      <main data-router-wrapper>
        <router-view/>
      </main>

      <app-footer></app-footer>
       <div class="action-blocker active"></div>
<!--      <div class="action-blocker"></div>-->
    </div>
  </div>

</template>


<style lang="scss">
  // .main{
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }
</style>
<script>
import store from './store'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
  export default {
    components:{
      AppHeader,
      AppFooter,
      store
    },

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
