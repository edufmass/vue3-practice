import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import PastOrders from '@/views/PastOrders.vue'
import About from '@/views/About.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/products',
      component: Products,
    },
    {
      path: '/past-orders',
      component: PastOrders,
    },
  ],
})
