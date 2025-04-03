import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {PrismaClient} from '../prisma/client/index.js';
import session from 'express-session';
import router from "./routes.js";

const app = express();
const mongo = mongoose.connect(process.env.MONGO_URI);

const initSchema = () => {
  const rankSchema = new mongoose.Schema({
    name: String,
    xpCost: Number,
    icon: String,
  });

  const Rank = mongoose.model("Rank", rankSchema);

  return Rank;
}

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.use(express.json());
app.use(session({ 
    secret: process.env.TOKEN, 
    resave: false, saveUninitialized: true 
}));

app.use('/', router);

app.listen(PORT, () => {
  initSchema();
  console.log(`Server is running at http://${HOST}:${PORT}`);
});

export default mongo;

export const prisma = new PrismaClient();