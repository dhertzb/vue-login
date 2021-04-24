import user from "../services/user";
import { IServices } from "../types/services";
import Vue from "vue";

const services: IServices = {
  user,
};

export function initializeServices() {
  Vue.prototype.$services = (service: string) => {
    return services[service];
  };
}
