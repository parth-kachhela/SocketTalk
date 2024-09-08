import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRouter from "../server/routs/AuthRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const databaseurl = process.env.DATABASE_URL;

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(process.env.ORIGIN);
  //   console.log(databaseurl);
});

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(databaseurl, {});
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

connectDB();
