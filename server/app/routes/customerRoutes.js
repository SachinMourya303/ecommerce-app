import express from 'express'
import { signInValidation, signUpValidation } from '../middleware/customerValidation.js';
import { signIn, signUp } from '../controllers/customerController.js';

const customerRoutes = express.Router();

customerRoutes.post('/signup', signUpValidation, signUp);
customerRoutes.post('/signin', signInValidation, signIn);

export default customerRoutes;