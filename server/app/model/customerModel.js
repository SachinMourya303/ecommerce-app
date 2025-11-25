import mongoose from "mongoose";


const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true
})

const customerModel = mongoose.models.customerModel || mongoose.model('customerModel', customerSchema);
export default customerModel; 