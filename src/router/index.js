import { createRouter, createWebHashHistory } from 'vue-router'
import CardCadastrar from "../components/CardCadastrar.vue"
import CardLogin from "../components/CardLogin.vue"
import CursosECategorias from "../views/CursosECategorias.vue"
import HomeView from "../views/HomeView"

const routes = [
  {
    path: '/cadastrar',
    name: 'Cadastrar',
    component: CardCadastrar,
  },
  {
    path: '/login',
    name: 'Login',
    component: CardLogin,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/teste',
    name: 'teste',
    component: CursosECategorias
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
