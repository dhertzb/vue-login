import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from './mikro-orm.config'
import express from 'express'
const main = async () => {
    const orm = await MikroORM.init(microConfig)
    await orm.getMigrator().up()
    
    const app = express();
    app.get('/', (_, req)=>{
        req.send('cu')  
    })
    app.listen(5023, ()=>{
        console.log(1231)
    })
};

main();