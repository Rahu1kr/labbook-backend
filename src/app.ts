import express from 'express'

const app = express();

// Routes

// Http methods: GET, POST, PUT, PATCH, DELETE

app.get("/", (req, res) => {
    res.json({message: "Welcome to ebook apis"});
});

export default app;
