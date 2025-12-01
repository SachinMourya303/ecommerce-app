import React from 'react'
import Sort_products from '../components/Sort_products'
import Filter_category from '../components/Filter_category'

const Products_sidebar = () => {

  return (
    <div className='hidden md:flex flex-col gap-5 mt-10'>
      <h1 className='text-2xl hidden md:flex'>Products For You</h1>
      {/* <Sort_products /> */}
      <Filter_category />
    </div>
  )
}

export default Products_sidebar