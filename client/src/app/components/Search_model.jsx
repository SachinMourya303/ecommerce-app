import React from 'react'
import { useSelector } from 'react-redux'

const Search_model = () => {
  const searchDropdown = useSelector(state => state.popup.searchDropdown);  

  return searchDropdown && (
    <div className='w-full flex justify-center'>
      <div className={`absolute z-1 bg-white w-[50%] h-100 ${searchDropdown ? "opacity-100" : "opacity-0"} rounded-b-lg shadow-lg`}></div>
    </div>
  )
}

export default Search_model