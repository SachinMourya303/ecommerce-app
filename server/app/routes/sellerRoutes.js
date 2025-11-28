import express from 'express'
import { signInValidation, signUpValidation } from '../middleware/sellerValidation.js';
import { signIn, signUp } from '../controllers/sellerController.js';
import sellerModel from '../model/sellerModel.js';

const sellerRoutes = express.Router();

sellerRoutes.post('/signup', signUpValidation, signUp);
sellerRoutes.post('/signin', signInValidation, signIn);

sellerRoutes.get('/accounts', async (req, res) => {
  try {
    const allSellers = await sellerModel.find({});
    return res.status(200).json(allSellers);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
})

sellerRoutes.delete('/delete', async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ success: false, message: "Product ID is required" });
    }

    const deletedItem = await sellerModel.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({ success: true, message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default sellerRoutes;