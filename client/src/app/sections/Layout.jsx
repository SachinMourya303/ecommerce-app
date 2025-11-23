import React from 'react'
import Category_sidebar from './Products_sidebar'
import Products from './Products'

const Layout = () => {
  return (
    <div id='products' className='grid-cols-[3fr] grid md:grid-cols-[1fr_3fr] px-6 2xl:px-64'>
        <Category_sidebar />
        <Products />
    </div>
  )
}

export default Layout