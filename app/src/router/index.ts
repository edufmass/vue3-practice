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
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/past-orders',
      name: 'PastOrders',
      component: PastOrders,
    },
  ],
})
