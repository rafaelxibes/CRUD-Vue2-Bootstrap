import Filmes from '../components/Filmes/IndexFilmes.vue'
import Create from '../components/Filmes/CreateFilmes.vue'
import Edit from '../components/Filmes/EditFilmes.vue'

export default [
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