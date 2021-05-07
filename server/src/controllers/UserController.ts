import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
var bcrypt = require("bcryptjs");

const prisma = new PrismaClient();
export default {
  create: async (req: Request, res: Response) => {
    const user = req.body;
    return await prisma.user
      .create({
        data:{
          firstName: user.firstName,
          lastName: user.lastName,
          password: bcrypt.hash(user.password, 8),
          email: user.email
        }
      })
      .then(() => {
        return res
          .status(200)
          .json({ message: "Usuário cadastrado com sucesso!" });
      })
      .catch((err) => {
        return res.status(409).json({ message: err });
      });
  }
}