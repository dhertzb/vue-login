import { Module } from "vuex";

const ui: Module<any, any> = {
  state: {
    isSidebarOpen: false,
  },
  getters: {
    isSidebarOpen() {
      return ui.state.isSidebarOpen;
    },
  },
  mutations: {
    TOGGLE_SIDEBAR: (state, value) => {
      state.isSidebarOpen = value;
    },
  },
  actions: {},
};

export default ui;
