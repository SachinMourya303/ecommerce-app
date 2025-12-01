import express from 'express';
import cartModel from '../model/cartModel.js';

const cartRoutes = express.Router();

cartRoutes.post('/products', async (req, res) => {
    try {
        const { product_image, product_name, size, price, quantity } = req.body;

        const order = new cartModel({
            product_image, product_name, size, price, quantity
        });

        await order.save();

        return res.status(200).json({ success: true, message: "Added to cart" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

cartRoutes.get('/products', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: "Customers emial is required" });
        }
        const customerOrders = await cartModel.find({ email });
        return res.status(200).json(customerOrders);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

cartRoutes.delete('/delete', async (req, res) => {
    try {
        const { email } = req.body;

        if (!id) {
            return res.status(400).json({ success: false, message: "Cart ID is required" });
        }

        const deletedItem = await cartModel.findByIdAndDelete(email);

        if (!deletedItem) {
            return res.status(404).json({ success: false, message: "Cart not found" });
        }

        return res.status(200).json({ success: true, message: "Cart deleted successfully" });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default cartRoutes;
