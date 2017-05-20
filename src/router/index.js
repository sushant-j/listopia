import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent/HomeComponent'
import _NavBarComponent from '@/components/_NavBarComponent/_NavBarComponent'

Vue.use(Router)
Vue.component('navbar', _NavBarComponent)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    }
  ]
})
