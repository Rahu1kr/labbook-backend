
import express from "express";

import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";


const app = express();
app.use(express.json());

// Routes

// Http methods: GET, POST, PUT, PATCH, DELETE

app.get("/", (req, res, next) => { 
  res.json({ message: "Welcome to ebook apis" });

});

app.use('/api/users',userRouter);



// Global error handler in last
app.use(globalErrorHandler);


export default app;
