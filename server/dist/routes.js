"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const routes = express_1.Router();
routes.get('/', (_, res) => {
    return res.send('Hello123123r');
});
routes.get('/', UserController_1.default.index);
exports.default = routes;
//# sourceMappingURL=routes.js.map