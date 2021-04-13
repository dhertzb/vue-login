import { Router} from 'express'
import UserController from './controllers/UserController'


const routes = Router();



routes.get('/', (_, res) =>{
    return res.send('Hello123123r')
})


routes.get('/', UserController.index)


export default routes