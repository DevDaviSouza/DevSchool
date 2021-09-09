import db from './db.js'
import { Express } from "express";
import { Cors } from "cors";

const app = Express();
app.use(Cors());
app.use((express.json()))






app.listen(process.env.PORT,
    x => console.log(`Server up at port ${process.env.PORT}`))