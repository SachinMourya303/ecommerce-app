import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchDropdown } from '../state-management/slices/popup';
import { useNavigate } from 'react-router-dom';

const Search_model = ({ searched , setSearched }) => {
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
    <div className='w-full flex justify-center'>
      <div className={`absolute flex flex-wrap gap-5 z-1 max-h-120 overflow-y-scroll bg-white w-[90%] p-5 ${searchDropdown ? "opacity-100" : "opacity-0"} rounded-b-lg shadow-lg`}>
        {
          products.filter((item) => item?.productDetails?.category.toUpperCase().includes(searched?.toUpperCase())).map((item, index) => (
            <figure onClick={() => {navigate(`/product/${item._id}`); dispatch(setSearchDropdown(false)); setSearched("")}} key={index} className='w-30 border border-gray-200 rounded-lg overflow-hidden cursor-pointer text-xs'>
              <img src={item.productImage.image1} alt="product-img" className='w-full h-30' />
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
  )
}

export default Search_model