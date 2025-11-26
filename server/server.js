import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import ConnectDB from './app/config/db.js';
import userRoutes from './app/routes/customerRoutes.js';
import sellerRoutes from './app/routes/sellerRoutes.js';
import productRoutes from './app/routes/productRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

const LoadDB = async () => {
   await ConnectDB();
}
LoadDB();

app.use('/customer', userRoutes);
app.use('/seller' , sellerRoutes);
app.use('/product' , productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT , (req , res) => {
    console.log(`Server: http://localhost:${PORT}`);
});
