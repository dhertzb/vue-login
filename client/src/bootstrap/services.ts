import user from "../services/user";
import auth from "../services/auth";
import Vue from "vue";

const services = {
  user,
  auth,
};

export function initializeServices(): void {
  Vue.prototype.$services = (service: string): void => {
    return services[service];
  };
}
