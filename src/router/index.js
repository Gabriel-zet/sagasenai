import { createRouter, createWebHashHistory } from 'vue-router'
import CadastroUser from "../views/CadastroUser.vue"
import CursosECategorias from "../components/CursosECategorias.vue"
import HomeView from "../views/HomeView"
import CadastroAdmin from "../views/CadastroAdmin.vue"
import LoginAdmin from "../views/LoginAdmin"
import LoginUser from "../views/LoginUser.vue"

const routes = [
  {
    path: '/cadastrar',
    name: 'Cadastrar',
    component: CadastroUser,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginUser,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/CadastrarAdmin',
    name: 'CadastrarAdm',
    component: CadastroAdmin
  },
  {
    path: '/LoginAdmin',
    name: 'LoginAdm',
    component: LoginAdmin
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
