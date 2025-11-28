import express from 'express'
import { signInValidation, signUpValidation } from '../middleware/adminValidation.js';
import { signIn, signUp } from '../controllers/adminController.js';
import adminModel from '../model/adminModel.js';

const adminRoutes = express.Router();

adminRoutes.post('/signup', signUpValidation, signUp);
adminRoutes.post('/signin', signInValidation, signIn);

adminRoutes.get('/accounts', async (req, res) => {
  try {
    const allAdmin = await adminModel.find({});
    return res.status(200).json(allAdmin);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
})


export default adminRoutes;