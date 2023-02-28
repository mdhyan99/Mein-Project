const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const Todo = require("./models/Todo"); // von Todo.js

require("dotenv").config(); // von .env

const app = express();

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5174/",
    })
);

// abfragen die Daten zurückgeben die nicht in der Datenbank vorhanden sind quasi fehlerauslösen
mongoose.set("strictQuery",true);

// verbindung zu unserer DB Datenbank herstellen
mongoose.connect(process.env.MONGO_URL,console.log("MongoDB verbunden!"))


app.listen("4000", () => {
    console.log("server ist gestartet");
});