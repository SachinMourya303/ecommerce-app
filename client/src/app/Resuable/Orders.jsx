import { BadgeInfo, Loader, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { orderDelteRequest } from '../utils/ordersForm';

const Orders = () => {
    const orders = useSelector(state => state.userData.orders);
    const darkmode = useSelector(state => state.userData.darkmode);
    const customerToken = useSelector(state => state.userData.customerToken);
    const dispatch = useDispatch();

    const loader = useSelector(state => state.userData.loader);

    const deleteProduct = async (id) => {
        await orderDelteRequest(dispatch, id);
    }

    return (
        <div className={`w-full flex-1 flex flex-col justify-between transition-all ${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'}`}>
            <div className="w-full">
                <h2 className="pb-4 text-lg font-medium">All orders</h2>

                <div className="flex flex-col items-center w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Product</th>
                                <th className="px-4 py-3 font-semibold truncate max-md:hidden">Price</th>
                                <th className="py-3 font-semibold truncate max-md:hidden">Personal Details</th>
                                <th className="px-4 py-3 font-semibold truncate ">Status</th>
                                <th className="px-4 py-3 font-semibold truncate">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {orders.map((order, index) => (
                                order.products.map((p, i) => (
                                    <tr key={i} className="border-t border-gray-500/20 hover:bg-gray-100">
                                        <td className="md:px-4 pl-2 md:pl-4 py-3 truncate">
                                            <div className='flex items-center space-x-3'>
                                                <div className="border border-gray-300 rounded overflow-hidden">
                                                    <img src={p.product_image} alt="Product" className="w-16 object-cover object-center" />
                                                </div>
                                                <span className="truncate max-sm:hidden w-full">
                                                    {p.product_name}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="px-4 py-3 max-sm:hidden truncate">₹ {p.price}</td>
                                        <td className="py-3 max-sm:hidden">
                                            <div className='flex flex-col gap-2'>
                                                <span>Address: {order.address} {order.city} {order.state}</span>
                                                <span>Name: {order.customer_name}</span>
                                                <span>Email: {order.customer_email}</span>
                                                <span>Phone: {order.customer_phone}</span>
                                                <span>Landmark: {order.landmark}</span>
                                            </div>
                                        </td>

                                        <td className="px-4 py-3">
                                            <div className='flex flex-col gap-2 max-md:text-xs'>
                                                <span>Status: {order.status}</span>
                                                <span>Payment: {order.payment}</span>
                                            </div>
                                        </td>

                                        <td className="px-2 py-2">
                                            <label className="relative text-xs flex flex-col gap-2 cursor-pointer text-gray-900">
                                                {loader ? <Loader className='size-4 text-rose-500' />
                                                    : <div className='w-full'>
                                                        <div className='flex w-full'><button onClick={() => deleteProduct(product._id)} className='w-full bg-red-50 text-red-500 border border-red-100 rounded-lg p-2 active:scale-95 cursor-pointer'>Delete</button></div>
                                                    </div>}

                                                {loader
                                                    ? <Loader className='size-4 text-rose-500' />
                                                    : <select className='w-full bg-blue-50 text-blue-500 border border-blue-100 rounded-lg p-2 active:scale-95 cursor-pointer outline-none'>
                                                        <option value="">Update Status</option>
                                                        <option value="Processing">Processing</option>
                                                        <option value="Ready for Dispatch">Ready for Dispatch</option>
                                                        <option value="Dispatched">Dispatched</option>
                                                        <option value="In Transit">In Transit</option>
                                                        <option value="Out for Delivery">Out for Delivery</option>
                                                        <option value="Delivered">Delivered</option>
                                                    </select>
                                                }
                                            </label>
                                        </td>
                                    </tr>
                                ))
                            ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div >
    )
}

export default Orders