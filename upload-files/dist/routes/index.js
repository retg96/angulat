"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const file_controller_1 = require("../controllers/file.controller");
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/files')
    .get(file_controller_1.getFiles)
    .post(multer_1.default.single('archivo'), file_controller_1.createFiles);
router.route('/files/:id')
    .get(file_controller_1.getFile)
    .delete(file_controller_1.deleteFile)
    .put(file_controller_1.updateFile);
exports.default = router;
