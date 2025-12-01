import React from 'react'
import { setFilterData } from '../state-management/slices/userData';
import { useDispatch, useSelector } from 'react-redux';

const Filter_category = () => {
    const dispatch = useDispatch();
    const filterData = useSelector(state => state.userData.filterData);

    const checkbox = [
        { name: "checkbox", title: "All", value: "" },
        { name: "checkbox", title: "Men Shirts", value: "Men Shirts" },
        { name: "checkbox", title: "Women Top", value: "Women Top" },
        { name: "checkbox", title: "Kids", value: "Kids" },
        { name: "checkbox", title: "Men T-shirts", value: "Men T-shirts" },
        { name: "checkbox", title: "Women T-shirts", value: "Women T-shirts" },
        { name: "checkbox", title: "Kids T-shirts", value: "Kids T-shirts" },
        { name: "checkbox", title: "Mens Jacket", value: "Mens Jacket" },
        { name: "checkbox", title: "Womens Jacket", value: "Womens Jacket" },
        { name: "checkbox", title: "Kids Jacket", value: "Kids Jacket" },
        { name: "checkbox", title: "Men Pants", value: "Men Pants" },
        { name: "checkbox", title: "Women Pants", value: "Women Pants" },
        { name: "checkbox", title: "Kids Pants", value: "Kids Pants" },
        { name: "checkbox", title: "Men Shorts", value: "Men Shorts" },
        { name: "checkbox", title: "Kids Shorts", value: "Kids Shorts" },
        { name: "checkbox", title: "Men Kurta", value: "Men Kurta" },
        { name: "checkbox", title: "Women Kurti", value: "Women Kurti" },
        { name: "checkbox", title: "Watches", value: "Watches" },
        { name: "checkbox", title: "Sunglasses", value: "Sunglasses" },
        { name: "checkbox", title: "Bags", value: "Bags" },
        { name: "checkbox", title: "Footwear", value: "Footwear" },
        { name: "checkbox", title: "Jewellery", value: "Jewellery" },
    ]

    return (
        <div className='flex flex-col gap-3 border border-gray-200 p-5 rounded-sm'>
            <p className='border-b border-gray-200'>FILTERS</p>
            <p className='font-medium text-lg'>Category</p>
            <div className='flex flex-col gap-3'>
                {
                    checkbox.map((item, index) => (
                        <div key={index} className='flex gap-3'>
                            <input
                                type="checkbox"
                                checked={filterData === item.value}
                                onChange={() => dispatch(setFilterData(item.value))}
                            />
                            <label htmlFor={item.title} className='capitalize truncate'>{item.title}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Filter_category