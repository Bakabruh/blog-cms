import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Admin from '../views/Admin'
import Blog from '../views/Blog'
import Login from '../views/Login'
import CreatePage from '../components/CreatePage.vue'
import EditPage from '../components/EditPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/admin',
    name: 'Admin',
    component: Admin,

    children: [{
      props: true,
      path: '/admin/:id',
      name: 'EditPage',
      component: EditPage
    }]
  },

  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },

  {
    path: '/create-page',
    name: 'CreatePage',
    component: CreatePage
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
