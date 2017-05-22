import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent/HomeComponent'
import _NavBarComponent from '@/components/_NavBarComponent/_NavBarComponent'
import ItemDetailComponent from '@/components/ItemDetailComponent/ItemDetailComponent'

Vue.use(Router)
Vue.component('navbar', _NavBarComponent)

export default new Router({
  routes: [
    {
      name: 'HomeComponent',
      path: '/',
      component: HomeComponent
    },
    {
      name: 'ItemDetailComponent',
      path: '/item/:itemId',
      component: ItemDetailComponent
    }
  ]
})
