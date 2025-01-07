import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
// import mongoose from 'mongoose';
import Logger from './middlewares/Logger.js';
import userRoutes from './routes/userRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';
import bookRoutes from './routes/bookRoutes.js';
import defaultAppUIRoutes from './routes/defaultAppUIRoutes.js';

const __filename : string = fileURLToPath(import.meta.url);
const __dirname : string = path.dirname(__filename);



// Application setup
dotenv.config({ path: '.env' });
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware setup
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const HOSTNAME : string = process.env.HOSTNAME || 'localhost';
const PORT : number = parseInt(process.env.PORT || '3000');

// Logger middleware
app.use((req, res, next) => {
    Logger.log_client_request(req, res, next);
  });

// Routes
app.use('/user', userRoutes);
app.use('/api/v1', bookRoutes);
app.use('/app', defaultAppUIRoutes);

app.get('/', (req, res) => {
  res.redirect('/app');
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server URL:  http://${HOSTNAME}:${PORT}`);
});
