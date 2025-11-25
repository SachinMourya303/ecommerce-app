import axios from 'axios';
import { setUsers } from '../state-management/slices/userData';

export const customerSignupRequest = async (dispatch, setMessage, name, email, password) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/customer/signup`, { name, email, password });
        dispatch(setUsers(response.data));
    } catch (error) {
        setMessage(error.message);
    }
}