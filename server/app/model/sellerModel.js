import mongoose from "mongoose";


const sellerSchema = new mongoose.Schema({
    companyname: { type: String , required: true },
    sellername: { type: String , required: true },
    email: { type: String , unique: true , required: true },
    phone: { type: Number , required: true },
    address: { type: String , required: true },
    city: { type: String , required: true },
    state: { type: String , required: true },
    country: { type: String , required: true },
    pincode: { type: Number , required: true },
    password: { type: String , required: true },
}, {
    timestamps : true
});

const sellerModel = mongoose.models.sellermodel || mongoose.model('sellermodel' , sellerSchema);
export default sellerModel;