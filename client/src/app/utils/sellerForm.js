import axios from 'axios';
import { setLoader, setSellersToken } from '../state-management/slices/userData';
import toast from 'react-hot-toast';
import { queryClient } from '../../main';

export const sellerSignupRequest = async (setSellerData, navigate, dispatch, companyname, sellername, email, phone, address, city, state, country, pincode, password) => {
    dispatch(setLoader(true));
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/seller/signup`, { companyname, sellername, email, phone, address, city, state, country, pincode, password });
        toast.success(response.data.message);
        navigate('/account/type/seller/signin');
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
    } finally {
        dispatch(setLoader(false));
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

export const sellerDelteRequest = async (dispatch, id) => {
  dispatch(setLoader(true));
  try {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_URI}/seller/delete`, { data: { id } });
    toast.success(response?.data?.message);
    queryClient.invalidateQueries(['sellers']);
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
  finally {
    dispatch(setLoader(false));
  }
}