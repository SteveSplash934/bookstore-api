import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import Logger from './middlewares/Logger';
import userRoutes from './routes/userRoutes';
import bookRoutes from './routes/bookRoutes';
import appRoutes from  './routes/appRoutes';
// import { fileURLToPath } from 'url';



// Environment variables setup
dotenv.config({ path: '.env' });
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = parseInt(process.env.PORT || '3000');

// Application setup
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'public');
// const __dirname = fileURLToPath
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use((req, res, next) => {
    Logger.log_client_request(req, res, next);
});
app.use('/user', userRoutes);
app.use('/api/v1', bookRoutes);
app.use('/app', appRoutes);
app.get('/', (req, res)=>{
res.redirect('/app');
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server URL:  http://${HOSTNAME}:${PORT}`);
});
