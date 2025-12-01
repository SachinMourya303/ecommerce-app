import toast from 'react-hot-toast';
import { setLoader } from '../state-management/slices/userData';
import axios from 'axios'
import { queryClient } from '../../main';

export const addToCartRequest = async (dispatch, customerToken, customer_email, product_image, product_name, price, quantity) => {
    dispatch(setLoader(true));
    try {
        if (customerToken) {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/cart/products`, { customer_email, product_image, product_name, price, quantity });
            toast.success(response.data.message);
            queryClient.invalidateQueries(['cart']);
        } else {
            toast.error("Login first");
        }
    } catch (error) {
        toast.error(error?.response?.data?.message);
    } finally {
        dispatch(setLoader(false));
    }
}

export const cartDelteRequest = async (dispatch, id) => {
    dispatch(setLoader(true));
    try {
        const response = await axios.delete(`${import.meta.env.VITE_SERVER_URI}/cart/delete`, { data: { id } });
        toast.success(response?.data?.message);
        queryClient.invalidateQueries(['cart']);
    } catch (error) {
        toast.error(error.response?.data?.message);
    }
    finally {
        dispatch(setLoader(false));
    }
}