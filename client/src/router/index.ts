import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isUserLogged = store.getters.isUserLogged;
  if (to.meta.requiresAuth && !isUserLogged) {
    router.push({ name: "Login" });
  } else if (!to.meta.requiresAuth && isUserLogged) {
    router.push({ name: "Login" });
  } else {
    next();
  }
});

export default router;
