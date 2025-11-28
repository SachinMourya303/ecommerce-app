import { BadgeInfo, Loader, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productDelteRequest } from '../utils/productRequest';

const Admin_All_products = () => {
    const products = useSelector(state => state.userData.products);    
    
    const dispatch = useDispatch();

    const loader = useSelector(state => state.userData.loader);

    const deleteProduct = async (id) => {
        await productDelteRequest(dispatch, id);
    }

    return (
        <div className="w-full flex-1 flex flex-col justify-between">
            <div className="w-full">
                <h2 className="pb-4 text-lg font-medium">All Products</h2>
                <div className="flex flex-col items-center w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Product</th>
                                <th className="px-4 py-3 font-semibold truncate max-md:hidden">Category</th>
                                <th className="px-4 py-3 font-semibold truncate max-md:hidden">Selling Price</th>
                                <th className="px-4 py-3 font-semibold truncate ">Store</th>
                                <th className="px-4 py-3 font-semibold truncate">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {products.map((product, index) => {
                                return (
                                    <tr key={index} className="border-t border-gray-500/20 hover:bg-gray-100">
                                        <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                            <div className="border border-gray-300 rounded overflow-hidden">
                                                <img src={product.productImage.image1} alt="Product" className="w-16 object-cover object-center" />
                                            </div>
                                            <span className="truncate max-sm:hidden w-full">{product.productDetails.name}</span>
                                        </td>
                                        <td className="px-4 py-3 max-sm:hidden capitalize">{product.productDetails.category}</td>
                                        <td className="px-4 py-3 max-sm:hidden">₹ {product.productDetails.price}</td>
                                        <td className="px-2 py-2">
                                            <div className='flex flex-col'>
                                                <span>{product.productDetails.sold_by}</span>
                                                <span className='max-sm:hidden text-xs'>{product.productDetails.address}</span>
                                                <span className='max-sm:hidden text-xs'>{product.productDetails.company_email}</span>
                                                <span className='max-sm:hidden text-xs'>{product.productDetails.phone}</span>
                                            </div>
                                        </td>
                                        <td className="px-2 py-2">
                                            <label onClick={() => deleteProduct(product._id)} className="relative inline-flex items-center cursor-pointer text-gray-900">
                                                {loader ? <Loader className='size-4 text-rose-500' /> 
                                                : <div>
                                                    <span className='bg-blue-50 text-blue-500 border border-blue-100 rounded-lg p-2 active:scale-95'>Approve</span>
                                                    {/* <span className='bg-green-50 text-green-500 border border-green-100 rounded-lg p-2 active:scale-95'>Approved</span> */}
                                                </div> }
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

export default Admin_All_products