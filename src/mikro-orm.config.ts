import path from "path";
import { __prod__ } from "./constants";
import { Post } from './entities/posts'
import { MikroORM } from "@mikro-orm/core";

export default {
    migrations:{
        path: path.join(__dirname,  "./migrations") ,
        pattern: /^[\w-]+\d+\.[tj]s$/
    },
    entities: [Post],
    dbName: "virgo",
    debug: !__prod__,
    type: "postgresql",
    password: 'postgres'
  } as Parameters<typeof MikroORM.init>[0]