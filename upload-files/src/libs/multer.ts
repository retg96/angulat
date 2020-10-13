import multer from 'multer';
import { v4 as uuidv4} from "uuid";
import path from 'path';

//modulo encargado de subir las imagenes al navegador
const storage = multer.diskStorage({
    destination: 'uploads',  //lugar donde se guardan los archivos
    filename: (req, file, cb) => {
        cb(null, uuidv4() +  path.extname(file.originalname));
    }
});


export default multer({storage});
