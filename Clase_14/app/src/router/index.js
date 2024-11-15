import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserDetailsView from '../views/UserDetailsView.vue'
import UserListView from '../views/UserListView.vue'
import UserNewView from '@/views/UserNewView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/list',
      name: 'list',
      component: UserListView,
    },
    {
      path: '/new',
      name: 'new',
      component: UserNewView,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: UserDetailsView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
