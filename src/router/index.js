import { createRouter, createWebHashHistory } from 'vue-router'
import CadastroUser from "../views/CadastroUser.vue"
import HomeView from "../views/HomeView"
import CadastroAdmin from "../views/CadastroAdmin.vue"
import LoginAdmin from "../views/LoginAdmin"
import LoginUser from "../views/LoginUser.vue"
import CategoriasPost from "../views/admin/CategoriasPost"
import ListagemPost from "../views/admin/ListagemPost"
import PublicarPost from "../views/admin/PublicarPost"
import ProjetoView from "../views/ProjetoView"
import UserProfile from '../views/UserProfile.vue'
import store from '../store';


const isAdmin = () => {
  const user = store.getters['user/getUser'];
  return user && user.isAuthenticated === true && user.isAdmin === true;
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
      console.log('Guard de AdmListagem:', store.state.user);
      if (isAdmin()) {
        console.log('Permitido');
        next();
      } else {
        console.log('Redirecionando para LoginAdm');
        next({ name: 'LoginAdm' });
      }
    },
  },
  {
    path: '/AdmCategorias',
    name: 'AdmCategorias',
    component: CategoriasPost,
    beforeEnter: (to, from, next) => {
      console.log('Guard de AdmListagem:', store.state.user);
      if (isAdmin()) {
        console.log('Permitido');
        next();
      } else {
        console.log('Redirecionando para LoginAdm');
        next({ name: 'LoginAdm' });
      }
    },
  },
  {
    path: '/AdmListagem',
    name: 'AdmListagem',
    component: ListagemPost,
    beforeEnter: (to, from, next) => {
      console.log('Guard de AdmListagem:', store.state.user);
      if (isAdmin()) {
        console.log('Permitido');
        next();
      } else {
        console.log('Redirecionando para LoginAdm');
        next({ name: 'LoginAdm' });
      }
    },
  },
  {
    path: '/AdmPost',
    name: 'AdmPublicar',
    component: PublicarPost,
    beforeEnter: (to, from, next) => {
      console.log('Guard de AdmListagem:', store.state.user);
      if (isAdmin()) {
        console.log('Permitido');
        next();
      } else {
        console.log('Redirecionando para LoginAdm');
        next({ name: 'LoginAdm' });
      }
    },
  },
  {
    path: '/teste',
    name: 'teste',
    component: ProjetoView
  },

  {
    path: '/LoginAdm',
    name: 'LoginAdm',
    component: LoginAdmin,
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
