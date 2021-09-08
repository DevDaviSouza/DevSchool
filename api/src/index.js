import db from './db.js'
import { Express } from "express";
import { Cors } from "cors";

const app = Express();
app.use(Cors());
