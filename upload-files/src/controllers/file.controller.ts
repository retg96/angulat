import {Request, Response} from 'express';
import path from "path"
import fs from "fs-extra"

import  File, { IFile }  from "../models/File";

export async function getFiles(req: Request, res: Response): Promise<Response> {
    const files = await File.find();
    return res.json(files);

};

export async function getFile(req: Request, res: Response): Promise<Response> {
    
    const {id} = req.params;
    const file = await File.findById(id);
    return res.json(file);
}

export async function createFiles(req: Request, res: Response): Promise<Response>{
    const { title, description, nombre } = req.body;
    const newFile = { title,description,nombre, archivoPath: req.file.path};
    const file = new File(newFile);
    await file.save();
    return res.json({
        message: 'file upload',
        file
    });
};

export async function deleteFile (req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const file = await File.findByIdAndRemove(id) as IFile;
    if (file){
        await fs.unlink(path.resolve(file.archivoPath))
    }
    return res.json({ message: 'eliminado'});
        
};

export async function updateFile(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const {title, description, nombre } = req.body;
    const updateFile = await File.findByIdAndUpdate(id, {
        title,
        description,
        nombre
    }, {new: true });
    return res.json({
        message: 'exitoso',
        updateFile
    });
}
