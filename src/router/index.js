import { createRouter, createWebHashHistory } from 'vue-router'
import CadastroUser from "../views/CadastroUser.vue"
import HomeView from "../views/HomeView"
import CadastroAdmin from "../views/CadastroAdmin.vue"
import LoginAdmin from "../views/LoginAdmin"
import LoginUser from "../views/LoginUser.vue"
import CategoriasPost from "../views/admin/CategoriasPost"
import ListagemPost from "../views/admin/ListagemPost"
import PublicarPost from "../views/admin/PublicarPost"
import UserProfile from '../views/UserProfile.vue'
import store from '../store';
import Cookies from 'js-cookie'
import LeaveAdm from '../views/admin/LeaveAdm.vue'
import ListagemPostUser from "../views/ListagemPostUser"
import VotarPage from "../views/VotarPage.vue"


const isAdmin = () => {
  const user = store.getters['user/getUser'];
  return user && user.isAuthenticated === true && user.isAdmin === true;
};
const hasToken = () => !!Cookies.get('token');
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
    beforeEnter: (to, from, next) => {
      if (hasToken()) {
        next();
      } else {
        next('/');
      }
    },
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
    path: '/Listagem/:categoria?',
    name: 'listagem',
    component: ListagemPostUser,
  },
  {
    path: '/post/:id',
    name: 'Votar',
    component: VotarPage,
    props: true, 
  },
  {
    path: '/CadastrarAdmin',
    name: 'CadastrarAdm',
    component: CadastroAdmin,
    beforeEnter: (to, from, next) => {
      if (isAdmin() && hasToken()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/AdmCategorias',
    name: 'AdmCategorias',
    component: CategoriasPost,
    beforeEnter: (to, from, next) => {
      if (isAdmin() && hasToken()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/AdmListagem',
    name: 'AdmListagem',
    component: ListagemPost,
    beforeEnter: (to, from, next) => {
      if (isAdmin() && hasToken()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/AdmPost',
    name: 'AdmPublicar',
    component: PublicarPost,
    beforeEnter: (to, from, next) => {
      if (isAdmin() && hasToken()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/LoginAdm',
    name: 'LoginAdm',
    component: LoginAdmin,
  },
  
  {
    path: '/logout',
    name: 'Logout',
    component: LeaveAdm,
    beforeEnter: (to, from, next) => {
      Cookies.remove('token', { path: '' });
      next('login')
    }
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
