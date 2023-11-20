import { createStore } from 'vuex';

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
  // ... outras configurações do Vuex
});
