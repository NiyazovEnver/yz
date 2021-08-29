// import { createApp } from 'vue'

import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store  from "./store/index.js";
import '@/sass/app.sass'
// import defaultLayout from './layouts/default'
// import noFooter from './layouts/noFooter'


// Vue.component("default-layout", defaultLayout)
// Vue.component("no-footer", noFooter)

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
