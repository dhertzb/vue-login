import { Router } from "express";
import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";

const routes = Router();

routes.get("/", (_, res) => {
  return res.send("Hello123123r");
});

// Users

routes.post("/api/users", UserController.create);

// Auth

routes.post("/api/login", AuthController.login);

export default routes;
