import express from 'express';
import ordersModel from '../model/ordersModel.js';

const ordersRoutes = express.Router();

ordersRoutes.post('/products', async (req, res) => {
    try {
        const { product_image, product_name, customer_name, customer_email, customer_phone, store, size, price, quantity, address, payment, status, country, state, city, pincode } = req.body;

        const order = new ordersModel({
            product_image, product_name, customer_name, customer_email, customer_phone, store, size, price, quantity, address, payment, status, country, state, city, pincode
        });

        await order.save();

        return res.status(200).json({ success: true, message: "Added to orders" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

ordersRoutes.get('/products', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: "Order emial is required" });
        }
        const customerOrders = await ordersModel.find({ email });
        return res.status(200).json(customerOrders);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

ordersRoutes.delete('/delete', async (req, res) => {
    try {
        const { email } = req.body;

        if (!id) {
            return res.status(400).json({ success: false, message: "Order ID is required" });
        }

        const deletedItem = await ordersModel.findByIdAndDelete(email);

        if (!deletedItem) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        return res.status(200).json({ success: true, message: "Order deleted successfully" });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default ordersRoutes;