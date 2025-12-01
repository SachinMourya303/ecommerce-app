import toast from 'react-hot-toast';
import { setLoader } from '../state-management/slices/userData';
import axios from 'axios'

export const addToCartRequest = async (dispatch, navigate, product_image, product_name, price, quantity) => {
    dispatch(setLoader(true));
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/cart/products`, {  product_image, product_name, price, quantity });
        navigate('/cart');
        toast.success(response.data.message);
    } catch (error) {
        toast.error(error?.response?.data?.message);
    } finally {
        dispatch(setLoader(false));
    }
}