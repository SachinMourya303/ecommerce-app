import express from 'express'
import { signInValidation, signUpValidation } from '../middleware/userValidation.js';
import { signIn, signUp } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/signup', signUpValidation, signUp);
userRoutes.post('/signin', signInValidation, signIn);

export default userRoutes;