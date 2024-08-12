
import express from "express";
import cors from 'cors'
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";
import { config } from "./config/config";


const app = express();

app.use(cors({
  origin: config.frontendDomain,
}));
app.use(express.json());

// Routes

// Http methods: GET, POST, PUT, PATCH, DELETE

app.get("/", (req, res, next) => { 
  res.json({ message: "Welcome to ebook apis" });

});

app.use('/api/users',userRouter);
app.use('/api/books', bookRouter);


// Global error handler in last
app.use(globalErrorHandler);


export default app;
