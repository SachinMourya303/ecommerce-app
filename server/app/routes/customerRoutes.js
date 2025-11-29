import express from 'express'
import { signInValidation, signUpValidation } from '../middleware/customerValidation.js';
import { signIn, signUp } from '../controllers/customerController.js';
import customerModel from '../model/customerModel.js';

const customerRoutes = express.Router();

customerRoutes.post('/signup', signUpValidation, signUp);
customerRoutes.post('/signin', signInValidation, signIn);

customerRoutes.get('/accounts', async (req, res) => {
    try {
        const allCustomers = await customerModel.find({});
        return res.status(200).json(allCustomers);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

export default customerRoutes;