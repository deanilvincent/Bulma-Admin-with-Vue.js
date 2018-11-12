import Vue from 'vue'
import Router from 'vue-router'

// views

import Home from './views/Home.vue'
import UiFeatures from './views/UiFeatures'

// components
import UiFeatureHome from './components/UiFeatures/UiFeatureHome'
import UiFeatureButton from './components/UiFeatures/UiFeatureButton'
import UiFeatureForm from './components/UiFeatures/UiFeatureForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/ui-features',
      name: 'Ui',
      component: UiFeatures,
      children:[
        {
          path: '',
          name: 'Ui Home',
          component: UiFeatureHome
        },
        {
          path: 'button',
          name: 'Ui Button',
          component: UiFeatureButton
        },
        {
          path: 'form',
          name: 'Ui Form',
          component: UiFeatureForm
        }
      ]
    }
  ]
})
