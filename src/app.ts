
import express from "express";

import globalErrorHandler from "./middlewares/globalErrorHanlder";

const app = express();

// Routes

// Http methods: GET, POST, PUT, PATCH, DELETE

app.get("/", (req, res, next) => { 
    // throw new Error("something went wrong");
    const error = createHttpError(400, "something went wrong");
    throw error;
  res.json({ message: "Welcome to ebook apis" });
});

// Global error handler in last
app.use(globalErrorHandler);


export default app;
