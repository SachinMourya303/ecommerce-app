import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    product_image : { type: String , required: true },
    product_name: { type: String , required: true },
    size: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, default: 1 },
}, {
    timestamps: true
});

const cartModel = mongoose.models.cartModel || mongoose.model('cartModel', cartSchema);
export default cartModel;