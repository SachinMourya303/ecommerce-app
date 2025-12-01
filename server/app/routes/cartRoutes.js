import express from 'express';
import cartModel from '../model/cartModel.js';

const cartRoutes = express.Router();

cartRoutes.post('/products', async (req, res) => {
    try {
        const { product_image, product_name, price, quantity } = req.body;

        const order = new cartModel({
            product_image, product_name, price, quantity
        });

        await order.save();

        return res.status(200).json({ success: true, message: "Added to cart" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

cartRoutes.get('/products', async (req, res) => {
  try {
    const cartProducts = await cartModel.find({});
    return res.status(200).json(cartProducts);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
})


cartRoutes.delete('/delete', async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ success: false, message: "Cart ID is required" });
        }

        const deletedItem = await cartModel.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ success: false, message: "Cart not found" });
        }

        return res.status(200).json({ success: true, message: "Cart deleted successfully" });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default cartRoutes;
