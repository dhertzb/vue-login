import axios from "axios";
import { ILogin, IToken } from "../types/services/auth";

export default {
  login(user: ILogin): Promise<IToken> {
    return axios.post(`http://localhost:3333/api/login`, user);
  },
  logout() {},
};
