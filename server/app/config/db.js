import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/fashion-collection`);
        console.log('DB Connected');
    } catch (error) {
        console.error(error);
    }
}

export default ConnectDB;