import express from "express";
import { createBook } from "./bookController";

const bookRouter = express.Router();


// route
bookRouter.post("/", createBook);

export default bookRouter;