import React from 'react'
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

const App = () => {
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
      </Routes>
    </div>
  )
}

export default App