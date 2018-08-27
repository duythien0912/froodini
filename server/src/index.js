import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import bluebird from "bluebird";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import fileUpload from "express-fileupload";

import eventRoutes from "./routes/eventRoutes";
import itemRoutes from "./routes/itemRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import foodRoutes from "./routes/foodRoutes";
import sendMailRoutes from "./routes/sendMailRoutes";
import uploadImageRoutes from "./routes/uploadImageRoutes";
import languagesRoutes from "./routes/languagesRoutes";

import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();
const HOST = process.env.PORT || 8080;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use(compression());

app.use(express.static(path.join(__dirname, "/client")));
app.use("/api/image", express.static("public"));

mongoose.Promise = bluebird;
mongoose.connect(process.env.MONGODB_URL);
console.log(`connect ${process.env.MONGODB_URL} success`);

app.use("/api/upload", uploadImageRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/item", itemRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/sendmail", sendMailRoutes);
app.use("/api/languages", languagesRoutes);
app.use("/api/user", userRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/index.html"));
});

app.listen(HOST, () => console.log(`running in : ${HOST}`));
