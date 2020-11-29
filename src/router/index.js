import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import Home from '../pages/Home'
import store from '../store/store'
import { getToken } from '../localstorage-helper'
Vue.use(Router)


let routes = [
  {
    path: '/login',
    component: Login,
    meta: { title: 'Login' }
  },

  {
    path: '/',
    redirect: '/dashboard'
  },

  {
    path: '/dashboard',
    component: Home,
    meta: { title: 'Home' }
  },

]

const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
})
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && to.path != '/register' && to.path != '/reset-password') {
    if (!getToken()) {
      store.dispatch("login/logout")
      next('/login')
    } else {
      next()
    }
  } else {
    if (to.path == '/login' || to.path == '/register' || to.path == '/reset-password') {
      if (getToken()) {
        next('/dashboard')
      }else{
        next()
      }
    }
  }

})
export default router;
