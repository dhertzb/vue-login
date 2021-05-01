import user from "../services/user";
import Vue from "vue";

const services = {
  user,
};

export function initializeServices(): void {
  Vue.prototype.$services = (service: string) => {
    return services[service];
  };
}
