import express from "express";
import productModel from "../model/productModel.js";
import upload from "../middleware/multer.js";

const productRoutes = express.Router();

productRoutes.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const { name, price, sold_by, address, description, category, rating, color , valid } = req.body;

      if (!req.files.image1) {
        return res.status(400).json({
          success: false,
          message: "image1 is required"
        });
      }

      const image1 = req.files.image1?.[0].path;
      const image2 = req.files.image2?.[0]?.path || null;
      const image3 = req.files.image3?.[0]?.path || null;
      const image4 = req.files.image4?.[0]?.path || null;

      const product = new productModel({
        productImage: { image1, image2, image3, image4 },
        productDetails: { name, price, sold_by, address, description, category, rating, color , valid }
      });

      await product.save();

      res.status(200).json({
        success: true,
        message: "Product added",
        product
      });

    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

productRoutes.get('/get/all', async (req, res) => {
  try {
    const allProducts = await productModel.find({});
    return res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
})

export default productRoutes;
