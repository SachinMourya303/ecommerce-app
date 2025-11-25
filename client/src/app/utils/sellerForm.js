import axios from 'axios';
import { setUsers } from '../state-management/slices/userData';
import toast from 'react-hot-toast';

export const sellerSignupRequest = async (dispatch, setSellerData, companyname, sellername, email, phone, address, city, state, country, pincode, password) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/seller/signup`, { companyname, sellername, email, phone, address, city, state, country, pincode, password });
        dispatch(setUsers(response.data));
        toast.success(response.data.message);
        setSellerData({
            companyname: "",
            sellername: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
            password: "",
        });
    } catch (error) {
        toast.error(error.response.data.message);
    }
}

export const sellerSigninRequest = async (navigate , email, password) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/seller/signin`, { email, password });
        toast.success(response.data.message);
        navigate('/seller/dashboard');
    } catch (error) {
        toast.error(error.response.data.message);
    }
}