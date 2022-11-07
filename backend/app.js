import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);


const port = process.env.PORT || 5000;
mongoose
  .connect(
    process.env.URI
  )
  .then(() => app.listen(port))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
