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

    const [menu , setMenu] = useState("Dashboard");    

  return (
    <div className={`absolute md:h-screen md:overflow-hidden 2xl:px-96 top-0 w-full ${darkmode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar user="Seller" logout="Seller" />
      <div className='flex'>
        <Sidebar sidebarLinks={sidebarLinks} menu={menu} setMenu={setMenu}/>
        <div className='m-5 w-full md:w-[80%] md:h-170 overflow-y-scroll'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard