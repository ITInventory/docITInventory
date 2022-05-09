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
    },
    {
      path: '/Host_intro',
      name: 'Host_intro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Hosting/Intro_host.vue')
    },
    {
      path: '/Host_install',
      name: 'Host_install',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Hosting/Install_pack.vue')
    },
    {
      path: '/Host_Gunicorn',
      name: 'Host_Gunicorn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Hosting/Host_Gunicorn.vue')
    },
    {
      path: '/Host_Nginx',
      name: 'Host_Nginx',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Hosting/Host_Nginx.vue')
    },
    {
      path: '/Host_Trouble',
      name: 'Host_Trouble',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Hosting/Host_Trouble.vue')
    }
    
  ]
})

export default router
