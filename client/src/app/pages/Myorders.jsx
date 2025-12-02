import { BadgeInfo, Loader, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productDelteRequest } from '../utils/productRequest';

const Myorders = () => {
  const orders = useSelector(state => state.userData.orders);

  const customerToken = useSelector(state => state.userData.customerToken);
  const dispatch = useDispatch();

  const loader = useSelector(state => state.userData.loader);

  const deleteProduct = async (id) => {
    await productDelteRequest(dispatch, id);
  }

  return (
    <div className="w-full flex-1 flex flex-col justify-between">
      <div className="px-6 md:px-16 2xl:px-96 mt-5">
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
              {orders
                .filter((item) => item.customer_email === customerToken.email)
                .map((order, index) => (
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

                      <td className="px-4 py-3 max-sm:hidden">₹ {p.price}</td>
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
                        <div className='flex flex-col gap-2'>
                          <span>Status: {order.status}</span>
                          <span>Payment: {order.payment}</span>
                        </div>
                      </td>

                      <td className="px-4 py-3">
                        <label onClick={() => deleteProduct(order._id)} className="relative inline-flex items-center cursor-pointer text-gray-900">
                          {loader ? (
                            <Loader className="size-4 text-red-500" />
                          ) : (
                            <button className='text-red-500'>Cancel Order</button>
                          )}
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
    </div>
  )
}

export default Myorders