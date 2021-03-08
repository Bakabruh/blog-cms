import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Blog from '../views/Blog.vue'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
