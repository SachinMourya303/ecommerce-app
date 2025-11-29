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

adminRoutes.delete('/delete', async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ success: false, message: "Admin ID is required" });
    }

    const deletedItem = await adminModel.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    return res.status(200).json({ success: true, message: "Admin deleted successfully" });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default adminRoutes;