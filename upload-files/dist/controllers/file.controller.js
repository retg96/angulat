"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFile = exports.deleteFile = exports.createFiles = exports.getFile = exports.getFiles = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const File_1 = __importDefault(require("../models/File"));
async function getFiles(req, res) {
    const files = await File_1.default.find();
    return res.json(files);
}
exports.getFiles = getFiles;
;
async function getFile(req, res) {
    const { id } = req.params;
    const file = await File_1.default.findById(id);
    return res.json(file);
}
exports.getFile = getFile;
async function createFiles(req, res) {
    const { title, description, nombre } = req.body;
    const newFile = { title, description, nombre, archivoPath: req.file.path };
    const file = new File_1.default(newFile);
    await file.save();
    return res.json({
        message: 'file upload',
        file
    });
}
exports.createFiles = createFiles;
;
async function deleteFile(req, res) {
    const { id } = req.params;
    const file = await File_1.default.findByIdAndRemove(id);
    if (file) {
        await fs_extra_1.default.unlink(path_1.default.resolve(file.archivoPath));
    }
    return res.json({ message: 'eliminado' });
}
exports.deleteFile = deleteFile;
;
async function updateFile(req, res) {
    const { id } = req.params;
    const { title, description, nombre } = req.body;
    const updateFile = await File_1.default.findByIdAndUpdate(id, {
        title,
        description,
        nombre
    }, { new: true });
    return res.json({
        message: 'exitoso',
        updateFile
    });
}
exports.updateFile = updateFile;
