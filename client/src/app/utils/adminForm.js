import { setAdminToken, setLoader } from '../state-management/slices/userData';
import toast from 'react-hot-toast'
import axios from 'axios'
import { queryClient } from '../../main';

export const adminSigninRequest = async (dispatch, navigate, email, password) => {
    dispatch(setLoader(true));
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/admin/signin`, { email, password });
        await dispatch(setAdminToken(response.data));
        toast.success(response.data.message);
        navigate('/account/admin/dashboard');
    } catch (error) {
        toast.error(error.response.data.message);
    }
    finally {
        dispatch(setLoader(false));
    }
}

export const adminDelteRequest = async (dispatch, id) => {
  dispatch(setLoader(true));
  try {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_URI}/admin/delete`, { data: { id } });
    toast.success(response?.data?.message);
    queryClient.invalidateQueries(['admin']);
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
  finally {
    dispatch(setLoader(false));
  }
}