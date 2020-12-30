import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Member from '../pages/Member'
import Lelang from '../pages/Lelang'
import Transaksi from '../pages/Transaksi'
import Password from '../pages/Password'
import Kategori from '../pages/Kategori'
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

  {
    path: '/member',
    component: Member,
    meta: { title: 'Member' }
  },
  {
    path: '/lelang',
    component: Lelang ,
    meta: { title: 'Lelang' }
  },
  {
    path: '/transaksi',
    component: Transaksi ,
    meta: { title: 'Transaksi' }
  },
  {
    path: '/password',
    component: Password ,
    meta: { title: 'Password' }
  },
  {
    path: '/kategori',
    component: Kategori ,
    meta: { title: 'Kategori' }
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
