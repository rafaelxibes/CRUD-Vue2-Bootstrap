import Vue from 'vue'
import VueRouter from 'vue-router'
import Filmes from '../components/Filmes/IndexFilmes.vue'
import Create from '../components/Filmes/CreateFilmes.vue'
import Edit from '../components/Filmes/EditFilmes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Filmes,
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/edit/:id?',
    name: 'edit',
    component: Edit
  },
]

const router = new VueRouter({
  routes
})

export default router
