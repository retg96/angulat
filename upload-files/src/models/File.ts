import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    title: String,
    description: String,
    nombre: String,
    archivoPath: String
});

export interface IFile extends Document{
    title: string;
    description: string;
    nombre: string;
    archivoPath: string;
}

export default model<IFile>('File', schema);