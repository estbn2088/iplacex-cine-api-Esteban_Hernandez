import { MongoClient, ServerApiVersion } from "mongodb";
import dns from "node:dns";

dns.setServers(["8.8.8.8"]);

const uri = 'mongodb+srv://estebanhernandezh_db_user:AEY01IBPKveERByx@eva-u3-express.ifwxn4l.mongodb.net/?appName=eva-u3-express'

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export default client