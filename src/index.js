import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Connection } from '../config/DB.js';
import { router } from '../routes/Route.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
Connection();

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
