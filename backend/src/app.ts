import "dotenv/config";
import express from "express";
import Notemodel from "./models/note"

const app = express();

app.get("/", async (req, res) => {
  const notes = await Notemodel.find().exec();
  res.status(200).json(notes);
});

export default app;