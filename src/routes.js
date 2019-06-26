import Vue from 'vue'
import VueRouter from 'vue-router' 

import Home from './components/Pages/Home'
import Teste from './components/Pages/Teste'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import RegisterProfile from './components/Pages/RegisterProfile'

Vue.use(VueRouter);

const routers = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/teste',
      name: 'teste',
      component: Teste
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/register-profile',
      name: 'register-profile',
      component: RegisterProfile
    }
  ]
})

export default routers