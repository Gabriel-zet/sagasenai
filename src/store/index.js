// store/index.js
import { createStore } from 'vuex';
import userModule from './user';

export default createStore({
  state: {
    user: {
      isAdmin: false,
    },
  },
  mutations: {
    setAdminStatus(state, isAdmin) {
      state.user.isAdmin = isAdmin;
    },
  },
  getters: {
    isAdmin: state => state.user.isAdmin,
  },
  modules: {
    user: userModule,
  },
});
