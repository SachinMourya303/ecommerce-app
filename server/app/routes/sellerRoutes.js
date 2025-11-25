import express from 'express'
import { signInValidation, signUpValidation } from '../middleware/sellerValidation.js';
import { signIn, signUp } from '../controllers/sellerController.js';

const sellerRoutes = express.Router();

sellerRoutes.post('/signup', signUpValidation, signUp);
sellerRoutes.post('/signin', signInValidation, signIn);

export default sellerRoutes;