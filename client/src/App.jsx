import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import Navbar from './app/components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './app/pages/Homepage'
import Authentication from './app/pages/Form/authentication'
import CustomerSignUpForm from './app/pages/Form/customer-auth/CustomerSignUpForm'
import CustomerSignInForm from './app/pages/Form/customer-auth/CustomerSignInForm'
import SellerSignUpForm from './app/pages/Form/seller-auth/SellerSignUpForm'
import SellerSignInForm from './app/pages/Form/seller-auth/SellerSignInForm'
import AdminSignUpForm from './app/pages/Form/admin/AdminSignUpForm'
import AdminSignInForm from './app/pages/Form/admin/AdminSignInForm'
import { Toaster } from 'react-hot-toast'
import SellerDashboard from './app/pages/sellerDashboard'
import Dashboard from './app/Resuable/Dashboard'
import AddProduct from './app/Resuable/AddProduct'
import { useDispatch } from 'react-redux'
import { setLoader, setProducts } from './app/state-management/slices/userData';
import All_products from './app/components/All_products';
import axios from 'axios';

const App = () => {

  const dispatch = useDispatch();
  const { data, isPending , error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URI}/product/get/all`);
      return res.data;
    },
    staleTime: 1000 * 60 * 1,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
  
  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
    dispatch(setLoader(isPending));
  }, [data, isPending, dispatch]);

  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/account/type" element={<Authentication />} />

        <Route path="/account/type/customer/signup" element={<CustomerSignUpForm />} />
        <Route path="/account/type/customer/signin" element={<CustomerSignInForm />} />

        <Route path="/account/type/seller/signup" element={<SellerSignUpForm />} />
        <Route path="/account/type/seller/signin" element={<SellerSignInForm />} />

        <Route path="/account/type/admin/signup" element={<AdminSignUpForm />} />
        <Route path="/account/type/admin/signin" element={<AdminSignInForm />} />

        <Route path='/account/seller/dashboard' element={<SellerDashboard />} >
          <Route index element={<Dashboard />} />
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='products' element={<All_products />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App