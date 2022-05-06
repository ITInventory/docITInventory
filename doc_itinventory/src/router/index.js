import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/django_setup',
      name: 'django_setup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Django/Django_setup.vue')
    },
    {
      path: '/django_content',
      name: 'django_content',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Django/Content_page.vue')
    },
    {
      path: '/django_syntax',
      name: 'django_syntax',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Django/Django_syntax.vue')
    },
    {
      path: '/login_content',
      name: 'login_content',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/django/Main_PY/Login.vue')
    },
    {
      path: '/logout_content',
      name: 'logout_content',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Django/Main_PY/LogOut_website.vue')
    },
    {
      path: '/homepage_content',
      name: 'homepage_content',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Django/Main_PY/Homepage.vue')
    },
    {
      path: '/Computer_Page',
      name: 'Computer_Page',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Django/Main_PY/Computer_Page.vue')
    }
    
  ]
})

export default router
