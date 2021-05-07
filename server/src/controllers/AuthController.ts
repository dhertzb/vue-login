import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient();
export default {

  login: async (req: Request, res: Response) => {
    const user = req.body;
    const matchedUser =  await prisma.user
      .findUnique({
        where: {
          email: user.email
        }
      })
    if(matchedUser){
        return bcrypt.compare(
            user.password,
            matchedUser.password
        )
        .then((res)=>{
            return res.status(200).json({ token: jwt.sign({ id: matchedUser.id }, 'test', {
                    expiresIn: 86400 
                })
            })
        })
        .catch((err) => {
            return res.status(401).json({
                error: {
                    password: 'Invalid password'
                }
            })
        })
    }
    else{
        return res.status(401).json({
            error: {
                email:'Email not found'
            }
        })
    }
}
}