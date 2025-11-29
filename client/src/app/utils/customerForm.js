import axios from 'axios';
import toast from 'react-hot-toast';
import { setCustomerToken, setLoader } from '../state-management/slices/userData';

export const customerSignupRequest = async (dispatch, setCustomerData, navigate, name, email, password) => {
    dispatch(setLoader(true));
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/customer/signup`, { name, email, password });
        navigate('/account/type/customer/signin');
        toast.success(response.data.message);
        setCustomerData({
            fullname: "",
            email: "",
            password: ""
        })
    } catch (error) {
        toast.error(error?.response?.data?.message);
    } finally {
        dispatch(setLoader(false));
    }
}

export const customerSigninRequest = async (dispatch, navigate, email, password) => {
    dispatch(setLoader(true));
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/customer/signin`, { email, password });
        dispatch(setCustomerToken(response.data));
        navigate('/');
        toast.success(response.data.message);
    } catch (error) {
        toast.error(error?.response?.data?.message);
    } finally {
        dispatch(setLoader(false));
    }
}