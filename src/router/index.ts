import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

console.log(routes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router