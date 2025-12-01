import React from 'react'
import Category_sidebar from './Products_sidebar'
import Products from './Products'
import { useSelector } from 'react-redux';

const Layout = () => {
    const darkmode = useSelector(state => state.userData.darkmode);    

  return (
    <div id='products' className={`${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'} grid-cols-[3fr] grid md:grid-cols-[0.7fr_3fr] px-6 md:px-16 2xl:px-96`}>
        <Category_sidebar />
        <Products />
    </div>
  )
}

export default Layout