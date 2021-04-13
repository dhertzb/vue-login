
import express from 'express'
import routes from './routes'
const main = async () => {

    const app = express();
    
    app.use(routes)

    app.listen(3333, () =>{
        console.log(3)
    })
};

main()