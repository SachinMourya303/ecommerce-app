import axios from 'axios';
import { setLoader, setSellersAccounts, setSellersToken } from '../state-management/slices/userData';
import toast from 'react-hot-toast';

export const sellerSignupRequest = async (setSellerData, companyname, sellername, email, phone, address, city, state, country, pincode, password) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/seller/signup`, { companyname, sellername, email, phone, address, city, state, country, pincode, password });
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

export const sellerSigninRequest = async (dispatch, navigate, email, password) => {
    dispatch(setLoader(true));
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/seller/signin`, { email, password });
        await dispatch(setSellersToken(response.data));
        toast.success(response.data.message);
        navigate('/account/seller/dashboard');
    } catch (error) {
        toast.error(error.response.data.message);
    }
    finally {
        dispatch(setLoader(false));
    }
}

export const getSellerAccounts = async (dispatch) => {
    dispatch(setLoader(true));
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URI}/seller/accounts`);
        dispatch(setSellersAccounts(response.data));
    } catch (error) {
        toast.error(error.response.data.message);
    }
    finally{
    dispatch(setLoader(false));
    }
}