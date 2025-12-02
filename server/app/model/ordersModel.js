import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    customer_name: { type: String, required: true },
    customer_email: { type: String, required: true },
    customer_phone: { type: Number, required: true },
    address: { type: String, required: true },
    landmark: { type: String },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    payment: { type: String, required: true },
    status: { type: String, default: "pending" },
    products: [
        {
            product_image: String,
            product_name: String,
            price: String,
            quantity: Number,
            size: String,
            store: String
        }
    ]
}, { timestamps: true });

export default mongoose.models.ordersModel || mongoose.model("ordersModel", orderSchema);
