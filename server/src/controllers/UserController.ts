import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default {
  create: async (req: Request, res: Response) => {
    const data = req.body.data;
    return await prisma.user
      .create({
        data,
      })
      .then(() => {
        return res
          .status(200)
          .json({ message: "Usuário cadastrado com sucesso!" });
      })
      .catch((err) => {
        return res.status(409).json({ message: err });
      });
  },
  login: async (req: Request, res: Response) => {},
};
