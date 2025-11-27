import { BadgeInfo, Loader, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productDelteRequest } from '../utils/productRequest';

const All_products = () => {
    const products = useSelector(state => state.userData.products);
    const dispatch = useDispatch();

    const loader = useSelector(state => state.userData.loader);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const filterProductStatus = products.some((item) => item.productDetails.valid === false);
        if (filterProductStatus) {
            setMessage(true);
        }
        else {
            setMessage(false)
        }
    })

    const deleteProduct = async (id) => {
        await productDelteRequest(dispatch , id);
    }

    return (
        <div className="w-full flex-1 flex flex-col justify-between">
            <div className="md:w-[80%]">
                <h2 className="pb-4 text-lg font-medium">All Products</h2>
                {
                    message ?
                        <div className='w-full border border-blue-100 bg-blue-50 p-3 mb-3 rounded-lg'>
                            <span className='text-blue-500 max-md:text-xs flex gap-2 md:items-center'> 
                                <BadgeInfo className='size-5'/>
                                Your product submission is being reviewed and will be approved shortly.</span>
                        </div>
                        : ""
                }
                <div className="flex flex-col items-center w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Product</th>
                                <th className="px-4 py-3 font-semibold truncate max-md:hidden">Category</th>
                                <th className="px-4 py-3 font-semibold truncate max-md:hidden">Selling Price</th>
                                <th className="px-4 py-3 font-semibold truncate ">Status</th>
                                <th className="px-4 py-3 font-semibold truncate">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {products.map((product, index) => {
                                return (
                                    <tr key={index} className="border-t border-gray-500/20">
                                        <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                            <div className="border border-gray-300 rounded overflow-hidden">
                                                <img src={product.productImage.image1} alt="Product" className="w-16" />
                                            </div>
                                            <span className="truncate max-sm:hidden w-full">{product.name}</span>
                                        </td>
                                        <td className="px-4 py-3 max-sm:hidden capitalize">{product.productDetails.category}</td>
                                        <td className="px-4 py-3 max-sm:hidden">₹ {product.productDetails.price}</td>
                                        <td className="px-4 py-3 ">
                                            {product.productDetails.valid === false ? 'Pending' : 'Valid'}
                                        </td>
                                        <td className="px-4 py-3">
                                            <label onClick={() => deleteProduct(product._id)} className="relative inline-flex items-center cursor-pointer text-gray-900">
                                                {loader ? <Loader className='size-4 text-red-500' /> : <Trash2 className='size-4 text-red-500' />}
                                            </label>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default All_products