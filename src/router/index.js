import { createRouter, createWebHashHistory } from 'vue-router'
import CardCadastrar from "../components/CardCadastrar.vue"
import CardLogin from "../components/CardLogin.vue"

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
