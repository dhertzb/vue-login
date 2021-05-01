import axios from "axios";
import { IUser } from "../types/user";

export default {
  create(user: IUser): Promise<IUser> {
    return axios.post(`http://localhost:3333/api/users`, {
      data: user,
    });
  },
};
