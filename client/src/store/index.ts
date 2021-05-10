import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import ui from "./modules/ui";
import auth from "./modules/auth";
const modules = {
  user,
  auth,
  ui,
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
});
