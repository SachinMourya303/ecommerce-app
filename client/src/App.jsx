import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import Navbar from './app/components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './app/pages/Homepage'
import Authentication from './app/pages/Form/Authentication';
import CustomerSignUpForm from './app/pages/Form/customer-auth/CustomerSignUpForm'
import CustomerSignInForm from './app/pages/Form/customer-auth/CustomerSignInForm'
import SellerSignUpForm from './app/pages/Form/seller-auth/SellerSignUpForm'
import SellerSignInForm from './app/pages/Form/seller-auth/SellerSignInForm'
import AdminSignUpForm from './app/pages/Form/admin/AdminSignUpForm'
import AdminSignInForm from './app/pages/Form/admin/AdminSignInForm'
import toast, { Toaster } from 'react-hot-toast'
import SellerDashboard from './app/pages/sellerDashboard'
import SellerHomePage from './app/Resuable/SellerHomePage'
import AddProduct from './app/Resuable/AddProduct'
import { useDispatch } from 'react-redux'
import { setAdminAccounts, setCart, setCustomersAccounts, setLoader, setOrders, setProducts, setSellersAccounts } from './app/state-management/slices/userData';
import All_products from './app/components/All_products';
import axios from 'axios';
// import { getSellerAccounts } from './app/utils/sellerForm';
import AdminDashboard from './app/pages/AdminDashboard';
import AdminHomePage from './app/Resuable/AdminHomePage';
import Admin_All_products from './app/Resuable/Admin_All_products';
import Customers from './app/Resuable/Customers';
import Sellers from './app/Resuable/Sellers';
import Admin from './app/Resuable/Admin';
import Product_preview from './app/pages/Product_preview';
import Category_preview from './app/pages/Category_preview';
import Shop from './app/pages/Shop';
import Cart from './app/pages/Cart';
import Myorders from './app/pages/Myorders';
import Customer_details from './app/pages/Customer_details';

const App = () => {
  // product get request

  const dispatch = useDispatch();
  const { data, isPending, error } = useQuery({
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

    if(error){
      toast.error('Check your internet');
    }
    dispatch(setLoader(isPending));
  }, [data, isPending, dispatch]);

  // seller get request

  const sellersQuery = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URI}/seller/accounts`);
      return res.data;
    }
  });

  useEffect(() => {
    if (sellersQuery.data) {
      dispatch(setSellersAccounts(sellersQuery.data));
    }
  }, [sellersQuery.data]);

  // customer get request

    const customerQuery = useQuery({
    queryKey: ['customer'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URI}/customer/accounts`);
      return res.data;
    }
  });

  useEffect(() => {
    if (customerQuery.data) {
      dispatch(setCustomersAccounts(customerQuery.data));
    }
  }, [customerQuery.data]);

  // Admin get request

  const adminQuery = useQuery({
    queryKey: ['admin'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URI}/admin/accounts`);
      return res.data;
    }
  });

  useEffect(() => {
    if (adminQuery.data) {
      dispatch(setAdminAccounts(adminQuery.data));
    }
  }, [adminQuery.data]);

  // Cart get request
  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URI}/cart/products`);
      return res.data;
    }
  });

  useEffect(() => {
    if (cartQuery.data) {
      dispatch(setCart(cartQuery.data));
    }
  }, [cartQuery.data]);

  // Orders get request
  const ordersQuery = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URI}/orders/products`);
      return res.data;
    }
  });

  useEffect(() => {
    if (ordersQuery.data) {
      dispatch(setOrders(ordersQuery.data));
    }
  }, [ordersQuery.data]);

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
          <Route index element={<SellerHomePage />} />
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='products' element={<All_products />} />
        </Route>

        <Route path='/account/admin/dashboard' element={<AdminDashboard />} >
          <Route index element={<AdminHomePage />} />
          <Route path='products' element={<Admin_All_products />} />
          <Route path='customers' element={<Customers />} />
          <Route path='sellers' element={<Sellers />} />
          <Route path='admin' element={<Admin />} />
        </Route>

        <Route path='/shop/products' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/myorders' element={<Myorders />} />
        <Route path='/product/:id' element={<Product_preview />} />
        <Route path='/product/category/type/:name' element={<Category_preview />} />
        <Route path='/cart/customer/details' element={<Customer_details />} />
      </Routes>
    </div>
  )
}

export default App