import Filmes from '../components/Filmes/IndexFilmes.vue'
import Create from '../components/Filmes/CreateFilmes.vue'
import Edit from '../components/Filmes/EditFilmes.vue'
import Sobre from '../View/SobreIndex.vue'

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
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre
  },
]