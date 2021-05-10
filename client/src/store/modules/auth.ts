import { Module } from "vuex";

const auth: Module<any, any> = {
  state: {
    isUserLogged: !!localStorage.getItem("AUTH_TOKEN"),
  },
  getters: {
    isUserLogged() {
      return auth.state.isUserLogged;
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      localStorage.setItem("AUTH_TOKEN", token);
    },
    LOG_USER: (state, value) => {
      state.isUserLogged = value;
    },
  },
  actions: {
    login: ({ commit }, token) => {
      commit("SET_TOKEN", token);
      commit("LOG_USER", true);
    },
  },
};

export default auth;
