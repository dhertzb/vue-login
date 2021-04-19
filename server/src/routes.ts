import { Router} from 'express'
import UserController from './controllers/UserController'


const routes = Router();



routes.get('/', (_, res) =>{
    return res.send('Hello123123r')
})

// Users

routes.post('/api/users', UserController.create)

export default routes