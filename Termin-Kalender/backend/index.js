import dotenv from "dotenv";
dotenv.config();
import express from "express";

import terminRouter from "./routers/terminRouter.js";
import "./lib/mongoose.js";
import cors from "cors";


const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use("/termin", terminRouter);

app.listen(port, () => {
    console.log(port, "i am on running");
});
