import { BadgePlus, LayoutDashboard, Shirt, Store, Users } from 'lucide-react';
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Resuable/Navbar';
import Sidebar from '../Resuable/Sidebar';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const darkmode = useSelector(state => state.userData.darkmode);

  const sidebarLinks = [
    { name: "Dashboard", path: "/account/admin/dashboard", icon: LayoutDashboard },
    { name: "Products List", path: "products", icon: Shirt },
    { name: "Customers", path: "customers", icon: Users },
    { name: "Sellers", path: "sellers", icon: Store },
  ];

  const [menu, setMenu] = useState("Dashboard");

  return (
    <div className={`absolute md:h-screen md:overflow-hidden 2xl:px-96 top-0 w-full ${darkmode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='flex'>
        <Sidebar sidebarLinks={sidebarLinks} menu={menu} setMenu={setMenu} />
        <div className='w-full'>
          <Navbar user="Admin Account" logout="Admin" />
          <div className='m-2 md:m-5 w-[90%] md:w-[80%] md:h-screen'><Outlet /></div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard