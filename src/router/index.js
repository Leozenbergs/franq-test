import Vue from 'vue'
import VueRouter from 'vue-router'
import Outside from '@/layouts/Outside'
import Inside from '@/layouts/Inside'

Vue.use(VueRouter)

const userSession = localStorage.getItem('userSession')

const routes = [
  {
    path: '/',
    component: Outside,
    redirect: 'login',
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Outside
      }
    ]
  },
  {
    path: '/app',
    component: () => import('@/layouts/Inside.vue'),
    async beforeEnter(to, from, next) {
      if (!userSession || userSession === 'undefined') {
        return next({ name: 'Login' });
      } else {
        next()
      }
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Inside
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
