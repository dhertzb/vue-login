import { PrismaClient } from '@prisma/client'
import express from 'express'
import routes from './routes'

const prisma = new PrismaClient()

const main = async () => {

    const app = express();
    await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io'
      }
    })
  
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)

    app.use(routes)

    app.listen(3333, () =>{
        console.log(3)
    })
};

main()
.catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })