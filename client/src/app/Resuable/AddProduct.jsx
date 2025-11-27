import React, { useState } from 'react'
import Upload_Product from '../components/Upload_Product'
import Product_details from '../components/product_details'
import { productPostRequest } from '../utils/productRequest';
import { useDispatch } from 'react-redux';

const AddProduct = () => {
    const dispatch = useDispatch();

  const [productData, setProductData] = useState({
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
  
  const productForm = async (e) => {
    e.preventDefault();
    await productPostRequest(setProductData, dispatch, productData);
  }

  return (
    <>
      <Upload_Product productData={productData} setProductData={setProductData} />
      <Product_details productForm={productForm} productData={productData} setProductData={setProductData} />
    </>
  )
}

export default AddProduct