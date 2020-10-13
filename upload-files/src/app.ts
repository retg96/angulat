import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

const app = express();
import indexRoutes from './routes/index'

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes
//para poder usar la api
app.use('/api', indexRoutes);


app.use('/uploads', express.static(path.resolve('uploads')));

export default app;