import { connect} from 'mongoose';

export async function startConnection(){
    await connect('mongodb://localhost/upload-files', {
        useNewUrlParser: true,
        useFindAndModify: false

    });
    console.log('Base de Datos Conectada');
}

