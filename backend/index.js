import express from "express";
import cors from "cors";
import db from "./db/db.js";
import animal from "./routes/animal.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/animal", animal);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port:" + process.env.PORT)
);

db.dbConnectionPetsVet();