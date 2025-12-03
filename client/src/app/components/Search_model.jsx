import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchDropdown } from '../state-management/slices/popup';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';

const Search_model = ({ searched, setSearched }) => {
  const searchDropdown = useSelector(state => state.popup.searchDropdown);
  const products = useSelector(state => state.userData.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openSearchBar = () => {
    if (searched === "") {
      dispatch(setSearchDropdown(false));
      setSearched("");
    } else {
      dispatch(setSearchDropdown(true));
    }
  }
  useEffect(() => {
    openSearchBar();
  }, [searched]);

  return searchDropdown && (
    <div className='w-full flex justify-center transition duration-500'>
      <div className={`absolute z-1 max-h-120 overflow-y-scroll bg-white w-[90%] px-5 md:p-5 ${searchDropdown ? "opacity-100" : "opacity-0"} rounded-b-lg shadow-lg`}>
        <div className='flex items-center gap-2'>
          <div className="flex xl:hidden items-center my-2 text-sm gap-2 border-2 border-amber-500 px-3 rounded-full">
          <input onChange={(e) => setSearched(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())} name='searchbar' value={searched} className="capitalize py-1.5 w-full bg-transparent outline-none placeholder-amber-500" type="text" placeholder="Search products" />
          <Search className='text-amber-500' />
        </div>
        <span onClick={() => setSearched("")} className='xl:w-full xl:flex xl:justify-end cursor-pointer'><X className='size-5 text-gray-500'/></span>
        </div>
        <div className='flex flex-wrap gap-5'>
          {
            products.filter((item) => item?.productDetails?.category.toUpperCase().includes(searched?.toUpperCase()) || item?.productDetails?.name.toUpperCase().includes(searched?.toUpperCase())).map((item, index) => (
              <figure onClick={() => { navigate(`/product/${item._id}`); dispatch(setSearchDropdown(false)); setSearched("") }} key={index} className='w-28 md:w-33 border border-gray-200 rounded-lg overflow-hidden cursor-pointer text-xs'>
                <img src={item.productImage.image1} alt="product-img" className='w-full h-28 md:h-33' />
                <figcaption className='flex flex-col gap-2 p-1'>
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
    </div>
  )
}

export default Search_model