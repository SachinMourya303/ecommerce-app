import axios from 'axios';
import { setLoader } from '../state-management/slices/userData';
import toast from 'react-hot-toast';

export const productPostRequest = async (setProductData, dispatch, productData) => {
  try {
    dispatch(setLoader(true));

    const formData = new FormData();
    formData.append("image1", productData.image1);
    formData.append("image2", productData.image2);
    formData.append("image3", productData.image3);
    formData.append("image4", productData.image4);

    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("sold_by", productData.sold_by);
    formData.append("address", productData.address);
    formData.append("description", productData.description);
    formData.append("category", productData.category);
    formData.append("rating", productData.rating);
    formData.append("color", productData.color);

    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URI}/product/add`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    toast.success(response.data.message);

    setProductData({
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      name: "",
      price: "",
      sold_by: "",
      address: "",
      description: "",
      category: "",
      rating: "",
      color: ""
    });

  } catch (error) {
    toast.error(error.response?.data?.message || "Upload failed");
  } finally {
    dispatch(setLoader(false));
  }
};
