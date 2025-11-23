import React from 'react'
import Sort_products from '../components/Sort_products'
import Filter_category from '../components/Filter_category'

const Products_sidebar = () => {
 
  return (
    <div>
      <Sort_products />
      <Filter_category />
    </div>
  )
}

export default Products_sidebar