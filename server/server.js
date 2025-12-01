import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import ConnectDB from './app/config/db.js';
import sellerRoutes from './app/routes/sellerRoutes.js';
import productRoutes from './app/routes/productRoutes.js';
import adminRoutes from './app/routes/adminRoutes.js';
import customerRoutes from './app/routes/customerRoutes.js';
import cartRoutes from './app/routes/cartRoutes.js';
import ordersRoutes from './app/routes/ordersRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

const LoadDB = async () => {
   await ConnectDB();
}
LoadDB();

app.use('/customer', customerRoutes);
app.use('/seller' , sellerRoutes);
app.use('/admin' , adminRoutes);
app.use('/product' , productRoutes);
app.use('/cart' , cartRoutes);
app.use('/orders' , ordersRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT , (req , res) => {
    console.log(`Server: http://localhost:${PORT}`);
});
