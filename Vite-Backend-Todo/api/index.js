const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const Todo = require("./models/Todo"); // von Todo.js

require("dotenv").config(); // von .env

const app = express();

app.use(express.json());

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5174",
    })
);

// abfragen die Daten zurückgeben die nicht in der Datenbank vorhanden sind quasi fehlerauslösen
mongoose.set("strictQuery", true);

// verbindung zu unserer DB Datenbank herstellen
mongoose.connect(process.env.MONGO_URL, console.log("MongoDB verbunden!"));

app.get("/todos", async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.json(todos);
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, err: err?.message });
    }
});
app.post("/todos", async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const todoDoc = await Todo.create({
            title,
            description,
            status,
        });
        res.status(200).json(todoDoc);
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, err: err?.message });
    }
});

// app.delete("/todos/:id", async(req,res)=>{
//     try{
//         const todoDelete =await Todo.findByIdAndDelete(req.params.id)
//     res.json(todoDelete)

//     }catch (err){
//         console.error(err)
//         res.status(500).json({ status: false, err: err?.message });

//     }

// })
app.delete("/todos/:id", async (req, res) => {
    try {
        const todoDelete = await Todo.findByIdAndDelete(req.params.id);

        if (!todoDelete) {
            res.status(404).json({
                status: false,
                message: "Diese Aufgabe wurde nicht gefunden",
            });
        }
        res.status(200).json({
            status: true,
            message: "Aufgabe erfolgreich gelöcht",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, err: err?.message });
    }
});

app.get("/todos/:id", async (req, res) => { // von TodoDetailPage
    try {
        const todo = await Todo.findById(req.params.id); // für id suchen

        if (!todo) {
            res.status(404).json({
                status: false,
                message: "Diese Aufgabe wurde nicht gefunden",
            });
        }
        res.status(200).json(todo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, err: err?.message });
    }
});

app.put("/todos/:id", async (req, res) => { // von EditForm
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true}); // wir veränderen (todo) title ,description,status 
        if (!todo) {
            res.status(404).json({
                status: false,
                message: "Diese Aufgabe wurde nicht gefunden",
            });
        }
        res.status(200).json({status:true,todo});
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, err: err?.message });
    }
});
app.listen("4000", () => {
    console.log("server ist gestartet");
});
