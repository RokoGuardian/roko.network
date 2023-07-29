import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import Ethos from '../views/Ethos.vue'
import Login from '../views/Login.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'Home',    
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/demo',
    name: 'Demo',    
    component: Demo,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/ethos',
    name: 'Ethos',    
    component: Ethos,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/')
    return;
  }

  next();
})

export default router
