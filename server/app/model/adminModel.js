import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true
})

const adminModel = mongoose.models.adminModel || mongoose.model('adminModel', adminSchema);
export default adminModel; 