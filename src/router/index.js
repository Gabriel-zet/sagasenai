import { createRouter, createWebHashHistory } from 'vue-router'
import CadastroUser from "../views/CadastroUser.vue"
import HomeView from "../views/HomeView"
import CadastroAdmin from "../views/CadastroAdmin.vue"
import LoginAdmin from "../views/LoginAdmin"
import LoginUser from "../views/LoginUser.vue"
import CategoriasPost from "../views/admin/CategoriasPost"
import ListagemPost from "../views/admin/ListagemPost"
import PublicarPost from "../views/admin/PublicarPost"
import adminAuth from 'middlewares/adminAuth'

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
    path: '/AdmCategorias',
    name: 'AdmCategorias',
    component: CategoriasPost,
    beforeEnter: adminAuth
  },
  {
    path: '/AdmListagem',
    name: 'AdmListagem',
    component: ListagemPost,
    beforeEnter: adminAuth
  },
  {
    path: '/AdmPublicar',
    name: 'AdmPublicar',
    component: PublicarPost,
    beforeEnter: adminAuth
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
