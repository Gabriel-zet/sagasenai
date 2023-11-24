import { createRouter, createWebHashHistory } from 'vue-router'
import CadastroUser from "../views/CadastroUser.vue"
import HomeView from "../views/HomeView"
import CadastroAdmin from "../views/CadastroAdmin.vue"
// eslint-disable-next-line
import LoginAdmin from "../views/LoginAdmin"
import LoginUser from "../views/LoginUser.vue"
import CategoriasPost from "../views/admin/CategoriasPost"
import ListagemPost from "../views/admin/ListagemPost"
import PublicarPost from "../views/admin/PublicarPost"
import CardPub from '../components/CardPub.vue'
import UserProfile from '../views/UserProfile.vue'
import store from '../store';

const isAdmin = () => {
  const user = store.state.user;
  return user.isAuthenticated && user.isAdmin;
};

const routes = [
  {
    path: '/', redirect: '/home'
  },
  {
    path: '/cadastrar',
    name: 'Cadastrar',
    component: CadastroUser,
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile,
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
    component: CadastroAdmin,
    beforeEnter: (to, from, next) => {
      if (isAdmin()) {
        // Permite o acesso para usuários autenticados como administradores
        next();
      } else {
        // Redireciona para a página de login se não estiver autenticado ou não for administrador
        next({ name: 'LoginAdm' });
      }
    },
  },
  {
    path: '/AdmCategorias',
    name: 'AdmCategorias',
    component: CategoriasPost,
    beforeEnter: (to, from, next) => {
      if (isAdmin()) {
        next();
      } else {
        next({ name: 'LoginAdm' });
      }
    },
  },
  {
    path: '/AdmListagem',
    name: 'AdmListagem',
    component: ListagemPost,
    beforeEnter: (to, from, next) => {
      if (isAdmin()) {
        next();
      } else {
        next({ name: 'LoginAdm' });
      }
    },
  },
  {
    path: '/AdmPost',
    name: 'AdmPublicar',
    component: PublicarPost,
    beforeEnter: (to, from, next) => {
      if (isAdmin()) {
        next();
      } else {
        next({ name: 'LoginAdm' });
      }
    },
  },
  {
    path: '/teste',
    name: 'CardPub',
    component: CardPub
  },
  {
    path: '/LoginAdm',
    name: 'admLogin',
    component: 'LoginAdmin',
  },
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
