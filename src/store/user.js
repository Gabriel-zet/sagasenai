// store/user.js
export default {
    state: {
      user: null,
    },
    mutations: {
      setUser(state, user) {
        state.user = user;
      },
    },
    actions: {

    },
    getters: {
      getUser: (state) => state.user,
    },
  };
  