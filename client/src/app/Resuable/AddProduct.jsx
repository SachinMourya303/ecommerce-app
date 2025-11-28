import React, { useEffect, useState } from 'react'
import Upload_Product from '../components/Upload_Product'
import Product_details from '../components/product_details'
import { productPostRequest } from '../utils/productRequest';
import { useDispatch, useSelector } from 'react-redux';

const AddProduct = () => {
  const [seller, setSeller] = useState(null);

  const dispatch = useDispatch();
  const sellersToken = useSelector(state => state.userData.sellersToken);
  const sellersAccounts = useSelector(state => state.userData.sellersAccounts);

  const filterSeller = () => {
    if (!sellersAccounts) return;

    const seller = sellersAccounts.find(
      (user) => user.email === sellersToken?.email
    );

    setSeller(seller || null);
  };

  useEffect(() => {
    if (sellersAccounts && sellersToken?.email) {
      filterSeller();
    }
  }, [sellersAccounts, sellersToken]);

  useEffect(() => {
    if (seller) {
      setProductData(prev => ({
        ...prev,
        company_email: seller.email || "",
        sold_by: seller.companyname || "",
        address: seller.address || ""
      }));
    }
  }, [seller]);



  const [productData, setProductData] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    company_email: seller?.email,
    name: "",
    price: "",
    sold_by: seller?.companyname,
    address: seller?.address,
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