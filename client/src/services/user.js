import axios from "axios";
import { IUser } from "../types/user";

export default {
  create(user: IUser) {
    return axios.post(`/api/users`, {
      data: user,
    });
  },
};
