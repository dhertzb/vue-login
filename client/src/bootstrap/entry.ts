import { initializeAxios } from "./axios";
import { initializeServices } from "./services";

export function bootstrap() {
  initializeAxios();
  initializeServices();
}
