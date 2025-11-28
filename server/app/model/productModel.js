import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productImage: {
        image1: { type: String, required: true },
        image2: { type: String },
        image3: { type: String },
        image4: { type: String },
    },
    productDetails: {
        company_email: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: String, required: true },
        sold_by: { type: String, required: true },
        address: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        rating: { type: String, required: true },
        color: { type: String, required: true },
        valid: { type: Boolean, default: false }
    }
});

const productModel = mongoose.models.productModel || mongoose.model('productModel', productSchema);
export default productModel;