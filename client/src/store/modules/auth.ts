import { Module } from "vuex";

const auth: Module<any, any> = {
  state: {
    isUserLogged: false,
  },
  getters:{
    isUserLogged(){
      return auth.state.isUserLogged
    }
  },
  mutations: {},
  actions: {},
};

export default auth;
