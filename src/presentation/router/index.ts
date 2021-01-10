import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Index.vue'
import ROUTER_NAMES from './router-names'

function loadView(view: string) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `../views/${view}.vue`)
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: ROUTER_NAMES.HOME,
    component: Home
  },
  {
    path: '/lobbies',
    name: ROUTER_NAMES.LOBBIES,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loadView('Lobbies')
  },
  {
    path: '/duel/:id',
    name: ROUTER_NAMES.DUEL,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loadView('Duel')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
