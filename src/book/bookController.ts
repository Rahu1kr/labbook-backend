import { Request, Response, NextFunction } from "express";
import cloudinary from "../config/cloudinary";
import path from "node:path";
import createHttpError from "http-errors";
import fs from 'node:fs'
import bookModel from "./bookModel";

const createBook = async (req: Request, res: Response, next: NextFunction) => {

    const { title, genre } = req.body;
    console.log("files", req.files);
    const files = req.files as { [fileName: string]: Express.Multer.File[] };
    const coverImageMineType = files.coverImage[0].mimetype.split('/').at(-1);
    const fileName = files.coverImage[0].filename;
    const filePath = path.resolve(__dirname, '../../public/data/uploads', fileName)


    try {
        const uploadResult = await cloudinary.uploader.upload(filePath,{
            filename_override: fileName,
            folder: 'book-covers',
            format: coverImageMineType,
        })
    
        const bookFileName = files.file[0].filename;
        const bookFilePath = path.resolve(
            __dirname,
            "../../public/data/uploads",
            bookFileName
        );
    
        const bookFileUploadResult = await cloudinary.uploader.upload(bookFilePath,{
            resourse_type: 'raw',
            filename_override: bookFileName,
            folder: "book-pdfs",
            format: "pdf",
        });
    
        console.log("bookFileUploadResult", bookFileUploadResult);
    
        console.log("uploadResult", uploadResult);

        const newBook = await bookModel.create({
            title,
            genre,
            author: "66b710a275235f74c0d2482d",
            coverImage: uploadResult.secure_url,
            file: bookFileUploadResult.secure_url,
        });


        // try {
        //     await fs.promises.unlink(filePath);
        //     await fs.promises.unlink(bookFilePath);
        // } catch (err) {
        //     console.log(err);
        // }
        // Delete temp files

        await fs.promises.unlink(filePath);
        await fs.promises.unlink(bookFilePath);
        

        res.status(201).json({id: newBook._id});
    } catch (error) {
        console.log(error);
        return next(createHttpError(500, "Error while uploading the files"));
    }

    
};

export {createBook};