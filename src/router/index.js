import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/examples',
    name: 'examples',
    component: () => import('../views/layout/example.vue'),
    children: [
      {
        path: '1',
        name: 'example-1',
        component: () => import('../views/examples/example1')
      },
      {
        path: '2',
        name: 'example-2',
        component: () => import('../views/examples/example2')
      },
      {
        path: '3',
        name: 'example-3',
        component: () => import('../views/examples/example3')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
