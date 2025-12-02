import express from 'express';
import ordersModel from '../model/ordersModel.js';

const ordersRoutes = express.Router();

ordersRoutes.post('/products', async (req, res) => {
    try {
        const { customer_name, customer_email, customer_phone, address, landmark, payment, status, country, state, city, pincode, products } = req.body;

        const order = new ordersModel({
            customer_name, customer_email, customer_phone, address, landmark, payment, status, country, state, city, pincode, products
        });

        await order.save();

        return res.status(200).json({ success: true, message: "Order placed successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

ordersRoutes.get('/products', async (req, res) => {
    try {
        const orders = await ordersModel.find({});
        return res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

ordersRoutes.delete('/delete', async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ success: false, message: "Order ID is required" });
        }

        const deletedItem = await ordersModel.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        return res.status(200).json({ success: true, message: "Order deleted successfully" });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default ordersRoutes;