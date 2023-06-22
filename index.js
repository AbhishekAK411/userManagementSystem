import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/userRoutes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use("/api/user", router);

mongoose.connect('mongodb+srv://abhishek:Glorious%40Mongo41@atlascluster.htagarr.mongodb.net/userManagerDB?retryWrites=true&w=majority')
.then(() => console.log("DB Connection Established."))
.catch((err) => console.log("DB Error ==>", err));

app.listen(9000);

