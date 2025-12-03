import { BadgePlus, LayoutDashboard, Shirt } from 'lucide-react';
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Resuable/Navbar';
import Sidebar from '../Resuable/Sidebar';
import { useSelector } from 'react-redux';

const SellerDashboard = () => {
  const darkmode = useSelector(state => state.userData.darkmode);

  const sidebarLinks = [
    { name: "Dashboard", path: "/account/seller/dashboard", icon: LayoutDashboard },
    { name: "Add Product", path: "addproduct", icon: BadgePlus },
    { name: "Products List", path: "products", icon: Shirt },
  ];

  const [menu, setMenu] = useState("Dashboard");

  return (
    <div className={`absolute md:h-screen md:overflow-hidden 2xl:px-96 top-0 w-full ${darkmode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='flex'>
        <Sidebar sidebarLinks={sidebarLinks} menu={menu} setMenu={setMenu} />
        <div className='w-full'>
          <Navbar user="Seller Account" logout="Seller" />
          <div className='m-2 md:m-5 w-full xl:w-[80%] md:h-screen'><Outlet message="hi" /></div>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard