import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const products = useSelector(state => state.userData.products);
  const filterData = useSelector(state => state.userData.filterData);
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (filterData) {
      const filteredProduct = products.filter((item) => item.productDetails.category.includes(filterData));
      setAllProducts(filteredProduct);
    }
    else {
      setAllProducts(products);
    }
  }, [products, filterData]);

  return (
    <div className='mt-10 md:mt-20'>
      <div className='md:p-5 flex flex-wrap gap-3'>
        {
          allProducts.slice(0, 15).map((item, index) => (
            <figure onClick={() => navigate(`/product/${item._id}`)} key={index} className='w-[47%] md:w-32 xl:w-60 border border-gray-200 rounded-lg overflow-hidden cursor-pointer'>
              <img src={item.productImage.image1} alt="product-img" className='w-full h-32 xl:h-60' />
              <figcaption className='flex flex-col gap-2 p-1 md:p-5'>
                <span className='text-gray-500'>{item.productDetails.name}</span>
                <span className='font-bold flex item-center gap-2'> ₹ {item.productDetails.price}</span>
                <div className='w-12 px-2 rounded-full flex items-center justify-between bg-green-500 text-white'>
                  {item.productDetails.rating}
                  <span className='text-lg'>★</span>
                </div>
                <span className='text-xs text-gray-500'>Free Delivery</span>
              </figcaption>
            </figure>
          ))
        }
      </div>
    </div>
  )
}

export default Products