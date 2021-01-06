import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ConfirmedCases from '@/views/ConfirmedCases.vue'
import Hospitalized from '@/views/Hospitalized.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'ConfirmedCases',
    component: ConfirmedCases
  },
  {
    path: '/hospitalized',
    name: 'Hospitalized',
    component: Hospitalized
  },
]

const router = new VueRouter({
  routes
})

export default router
