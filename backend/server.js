
import express from 'express';
import cors from  "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(postRoutes);
app.use(express.static("uploads"));

 const start = async()=>{
    const connectDB = await mongoose.connect("mongodb+srv://vishalhackcom:suhashinivishal9648@careersync.rnhss.mongodb.net/?retryWrites=true&w=majority&appName=CareerSync");
    app.listen(8080,()=>{
        console.log("server is running  on  port 8080");
    })
 }
 start();