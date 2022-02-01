import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Main')
  },
  {
    path: '/subject',
    name: 'subject',
    component: () => import('../views/Subject')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact')
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import('../views/Profil')
  },
]

const router = new VueRouter({
  routes
})

export default router
