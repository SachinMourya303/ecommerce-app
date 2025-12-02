import toast from 'react-hot-toast';
import { setLoader } from '../state-management/slices/userData';
import axios from 'axios'
import { queryClient } from '../../main';

export const placeOrderRequest = async (dispatch, navigate, customer_name, customer_email, customer_phone, address, landmark, payment, status, country, state, city, pincode, products) => {
    dispatch(setLoader(true));
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/orders/products`, { customer_name, customer_email, customer_phone, address, landmark, payment, status, country, state, city, pincode, products });
        toast.success(response.data.message);
        await axios.post(`${import.meta.env.VITE_SERVER_URI}/cart/delete-all`, { customer_email });
        queryClient.invalidateQueries(['orders']);
        navigate('/myorders');
    } catch (error) {
        toast.error(error?.response?.data?.message);
    } finally {
        dispatch(setLoader(false));
    }
}

export const orderDelteRequest = async (dispatch, id) => {
    dispatch(setLoader(true));
    try {
        const response = await axios.delete(`${import.meta.env.VITE_SERVER_URI}/orders/delete`, { data: { id } });
        toast.success(response?.data?.message);
        queryClient.invalidateQueries(['orders']);
    } catch (error) {
        toast.error(error.response?.data?.message);
    }
    finally {
        dispatch(setLoader(false));
    }
}