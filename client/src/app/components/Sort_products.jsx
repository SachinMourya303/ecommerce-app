import React from 'react'

const Sort_products = () => {
  const sortBy = [
    { title: "New Arrivals", value: "newarrivals" },
    { title: "Price(High to Low)", value: "high" },
    { title: "Price(Low to High)", value: "low" },
    { title: "Ratings", value: "ratings" },
  ]
  return (
      <div className='border border-gray-200 rounded-sm px-5 truncate'>
        <span className='text-gray-500'>Sort By:</span>
        <select name="" id="" className='outline-none h-full py-3 cursor-pointer'>
        {
          sortBy.map((filter, index) => (
            <option key={index} value={filter.value}>{filter.title}</option>
          ))
        }
      </select>
      </div>
  )
}

export default Sort_products