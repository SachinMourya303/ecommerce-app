import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    product_image : { type: String , required: true },
    product_name: { type: String , required: true },
    customer_name: { type: String , required: true },
    customer_email: { type: String , required: true },
    customer_phone: { type: Number , required: true },
    store: { type: String , required: true },
    size: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    address: { type: String, required: true },
    payment: { type: String, required: true },
    status: { type: String, default: "pending", required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
}, {
    timestamps: true
});

const cartModel = mongoose.models.cartModel || mongoose.model('cartModel', cartSchema);
export default cartModel;