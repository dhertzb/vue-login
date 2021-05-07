import axios from "axios";
import { IUserRegister } from "../types/services/user";

export default {
  create(user: IUserRegister): Promise<IUserRegister> {
    return axios.post(`http://localhost:3333/api/users`, user);
  },
};
