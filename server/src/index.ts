import express from "express";
import routes from "./routes";

const main = async () => {
  const app = express();
  const cors = require("cors");

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(routes);
  app.listen(3333, () => {
    console.log("App just initialize in localhost:3333");
  });
};

main();
