import toast from 'react-hot-toast';
import { setLoader } from '../state-management/slices/userData';
// import { queryClient } from '../../main';

export const addToCartRequest = async (dispatch, product_image, product_name, customer_name, customer_email, customer_phone, store, size, price, quantity, address, payment, status, country, state, city, pincode) => {
    dispatch(setLoader(true));
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/customer/cart`, { product_image, product_name, customer_name, customer_email, customer_phone, store, size, price, quantity, address, payment, status, country, state, city, pincode });
        navigate('/myorders');
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