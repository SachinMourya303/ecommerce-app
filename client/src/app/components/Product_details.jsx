import React from 'react'
import { useSelector } from 'react-redux';
import { IndianRupee, LayoutGrid, MapPin, Package, Pill, Star, Store } from 'lucide-react'

const Product_details = () => {
    const darkmode = useSelector(state => state.userData.darkmode);

    const productDetails = [
        { title: "Product Name", icon: Package },
        { title: "Product Price", icon: IndianRupee },
        { title: "Sold By", icon: Store },
        { title: "Company Address", icon: MapPin },
    ]

    const dropdown = [
        {
            title: "Choose Category",
            icon: LayoutGrid,
            option: [
                { title: "Men Shirts", value: "Men Shirts" },
                { title: "Women Shirts", value: "Women Shirts" },
                { title: "Kids Shirts", value: "Kids Shirts" },
                { title: "Men T-shirts", value: "Men T-shirts" },
                { title: "Women T-shirts", value: "Women T-shirts" },
                { title: "Kids T-shirts", value: "Kids T-shirts" },
                { title: "Men Pants", value: "Men Pants" },
                { title: "Women Pants", value: "Women Pants" },
                { title: "Kids Pants", value: "Kids Pants" },
                { title: "Men Kurta", value: "Men Kurta" },
                { title: "Women Kurti", value: "Women Kurti" },
                { title: "Watches", value: "Watches" },
                { title: "Bags", value: "Bags" },
                { title: "Footwear", value: "Footwear" },
                { title: "Jewellery", value: "Jewellery" },
            ]
        },
        {
            title: "Choose Rating",
            icon: Star,
            option: [
                { title: 1, value: 1 },
                { title: 2, value: 2 },
                { title: 3, value: 3 },
                { title: 4, value: 4 },
                { title: 5, value: 5 },
            ]
        },
    ]

    const productColor = [
        { title: "Black", value: "Black" },
        { title: "Red", value: "Red" },
        { title: "Blue", value: "Blue" },
        { title: "Green", value: "Green" },
        { title: "Yellow", value: "Yellow" },
        { title: "Violet", value: "Violet" },
        { title: "Purple", value: "Purple" },
        { title: "White", value: "White" },
        { title: "Pink", value: "Pink" },
        { title: "Brown", value: "Brown" },
    ]
    return (
        <form className='w-full flex flex-col md:w-[80%] mt-10'>
            <div className='flex max-md:flex-col md:flex-wrap justify-between'>
                {
                    productDetails.map((data, index) => (
                        <div key={index} className={`w-full md:w-[49%] flex items-center gap-2 my-3 border border-amber-700 border-b-5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 rounded-lg font-medium cursor-pointer px-2`}>
                            < data.icon className='size-4' />
                            <input required placeholder={data.title} className=' outline-none w-full py-2.5' />
                        </div>
                    ))
                }
            </div>

            <div className={`w-full flex gap-2 my-3 border border-amber-700 border-b-5 py-2.5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 rounded-lg font-medium cursor-pointer px-2`}>
                < Pill className='size-4 mt-1' />
                <textarea required  placeholder="Product Description" className=' outline-none w-full' />
            </div>

            <div className='flex max-md:flex-col md:flex-wrap justify-between'>
                {
                    dropdown.map((data, index) => (
                        <div key={index} className={`w-full md:w-[49%] flex items-center gap-2 my-3 border border-amber-700 border-b-5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 rounded-lg font-medium cursor-pointer px-2`}>
                            <data.icon className='size-4' />
                            <select name="" id="" className='w-full py-2.5 outline-none text-rose-900/50' required>
                                <option >{data.title}</option>
                                {
                                    data.option.map((item, index) => (
                                        <option key={index} value={item.value}>{item.title}</option>
                                    ))
                                }
                            </select>
                        </div>
                    ))
                }
            </div>

            <div>
                <p className='mt-5'>Choose Product Color</p>
                <div className='flex flex-wrap items-center gap-5'>
                    {
                    productColor.map((color, index) => (
                        <div className='flex gap-2 mt-2'>
                            <input id={color.title} value={color.value} type="checkbox" />
                            <label htmlFor={color.title} className='text-rose-900 text-xs'>{color.title}</label>
                        </div>
                    ))
                }
                </div>
            </div>

            <button type='submit' className={`w-[50%] md:w-[30%] flex items-center justify-center my-3 bg-amber-500 mt-10 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 py-2.5 rounded-lg font-medium cursor-pointer`}>Submit</button>
        </form>
    )
}

export default Product_details