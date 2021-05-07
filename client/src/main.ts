import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { bootstrap } from "./bootstrap/entry";
import "./styles/global.scss";

bootstrap();

declare module "vue/types/vue" {
  interface Vue {
    $services;
  }
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
