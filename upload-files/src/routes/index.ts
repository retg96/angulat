import { Router } from 'express';
const router = Router();

import {createFiles, getFiles, getFile, deleteFile, updateFile} from '../controllers/file.controller'

import multer from '../libs/multer'

router.route('/files')
    .get(getFiles)
    .post(multer.single('archivo'),createFiles)
    
 
router.route('/files/:id')
    .get(getFile)
    .delete(deleteFile)
    .put(updateFile)

export default router;

