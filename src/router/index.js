import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import MenuPage from '../views/MenuPage.vue'
import GalleryPage from '../views/GalleryPage.vue'
import ContactPage from '../views/ContactPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/menu', name: 'Menu', component: MenuPage },
  { path: '/gallery', name: 'Gallery', component: GalleryPage },
  { path: '/contact', name: 'Contact', component: ContactPage }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
