
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import store from '@/store/index.js'
import ProjectAdded from '@/components/ProjectsAdded'
// import Secure from '@/components/Secure.vue'
import AddProjects from '@/components/AddProjects.vue'
import PageMain from '@/views/PageMain.vue'
import Projects from '@/views/Projects.vue'
import Contacts from '@/views/Contacts.vue'
import Details from '@/views/Details.vue'
import ProjDevlet from '@/views/Proj-devlet.vue'
import ProjDoza from '@/views/Proj-doza.vue'
import ProjGild from '@/views/Proj-gild.vue'
import ProjLibrary from '@/views/Proj-library.vue'
import ProjSc from '@/views/Proj-sc.vue'


Vue.use(Router)


let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/project-added',
      name: 'project-added',
      component: ProjectAdded,
      meta: {
        layout: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        layout: true
      }
    },
    // {
    //   path: '/secure',
    //   name: 'secure',
    //   component: Secure,
    //   meta: { 
    //     requiresAuth: true
    //   }
    // },
    {
      path: '/',
      name: 'page-main',
      component: PageMain,
      meta: {
        layout: true
      }
    },
    {
      path: '/addProjects',
      name: 'addProjects',
      component: AddProjects,
      meta: { 
        requiresAuth: true
      }
    },
    
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
      meta: {
        layout: true
      }
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/proj-devlet',
      name: 'proj-devlet',
      component: ProjDevlet
    },
    {
      path: '/proj-doza',
      name: 'proj-doza',
      component: ProjDoza
    },
    {
      path: '/proj-gild',
      name: 'proj-gild',
      component: ProjGild
    },
    {
      path: '/proj-library',
      name: 'proj-library',
      component: ProjLibrary
    },
    {
      path: '/proj-sc',
      name: 'proj-sc',
      component: ProjSc
    }
  ]
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('token') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user.is_admin == 1){
                  next()
              }
              else{
                  next({ name: 'userboard'})
              }
          }else {
              next()
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
          next()
      }
      else{
          next({ name: 'userboard'})
      }
  }else {
      next()
  }
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login') 
    } else {
      next() 
    }
  })
export default router
