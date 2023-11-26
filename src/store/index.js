import { createStore } from 'vuex';
import userModule from './user';

export default createStore({
  state: {
    user: null,
    isAdmin: false,
  },
  mutations: {
    setAdminStatus(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
  },
  getters: {
    isAdmin: state => state.isAdmin,
  },
  modules: {
    user: userModule,
  },
});
