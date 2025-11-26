import React, { useState } from 'react'
import Upload_Product from '../components/Upload_Product'
import Product_details from '../components/product_details'

const AddProduct = () => {

  return (
    <>
      <Upload_Product />
      <Product_details />
    </>
  )
}

export default AddProduct