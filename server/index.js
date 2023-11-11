//const express = require('express')
//const cors = require('cors')
import express from "express";
import cors from 'cors';
import generate from "./generate.js";


const app = express();

app.use(express.json())


app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Hello World from our API")
})

app.post("/generate", async (req, res) => {
    const queryDesc = req.body.queryDesc;

    try {
        const sqlQuery = await generate(queryDesc);
        res.json({ response: sqlQuery })
    } catch (error) {
        console.error(error)
        res.json({ response: "Im still poor :(, no credits." })
    }

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})