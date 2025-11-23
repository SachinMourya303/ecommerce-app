import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import ConnectDB from './app/config/db.js';
import userRoutes from './app/routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

const LoadDB = async () => {
   await ConnectDB();
}
LoadDB();

app.use('/auth', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT , (req , res) => {
    console.log(`Server: http://localhost:${PORT}`);
});
