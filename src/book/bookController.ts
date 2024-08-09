import { Request, Response, NextFunction } from "express";
import cloudinary from "../config/cloudinary";

const createBook = async (req: Request, res: Response, next: NextFunction) => {

    console.log("files", req.files);

    const uploadResult = await cloudinary.uploader.upload(filePath,)

    res.json({});
};

export {createBook};