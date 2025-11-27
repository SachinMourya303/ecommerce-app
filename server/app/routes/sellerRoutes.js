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

export default sellerRoutes;