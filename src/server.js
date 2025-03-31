import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

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

app.get("/", (req, res) => {
    console.log(mongo);    
  res.json("Hello World!");
});

app.listen(PORT, () => {
  initSchema();
  console.log(`Server is running at http://${HOST}:${PORT}`);
});

export default mongo;
