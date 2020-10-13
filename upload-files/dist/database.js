"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
async function startConnection() {
    await mongoose_1.connect('mongodb://localhost/upload-files', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Base de Datos Conectada');
}
exports.startConnection = startConnection;
